// Get the list of odd numbers, plus zero
type MappedNumber<N extends number, Result extends Array<unknown> = []> = Result['length'] extends N
  ? Result
  : MappedNumber<N, [...Result, Result['length']]>
type MAXIMUM_ALLOWED_NUMBER = 45
// 0, 1, 2, 3 ... 494
type OddEnd = '1' | '3' | '5' | '7' | '9'
type NumberRange = MappedNumber<MAXIMUM_ALLOWED_NUMBER>[number]
type IsOdd<T extends `${number}`> = T extends `${infer Int}${infer Rest}` // Determines whether a number type is an odd number.
  ? Rest extends ''
    ? Int extends OddEnd // Type Definition
      ? true
      : false
    : Rest extends `${number}` // Type Definition
    ? IsOdd<Rest>
    : false
  : false
type Compare<Num extends number> = Num extends number ? (IsOdd<`${Num}`> extends true ? Num : never) : never
type OddRange = Compare<NumberRange>
export type OddRangeWithZero = OddRange | 0

/* istanbul ignore next */
export const isOddOrZero = (n: number): n is OddRangeWithZero => n >= 0 && (n === 0 || n % 2 === 1)

// Utility for repeating the rule(,combinator,rule)* pattern of the RuleGroupIC types
type MAXIMUM_ALLOWED_BOUNDARY = 80
// Defines a generic type
export type MappedTuple<
  Tuple extends Array<unknown>,
  Result extends Array<unknown> = [], // Stores the mapping result
  Count extends ReadonlyArray<number> = [] // Records the count during the mapping process
> = Count['length'] extends MAXIMUM_ALLOWED_BOUNDARY
  ? Result
  : Tuple extends []
  ? []
  : Result extends []
  ? MappedTuple<Tuple, Tuple, [...Count, 1]> // recursion
  : MappedTuple<Tuple, Result | [...Result, ...Tuple], [...Count, 1]>
