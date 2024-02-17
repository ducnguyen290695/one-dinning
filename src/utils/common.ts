export const sleep = async (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export const executeOnce = (fn: Function) => {
  let executed: boolean = false;

  return () => {
    if (!executed) {
      executed = true;
      fn?.();
    }
  };
};
