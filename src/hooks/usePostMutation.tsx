import { useMutation } from '@tanstack/react-query';
import { API } from '../apis/axios';
import type { UseMutationOptions } from '@tanstack/react-query';

export function usePostMutation<TVariables = unknown, TResponse = unknown>(
  endpoint: string,
  options?: Omit<
    UseMutationOptions<TResponse, Error, TVariables, unknown>,
    'mutationFn'
  >,
) {
  return useMutation<TResponse, Error, TVariables>({
    mutationFn: async (variables) => {
      const res = await API.post<TResponse>(endpoint, variables);
      return res.data;
    },
    ...options,
  });
}
