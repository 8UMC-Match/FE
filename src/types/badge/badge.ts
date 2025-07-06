import type { CommonResponse } from '../common/common.types';

export type BadgeResponse = CommonResponse<{
  badge: string;
  askCount: number;
  wordCount: number;
  progressRate: number;
}>;
