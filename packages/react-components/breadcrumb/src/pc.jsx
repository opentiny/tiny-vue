
    import { renderless, api } from '@opentiny/vue-renderless/breadcrumb/vue'
    import '@opentiny/vue-theme/breadcrumb/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function breadcrumb(props) {
      const {separator,separatorIcon,textField,options,size} = props
      const defaultProps = {
        ...$props,
        ...props,
        separator,separatorIcon,textField,options,size
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
          
<div  aria-label="Breadcrumb" role="navigation" className="tiny-breadcrumb">    
<Slot  parent_children={props.children} slots={props.slots}>      

  {
    options.map((item, index)=>(
      <tinyBreadcrumb  option={item} label={item[textField]} key={index} to={item.to} replace={item.replace}>      </tinyBreadcrumb>
    ))
  }
  

    </Slot>

  </div>


      );
    }
    