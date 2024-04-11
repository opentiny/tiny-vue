
    import { renderless, api } from '@opentiny/vue-renderless/popover/vue'
    import '@opentiny/vue-theme/popover/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function popover(props) {
      const {appendToBody,arrowOffset,boundariesPadding,closeDelay,disabled,modelValue,offset,openDelay,placement,popper,popperClass,popperOptions,reference,tabindex,title,transition,trigger,visibleArrow,width,maxHeight,listData} = props
      const defaultProps = {
        ...$props,
        ...props,
        appendToBody,arrowOffset,boundariesPadding,closeDelay,disabled,modelValue,offset,openDelay,placement,popper,popperClass,popperOptions,reference,tabindex,title,transition,trigger,visibleArrow,width,maxHeight,listData
      }
      const { ref, current: vm, parent } = useVm()
      const root=useRef()
const popper=useRef()
const wrapper=useRef()
      const { state,handleAfterEnter,handleAfterLeave,handleItemClick } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[root,popper,wrapper]
      })
      return (
          
<span ref={root} v-ref="root">    
<transition name={transition} onAfter={handleAfterEnter} onAfter={handleAfterLeave}>      
<div   ref={popper} v-ref="popper" style={{display:!disabled && state.showPopper?'block':'none'}} style={{
          width: width === 'auto' ? width : width + 'px',
          maxHeight: maxHeight === 'auto' ? maxHeight : maxHeight + 'px'
        }} role="tooltip" id={state.tooltipId} aria-hidden={disabled || !state.showPopper ? 'true' : 'false'} className={vc([popperClass, 'tiny-mobile-popover__plain', { 'no-arrow': !visibleArrow }],'tiny-mobile-popover tiny-mobile-popper')}>        
<div  style={{display:title?'block':'none'}} text className="tiny-mobile-popover__title"></div>

        
<Slot  parent_children={props.children} slots={props.slots}>          
<div  style={{ maxHeight: maxHeight === 'auto' ? maxHeight : maxHeight + 'px' }} className="list-content">            

  {
    listData.map((item, index)=>(
      <div  key={item.id}  onClick={handleItemClick(item)} className={vc(['list-view', item.subLabel ? 'list-view-height' : ''])}>              
<img src={item.icon}  className="icon"></img>

              
<div  className="label-view">                
<div  className="main">{item.label}</div>

                
<div style={{display:item.subLabel?'block':'none'}}  className="sub">{item.subLabel}</div>

              </div>

              
<div style={{display:index !== listData.length - 1?'block':'none'}}  className="line"></div>

            </div>
    ))
  }
  

          </div>

        </Slot>

      </div>

    </transition>

    
<span ref={wrapper} v-ref="wrapper"   className={vc({ 'reference-wrapper-show': !disabled && state.showPopper },'reference-wrapper')}>      
<Slot name="reference" parent_children={props.children} slots={props.slots}></Slot>

    </span>

  </span>


      );
    }
    