import type { Option, OptionGroup } from '../ts'

export const uniqByName = <T extends { name: string }>(originalArray: T[]): T[] => {
  const newArray: any[] = []
  const name = new Set<string>()
  originalArray.forEach((el) => {
    if (!name.has(el.name)) {
      name.add(el.name)
      newArray.push(el)
    }
  })
  return newArray
}

export const uniqOptGroups = <T extends Option>(originalArray: OptionGroup<T>[]) => {
  const label = new Set<string>()
  const name = new Set<string>()
  const newArray: OptionGroup<T>[] = []
  originalArray.forEach((el) => {
    if (!label.has(el.label)) {
      label.add(el.label)
      const optionsForThisGroup: T[] = []
      el.options.forEach((opt) => {
        if (!name.has(opt.name)) {
          name.add(opt.name)
          optionsForThisGroup.push(opt)
        }
      })
      newArray.push({ ...el, options: optionsForThisGroup })
    }
  })
  return newArray
}
