import type { CommonResponse } from '../common/common.types';

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginData {
  accessToken: string;
  userId: number;
  username: string;
  role: 'USER';
  expirationTime: number;
}

export type LoginResponse = CommonResponse<LoginData>;
