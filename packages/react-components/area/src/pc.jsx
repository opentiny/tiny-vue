
    import { renderless, api } from '@opentiny/vue-renderless/area/vue'
    import '@opentiny/vue-theme/area/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function area(props) {
      const {modelValue,placeholder,size,disabled,default,fetchJcr,fetchRegion,fetchRep,fetchOffice,popperClass,popperAppendToBody} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,placeholder,size,disabled,default,fetchJcr,fetchRegion,fetchRep,fetchOffice,popperClass,popperAppendToBody
      }
      const { ref, current: vm, parent } = useVm()
      const refInstance=useRef()
      const { state,getRegion,getRep,getOffice,changeOffice } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[refInstance]
      })
      return (
          
<div  className="tiny-area">    
<tinySelect popper-class={'tiny-area-jcr' + (popperClass ? ' ' + popperClass : '')} popper-append-to-body={popperAppendToBody} size={size} value={state.jcr} onChange={(e)=>state.jcr = e.value} placeholder={placeholder} onChange={getRegion} disabled={disabled} ref={refInstance} v-ref="refInstance" a($attrs, ['^on[A-Z]']) onClear={$emit('clear')} onVisible={$emit('visible-change', $event)}>      

  {
    state.jcrData.map(item=>(
      <tinyOption  key={item[props.value]} label={item[props.label]} value={item[props.value]}>      </tinyOption>
    ))
  }
  

    </tinySelect>

    
<tinySelect popper-class={'tiny-area-region' + (popperClass ? ' ' + popperClass : '')} popper-append-to-body={popperAppendToBody} size={size} value={state.region} onChange={(e)=>state.region = e.value} placeholder={placeholder} onChange={getRep} disabled={disabled} a($attrs, ['^on[A-Z]']) onClear={$emit('clear')} onVisible={$emit('visible-change', $event)}>      

  {
    state.regionData.map(item=>(
      <tinyOption  key={item[props.value]} label={item[props.label]} value={item[props.value]}>      </tinyOption>
    ))
  }
  

    </tinySelect>

    
<tinySelect popper-class={'tiny-area-rep' + (popperClass ? ' ' + popperClass : '')} popper-append-to-body={popperAppendToBody} size={size} value={state.rep} onChange={(e)=>state.rep = e.value} placeholder={placeholder} onChange={getOffice} disabled={disabled} a($attrs, ['^on[A-Z]']) onClear={$emit('clear')} onVisible={$emit('visible-change', $event)}>      

  {
    state.repData.map(item=>(
      <tinyOption  key={item[props.value]} label={item[props.label]} value={item[props.value]}>      </tinyOption>
    ))
  }
  

    </tinySelect>

    
<tinySelect popper-class={'tiny-area-office' + (popperClass ? ' ' + popperClass : '')} popper-append-to-body={popperAppendToBody} size={size} value={state.office} onChange={(e)=>state.office = e.value} placeholder={placeholder} disabled={disabled} onChange={changeOffice} a($attrs, ['^on[A-Z]']) onClear={$emit('clear')} onVisible={$emit('visible-change', $event)}>      

  {
    state.officeData.map(item=>(
      <tinyOption  key={item[props.value]} label={item[props.label]} value={item[props.value]}>      </tinyOption>
    ))
  }
  

    </tinySelect>

  </div>


      );
    }
    