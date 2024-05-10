
    import { renderless, api } from '@opentiny/vue-renderless/option/vue'
    import '@opentiny/vue-theme/option/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function option(props) {
      const {value,label,created,disabled,events,visible,highlightClass,required} = props
      const defaultProps = {
        ...$props,
        ...props,
        value,label,created,disabled,events,visible,highlightClass,required
      }
      const { ref, current: vm, parent } = useVm()
      const option=useRef()
      const { state,hoverItem,selectOptionClick, } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[option]
      })
      return (
          
<div ref={option} v-ref="option" onMouseenter={hoverItem} onClick={selectOptionClick} onMousedown={} data-index={state.index} style={{display:visible && state.visible?'block':'none'}}  data-tag="tiny-select-dropdown-item" className={vc([
      m(
        'h-fit flex items-center justify-between rounded text-color-text-primary text-sm sm:text-xs',
        'min-h-[40px] sm:min-h-[32px] cursor-pointer group sm:hover:bg-color-bg-4 sm:active:bg-color-bg-3 pl-0 pr-3 sm:px-3 my-1 sm:m-1',
        {
          'text-color-brand bg-color-bg-1 sm:bg-color-fill-6': state.itemSelected && !disabled,
          'text-color-text-disabled cursor-not-allowed [&_svg]:fill-color-icon-disabled [&_svg_path:first-of-type]:fill-color-bg-3':
            disabled || state.groupDisabled || state.limitReached,
          'bg-color-bg-1 sm:bg-color-bg-4': state.hover,
          'text-color-text-disabled cursor-not-allowed': required
        },
        highlightClass
      )
    )}>    
<span style={{display:state.select.multiple?'block':'none'}}  className="w-4 mr-2">      
<Component is={`icon-${state.selectCls}`}  className={vc([
          m('fill-color-icon-secondary relative', {
            'group-hover:fill-color-brand-hover': state.hover,
            'fill-color-brand': state.itemSelected,
            'fill-color-brand-disabled': state.itemSelected && required
          })
        )}></Component>

    </span>

    
<Slot  parent_children={props.children} slots={props.slots}>      
<span  className="inline-block flex-1 leading-5 overflow-hidden text-ellipsis whitespace-normal sm:whitespace-nowrap">{state.currentLabel}</span>

    </Slot>

    
<span style={{display:!state.select.multiple && state.itemSelected && !disabled && !state.groupDisabled?'block':'none'}}  className="inline-block sm:hidden w-4 ml-4 shrink-0">      
<iconFinish custom-class="w-4 h-4 fill-color-brand"> </iconFinish></span>

  </div>


      );
    }
    