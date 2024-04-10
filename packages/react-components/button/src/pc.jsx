
    import { renderless, api } from '@opentiny/vue-renderless/button/vue'
    import '@opentiny/vue-theme/button/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function button(props) {
      const {type,text,size,icon,resetTime,nativeType,loading,disabled,plain,autofocus,round,circle,tabindex,customClass,ghost} = props
      const defaultProps = {
        ...$props,
        ...props,
        type,text,size,icon,resetTime,nativeType,loading,disabled,plain,autofocus,round,circle,tabindex,customClass,ghost
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
          
<button className="tiny-button" onClick={handleClick} disabled={state.buttonDisabled || loading} autofocus={autofocus} type={nativeType} className={vc([
      type ? 'tiny-button--' + type : '',
      size ? 'tiny-button--' + size : '',
      {
        'is-disabled': state.buttonDisabled,
        'is-loading': loading,
        'is-plain': state.plain,
        'is-ghost': ghost,
        'is-round': round,
        'is-circle': circle,
        'is-icon': icon && !loading && (text || slots.default),
        'is-only-icon': icon && !loading && !(text || slots.default)
      }
    ])} tabindex={tabindex} a($attrs, ['class', 'style'], true)>
    
<iconLoading style={{display:loading?'block':'none'}} className="tiny-icon-loading tiny-svg-size">

</iconLoading>

    
<Component style={{display:icon && !loading?'block':'none'}} is={icon} className={vc({ 'is-text': text || slots.default })}>

</Component>

    
<Slot  parent_children={props.children} slots={props.slots}>
      
<span >
{text}
</span>

    
</Slot>

  
</button>


      );
    }
    