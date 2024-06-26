import * as Quill from 'quill'
import {
  ERROR_IMAGE_PLACEHOLDER_CN,
  ERROR_IMAGE_PLACEHOLDER_EN,
} from './config/base64-image'
import { BIG_DELTA_LIMIT, LANG_CONF } from './config/editor.config'
import {
  hexToRgbA,
  imageFileToUrl,
  imageUrlToFile,
  insideTable,
  isNullOrUndefined,
  omit,
  replaceDeltaImage,
  splitWithBreak,
} from './config/editor.utils'

const Clipboard = Quill.imports['modules/clipboard']
const Delta = Quill.imports['delta']

class CustomClipboard extends Clipboard {
  quill
  convert
  onCopy
  matchers

  prepareMatching(container, nodeMatches) {
    const elementMatchers = []
    const textMatchers = []
    this.matchers.forEach((pair) => {
      const [selector, matcher] = pair
      switch (selector) {
        case Node.TEXT_NODE:
          textMatchers.push(matcher)
          break
        case Node.ELEMENT_NODE:
          elementMatchers.push(matcher)
          break
        default: {
          // word 的 v:shape 系列标签只能通过 getElementsByTagName 获取
          const vRegex = /v:(.+)/
          const nodeList = vRegex.test(selector)
            ? Array.from(container.getElementsByTagName(selector))
            : Array.from(container.querySelectorAll(selector))
          nodeList.forEach((node) => {
            if (nodeMatches.has(node)) {
              const matches = nodeMatches.get(node)
              matches.push(matcher)
            } else {
              nodeMatches.set(node, [matcher])
            }
          })
          break
        }
      }
    })
    return [elementMatchers, textMatchers]
  }

  onCaptureCopy(e, isCut = false) {
    if (e.defaultPrevented) {
      return
    }
    e.preventDefault()
    const [range] = this.quill.selection.getRange()
    if (isNullOrUndefined(range)) {
      return
    }
    const { html, text } = this.onCopy(range, isCut)

    // 兼容IE11浏览器`
    if (!e.clipboardData) {
      e.clipboardData = {
        types: 'text/plain',
        setData: (type, value) => {
          return window['clipboardData'].setData('Text', value)
        },
      }
    }

    // 复制代码时移除utf8中产生的不间断空格\u00A0
    let plainText = text
    if (html.startsWith('<pre>')) {
      plainText = text.replace(/\u00A0/g, ' ')
    }

    e.clipboardData.setData('text/html', html)
    e.clipboardData.setData('text/plain', plainText)
    if (isCut) {
      this.quill.deleteText(range, Quill.sources.USER)
    }
  }

  onCapturePaste(e) {
    if (e.defaultPrevented || !this.quill.isEnabled()) {
      return
    }
    e.preventDefault()
    const range = this.quill.getSelection(true)
    if (isNullOrUndefined(range)) {
      return
    }

    // 兼容IE11浏览器
    if (!e.clipboardData) {
      e.clipboardData = {
        types: 'text/plain',
        getData: () => {
          return window['clipboardData'].getData('Text')
        },
      }
    }

    const html = e.clipboardData.getData('text/html')
    const text = e.clipboardData.getData('text/plain')
    const files = Array.from(e.clipboardData.files || [])
    const msExcelCheck = /<meta.*?Microsoft Excel\s[\d].*?>/

    if (html.search(msExcelCheck) === -1 && this.quill.options.uploadOption.imageUploadToServer && files.length > 0) {
      this.quill.uploader.upload(range, files)
    } else {
      const msWordCheck1 =
        /<meta\s*name="?generator"?\s*content="?microsoft\s*word\s*\d+"?\/?>/i
      const msWordCheck2 = /xmlns:o="urn:schemas-microsoft-com/i
      const result = { html, text, files, rtf: null }
      if (html.search(msExcelCheck) !== -1) {
        result.html = renderStyles(html)
      }
      if (msWordCheck1.test(html) || msWordCheck2.test(html)) {
        // TODO: 当word文档包含heading时text/rtf读取为空，无法获取hex图片，待修复。可参考ckeditor5/issues/2493
        result.rtf = e.clipboardData.getData('text/rtf')
      }
      this.onPaste(range, result)
    }
  }

