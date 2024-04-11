
    import { renderless, api } from '@opentiny/vue-renderless/qr-code/vue'
    import '@opentiny/vue-theme/qr-code/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function qrCode(props) {
      const {value,level,size,color,bordered,icon,iconSize} = props
      const defaultProps = {
        ...$props,
        ...props,
        value,level,size,color,bordered,icon,iconSize
      }
      const { ref, current: vm, parent } = useVm()
      const wrapperRef=useRef()
const qrcodeRef=useRef()
      const { state, } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[wrapperRef,qrcodeRef]
      })
      return (
          
<div ref={wrapperRef} v-ref="wrapperRef"   style={{ width: state.sizeStr, height: state.sizeStr }} className={vc([bordered ? 'border' : '','tiny-qr-code-container]')}>    
<canvas ref={qrcodeRef} v-ref="qrcodeRef"></canvas>

    
<div style={{display:icon?'block':'none'}}  className="mask mask-icon">      
<img src={icon} style={{ width: state.iconSizeStr, height: state.iconSizeStr, background: state.iconBackgroudColor }}  className="icon"></img>

    </div>

  </div>


      );
    }
    