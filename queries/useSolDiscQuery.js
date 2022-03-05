import { config } from '../config';
import { useChainQuery, useContracts } from '../hooks';
import { useMetaMaskAccount, useMetaMaskChainId, usePriorityAccount } from '../lib';

const chainId = config.soldisc.chainId;

export function useSolDiscCommentQuery(postHash) {
  const { soldisc } = useContracts();
  const account = useMetaMaskAccount();

  const key = 'PostQuery' + postHash;

  const fetchState = async () => {
    const comments = await soldisc.getCommentsByPost(postHash, account);
    return { comments };
  };
  return useChainQuery({ key, fetchState, chainId });
}

export function useSolDiscAccountQuery(account) {
  const { soldisc } = useContracts();
  const key = 'UserQuery';

  const fetchState = async () => {
    const userAccount = await soldisc.accounts(account);
    return { userAccount };
  };
  return useChainQuery({ key, fetchState, chainId });
}
