/**
 * A typed proxy for `Object.keys`
 */
export const objectKeys = <T extends Record<string, any>>(obj: T) =>
  Object.keys(obj) as (keyof T)[];
