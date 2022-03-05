import { ethers } from 'ethers';
import { useTx } from './useTx';
import { usePriorityProvider } from '../lib/connectors';
import { config } from '../config';
import { useEffect } from 'react';

const { abi: soldiscABI } = require('../data/SolDisc.json');

export const SolDisc = new ethers.Contract(config.soldisc.address, soldiscABI);

export function useContracts() {
  const { handleTx, handleTxError, alert } = useTx();
  const provider = usePriorityProvider();

  const soldisc = SolDisc.connect(provider);

  useEffect(() => (window.soldisc = soldisc.connect(provider?.getSigner())), []);

  return { soldisc, handleTx, handleTxError, alert };
}
