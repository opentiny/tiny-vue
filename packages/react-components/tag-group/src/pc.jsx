
    import { renderless, api } from '@opentiny/vue-renderless/tag-group/vue'
    import '@opentiny/vue-theme/tag-group/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function tagGroup(props) {
      const {size,data,effect} = props
      const defaultProps = {
        ...$props,
        ...props,
        size,data,effect
      }
      const { ref, current: vm, parent } = useVm()
      const tagGroup=useRef()
const more=useRef()
      const { state,handelItemClick } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[tagGroup,more]
      })
      return (
          
<div ref={tagGroup} v-ref="tagGroup"  className="tiny-tag-group">    

  {
    data.map((item, i)=>(
      <tinyTag  key={item.name + i} size={size} type={item.type} style="margin-right: 8px; margin-bottom: 8px" effect={effect} onClick={handelItemClick(item, i, $event)}>{item.name}</tinyTag>
    ))
  }
  

    
<tinyPopover placement="top-start" trigger="hover" width="auto" style={{display:state.showMore?'block':'none'}}>      
<div >        

  {
    state.hiddenTags.map((tag, i)=>(
      <tinyTag  key={tag.name + i} size={size} type={tag.type} style="margin-right: 8px; margin-bottom: 8px" onClick={handelItemClick(tag, data.length - state.hiddenTags.length + i, $event)}>{tag.name}</tinyTag>
    ))
  }
  

      </div>

      
<template slot>        
<tinyTag ref={more} v-ref="more" size={size}  className="tiny-tag-group_icon">          
<iconEllipsis ></iconEllipsis>

        </tinyTag>

      </template>

    </tinyPopover>

  </div>


      );
    }
    