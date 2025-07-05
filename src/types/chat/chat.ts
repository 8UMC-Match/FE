import type { CommonResponse } from '../common/common.types';

export type ChatRequest = {
  question: string;
};

export type ChatResponse = CommonResponse<{
  questionId: number;
  content: string;
}>;