  onPaste(range, { html, text, files: clipboardFiles, rtf }) {
    const hexImages = this.extractImageDataFromRtf(rtf)
    const rootBgColor = getComputedStyle(this.quill.root)['backgroundColor']
    const formats = this.quill.getFormat(range.index)
    let pastedDelta = this.convert({ text, html }, formats)
    pastedDelta = replaceDeltaWhiteSpace(pastedDelta, rootBgColor)
    const deltaLength = pastedDelta.ops.length

    let loadingTipsContainer
    if (deltaLength > BIG_DELTA_LIMIT) {
      loadingTipsContainer = this.quill.addContainer('ql-loading-tips')
      loadingTipsContainer.innerHTML = LANG_CONF['pasting']
    }

    const linePos = { index: range.index, length: range.length, fix: 0 }
    const [line, offset] = this.quill.getLine(range.index)
    const isInsideTable = insideTable.call(this)

    const handlePasteContent = (content: any) => {
      let pastedContent = content
      // fix: 阻止粘贴代码块和引用导致表格断裂
      const tableBreaker = pastedContent.ops.find((op) => {
        return (
          op.attributes &&
          (op.attributes['blockquote'] || op.attributes['code-block'])
        )
      })
      if (isInsideTable) {
        // fix: 阻止带有表格内容粘贴在表格里
        const table = line.domNode.closest('table.quill-better-table')
        const tableBlot = Quill.find(table)
        const tableIndex = this.quill.getIndex(tableBlot)
        const tableLength = tableBlot.length()
        const tableEndPos = tableIndex + tableLength
        const anchorNode = getSelection().anchorNode
        if (tableBreaker) {
          return
        }
        if (formats['table-col']) {
          // fix: 光标在表格前端的table-col处时，获取整个表格的index后以此为基准向前移动一位插入粘贴内容且不删除任何内容
          linePos.index = tableIndex - 1
          linePos.length = 0
        } else if (
          range.index === tableEndPos - 1 &&
          anchorNode instanceof HTMLDivElement &&
          anchorNode.classList.contains('quill-better-table-wrapper')
        ) {
          const list = pastedContent.filter(
            (op) => op.attributes && op.attributes['list']
          )
          if (list && list.length) {
            return
          }
          // fix: 光标在表格末端时，向后移动一位插入粘贴内容且不删除任何内容
          // TODO
          // 当表格最后一格有内容时，没法区分在表格最后一格最末尾和光标在表格后这两种情况，它们的 range 是一样
          // 这会导致在这两处粘贴表格内容都会将该内容粘贴到表格下一行中
          linePos.index = tableEndPos
          linePos.length = 0
        } else {
          if (!formats['table-cell-line']) {
            return
          }
          // fix: 解决表格内粘贴问题
          // 缺陷描述：将表格内的换行文本复制粘贴到别的单元格，会导致表格断开
          // 原因是：换行的文本delta对象有问题，delta对象前面多了一个纯换行和表格控制头（table-col）
          // 解决方法：将多余的delta项移除
          pastedContent = {
            ops: pastedContent.filter((op, index) => {
              const regexp = /^[\n\r]+$/
              const isString = op.insert && typeof op.insert === 'string'
              const isLine = isString && regexp.test(op.insert)
              const isCellLine =
                isLine && op.attributes && op.attributes['table-cell-line']
              const isList = isLine && op.attributes && op.attributes['list']
              const isPureLine = isLine && !isCellLine && !isList
              const isTableCol =
                isLine && op.attributes && op.attributes['table-col']
              const isLastCellLine = isCellLine && index === deltaLength - 1
              return !isPureLine && !isTableCol && !isLastCellLine
            }),
          }
          // fix: 解决从表格外粘贴多行文本导致表格断开的问题
          pastedContent = rebuildDelta(
            new Delta(pastedContent.ops),
            formats['table-cell-line']
          )
        }
      }

      // fix: 粘贴内容末尾为List，且粘贴位置的block或table-cell-line无内容则删除该block或table-cell-line
      // TODO 这里的lastChild如果不存在，则可能报错
      const lastChild = pastedContent.ops[pastedContent.ops.length - 1]
      const hasList =
        lastChild && lastChild.attributes && lastChild.attributes['list']
      if (
        hasList &&
        offset === 0 &&
        line &&
        line.cache.length === 1 &&
        (line.statics.blotName === 'block' ||
          line.statics.blotName === 'table-cell-line') &&
        (!line.next || line.next.statics.blotName !== 'table-view')
      ) {
        linePos.index = this.quill.getIndex(line)
        linePos.length = line.length()
        linePos.fix = 1
      }

      const oldDelta = new Delta().retain(linePos.index).delete(linePos.length)
      const delta = oldDelta.concat(pastedContent)
      
      setTimeout(() => {
        this.quill.updateContents(delta, Quill.sources.USER)
        this.quill.setSelection(
          delta.length() - linePos.length - linePos.fix,
          Quill.sources.SILENT
        )
        this.quill.scrollIntoView()
        if (loadingTipsContainer) {
          loadingTipsContainer.remove()
        }
      })
    }

    ;(async () => {
      try {
        const [files, placeholders, originalUrls, imageIndexs] = this.flipFilesArray(
          await this.extractFilesFromDelta(
            pastedDelta,
            clipboardFiles,
            hexImages
          )
        )

        if (files.length === 0) {
          handlePasteContent(pastedDelta)
        } else {
          if (this.quill.options.editorPaste && this.quill.options.editorPaste.observers.length !== 0) {
            // 设置editorPaste回调的情况
            this.quill.options.editorPaste.emit({
              files: files,
              callback: ({ code, message, data }) => {
                if (code === 0) {
                  const { imageUrls } = data
                  pastedDelta = replaceDeltaImage(
                    pastedDelta,
                    imageUrls,
                    placeholders
                  )
                  handlePasteContent(pastedDelta)
                } else {
                  console.error('error message:', message)
                }
              },
            })
          } else {
            // 没有originalUrls 也没有文件粘贴
            if(files[0] !== undefined || originalUrls.length === 0 ) {
              // 没有设置editorPaste回调的情况下，File格式的占位图需要手动转换成url格式，插入到编辑器中
              const imageUrls = await this.files2urls(
                files,
                placeholders,
                originalUrls,
                pastedDelta,
                imageIndexs
              )
              pastedDelta = replaceDeltaImage(
                pastedDelta,
                imageUrls,
                placeholders
              )
            }
            handlePasteContent(pastedDelta)
          }
        }
      } catch (e) {
        throw new Error('Paste failed.')
      }
    })()
  }

