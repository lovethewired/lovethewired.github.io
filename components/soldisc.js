import React, { useEffect, useRef, useState } from 'react';
import {
  WalletButton,
  Button,
  Icon,
  Link,
  usePriorityProvider,
  useMetaMaskAccount,
  useMetaMaskProvider,
  useMetaMaskChainId,
  useMetaMaskWeb3React,
  MetaMaskButton,
  CHAINS,
  metaMaskConnector,
  Input,
  getAddressLink,
  LoadingButton,
} from '../lib';

import cn from 'classnames';
import { ethers } from 'ethers';
import { useSolDiscAccountQuery, useSolDiscCommentQuery } from '../queries';
import { usePriorityAccount } from '../lib';

import utf8 from 'utf8';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used
// import { faCoffee } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

// import md from 'markdown-it';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useContracts } from '../hooks';
import { config } from '../config';
import { getContractAddress } from 'ethers/lib/utils';

export function RenderComment({ value, ...props }) {
  return (
    <div className="break-words">
      <ReactMarkdown remarkPlugins={[remarkGfm]} {...props} />
    </div>
  );
}

const chainId = config.soldisc.chainId;

function UserName({ address, userName }) {
  return (
    <Link href={getAddressLink(address, chainId)}>
      <span className="text-primary-400">{userName}</span>
    </Link>
  );
}

