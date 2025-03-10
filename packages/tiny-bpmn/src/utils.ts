export const of = <R, T extends new (...args: any[]) => any>(Clazz: T, ...args: unknown[]): R => {
  return new Clazz(...args)
}
