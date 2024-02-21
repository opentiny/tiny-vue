const SelfFontGap = 3

const getMarkSize = ({ props, ctx, state }) => {
  const { content } = props
  const { fontSize, fontFamily } = state.font

  let defaultWidth = 120
  let defaultHeight = 64
  if (!props.image && ctx.measureText) {
    ctx.font = `${Number(fontSize)}px ${fontFamily}`
    const contents = Array.isArray(content) ? content : [content]
    const widths = contents.map((item) => ctx.measureText(item!).width)
    defaultWidth = Math.ceil(Math.max(...widths))
    defaultHeight = Number(fontSize) * contents.length + (contents.length - 1) * SelfFontGap
  }
  return [Math.max(props.width, defaultWidth), Math.max(props.height, defaultHeight)]
}

const selfDrawText = ({ props, state, ctx, canvasWidth, canvasHeight, ratios }) => {
  const { rotate, content } = props
  const { fontSize, color, fontStyle, fontWeight, fontFamily } = state.font
  const devicePixelRatio = window.devicePixelRatio || 1
  const mergedFontSize = Number(fontSize) * devicePixelRatio
  const drawHeight = canvasHeight / devicePixelRatio

  ctx.font = `${fontStyle} normal ${fontWeight} ${mergedFontSize}px/${drawHeight}px ${fontFamily}`
  ctx.fillStyle = color
  ctx.textAlign = 'center'
  ctx.textBaseline = 'bottom'
  ratios.forEach((ratio) => {
    ctx.save()
    ctx.translate(canvasWidth / ratio, canvasHeight / ratio)
    ctx.rotate((Math.PI / 180) * rotate)
    const contents = Array.isArray(content) ? content : [content]
    const fontHeight = mergedFontSize + SelfFontGap * devicePixelRatio
    const startHeight = (canvasHeight - contents.length * fontHeight) / 2 - canvasHeight / 2
    contents?.forEach((item, index) => {
      ctx.fillText(item || '', 0, startHeight + (index + 1) * fontHeight)
    })
    ctx.restore()
  })
}

const imageLoad = (props, state, ctx: CanvasRenderingContext2D, result, canvas: HTMLCanvasElement): Promise<any> => {
  const { image, width, height, rotate, interlaced } = props
  const img = new Image()
  return new Promise((resolve) => {
    img.onload = () => {
      const ratios = interlaced ? [4, 4 / 3] : [2]
      ratios.forEach((ratio) => {
        ctx.save()
        ctx.translate(result.size.width / ratio, result.size.height / ratio)
        ctx.rotate((Math.PI / 180) * rotate)
        ctx.drawImage(img, -width / 2, -height / 2, width, height)
        ctx.restore()
      })

      resolve({
        base64: canvas.toDataURL(),
        ...result
      })
    }
    img.onerror = () => {
      const propsTmp = props.content
        ? props
        : {
            ...props,
            content: 'Invalid data'
          }
      if (interlaced) {
        selfDrawText({
          props,
          ctx,
          state,
          canvasWidth: result.size.width,
          canvasHeight: result.size.height,
          ratios: [4, 4 / 3]
        })
      } else {
        selfDrawText({
          props: propsTmp,
          ctx,
          state,
          canvasWidth: result.size.width,
          canvasHeight: result.size.height,
          ratios: [2]
        })
      }
      resolve({
        base64: canvas.toDataURL(),
        ...result
      })
    }
    img.crossOrigin = 'anonymous'
    img.referrerPolicy = 'no-referrer'
    img.src = image!
  })
}

export const useWatermarkBg = function (props, state) {
  const { gap, image, interlaced } = props
  const [gapX, gapY] = gap
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

  const devicePixelRatio = window.devicePixelRatio || 1
  const [markWidth, markHeight] = getMarkSize({ props, state, ctx })
  const singleWidth = (gapX + markWidth) * devicePixelRatio
  const singleHeight = (gapY + markHeight) * devicePixelRatio
  const canvasWidth = interlaced ? singleWidth * 2 : singleWidth
  const canvasHeight = interlaced ? singleHeight * 2 : singleHeight
  canvas.width = canvasWidth
  canvas.height = canvasHeight

  const result = {
    size: {
      width: canvasWidth,
      height: canvasHeight
    },
    styleSize: {
      width: canvasWidth / devicePixelRatio,
      height: canvasHeight / devicePixelRatio
    }
  }

  if (image) {
    return imageLoad(props, state, ctx, result, canvas)
  } else {
    if (interlaced) {
      selfDrawText({ props, state, ctx, canvasWidth, canvasHeight, ratios: [4, 4 / 3] })
    } else {
      selfDrawText({ props, state, ctx, canvasWidth, canvasHeight, ratios: [2] })
    }
  }

  return new Promise((resolve) =>
    resolve({
      base64: canvas.toDataURL(),
      ...result
    })
  )
}

export const updateWatermark = (watermarkBg, props) => {
  const { base64, styleSize } = watermarkBg
  const watermarkDiv = document.createElement('div')
  watermarkDiv.style.position = 'absolute'
  watermarkDiv.style.inset = '0'
  watermarkDiv.style.backgroundImage = `url(${base64})`
  watermarkDiv.style.backgroundSize = `${styleSize.width}px ${styleSize.height}px`
  watermarkDiv.style.backgroundRepeat = 'repeat'
  watermarkDiv.style.backgroundPosition = `${props.offset[0] || 20}px ${props?.offset[1] || 20}px`
  watermarkDiv.style.width = '100%'
  watermarkDiv.style.height = '100%'
  watermarkDiv.style.pointerEvents = 'none'
  watermarkDiv.style.zIndex = `${props.zIndex}`
  return watermarkDiv
}

async function createWatermark({ vm, state, props }) {
  const parentRef = vm.$refs.parentRef
  if (!parentRef) {
    return
  }
  const bgValue = await useWatermarkBg(props, state)
  if (state.watermarkDiv) {
    state.watermarkDiv.remove()
  }
  // 更新水印;
  state.watermarkDiv = updateWatermark(bgValue, props)
  parentRef.appendChild(state.watermarkDiv)
}

export const reRenderWatermark =
  ({ state }) =>
  () => {
    state.flag++
  }

export const mounted =
  ({ vm, state, props }) =>
  () => {
    createWatermark({ vm, state, props })
    state.observerInstance = new MutationObserver((records: Array<MutationRecord>) => {
      for (const record of records) {
        // 删除了水印
        for (const dom of Array.from(record.removedNodes)) {
          if (dom === state.watermarkDiv) {
            state.flag++
            return
          }
        }
        // 改动了属性
        if (record.type === 'attributes' && record.target === state.watermarkDiv) {
          state.flag++
          return
        }
      }
    })
    const parentRef = vm.$refs.parentRef
    if (parentRef) {
      state.observerInstance.observe(parentRef, {
        childList: true,
        attributes: true,
        subtree: true
      })
      if (props.customClass) {
        parentRef.classList.add(props.customClass)
      }
    }
  }

export const unmounted =
  ({ state }) =>
  () => {
    if (state.observerInstance) {
      state.observerInstance.disconnect()
    }
    state.watermarkDiv = null
  }

export const watchProps =
  ({ state, vm, props }) =>
  () =>
    createWatermark({ state, vm, props })