function Comment({ postHash, commentId, user, userName, text, creationDate, editDate, numLikes, liked, ...props }) {
  const account = useMetaMaskAccount();
  const provider = useMetaMaskProvider();
  const userChainId = useMetaMaskChainId();
  const signer = provider?.getSigner();
  const { soldisc, handleTx, handleTxError } = useContracts();

  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState('');

  const connected = userChainId === chainId && account;
  const [, updateComments] = useSolDiscCommentQuery(postHash);

  const commentOwner = account === user;

  const requireChain = (fn) => {
    if (!connected) return () => metaMaskConnector.activate(chainId);
    else return fn;
  };
  console.log(liked);

  const onLike = () => {
    soldisc
      .connect(signer)
      .toggleLikeComment(postHash, commentId)
      .then(handleTx)
      .then(updateComments)
      .catch(handleTxError);
  };

  const onClickEdit = (text) =>
    soldisc
      .connect(signer)
      .editComment(postHash, commentId, text)
      .then(handleTx)
      .then(() => setEditing(false))
      .then(updateComments)
      .catch(handleTxError);

  return (
    <div>
      <div className="flex items-baseline gap-x-4 text-slate-400">
        <UserName address={user} userName={userName} />
        <span className="text-sm hidden sm:block">{new Date(creationDate.mul(1000).toNumber()).toDateString()}</span>

        <span className={cn('text-sm', numLikes == 0 && 'text-slate-500')}>
          {numLikes.toString()}
          <FontAwesomeIcon
            className={cn(
              'ml-2 text-base transition-colors duration-200 cursor-pointer',
              numLikes > 0
                ? liked
                  ? 'text-secondary-400 hover:text-slate-300'
                  : 'text-slate-300 hover:text-secondary-400'
                : 'text-slate-500'
            )}
            onClick={requireChain(onLike)}
            icon={faHeart}
          />
        </span>

        {editDate > 0 && (
          <span className="text-sm text-slate-500 hidden sm:block">
            (edited: {new Date(editDate.mul(1000).toNumber()).toDateString()})
          </span>
        )}
        {/* </Icon> */}
      </div>

      {editing ? (
        <EditComment
          value={editValue}
          onChange={(event) => setEditValue(event.target.value)}
          onClick={onClickEdit}
          onCancel={() => setEditing(false)}
        />
      ) : (
        <>
          <RenderComment>{text}</RenderComment>
          {commentOwner && (
            <div className="flex justify-center text-xs">
              <Button
                className=""
                variant="text"
                onClick={() => {
                  setEditValue(text);
                  setEditing(true);
                }}
              >
                Edit
              </Button>
            </div>
          )}
        </>
      )}

      {/* <LoadingButton loading={editTxLoading}/> */}
    </div>
  );
}
function EditComment({ value, onClick, onChange, onCancel, placeholder, children }) {
  const [sendingTx, setSendingTx] = useState(false);
  const valueUtf8 = utf8.encode(value);
  const validComment = 4 < valueUtf8.length && valueUtf8.length < 1000;

  const account = useMetaMaskAccount();
  const userChainId = useMetaMaskChainId();

  const connected = userChainId === chainId && account;

  const requireChain = (fn) => {
    if (!connected) return () => metaMaskConnector.activate(chainId);
    else
      return () => {
        setSendingTx(true);
        fn(valueUtf8).finally(() => setSendingTx(false));
      };
  };

  return (
    <div>
      <Input
        className="mt-2"
        variant="outlined"
        placeholder={placeholder}
        multiline={true}
        invalid={value && !validComment}
        value={value}
        onChange={onChange}
      />
      {value && <p className="text-slate-400 my-2">Preview:</p>}
      <RenderComment>{utf8.decode(valueUtf8)}</RenderComment>
      <div className="flex justify-center p-2">
        {onCancel && (
          <Button variant="text" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <LoadingButton
          loading={sendingTx}
          disabled={!validComment}
          className=""
          variant="text"
          onClick={requireChain(onClick)}
        >
          {/* {!userAccountCreated ? 'Create Account & ' : ''}Comment */}
          {children ?? (sendingTx ? 'Editing' : 'Edit')}
        </LoadingButton>
      </div>
    </div>
  );
}

export function SolDisc() {
  const account = useMetaMaskAccount();
  const provider = useMetaMaskProvider();
  const userChainId = useMetaMaskChainId();
  const signer = provider?.getSigner();
  const { soldisc, handleTx, handleTxError } = useContracts();

  const postHash = ethers.constants.HashZero;

  const [{ userAccount }, updateUserAccount] = useSolDiscAccountQuery(account);
  const [{ comments, loaded }, updateComments] = useSolDiscCommentQuery(postHash);

  const [commentValue, setCommentValue] = useState('');
  const [userName, setUserName] = useState('');

  const connected = userChainId === chainId && account;
  const userAccountCreated = userAccount?.creationDate > 0;

  const onClickComment = () =>
    (userAccountCreated
      ? soldisc.connect(signer).commentOnPost(postHash, utf8.encode(commentValue))
      : soldisc.connect(signer).createAccountAndComment(userName, '', postHash, utf8.encode(commentValue))
    )
      .then(handleTx)
      .then(updateUserAccount)
      .then(updateComments)
      .then(() => setCommentValue(''))
      .catch(handleTxError);

  // console.log(userAccount);

  return (
    <div className="bg-slate-800/40 text-slate-300 p-4 rounded-xl border border-white/10">
      <div className="text-lg py-2">SolDisc - Decentralized Discourse</div>
      {!loaded ? (
        !connected ? (
          // <MetaMaskButton chainId={chainId}>
          <div className="flex justify-center m-4">
            <Button onClick={() => metaMaskConnector.activate(chainId)}>
              {userChainId !== chainId ? `Connect to ${CHAINS[chainId].name}` : 'Connect your MetaMask!'}
            </Button>
          </div>
        ) : (
          // </MetaMaskButton>
          <div>loading...</div>
        )
      ) : (
        <div>
          <div className="border-y border-white/40 pt-2 mb-4">
            <p className="text-slate-400">Leave a comment:</p>
            {userAccountCreated ? (
              <UserName address={account} userName={userAccount.name} />
            ) : (
              <div>
                <Input
                  className="mt-2"
                  variant="outlined"
                  placeholder="username"
                  value={userName}
                  invalid={userName && !(4 <= userName.length && userName.length <= 20)}
                  onChange={(event) => setUserName(event.target.value)}
                />
              </div>
            )}
            <EditComment
              value={commentValue}
              onChange={(event) => setCommentValue(event.target.value)}
              placeholder={(!userAccountCreated && 'comment') || ''}
              onClick={onClickComment}
            >
              {!userAccountCreated ? 'Create Account & ' : ''}Comment
            </EditComment>
          </div>

          {comments?.length < 1 && <p>No Comments yet</p>}

          <div className="flex flex-col gap-y-4">
            {loaded &&
              comments.map((props, i) => <Comment key={i} postHash={postHash} commentId={i} {...props} />).reverse()}
          </div>
        </div>
      )}
    </div>
  );
}
