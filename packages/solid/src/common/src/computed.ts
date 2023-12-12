import type { Accessor } from 'solid-js'

export declare type ComputedSetter<T> = (v: T) => void
export type ComputedGetter<T> = (...args: any[]) => T
export interface WritableComputedOptions<T> {
  get: ComputedGetter<T>
  set: ComputedSetter<T>
}
export type WritableComputedReturn<T> = [Accessor<T>, ComputedSetter<T>]
export function writableComputed<T>(options: WritableComputedOptions<T>): WritableComputedReturn<T> {
  return [options.get, options.set]
}
