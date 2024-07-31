export interface Context {
  requestId: string;
  userId: string;
  issuedAt: number;
  expiresAt: number;
  scopes: string[];
  ip: string;
}
