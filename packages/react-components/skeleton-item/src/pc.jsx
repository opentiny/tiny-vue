
    import { renderless, api } from '@opentiny/vue-renderless/skeleton-item/vue'
    import '@opentiny/vue-theme/skeleton-item/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function skeletonItem(props) {
      const {modelValue,variant,size} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,variant,size
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state, } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div   className={vc([
      variant ? 'tiny-skeleton-item--' + variant : '',
      size && variant !== 'square' ? 'tiny-skeleton-item--' + size : '',
      state.isActive ? 'tiny-skeleton-item--active' : ''
    ],'tiny-skeleton-item')}>    
<iconRich style={{display:variant === 'image'?'block':'none'}}></iconRich>

  </div>


      );
    }
    