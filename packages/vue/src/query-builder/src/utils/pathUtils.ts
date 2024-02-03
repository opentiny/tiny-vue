import type { RuleGroupTypeAny, RuleType } from '../ts'
import { isPojo } from './misc'

export type FindPathReturnType = RuleGroupTypeAny | RuleType | null

export const findPath = (path: number[], query: RuleGroupTypeAny): FindPathReturnType => {
  let level = 0
  let target: FindPathReturnType = query
  while (target && level < path.length && 'rules' in target) {
    const t: RuleType | RuleGroupTypeAny | string = target.rules[path[level]]
    if (typeof t === 'string') {
      target = null
    } else {
      target = t
    }
    level++
  }

  return target
}

export const getParentPath = (path: number[]) => path.slice(0, path.length - 1)

export const pathsAreEqual = (path1: number[], path2: number[]) =>
  path1.every((val, idx) => val === path2[idx]) && path1.length === path2.length

export const isAncestor = (maybeAncestor: number[], path: number[]) =>
  RegExp(`^${maybeAncestor.join('-')}`).test(path.join('-')) && maybeAncestor.length < path.length

export const getCommonAncestorPath = (path1: number[], path2: number[]) => {
  const parentPath1 = getParentPath(path1)
  const parentPath2 = getParentPath(path2)
  const commonAncestorPath: number[] = []
  let i = 0

  while (parentPath1[i] === parentPath2[i] && i < parentPath1.length && i < parentPath2.length) {
    commonAncestorPath.push(parentPath2[i])
    i++
  }

  return commonAncestorPath
}

export const pathIsDisabled = (path: number[], query: RuleGroupTypeAny) => {
  let level = 0
  let disabled = !!query.disabled
  let target: RuleType | RuleGroupTypeAny = query
  while ('rules' in target && level < path.length && !disabled) {
    const t: RuleGroupTypeAny | RuleType | string = target.rules[path[level]]
    if (isPojo(t) && ('field' in t || 'rules' in t)) {
      disabled = !!t.disabled
      target = t
    }
    level++
  }
  return disabled
}
