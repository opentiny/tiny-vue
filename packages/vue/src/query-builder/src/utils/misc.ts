export const numericRegex = /^\s*[+-]?(\d+|\d*\.\d+|\d+\.\d*)([Ee][+-]?\d+)?\s*$/;

export const isPojo = (obj: any): obj is Record<string, any> =>
  obj === null || typeof obj !== 'object' ? false : Object.getPrototypeOf(obj) === Object.prototype;
