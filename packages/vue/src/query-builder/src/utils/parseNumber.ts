import type { ParseNumbersMethod } from '../ts';
import { numericRegex } from './misc';

export interface ParseNumberOptions {
  parseNumbers?: ParseNumbersMethod;
}

export const parseNumber = (v: any, { parseNumbers }: ParseNumberOptions) => {
  if (typeof v === 'bigint' || typeof v === 'number') {
    return v;
  }
  return parseNumbers && (parseNumbers === 'native' || numericRegex.test(v)) ? parseFloat(v) : v;
};
