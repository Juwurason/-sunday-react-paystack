/// <reference types="react" />
import { callback, PaystackProps } from './types';
// interface PaystackProviderProps extends PaystackProps {
    // children: JSX.Element;
    // onSuccess: callback;
    // onClose: callback;
// }

type PaystackProviderProps = {
    children: JSX.Element;
    onSuccess: callback;
    onClose: callback;

}& PaystackProps

declare const PaystackProvider: ({ children, onSuccess, onClose, ...config }: PaystackProviderProps) => JSX.Element;
export default PaystackProvider;
