
    import { renderless, api } from '@opentiny/vue-renderless/collapse-item/vue'
    import '@opentiny/vue-theme/collapse-item/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function collapseItem(props) {
      const {title,titleRight,name,disabled} = props
      const defaultProps = {
        ...$props,
        ...props,
        title,titleRight,name,disabled
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,handleEnterClick,handleFocus,handleHeaderClick } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div data-tag="tiny-collapse-item"  className="border-b-0.5 sm:border-b border-solid border-color-border-disabled last:border-0">    
<div role="tab" data-tag="tiny-collapse-item-tab" aria-expanded={state.isActive} aria-controls={`tiny-collapse-content-${state.id}`} aria-describedby={`tiny-collapse-content-${state.id}`}>      
<div data-tag="tiny-collapse-item-body"  id={`tiny-collapse-head-${state.id}`} tabindex={disabled ? undefined : 0} onKeyup={handleEnterClick}  onFocus={handleFocus} onBlur={state.focusing = false} className={vc([
          disabled
            ? 'text-color-text-disabled'
            : 'text-color-text-primary sm:[&:has(.peer:hover)_[role=title]]:text-color-brand'
        ,'flex relative items-center h-12 sm:h-10 py-0 sm:pr-0 pl-4 pr-10 text-sm font-bold justify-between whitespace-nowrap]')}>        
<div data-tag="tiny-collapse-item-title"   role="title" onClick={handleHeaderClick} className={vc([disabled ? 'cursor-not-allowed' : 'cursor-pointer sm:hover:text-color-brand'],'whitespace-nowrap overflow-hidden overflow-ellipsis inline-block peer')}>          
<Slot name="title" parent_children={props.children} slots={props.slots}> 
{title}</Slot>

        </div>

        
<div data-tag="tiny-collapse-item-titleright"  className="text-xs font-normal">          
<Slot name="title-right" parent_children={props.children} slots={props.slots}>{titleRight}</Slot>

        </div>

        
<div data-tag="tiny-collapse-item-icon"   onClick={handleHeaderClick} className={vc([
            disabled
              ? 'fill-color-text-disabled  cursor-not-allowed'
              : 'fill-color-icon-secondary cursor-pointer sm:peer-hover:fill-color-brand sm:hover:fill-color-brand'
          ],'absolute sm:left-0 right-3.5 text-xs mr-1 w-3 peer')}>          
<Slot name="icon" active={state.isActive} disabled={disabled} parent_children={props.children} slots={props.slots}>            
<iconArrow custom-class="w-2.5 h-2.5 sm:w-3 sm:h-3 transition-transform duration-300"  className={vc([state.isActive ? 'sm:rotate-0 rotate-180' : 'sm:-rotate-90 rotate-0'])}></iconArrow>

          </Slot>

        </div>

      </div>

    </div>

    
<collapseTransition >      
<div data-tag="tiny-collapse-item-active" style={{display:state.isActive?'block':'none'}}  role="tabpanel" aria-hidden={!state.isActive} aria-labelledby={`tiny-collapse-head-${state.id}`} id={`tiny-collapse-content-${state.id}`} className="will-change-[height] bg-color-bg-1 overflow-hidden box-border">        
<div  className="pb-6 pt-0 px-4 sm:pt-0 sm:pr-0 sm:pl-4 sm:pb-4 text-xs text-color-text-primary leading-relaxed">          
<Slot  parent_children={props.children} slots={props.slots}></Slot>

        </div>

      </div>

    </collapseTransition>

  </div>


      );
    }
    