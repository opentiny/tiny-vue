
    import { renderless, api } from '@opentiny/vue-renderless/float-button/vue'
    import '@opentiny/vue-theme/float-button/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function floatButton(props) {
      const {type,open,description,size,icon,resetTime,tooltip,loading,disabled,href,target,top,bottom,right,left,trigger,shape,backTop,visibilityHeight,element} = props
      const defaultProps = {
        ...$props,
        ...props,
        type,open,description,size,icon,resetTime,tooltip,loading,disabled,href,target,top,bottom,right,left,trigger,shape,backTop,visibilityHeight,element
      }
      const { ref, current: vm, parent } = useVm()
      const tinyFloatButton=useRef()
const tinyFloatButtonOpen=useRef()
      const { state,handleClick } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[tinyFloatButton,tinyFloatButtonOpen]
      })
      return (
          
<button style={{display:state.show?'block':'none'}} ref={tinyFloatButton} v-ref="tinyFloatButton"  onClick={handleClick}  style={{ top, bottom, right, left }} className={vc([
      type ? 'tiny-float-button--' + type : '',
      size ? 'tiny-float-button--' + size : '',
      {
        'is-disabled': state.buttonDisabled,
        'is-loading': loading,
        'is-icon': icon && !loading && (description || slots.default),
        'is-only-icon': icon && !loading && !(description || slots.default),
        'is-circle': shape === 'circle',
        'is-square': shape === 'square'
      }
    ],'tiny-float-button')}>    
<iconLoading style={{display:loading?'block':'none'}}  className="tiny-icon-loading tiny-svg-size"></iconLoading>

    
<Component style={{display:icon && !loading && !state.open?'block':'none'}} is={icon}  className={vc({ 'is-text': description || slots.default })}></Component>

    
<iconClose style={{display:!loading && state.open?'block':'none'}}></iconClose>

    
<div style={{display:description && !state.open?'block':'none'}}>{description}</div>

    
<div ref={tinyFloatButtonOpen} v-ref="tinyFloatButtonOpen"  style={{display:state.open?'block':'none'}} className="tiny-float-button--open">      
<Slot  parent_children={props.children} slots={props.slots}> </Slot>

    </div>

  </button>


      );
    }
    