  files2urls(files, placeholders, originalUrls, pastedDelta, imageIndexs) {
    return Promise.all(
      files.map((imageFile, index) => {
        const netImgExp = /^((http|https)\:)?\/\/([\s\S]+)$/
        if (
          !placeholders[index] &&
          originalUrls[index] &&
          netImgExp.test(originalUrls[index])
        ) {
          // 不是占位图的普通url图片直接返回url
          return new Promise((resolve) => {
            resolve(originalUrls[index])
          })
        } else if(this.quill.options.uploadOption.imageUploadToServer) {
          const range = this.getImgSelection(pastedDelta, imageIndexs[index])
          this.quill.uploader.upload(range, [imageFile])
        } else {
          // 占位图或者跨域图需要手动转换成url格式
          return imageFileToUrl(imageFile)
        }
      })
    )
  }

  flipFilesArray(filesArr) {
    const files = []
    const placeholders = []
    const originalUrls = []
    const imageIndexs = []
    filesArr.forEach((item: any) => {
      if (item) {
        const [file, placeholder, originalUrl, imageIndex] = item
        files.push(file)
        placeholders.push(placeholder)
        originalUrls.push(originalUrl)
        if(imageIndex === 0 || imageIndex) {
          imageIndexs.push(imageIndex)
        }
      }
    })
    return [files, placeholders, originalUrls, imageIndexs]
  }

