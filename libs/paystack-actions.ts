/* eslint-disable */

// type custom = {
//   PaystackPop:(arg: Record<string, any>) => void
// }& Window

// const custom : custom = null!

type PaystackPopFunction = (arg: Record<string, any>) => { openIframe: () => void };

type CustomWindow = {
  PaystackPop: PaystackPopFunction;
};

const custom: CustomWindow = null!;
export let callPaystackPop = (paystackArgs: Record<string, any>): void => {

  const handler = custom.PaystackPop && custom.PaystackPop?.setup(paystackArgs);
  handler && handler.openIframe();
 
};
