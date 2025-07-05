export interface LoginResponse {
  data: {
    accessToken: string;
  };
}

export interface LoginRequest {
  email: string;
  password: string;
}
