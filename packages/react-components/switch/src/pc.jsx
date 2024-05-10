
    import { renderless, api } from '@opentiny/vue-renderless/switch/vue'
    import '@opentiny/vue-theme/switch/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function switch(props) {
      const {modelValue,trueValue,falseValue,disabled,mini,tabindex,showText,beforeChange,displayOnly} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,trueValue,falseValue,disabled,mini,tabindex,showText,beforeChange,displayOnly
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,toggle } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<span style={{display:!state.isDisplayOnly?'block':'none'}}  tabindex={tabindex} onClick={toggle} onKeydown={toggle} onKeydown={toggle} className={vc([state.wrapClasses, state.showText ? 'tiny-switch__text' : ''])}>    
<span  className={vc([state.innerClasses)}>      
<div style={{display:!mini && state.showText?'block':'none'}}>        
<Slot style={{display:state.currentValue === trueValue?'block':'none'}} name="open" parent_children={props.children} slots={props.slots}>ON</Slot>

        
<Slot style={{display:state.currentValue === falseValue?'block':'none'}} name="close" parent_children={props.children} slots={props.slots}>OFF</Slot>

      </div>

    </span>

  </span>

  
<span style={{display:!(state.currentValue === falseValue)?'block':'none'}}>    
<Slot style={{display:state.currentValue === trueValue?'block':'none'}} name="open" parent_children={props.children} slots={props.slots}>{t('yes')}</Slot>

    
<Slot style={{display:state.currentValue === falseValue?'block':'none'}} name="close" parent_children={props.children} slots={props.slots}>{t('no')}</Slot></span>


      );
    }
    