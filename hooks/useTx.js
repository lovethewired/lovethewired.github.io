import React, { useCallback, useEffect } from 'react';
import { createContext, useState, useContext, Fragment } from 'react';
import { atom, useRecoilState } from 'recoil';
import { config } from '../config';

import { getTransactionLink, Portal, usePriorityChainId } from '../lib';
import { usePriorityAccount } from '../lib';
import { Alert, Link } from '../lib';

// export const TransactionContext = createContext({});
function toTitleCase(str) {
  return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

const parseTxError = (e) => {
  // console.error('error', e);
  let msg;
  try {
    msg = JSON.parse(/\(error=(.+), method.+\)/g.exec(e.message)[1]).message;
  } catch (error) {
    msg = e?.data?.message || e?.message || e;
  }
  msg = toTitleCase(msg.replaceAll('_', ' '));
  if (msg.includes('insufficient funds')) return 'Insufficient funds';
  return msg;
};

const AlertAtom = atom({
  key: 'AlertMsgState',
  default: {
    open: false,
    message: '',
    severity: undefined,
    key: 0,
  },
});

export function AlertMessages() {
  const [alertState, setAlertState] = useRecoilState(AlertAtom);

  const onClose = () => setAlertState({ ...alertState, open: false });

  return (
    alertState.open && (
      <Alert {...alertState} onClose={onClose}>
        {alertState.message}
      </Alert>
    )
  );
}

export function useAlert() {
  const [, setAlertState] = useRecoilState(AlertAtom);

  const alert = (msg, severity) => {
    setAlertState({
      open: true,
      message: msg,
      severity: severity || 'alert',
      key: new Date().getTime(), // force update
    });
  };

  return alert;
}

export function useTx() {
  const [isSendingTx, setIsSendingTx] = useState(false);
  const alert = useAlert();
  const chainId = usePriorityChainId();

  const handleTxError = (error) => {
    setIsSendingTx(false);
    alert(parseTxError(error));
  };

  const handleTx = async (tx) => {
    setIsSendingTx(true);
    const txLink = getTransactionLink(tx.hash, chainId);
    alert(
      <Link className="underline" href={txLink}>
        Processing Transaction.
      </Link>,
      'info'
    );
    const receipt = await tx.wait();
    alert(
      <Link className="underline" href={txLink}>
        Transaction successful!
      </Link>,
      'success'
    );
    setIsSendingTx(false);
    return receipt;
  };

  return {
    alert,
    handleTx,
    handleTxError,
    isSendingTx,
  };
}
