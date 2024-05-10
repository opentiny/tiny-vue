
    import { renderless, api } from '@opentiny/vue-renderless/dynamic-scroller/vue'
    import '@opentiny/vue-theme/dynamic-scroller/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function dynamicScroller(props) {
      const {items,keyField,direction,listTag,itemTag,minItemSize} = props
      const defaultProps = {
        ...$props,
        ...props,
        items,keyField,direction,listTag,itemTag,minItemSize
      }
      const { ref, current: vm, parent } = useVm()
      const scroller=useRef()
      const { state,onScrollerResize,onScrollerVisible } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[scroller]
      })
      return (
          
<tinyRecycle ref={scroller} v-ref="scroller"  items={state.itemsWithSize} min-item-size={minItemSize} direction={direction} key-field={keyField} list-tag={listTag} item-tag={itemTag} $attrs onResize={onScrollerResize} onVisible={onScrollerVisible} className="tiny-dynamic-scroller">    
<template slot>      
<Slot { item: itemWithSize.item, index, active, itemWithSize } parent_children={props.children} slots={props.slots}></Slot>

    </template>

    
<template slot>      
<Slot name="before" parent_children={props.children} slots={props.slots}></Slot>

    </template>

    
<template slot>      
<Slot name="after" parent_children={props.children} slots={props.slots}></Slot>

    </template>

    
<template slot>      
<Slot name="empty" parent_children={props.children} slots={props.slots}></Slot>

    </template>

  </tinyRecycle>


      );
    }
    