import * as Quill from 'quill'

const Delta = Quill.imports['delta']

// color hex to rgba
export function hexToRgbA(hex: string) {
  let color
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    color = hex.substring(1).split('')
    if (color.length === 3) {
      color = [color[0], color[0], color[1], color[1], color[2], color[2]]
    }
    color = '0x' + color.join('')
    return (
      'rgba(' +
      [(color >> 16) & 255, (color >> 8) & 255, color & 255].join(',') +
      ',1)'
    )
  }
}

/**
 * 将File格式的图片转换成Url格式
 * @param imageFile File格式的图片
 */
export function imageFileToUrl(imageFile) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(imageFile)
    reader.onload = function (e) {
      resolve(e.target['result'])
    }
    reader.onerror = reject
  }).catch(err => null)
}

/**
 * 将Url格式的图片转换成File格式
 * @param imageUrl 图片的URL
 */
export function imageUrlToFile(imageUrl, isErrorImage?: boolean) {
  return new Promise(function (resolve, reject) {
    fetch(imageUrl, {
      method: 'get',
      mode: 'no-cors',
    })
      .then(res => res.blob())
      .then(blob => {
        if (blob.type.indexOf('image') === -1 || !blob.type) {
          return reject()
        }
        const fileType = blob.type.replace(/^.*\//, '')
        const fileName = isErrorImage
          ? 'editorx-error-image.png'
          : `image-${new Date().getTime()}.${fileType}`
        const file = new File([blob], fileName, blob)
        resolve(file)
      })
      .catch(reject)
  })
}

export function insideTable(range = null, quill = this.quill) {
  let currentRange = range
  if (!currentRange) {
    currentRange = quill.getSelection()
  }
  // fix: 原有formats方法无法判断表格内的list和head附近粘贴
  const [line] = quill.getLine(currentRange.index)
  return line && !!line.domNode.closest('table.quill-better-table')
}

export function isNullOrUndefined(param) {
  return param === null || param === undefined
}

/**
 * omit
 * @param   obj         target Object
 * @param   uselessKeys  keys of removed properties
 * @return             new Object without useless properties
 */
export function omit(obj, uselessKeys) {
  return (
    obj &&
    Object.keys(obj).reduce((acc, key) => {
      return uselessKeys.includes(key) ? acc : { ...acc, [key]: obj[key] }
    }, {})
  )
}

/**
 * 将delta中的图片替换成制定的图片数组，用于图片上传到服务器的场景
 * @param delta 原始delta
 * @param imageUrls 图片数组
 * @param imagePlaceholder 标识是否是占位图的数组，与图片数组一一对应
 * @return 替换之后的delta
 */
export function replaceDeltaImage(delta, imageUrls, imagePlaceholder) {
  let imageIndex = 0
  return delta.reduce((newDelta, op) => {
    if (op.insert.image && !op.insert.image.hasExisted) {
      const attributes = imagePlaceholder[imageIndex]
        ? { ...op.attributes, width: 'auto', height: 225 } // 占位图片应该固定大小
        : op.attributes
      newDelta.insert({ image: imageUrls[imageIndex] }, attributes)
      imageIndex++
    } else {
      newDelta.insert(op.insert, op.attributes)
    }
    return newDelta
  }, new Delta())
}

export function splitWithBreak(insertContent: string) {
  const lines = []
  const insertStr = insertContent
  let start = 0
  for (let i = 0; i < insertContent.length; i++) {
    if (insertStr.charAt(i) === '\n') {
      if (i === 0) {
        lines.push('\n')
      } else {
        lines.push(insertStr.substring(start, i))
        lines.push('\n')
      }
      start = i + 1
    }
  }

  const tailStr = insertStr.substring(start)
  if (tailStr) {
    lines.push(tailStr)
  }

  return lines
}

/**
 * getEventComposedPath
 *  compatibility fixed for Event.path/Event.composedPath
 *  Event.path is only for chrome/opera
 *  Event.composedPath is for Safari, FF
 *  Neither for Micro Edge
 * @return an array of event.path
 */
export function getEventComposedPath(evt) {
  let path
  // chrome, opera, safari, firefox
  path = evt.path || (evt.composedPath && evt.composedPath())

  // other: edge
  if (path === undefined && evt.target) {
    path = []
    let target = evt.target
    path.push(target)

    while (target && target.parentNode) {
      target = target.parentNode
      path.push(target)
    }
  }

  return path
}

export const sanitize = (url, protocols) => {
  const anchor = document.createElement('a')
  anchor.href = url
  const protocol = anchor.href.slice(0, anchor.href.indexOf(':'))
  return protocols.indexOf(protocol) > -1
}

export const isInside = (position, dom) => {
  const areaPosition = dom.getBoundingClientRect()
  const { pageX, pageY } = position
  // getBoundingClientRect是不考虑窗口滚动的
  const left = pageX - window.scrollX
  const top = pageY - window.scrollY
  const {
    left: areaLeft,
    top: areaTop,
    width: areaWidth,
    height: areaHeight,
  } = areaPosition
  const inside =
    left > areaLeft &&
    left < areaLeft + areaWidth &&
    top > areaTop &&
    top < areaTop + areaHeight
  return inside
}

// Internet Explorer 6-11
export const isPureIE = !!document['documentMode']
