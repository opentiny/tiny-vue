
    import { renderless, api } from '@opentiny/vue-renderless/grid-toolbar/vue'
    import '@opentiny/vue-theme/grid-toolbar/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function gridToolbar(props) {
      const {data,setting} = props
      const defaultProps = {
        ...$props,
        ...props,
        data,setting
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,columnChange } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<tinySelect value={multivalue} onChange={(e)=>multivalue = e.value} onChange={columnChange} placeholder="请选择" placement="bottom-end" searchable={true} multiple>    
<template slot>      
<tinyIcon ></tinyIcon>

    </template>

    

  {
    columns.map(item=>(
      <tinyOption  key={item.property} disabled={item.disabled} label={item.title} value={item.property}>    </tinyOption>
    ))
  }
  

  </tinySelect>


      );
    }
    