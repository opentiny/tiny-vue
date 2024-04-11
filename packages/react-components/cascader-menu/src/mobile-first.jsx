
    import { renderless, api } from '@opentiny/vue-renderless/cascader-menu/vue'
    import '@opentiny/vue-theme/cascader-menu/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function cascaderMenu(props) {
      const {} = props
      const defaultProps = {
        ...$props,
        ...props,
        
      }
      const { ref, current: vm, parent } = useVm()
      const cascaderMenu=useRef()
      const { state, } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[cascaderMenu]
      })
      return (
          
<tinyScrollbar data-tag="tiny-cascader-menu" id={state.menuId} role="menu" ref={cascaderMenu} v-ref="cascaderMenu"  tag="div" wrap-class="overflow-auto h-auto pb-1.5 max-h-[theme(spacing.72)]" view-class="relative min-h-full m-0  list-none box-border pb-1 " className={vc([m('min-w-[theme(spacing.54)] box-border text-color-text-primary pt-1'))}>    
<div style={{display:state.isEmpty?'block':'none'}} data-tag="tiny-cascader-menu__empty-text"  className="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 text-center text-color-text-placeholder">      
{t('ui.cascader.noData')}

    </div>

    
<template style={{display:!(state.isEmpty)?'block':'none'}}>      

  {
    nodes.map((node, nodeIndex)=>(
      <cascaderNode  tiny_mode="mobile-first" key={node.uid} node={node} node-id={`${state.menuId}-${nodeIndex}`} data-haspopup={node.hasChildren} data-owns={node.hasChildren ? state.menuId : null}></cascaderNode>
    ))
  }
  

    </template>

  </tinyScrollbar>


      );
    }
    