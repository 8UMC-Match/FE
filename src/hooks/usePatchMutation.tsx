import { useMutation } from '@tanstack/react-query';
import { API } from '../apis/axios';
import type { UseMutationOptions } from '@tanstack/react-query';

export function usePatchMutation<TVariables = unknown, TResponse = unknown>(
  endpoint: string,
  options?: Omit<
    UseMutationOptions<TResponse, Error, TVariables>,
    'mutationFn'
  >,
) {
  return useMutation<TResponse, Error, TVariables>({
    mutationFn: async (variables) => {
      const res = await API.patch<TResponse>(endpoint, variables);
      return res.data;
    },
    ...options,
  });
}
