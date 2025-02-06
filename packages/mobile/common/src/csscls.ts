interface CssClassObject {
  [k: string]: any
}
type CssClassArray = Array<string | CssClassObject>
export type CssClass = string | CssClassObject | CssClassArray

/**
 * 简单合并 tailwind 类对象为字符串值
 *
 * @param cssClassObject tailwind 类对象
 * @returns string
 */
export const stringifyCssClassObject = (cssClassObject: CssClassObject): string => {
  const allCssClass: Array<string> = []

  Object.keys(cssClassObject).forEach((cssClass) => cssClassObject[cssClass] && allCssClass.push(cssClass))

  return allCssClass.join('\u{20}')
}

/**
 * 简单合并 tailwind 类数组为字符串值
 *
 * @param cssClassArray tailwind 类数组
 * @returns string
 */
export const stringifyCssClassArray = (cssClassArray: CssClassArray): string => {
  const allCssClass: Array<string> = []

  cssClassArray.forEach((cssClass) => {
    if (typeof cssClass === 'string') {
      allCssClass.push(cssClass)
    } else if (typeof cssClass === 'object') {
      allCssClass.push(stringifyCssClassObject(cssClass))
    }
  })

  return allCssClass.join('\u{20}')
}

/**
 * 简单合并 tailwind 类对象为字符串值，去重处理留给 tailwind-merge 处理
 *
 * @param {*} cssClasses tailwind 类集合
 * @returns string
 */
export const stringifyCssClass = (cssClasses: Array<CssClass> | CssClass): string => {
  if (!cssClasses) {
    return ''
  }
  if (typeof cssClasses === 'string') {
    return cssClasses
  }
  if (Array.isArray(cssClasses) && cssClasses.length > 0) {
    const allCssClass: Array<string> = []

    cssClasses.forEach((cssClass) => {
      if (cssClass) {
        if (typeof cssClass === 'string') {
          allCssClass.push(cssClass)
        } else if (Array.isArray(cssClass)) {
          allCssClass.push(stringifyCssClassArray(cssClass))
        } else if (typeof cssClass === 'object') {
          allCssClass.push(stringifyCssClassObject(cssClass))
        }
      }
    })

    return allCssClass.join('\u{20}')
  }
  if (typeof cssClasses === 'object') {
    return stringifyCssClassObject(cssClasses)
  }
  return ''
}

/**
 * 对类名做一个简单去重处理
 *
 * @param cssClasses 类集合
 * @returns string
 */
export const deduplicateCssClass = (cssClasses: Array<CssClass> | CssClass): string => {
  const classNames = stringifyCssClass(cssClasses)
  // 类名去重且去除多余空格
  const classArray = Array.from(new Set(classNames.split('\u{20}'))).filter((i) => i)
  return stringifyCssClass(classArray)
}
