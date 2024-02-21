export const change = (emit) => () => {
  emit('change')
}

export function getSizeStr({ props, state }) {
  state.sizeStr = `${props.size}px`
  // icon 覆盖面积不能超过 30%， 否则影响扫码
  const maxIconSize = props.size * 0.3
  if (props.iconSize > maxIconSize) {
    state.iconSizeStr = `${maxIconSize}px`
  } else {
    state.iconSizeStr = `${props.iconSize}px`
  }
}

export function getQrCodeCanvas({ props, vm, QRCode }) {
  const container = vm.$refs.wrapperRef
  const qrcodeRef = vm.$refs.qrcodeRef

  const defaultPadding = container?.style.padding || '12px'

  const errorCorrectionLevel = (props.level && props.level[0]) || 'M'

  const qrCodeData = {
    errorCorrectionLevel,
    type: 'image/png',
    width: props.size - getCssLength(defaultPadding) * 2,
    margin: 0,
    small: true,
    color: {
      dark: props.color,
      light: '#ffffff00' // 背景设为透明改用外框设定背景色
    }
  }
  QRCode.toCanvas(qrcodeRef, props.value, qrCodeData)
}

export function setIconBackground({ vm, state }) {
  const container = vm.$refs.wrapperRef
  if (container?.style.backgroundColor) {
    state.iconBackgroudColor = container?.style.backgroundColor
  }
}

export function getCssLength(style: string) {
  return style ? Number(style.replace('px', '')) : 0
}

export const draw =
  ({ props, state, vm, QRCode }) =>
  () => {
    getSizeStr({ props, state }) // 计算宽度
    getQrCodeCanvas({ props, vm, QRCode }) // 绘制二维码
    setIconBackground({ vm, state }) // 设置icon背景色与当前二维码背景色一致
  }
