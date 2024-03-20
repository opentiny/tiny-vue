import { useSetup, useVm, $props, vc, If } from '@opentiny/react-common'
import { renderless, api } from '@opentiny/vue-renderless/qr-code/vue'
import '@opentiny/vue-theme/qr-code/index.less'
import { useRef } from 'react'
import Qrcode from 'qrcode'

export default function QrCode(props) {
  const { value, level = 'Medium', size = 200, color, bordered = true, icon, iconSize = 50 } = props
  const defaultProps = {
    ...$props,
    ...props,
    value,
    level,
    size,
    color,
    bordered,
    icon,
    iconSize
  }
  const qrcodeRef = useRef()
  const { ref, parent, current: vm } = useVm()
  const { state } = useSetup({
    props: defaultProps,
    renderless,
    api,
    vm,
    parent,
    doms: [qrcodeRef],
    extendOptions: { QRCode: Qrcode }
  })
  return (
    <div
      ref={ref}
      v-ref="wrapperRef"
      className={vc([bordered ? 'border' : '', 'tiny-qr-code-container'])}
      style={{ width: state.sizeStr, height: state.sizeStr }}>
      <canvas ref={qrcodeRef} v-ref="qrcodeRef"></canvas>
      <If v-if={icon}>
        <div className="mask mask-icon">
          <img
            src={icon}
            style={{ width: state.iconSizeStr, height: state.iconSizeStr, background: state.iconBackgroudColor }}
            className="icon"
          />
        </div>
      </If>
    </div>
  )
}
