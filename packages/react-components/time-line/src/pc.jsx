
    import { renderless, api } from '@opentiny/vue-renderless/time-line/vue'
    import '@opentiny/vue-theme/time-line/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function timeLine(props) {
      const {vertical,horizontal,showNumber,nameField,timeField,start,data,space,active,reverse,showStatus,size,textPosition,showDivider,onlyNumber,lineWidth,shape} = props
      const defaultProps = {
        ...$props,
        ...props,
        vertical,horizontal,showNumber,nameField,timeField,start,data,space,active,reverse,showStatus,size,textPosition,showDivider,onlyNumber,lineWidth,shape
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,handleClick } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div  className={vc([
      'tiny-timeline tiny-steps',
      { 'is-horizontal': horizontal && !vertical, 'tiny-steps--mini': size === 'mini' }
    ])}>    
<div  className={vc([state.computedWrapperClass)}>      
<Slot  parent_children={props.children} slots={props.slots}>        

  {
    state.nodes.map((node, index)=>(
      <tinyTimeline  key={index} node={node} space={space} line-width={lineWidth} shape={shape} onClick={handleClick({ index, node })}>          
<template slot>            
<Slot name="active-node-desc" node={slotScoped.node} parent_children={props.children} slots={props.slots}></Slot>

          </template>

          
<template slot>            
<Slot name="top" slot-scope={slotScope} parent_children={props.children} slots={props.slots}></Slot>

          </template>

          
<template slot>            
<Slot name="bottom" slot-scope={slotScope} parent_children={props.children} slots={props.slots}></Slot>

          </template>

          
<template slot>            
<Slot name="left" slot-scope={slotScope} parent_children={props.children} slots={props.slots}></Slot>

          </template>

          
<template slot>            
<Slot name="right" slot-scope={slotScope} parent_children={props.children} slots={props.slots}></Slot>

          </template>

        </tinyTimeline>
    ))
  }
  

      </Slot>

    </div>

    
<div  style={{display:textPosition === 'right' && showDivider?'block':'none'}} className="tiny-steps__bottom-divider"></div>

  </div>


      );
    }
    