
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
          
<div   className={vc({ 'is-active': state.isActive, 'is-disabled': disabled },'tiny-collapse-item')}>    
<div role="tab" aria-expanded={state.isActive} aria-controls={`tiny-collapse-content-${state.id}`} aria-describedby={`tiny-collapse-content-${state.id}`}>      
<div  role="button" id={`tiny-collapse-head-${state.id}`} tabindex={disabled ? undefined : 0} onKeyup={handleEnterClick}  onFocus={handleFocus} onBlur={state.focusing = false} onClick={handleHeaderClick} className={vc({
          focusing: state.focusing,
          'is-active': state.isActive
        },'tiny-collapse-item__header')}>        
<div  onClick={handleHeaderClick} className="tiny-collapse-item__arrow">          
<Slot name="icon" parent_children={props.children} slots={props.slots}>            
<iconChevron   className={vc({ 'is-active': state.isActive },'tiny-svg-size')}></iconChevron>

          </Slot>

        </div>

        
<div  onClick={handleHeaderClick} className="tiny-collapse-item__word-overflow">          
<Slot name="title" parent_children={props.children} slots={props.slots}>{title}</Slot>

        </div>

        
<div  className="tiny-collapse-item__title__right">          
<Slot name="title-right" parent_children={props.children} slots={props.slots}>{titleRight}</Slot>

        </div>

      </div>

      
<collapseTransition >        
<div style={{display:state.isActive?'block':'none'}}  role="tabpanel" aria-hidden={!state.isActive} aria-labelledby={`tiny-collapse-head-${state.id}`} id={`tiny-collapse-content-${state.id}`} className="tiny-collapse-item__wrap">          
<div  className="tiny-collapse-item__content">            
<Slot  parent_children={props.children} slots={props.slots}></Slot>

          </div>

        </div>

      </collapseTransition>

    </div>

  </div>


      );
    }
    