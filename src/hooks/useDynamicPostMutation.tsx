import { useMutation } from '@tanstack/react-query';
import { API } from '../apis/axios';
import type { UseMutationOptions } from '@tanstack/react-query';

type DynamicPostVariables<T> = {
  endpoint: string;
  data?: T;
};

export function useDynamicPostMutation<
  TVariables = unknown,
  TResponse = unknown,
>(
  options?: Omit<
    UseMutationOptions<
      TResponse,
      Error,
      DynamicPostVariables<TVariables>,
      unknown
    >,
    'mutationFn'
  >,
) {
  return useMutation<TResponse, Error, DynamicPostVariables<TVariables>>({
    mutationFn: async ({ endpoint, data }) => {
      const token = localStorage.getItem('accessToken');

      const res = await API.post<TResponse>(endpoint, data, {
        headers: token ? { Authorization: `Bearer ${token}` } : undefined,
      });

      return res.data;
    },
    ...options,
  });
}
