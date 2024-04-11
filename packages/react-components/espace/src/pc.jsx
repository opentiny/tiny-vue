
    import { renderless, api } from '@opentiny/vue-renderless/espace/vue'
    import '@opentiny/vue-theme/espace/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function espace(props) {
      const {data,isNewImMode} = props
      const defaultProps = {
        ...$props,
        ...props,
        data,isNewImMode
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,doUserAction } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div  className="tiny-espace">    

  {
    data.map((item, index)=>(
      <a  key={index} title={getUserTitle(item)} href={getUserHref(item)} onClick={doUserAction(item)}  className={vc([
        { 'item-talk': item.type === 'im' },
        { 'item-call': item.type === 'sip' },
        { 'item-email': item.type === 'mailto' }
      ])}>      
<Component is={item.icon}  className="tiny-svg-size"></Component>

    </a>
    ))
  }
  

  </div>


      );
    }
    