
    import { renderless, api } from '@opentiny/vue-renderless/recycle-scroller/vue'
    import '@opentiny/vue-theme/recycle-scroller/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function recycleScroller(props) {
      const {items,keyField,direction,listTag,itemTag,itemSize,gridItems,itemSecondarySize,minItemSize,sizeField,typeField,buffer,pageMode,prerender,emitUpdate,updateInterval,skipHover,listClass,itemClass,itemsLimit} = props
      const defaultProps = {
        ...$props,
        ...props,
        items,keyField,direction,listTag,itemTag,itemSize,gridItems,itemSecondarySize,minItemSize,sizeField,typeField,buffer,pageMode,prerender,emitUpdate,updateInterval,skipHover,listClass,itemClass,itemsLimit
      }
      const { ref, current: vm, parent } = useVm()
      const before=useRef()
const wrapper=useRef()
const after=useRef()
      const { state,handleScroll,computeViewEvent } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[before,wrapper,after]
      })
      return (
          
<div observe-visibility   onScroll={handleScroll} className={vc({
      ready: state.ready,
      'page-mode': pageMode,
      [`direction-${direction}`]: true
    },'tiny-recycle-scroller')}>    
<div style={{display:slots.before?'block':'none'}} ref={before} v-ref="before"  className="tiny-recycle-scroller__slot">      
<Slot name="before" parent_children={props.children} slots={props.slots}></Slot>

    </div>


    
<Component is={listTag} ref={wrapper} v-ref="wrapper" style={{
        [direction === 'vertical' ? 'minHeight' : 'minWidth']: state.totalSize + 'px'
      }}   className={vc([listClass,'tiny-recycle-scroller__item-wrapper]')}>      

  {
    undefined.map(view of state.pool=>(
      <Component is={itemTag}  key={view.nr.id} style={computeViewStyle(view)}   {...computeViewEvent(view)} className={vc([
          itemClass,
          {
            hover: !skipHover && state.hoverKey === view.nr.key
          }
        ],'tiny-recycle-scroller__item-view')}>        
<Slot item={view.item} index={view.nr.index} active={view.nr.used} parent_children={props.children} slots={props.slots}></Slot>

      </Component>
    ))
  }
  


      
<Slot name="empty" parent_children={props.children} slots={props.slots}></Slot>

    </Component>


    
<div style={{display:slots.after?'block':'none'}} ref={after} v-ref="after"  className="tiny-recycle-scroller__slot">      
<Slot name="after" parent_children={props.children} slots={props.slots}></Slot>

    </div>

  </div>


      );
    }
    