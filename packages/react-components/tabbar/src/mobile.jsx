
    import { renderless, api } from '@opentiny/vue-renderless/tabbar/vue'
    import '@opentiny/vue-theme/tabbar/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function tabbar(props) {
      const {activeColor,border,fixed,inactiveColor,modelValue,placeholder,route,safeAreaInsetBottom,zIndex} = props
      const defaultProps = {
        ...$props,
        ...props,
        activeColor,border,fixed,inactiveColor,modelValue,placeholder,route,safeAreaInsetBottom,zIndex
      }
      const { ref, current: vm, parent } = useVm()
      const tabbar=useRef()
      const { state, } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[tabbar]
      })
      return (
          
<div  style={{ height: state.height }} className={vc({ 'tiny-mobile-tabbar-placeholder': placeholder })}>    
<div ref={tabbar} v-ref="tabbar"   className={vc([{ 'is-border': border }, { unfit: !state.fit, 'tiny-mobile-tabbar--fixed': fixed }],'tiny-mobile-tabbar')}>      
<Slot  parent_children={props.children} slots={props.slots}></Slot>

    </div>

  </div>


      );
    }
    