  // 将图片从hex转为base64
  convertHexToBase64(hexString) {
    return btoa(
      hexString
        .match(/\w{2}/g)
        .map((char) => {
          return String.fromCharCode(parseInt(char, 16))
        })
        .join('')
    )
  }

  // 匹配rtf中的图片，存储为{hex, type}对象数组
  extractImageDataFromRtf(rtfData) {
    if (!rtfData) {
      return []
    }

    const regexPictureHeader =
      /{\\pict[\s\S]+?\\bliptag-?\d+(\\blipupi-?\d+)?({\\\*\\blipuid\s?[\da-fA-F]+)?[\s}]*?/
    const regexPicture = new RegExp(
      '(?:(' + regexPictureHeader.source + '))([\\da-fA-F\\s]+)\\}',
      'g'
    )
    const images = rtfData.match(regexPicture)
    const result = []

    if (images) {
      for (const image of images) {
        let imageType = ''

        if (image.includes('\\pngblip')) {
          imageType = 'image/png'
        } else if (image.includes('\\jpegblip')) {
          imageType = 'image/jpeg'
        }

        if (imageType) {
          result.push({
            hex: image
              .replace(regexPictureHeader, '')
              .replace(/[^\da-fA-F]/g, ''),
            type: imageType,
          })
        }
      }
    }

    return result
  }

  extractFilesFromDelta(delta, clipboardFiles, hexImages?) {
    let index = -1
    return Promise.all(
      delta.map(async (op) => {
        index++
        const image = op.insert.image
        if (!image || image.hasExisted) {
          return
        }

        let file
        let isPlaceholderImage = false
        let imageIndex
        try {
          // hex 图片存在则为 file:/// 协议本地图片，使用 hex 图片转为 base64 读取
          const hexImage = hexImages.length && hexImages.shift()
          const newImage =
            hexImage &&
            `data:${hexImage.type};base64,${this.convertHexToBase64(
              hexImage.hex
            )}`
          imageIndex = index
          file = await imageUrlToFile(newImage || image.src || image)
        } catch (err) {
          if (clipboardFiles.length !== 0) {
            // 跨域获取图片失败时从剪切板获取图片
            const clipboardFile = clipboardFiles[0]
            const imageType =
              clipboardFile.type?.indexOf('image') === -1
                ? 'image/png'
                : clipboardFile.type
            const blob = clipboardFile.slice(0, clipboardFile.size, imageType)
            file = new File([blob], `image-CORS-${new Date().getTime()}.png`, {
              type: imageType,
            })
          } else if(image.src.startsWith('http')) {
            //什么都不做
          } else {
            // 剪切板中无图片，用失败占位图替换
            const errorImagePlaceholderJpg =
              LANG_CONF['img-error'] === 'Image Copy Error'
                ? ERROR_IMAGE_PLACEHOLDER_EN
                : ERROR_IMAGE_PLACEHOLDER_CN
            file = await imageUrlToFile(errorImagePlaceholderJpg, true)
            isPlaceholderImage = true
          }
        }

        return [file, isPlaceholderImage, image, imageIndex]
      })
    )
  }

  getImgSelection(delta, imageIndex) {
    let length = 0
    delta.ops.every((op, index)=>{
      if(index === imageIndex) {
        return false
      }
      if(typeof op.insert === 'string') {
        length += op.insert.length
      }
      return true
    })
    let range = {
      index: length,
      length: 0
    }
    return range
  }
}

function rebuildDelta(delta, cellLine) {
  const { cell: cellId, colspan, row: rowId, rowspan } = cellLine
  const buildedDelta = delta.reduce((newDelta, op) => {
    if (op.insert && typeof op.insert === 'string') {
      const lines = splitWithBreak(op.insert)

      lines.forEach((text) => {
        if (text === '\n') {
          // 对换行增加 table-cell-line 格式，以避免表格断开
          newDelta.insert('\n', {
            ...op.attributes,
            'table-cell-line': { row: rowId, cell: cellId, rowspan, colspan },
          })
        } else {
          text = text.endsWith('\r') ? text.slice(0, -1) : text
          newDelta.insert(
            text,
            omit(op.attributes, ['table', 'table-cell-line'])
          )
        }
      })
    } else {
      newDelta.insert(op.insert, op.attributes)
    }

    return newDelta
  }, new Delta())

  return buildedDelta
}

function replaceStrWhiteSpace(str) {
  const isWhiteSpace = (value) => /^(\u3000|\u0020){1}$/.test(value) // 空白字符
  let textWithWhiteSpace = ''
  let beginHasChar = false
  for (const char of str) {
    if (isWhiteSpace(char) && !beginHasChar) {
      textWithWhiteSpace += '\u00a0'
    } else {
      textWithWhiteSpace += char
      beginHasChar = true
    }
  }
  return textWithWhiteSpace
}

function replaceDeltaWhiteSpace(delta, rootBgColor?) {
  return delta.reduce((newDelta, op) => {
    // fix: 当粘贴文字颜色和编辑器背景色一致且自身无背景色的情况下移除文字颜色样式，避免误导用户粘贴无效
    if (
      rootBgColor &&
      op.attributes &&
      op.attributes.color &&
      !op.attributes.background
    ) {
      const originColor = op.attributes.color
      const fontColor =
        originColor.indexOf('#') === 0 ? hexToRgbA(originColor) : originColor
      if (
        fontColor === rootBgColor ||
        (fontColor === 'rgba(255,255,255,1)' &&
          rootBgColor === 'rgba(0, 0, 0, 0)')
      ) {
        delete op.attributes.color
      }
    }
    if (op.insert && typeof op.insert === 'string') {
      const lines = splitWithBreak(op.insert)
      let insertWithWhiteSpace = ''
      lines.forEach((text) => {
        insertWithWhiteSpace += replaceStrWhiteSpace(text)
      })
      newDelta.insert(insertWithWhiteSpace, op.attributes)
    } else {
      newDelta.insert(op.insert, op.attributes)
    }
    return newDelta
  }, new Delta())
}

function renderStyles(html) {
  let htmlString = html
  // Trim unnecessary parts.
  htmlString = htmlString.substring(
    htmlString.indexOf('<html '),
    htmlString.length
  )
  htmlString = htmlString.substring(
    0,
    htmlString.lastIndexOf('</html>') + '</html>'.length
  )

  // Add temporary iframe.
  const iframe = document.createElement('iframe')
  iframe.style.display = 'none'
  document.body.appendChild(iframe)

  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document
  iframeDoc.open()
  iframeDoc.write(htmlString)
  iframeDoc.close()

  let collection
  let pointer
  const rules =
    iframeDoc.styleSheets[iframeDoc.styleSheets.length - 1]['cssRules']

  // Convert internal styles to inline style of respective node.
  for (let idx = 0; idx < rules.length; idx++) {
    if ((rules[idx] as CSSStyleRule).selectorText === '') {
      continue
    }
    collection = iframeDoc.body.querySelectorAll(
      (rules[idx] as CSSStyleRule).selectorText
    )

    for (pointer = 0; pointer < collection.length; pointer++) {
      collection[pointer].style.cssText += (
        rules[idx] as CSSStyleRule
      ).style.cssText
    }
  }

  const convertedString = iframeDoc.firstChild['outerHTML']
  // Remove temporary iframe.
  iframe.parentNode.removeChild(iframe)

  return convertedString
}

export default CustomClipboard
