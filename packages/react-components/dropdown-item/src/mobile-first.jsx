
    import { renderless, api } from '@opentiny/vue-renderless/dropdown-item/vue'
    import '@opentiny/vue-theme/dropdown-item/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function dropdownItem(props) {
      const {disabled,icon,itemData,selected,label,level,currentIndex} = props
      const defaultProps = {
        ...$props,
        ...props,
        disabled,icon,itemData,selected,label,level,currentIndex
      }
      const { ref, current: vm, parent } = useVm()
      const level=useRef()
      const { state,mouseEnter,mouseLeave,handleClick } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[level]
      })
      return (
          
<li data-tag="tiny-dropdown-item" onMouseenter={mouseEnter} onMouseleave={mouseLeave}  onClick={handleClick} aria-disabled={disabled} tabindex={disabled ? null : -1} className={vc([
      m(
        'rounded-sm list-none leading-10 sm:leading-8 outline-0 min-w-[theme(spacing.18)] max-w-[theme(spacing.52)] w-full [&_svg]:sm:w-3.5 [&_svg]:sm:h-3.5 [&_svg]:sm:mr-1.5 [&_svg]:mr-2 [&_svg]:align-text-bottom',
        disabled
          ? 'cursor-not-allowed text-color-text-disabled [&_svg]:fill-color-text-disabled'
          : 'text-color-text-primary active:bg-color-bg-4 visited:text-color-brand hover:bg-color-bg-2 focus:bg-color-bg-4 cursor-pointer',
        {
          'text-color-brand-focus bg-color-fill-6': dataStore.checkedStatus && selected
        },
        dataStore.multiStage ? '!px-0 mb-1' : '[&:not(:last-of-type)]:mb-1'
      )
    )}>    
<div data-tag="tiny-dropdown-level" ref={level} v-ref="level"  className={vc([
        'sm:text-xs text-sm',
        level === '2'
          ? 'mx-6 overflow-hidden text-ellipsis whitespace-nowrap'
          : 'mx-4 sm:mx-3 overflow-hidden text-ellipsis whitespace-nowrap'
      ])}>      
<Component style={{display:icon?'block':'none'}} is={icon}  className="sm:w-3.5 sm:h-3.5 sm:mr-1.5 mr-2 align-text-bottom"></Component>

      
<Slot  parent_children={props.children} slots={props.slots}></Slot>

    </div>

  </li>


      );
    }
    