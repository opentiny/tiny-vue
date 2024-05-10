
    import { renderless, api } from '@opentiny/vue-renderless/nav-bar/vue'
    import '@opentiny/vue-theme/nav-bar/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function navBar(props) {
      const {_renderless,title,subTitle,fixed,zIndex,leftText,rightText,leftArrow,rightArrow} = props
      const defaultProps = {
        ...$props,
        ...props,
        _renderless,title,subTitle,fixed,zIndex,leftText,rightText,leftArrow,rightArrow
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
        
      );
    }
    