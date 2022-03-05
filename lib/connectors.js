import { getPriorityConnector, initializeConnector } from '@web3-react/core';
import { MetaMask } from '@web3-react/metamask';
import { WalletConnect } from '@web3-react/walletconnect';
import { WalletLink } from '@web3-react/walletlink';

import { RPC_URLS, URLS } from './chains';
import { config } from '../config';

const allowedChainIds = [config.soldisc.address];

// MetaMask
export const [metaMaskConnector, metaMaskHooks] = initializeConnector(
  (actions) => new MetaMask(actions, false)
  // allowedChainIds
);

export const {
  useWeb3React: useMetaMaskWeb3React,
  useIsActive: useMetaMaskIsActive,
  useProvider: useMetaMaskProvider,
  useAccount: useMetaMaskAccount,
  useChainId: useMetaMaskChainId,
} = metaMaskHooks;

// WalletConnect
export const [walletConnectConnector, walletConnectHooks] = initializeConnector(
  (actions) => new WalletConnect(actions, { rpc: RPC_URLS }, false)
  // allowedChainIds
);

// WalletLink
export const [walletLinkConnector, walletLinkHooks] = initializeConnector(
  (actions) =>
    new WalletLink(
      actions,
      {
        url: RPC_URLS[allowedChainIds[0]],
        appName: 'web3-react',
      },
      false
    )
);

export const getConnectorName = (connector) => {
  if (connector instanceof MetaMask) return 'MetaMask';
  if (connector instanceof WalletConnect) return 'WalletConnect';
  if (connector instanceof WalletLink) return 'WalletLink';
};

// Priority
export const {
  usePriorityWeb3React,
  usePriorityConnector,
  usePriorityIsActive,
  usePriorityProvider,
  usePriorityAccount,
  usePriorityChainId,
} = getPriorityConnector(
  [metaMaskConnector, metaMaskHooks],
  [walletConnectConnector, walletConnectHooks],
  [walletLinkConnector, walletLinkHooks]
);

export const connectMetamaskMobile = () => {
  // const dappUrl = 'metamask-auth.ilamanov.repl.co'; // TODO enter your dapp URL. For example: https://uniswap.exchange. (don't enter the "https://")
  const dappUrl = window.location.href.split('//')[1].split('/')[0]; // NOTE: not available with nextJS
  const metamaskAppDeepLink = 'https://metamask.app.link/dapp/' + dappUrl;
  // location.href = metamaskAppDeepLink;
  window.open(metamaskAppDeepLink, '_self');
};
