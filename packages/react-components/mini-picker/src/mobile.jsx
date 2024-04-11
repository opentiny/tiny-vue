
    import { renderless, api } from '@opentiny/vue-renderless/mini-picker/vue'
    import '@opentiny/vue-theme/mini-picker/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function miniPicker(props) {
      const {} = props
      const defaultProps = {
        ...$props,
        ...props,
        
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,visibleHandle,cancel,confirm,change } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div  style={{display:visible?'block':'none'}} onClick={visibleHandle} className="tiny-mobile-mini-picker">    
<div  className="tiny-mobile-mini-picker__mask"></div>

    
<div  className={vc(['tiny-mobile-mini-picker__content', state.toggle ? 'is-toggle' : ''])}>      
<div  className="tiny-mobile-mini-picker__toolbar">        
<Slot name="toolbar" parent_children={props.children} slots={props.slots}>          
<div  onClick={cancel} className="picker_action picker_cancel">            
{cancelButtonText}

          </div>

          
<div  className="picker_action picker_title">{title}</div>

          
<div  onClick={confirm} className="picker_action picker_confirm">            
{confirmButtonText}

          </div>

        </Slot>

      </div>

      
<div  style={{ height: state.clumnsWrapHeight + 'px' }} className="tiny-mobile-mini-picker__columns">        

  {
    state.formattedColumns.map((item, index)=>(
      <pickerColumn columns-item={item}  ref={'childrenPicker' + index} key={index} default-index={item.defaultIndex || +state.defaultIndex} item-height={itemHeight} swipe-duration={swipeDuration} value-key={valueKey} onChange={change(index)} visible-item-count={visibleItemCount}></pickerColumn>
    ))
  }
  

      </div>

    </div>

  </div>


      );
    }
    