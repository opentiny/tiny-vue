
    import { renderless, api } from '@opentiny/vue-renderless/button/vue'
    import '@opentiny/vue-theme/button/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function button(props) {
      const {type,text,size,icon,resetTime,nativeType,loading,disabled,customClass} = props
      const defaultProps = {
        ...$props,
        ...props,
        type,text,size,icon,resetTime,nativeType,loading,disabled,customClass
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,handleClick } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<button className="tiny-mobile-button" onClick={handleClick} disabled={state.buttonDisabled || loading} type={nativeType} className={vc([
      type ? 'tiny-mobile-button--' + type : '',
      size ? 'tiny-mobile-button--' + size : '',
      {
        'is-disabled': state.buttonDisabled,
        'is-loading': loading
      }
    ])} a($attrs, ['class', 'style'], true)>
    
<template style={{display:loading?'block':'none'}}>
      
<div className={vc([
          'tiny-mobile-button-loading',
          'tiny-mobile-button-loading-' + (type === 'primary' ? 'white' : 'black')
        ])}>
        
<div className="tiny-mobile-button-loading-inner">

</div>

      
</div>

    
</template>

    
<Component style={{display:icon && !loading?'block':'none'}} is={icon} className={vc(['tiny-icon', 'is-icon', text ? 'small' : null])}>

</Component>


    
<Slot  parent_children={props.children} slots={props.slots}>
      
<span style={{ marginLeft: text && (icon || loading) ? '4px' : 0 }}>
{text}
</span>

    
</Slot>

  
</button>


      );
    }
    