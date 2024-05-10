
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
          
<div ref={tagGroup} v-ref="tagGroup" data-tag="tiny-tag-group"  className="overflow-hidden relative pr-8">    

  {
    data.map((item, i)=>(
      <tinyTag  key={item.name + i} size={size} type={item.type || 'info'} effect={effect} onClick={handelItemClick(item, i, $event)}>{item.name}</tinyTag>
    ))
  }
  

    
<tinyPopover placement="top-start" trigger="hover"  className="absolute top-0 right-0">      
<div data-tag="tiny-tag-group-popover">        

  {
    state.hiddenTags.map((tag, i)=>(
      <tinyTag  key={tag.name + i} size={size} type={tag.type || 'info'} customClass="mb-2" onClick={handelItemClick(tag, data.length - state.hiddenTags.length + i, $event)}>{tag.name}</tinyTag>
    ))
  }
  

      </div>

      
<template slot>        
<div   className={vc([state.showMore ? 'block' : 'invisible'],'absolute top-0 right-0 pointer-events-none sm:pointer-events-auto')}>          
<tinyTag ref={more} v-ref="more" size={size} type="info" customClass="px-1.5 mr-0"><iconEllipsis  className="fill-color-icon-secondary"></iconEllipsis></tinyTag>

        </div>

      </template>

    </tinyPopover>

  </div>


      );
    }
    