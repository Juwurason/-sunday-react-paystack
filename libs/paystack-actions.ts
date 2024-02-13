/* eslint-disable */

type custom = {
  PaystackPop:(arg: Record<string, any>) => void
}& Window

const custom : custom = null!
export let callPaystackPop = (paystackArgs: Record<string, any>): void => {

  const handler = custom.PaystackPop && custom.PaystackPop.setup(paystackArgs);
  handler && handler.openIframe();
 
};
