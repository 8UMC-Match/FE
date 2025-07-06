import type { CommonResponse } from '../common/common.types';

export type WordResponse = {
  askWordId: number;
  name: string;
  description: string;
};

export type WordListData = {
  data: WordResponse[];
};

export type WordListResponse = CommonResponse<WordListData>;

export interface AddWordRequest {
  askwordIds: number[];
}

export interface AddWordResponse {
  success: boolean;
  code: number;
  message: string;
  data: boolean;
}
