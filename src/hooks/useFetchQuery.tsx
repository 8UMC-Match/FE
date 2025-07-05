import { useQuery } from '@tanstack/react-query';
import type { UseQueryOptions } from '@tanstack/react-query';
import { API } from '../apis/axios';

type FetchQueryOptions<T> = Omit<
  UseQueryOptions<T, Error, T, [string]>,
  'queryKey' | 'queryFn'
>;

export function useFetchQuery<T>(
  key: string,
  endpoint: string,
  options?: FetchQueryOptions<T>,
) {
  return useQuery<T, Error, T, [string]>({
    queryKey: [key],
    queryFn: async () => {
      const res = await API.get<T>(endpoint);
      return res.data;
    },
    ...options,
  });
}
