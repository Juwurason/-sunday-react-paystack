import React, { ReactNode } from 'react';
import PaystackContext from './paystack-context';
import usePaystackPayment from './use-paystack';
import {callback, PaystackProps} from './types';

// interface PaystackProviderProps extends PaystackProps {
//   children: JSX.Element;
//   onSuccess: callback;
//   onClose: callback;
// }

type PaystackProviderProps = {
  children: ReactNode;
  onSuccess: callback;
  onClose: callback;
} & PaystackProps

const PaystackProvider = ({
  children,
  onSuccess,
  onClose,
  ...config
}: PaystackProviderProps): JSX.Element => {
  const initializePayment = usePaystackPayment(config);

  return (
    <PaystackContext.Provider value={{config, initializePayment, onSuccess, onClose}}>
      {children}
    </PaystackContext.Provider>
  );
};

export default PaystackProvider;
