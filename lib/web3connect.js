import React from 'react';
import cn from 'classnames';

import { useState } from 'react';
import { Button, Modal } from './primitives';
import {
  connectMetamaskMobile,
  getConnectorName,
  metaMaskConnector,
  usePriorityConnector,
  usePriorityIsActive,
  usePriorityWeb3React,
  walletConnectConnector,
  walletLinkConnector,
} from './connectors';

import MetaMaskIcon from '../images/metamask.svg';
import WalletConnectIcon from '../images/walletconnect.svg';
import WalletLinkIcon from '../images/walletlink.svg';
import { config } from '../config';
import { isMobile } from './utils';
import { useMetaMaskConnector, useMetaMaskWeb3React } from '.';

const Wallets = [
  { Icon: MetaMaskIcon, connector: metaMaskConnector },
  { Icon: WalletConnectIcon, connector: walletConnectConnector },
  { Icon: WalletLinkIcon, connector: walletLinkConnector },
];

const shortenAddress = (address) => {
  return address.substring(0, 5) + '...' + address.substring(38);
};

export function Web3Modal({ chainId, children, className, onClose, ...props }) {
  const priorityConnector = usePriorityConnector();
  const priorityIsActive = usePriorityIsActive();
  const priorityConnectorName = getConnectorName(priorityConnector);

  return (
    <Modal className="bg-gray-400/40" onClose={onClose} {...props}>
      <div>
        <div className="p-8 flex flex-col gap-y-2 bg-gray-800 rounded-xl">
          {Wallets.map(({ Icon, connector }) => {
            const name = getConnectorName(connector);
            return (
              <div
                key={name}
                onClick={() => {
                  priorityConnector.deactivate();
                  const deactivateOnly = priorityIsActive && priorityConnectorName === name;
                  if (!deactivateOnly) {
                    if (name === 'MetaMask' && !window.ethereum && isMobile()) connectMetamaskMobile();
                    else connector.activate(chainId).then(onClose);
                  }
                }}
                className="w-60 py-2 px-4 text-gray-200 rounded border border-gray-400/40 bg-black/20 hover:bg-black/40 hover:outline outline-1 hover:cursor-pointer flex items-center justify-between group"
              >
                <div className="flex items-center gap-x-4">
                  {name === priorityConnectorName && priorityIsActive && (
                    <div className="w-[6px] h-[6px] rounded-full bg-green-400 group-hover:bg-red-400 transition-colors duration-200" />
                  )}
                  <p>{name}</p>
                </div>
                <Icon className="text-white h-8 w-8" />
              </div>
            );
          })}
        </div>
      </div>
    </Modal>
  );
}

export function WalletButton({ chainId, children, className, ...props }) {
  const { account, active, ensNames } = usePriorityWeb3React();
  const [modalOpen, setModalOpen] = useState(false);

  const onClick = () => setModalOpen(true);

  return (
    <>
      {modalOpen && <Web3Modal chainId={chainId} onClose={() => setModalOpen(false)} />}
      {children ? (
        <button onClick={onClick} {...props} className={className}>
          {children}
        </button>
      ) : (
        <Button
          variant="fancy"
          onClick={onClick}
          className={cn('!outline-none normal-case text-sm w-[140px]', className)}
          {...props}
        >
          {(active && (ensNames?.[0] || (account && shortenAddress(account)))) || 'Connect Wallet'}
        </Button>
      )}
    </>
  );
}

export function MetaMaskButton({ chainId, children, className, ...props }) {
  const { account, active, ensNames, chainId: userChainId } = useMetaMaskWeb3React();

  const connected = account && (!chainId || chainId === userChainId);

  const onClick = () => {
    if (!connected) metaMaskConnector.activate(chainId);
    else {
      navigator.clipboard.writeText(account);
      alert('Address copied.', 'success');
    }
  };

  return children ? (
    <button onClick={onClick} {...props} className={className}>
      {children}
    </button>
  ) : (
    <Button
      variant="fancy"
      onClick={onClick}
      className={cn('!outline-none normal-case text-sm w-[140px]', className)}
      {...props}
    >
      {(active && (ensNames?.[0] || (account && shortenAddress(account)))) || 'Connect Wallet'}
    </Button>
  );
}

export function ConnectMetamaskContainer() {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <WalletButton className="rounded-xl hover:scale-110 transition-all duration-200">
        <img
          className="w-20 m-4 mb-5"
          // src={require('../images/metamask.png')}
        />
      </WalletButton>
      <p className="mt-4">Connect via Metamask</p>
    </div>
  );
}
