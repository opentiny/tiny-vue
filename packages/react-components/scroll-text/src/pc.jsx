
    import { renderless, api } from '@opentiny/vue-renderless/scroll-text/vue'
    import '@opentiny/vue-theme/scroll-text/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function scrollText(props) {
      const {text,time,styles,direction,hoverStop,widthAdapt} = props
      const defaultProps = {
        ...$props,
        ...props,
        text,time,styles,direction,hoverStop,widthAdapt
      }
      const { ref, current: vm, parent } = useVm()
      const wrap=useRef()
const content=useRef()
      const { state,stopAnimation,startAnimation } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[wrap,content]
      })
      return (
          
<div  className="tiny-scroll-text__wrapper">    
<div ref={wrap} v-ref="wrap"  onMouseenter={stopAnimation} onMouseleave={startAnimation} className={vc(['tiny-scroll-text', { 'width-adapt': widthAdapt }])}>      
<div ref={content} v-ref="content"  className="tiny-scroll-text__content">        
<div  style={state.bindStyle} className={vc([{ stop: state.isStop }, direction])}>          
<Slot  parent_children={props.children} slots={props.slots}>            
<p >{text}</p>

          </Slot>

        </div>

      </div>

    </div>

  </div>


      );
    }
    