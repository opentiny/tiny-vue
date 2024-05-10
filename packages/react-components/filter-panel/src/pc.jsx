
    import { renderless, api } from '@opentiny/vue-renderless/filter-panel/vue'
    import '@opentiny/vue-theme/filter-panel/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function filterPanel(props) {
      const {label,value,tip,popperClass,clearable,disabled,placement,popperAppendToBody,blank} = props
      const defaultProps = {
        ...$props,
        ...props,
        label,value,tip,popperClass,clearable,disabled,placement,popperAppendToBody,blank
      }
      const { ref, current: vm, parent } = useVm()
      const popover=useRef()
const filterBox=useRef()
      const { state,popoverShow,popoverHide,togglePanel,handleClear } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[popover,filterBox]
      })
      return (
          
<div  className="tiny-filter-panel">    
<tinyPopover ref={popover} v-ref="popover" value={state.visible} onChange={(e)=>state.visible = e.value} placement={placement} visible-arrow={false} popper-class={popperClass + ' tiny-filter-panel__popover'} append-to-body={popperAppendToBody} trigger="manual" onShow={popoverShow} onHide={popoverHide}>      
<div >        
<Slot  parent_children={props.children} slots={props.slots}></Slot>

      </div>

      
<template slot>        
<div >          
<tinyFilter ref={filterBox} v-ref="filterBox" onClick={togglePanel} onHandle={handleClear} show-close={clearable} disabled={disabled} label={label} tip={tip} value={value} drop-down-visible={state.visible} blank={blank}></tinyFilter>

        </div>

      </template>

    </tinyPopover>

  </div>


      );
    }
    