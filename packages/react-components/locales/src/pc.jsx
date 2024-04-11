
    import { renderless, api } from '@opentiny/vue-renderless/locales/vue'
    import '@opentiny/vue-theme/locales/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function locales(props) {
      const {} = props
      const defaultProps = {
        ...$props,
        ...props,
        
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,switchLanguage } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div  className="tiny-locales">    
<span style={{display:state.locales.length === 1?'block':'none'}}>{state.text && t(state.text)}</span>

    
<span style={{display:!(state.locales.length === 1)?'block':'none'}} onClick={switchLanguage}>{state.text && t(state.text)}</span>

    
<tinyPopover style={{display:!(!(state.locales.length === 1))?'block':'none'}} trigger="hover" visible-arrow={false} onShow={state.visible = true} onHide={state.visible = false} placement="bottom-start" popper-class={'tiny-locales__popper' + (popperClass ? ' ' + popperClass : '')} append-to-body={popperAppendToBody}>      
<template slot>        
<span >{state.text && t(state.text)}
<span >            
<IconChevronDown style={{display:!state.visible?'block':'none'}}></IconChevronDown>

            
<IconChevronUp style={{display:state.visible?'block':'none'}}></IconChevronUp>
 </span></span>

      </template>

      
<div  className="poplist">        

  {
    state.locales.map(lang=>(
      <li  key={lang}  onClick={switchLanguage(lang)} className={vc({ selected: state.current === lang })}>          
{t(lang)}

        </li>
    ))
  }
  

      </div>

    </tinyPopover>

  </div>


      );
    }
    