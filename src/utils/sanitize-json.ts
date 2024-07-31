import type { Json } from '@/core/domain/json';

export function sanitizeJson(json: Json): string {
  return JSON.stringify(json).replace(/\\n/g, '').replace(/\"/g, '"');
}
