import { useLayoutEffect } from 'react';
import { startRegisterRedirect } from '@/store';
import { useAppDispatch } from '.';

export const useCheckAuth = () => {
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(startRegisterRedirect());
  }, []);

  return {};
};
