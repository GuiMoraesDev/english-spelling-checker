import React from 'react';

export type LoadingStates = 'initial' | 'loading' | 'error';

type IUseLoadingDTO = {
  status: LoadingStates;
  set: {
    loading(): void;
    error(): void;
    init(): void;
    asyncError(): Promise<void>;
    timelessError(): void;
  };
};

const useLoading = (): IUseLoadingDTO => {
  const [status, setStatus] = React.useState<LoadingStates>('initial');

  const loading = React.useCallback(() => {
    return setStatus('loading');
  }, []);

  const error = React.useCallback(() => {
    setStatus('error');

    const timer = setTimeout(() => {
      setStatus('initial');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const init = React.useCallback(() => {
    setStatus('initial');
  }, []);

  const asyncError = React.useCallback(() => {
    return new Promise<void>((resolve) => {
      setStatus('error');

      setTimeout(() => {
        setStatus('initial');

        resolve();
      }, 3000);
    });
  }, []);

  const timelessError = React.useCallback(() => {
    setStatus('error');
  }, []);

  const set = React.useMemo(
    () => ({
      loading,
      error,
      init,
      asyncError,
      timelessError,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return { status, set };
};

export default useLoading;
