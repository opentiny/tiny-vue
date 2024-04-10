
    import { renderless, api } from '@opentiny/vue-renderless/button/vue'
    import '@opentiny/vue-theme/button/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function button(props) {
      const {type,text,size,icon,resetTime,nativeType,loading,disabled,plain,autofocus,round,circle,tabindex,href,customClass,banner} = props
      const defaultProps = {
        ...$props,
        ...props,
        type,text,size,icon,resetTime,nativeType,loading,disabled,plain,autofocus,round,circle,tabindex,href,customClass,banner
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
          
<button data-tag="tiny-button" onClick={handleClick} disabled={state.buttonDisabled || loading} autofocus={autofocus} type={nativeType} className={
      m(
        gcls('button'),
        gcls(banner ? 'button-banner' : 'button-base-width'),
        gcls(`size-${size || 'default'}`),
        gcls(
          `type-${type || 'default'}${icon ? '-icon' : state.plain ? '-plain' : ''}${
            state.buttonDisabled ? '-disabled' : ''
          }`
        ),
        gcls(round ? 'is-round' : 'no-round'),
        gcls(circle ? 'is-circle' : 'no-circle'),
        gcls({ 'is-border': circle || !(type === 'text' || icon) }),
        gcls({ 'button-link': href }),
        customClass
      )
    } tabindex={tabindex} a($attrs, ['class', 'style'], true)>
    
<iconLoading style={{display:loading?'block':'none'}} className={gcls('loading-svg')}>

</iconLoading>

    
<Component style={{display:icon && !loading?'block':'none'}} is={icon} className={vc([gcls('button-icon'), gcls(`button-icon-${state.buttonDisabled ? 'disabled' : 'default'}`)])}>

</Component>

    
<Slot  parent_children={props.children} slots={props.slots}>
      
<span >
{text}
</span>

    
</Slot>

  
</button>


      );
    }
    