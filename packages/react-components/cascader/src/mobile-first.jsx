
    import { renderless, api } from '@opentiny/vue-renderless/cascader/vue'
    import '@opentiny/vue-theme/cascader/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function cascader(props) {
      const {modelValue,options,props,size,placeholder,disabled,clearable,filterable,filterMethod,separator,showAllLevels,collapseTags,debounce,beforeFilter,popperClass,placement,popperOptions,visibleArrow,offset,boundariesPadding,arrowOffset,popperAppendToBody,autoSize,displayOnly,shape,label,tip,hoverExpand,title,showHeader,levelTitle} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,options,props,size,placeholder,disabled,clearable,filterable,filterMethod,separator,showAllLevels,collapseTags,debounce,beforeFilter,popperClass,placement,popperOptions,visibleArrow,offset,boundariesPadding,arrowOffset,popperAppendToBody,autoSize,displayOnly,shape,label,tip,hoverExpand,title,showHeader,levelTitle
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,updateValue,updateText } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<tinyPc style={{display:bp !== 'default'?'block':'none'}} $props onUpdate:modelValue={updateValue}> </tinyPc>


  
<div style={{display:!(bp !== 'default')?'block':'none'}}>    
<tinyInput tiny_mode="mobile-first" onClick={visible = true} model-value={showText} disabled={disabled} placeholder={placeholder} readonly>      
<template slot>        
<div >          
<iconChevron  custom-class="w-5 h-5" className={vc([
              visible ? 'fill-color-brand' : '',
              disabled ? 'fill-color-icon-placeholder sm:fill-color-icon-secondary' : 'fill-color-icon-secondary'
            ])}></iconChevron>

        </div>

      </template>

    </tinyInput>

    
<tinyCascader model-value={modelValue} onUpdate:modelValue={updateValue} onClose={visible = false} onUpdate:text={updateText} visible={visible} computedMobileProp></tinyCascader>

  </div>


      );
    }
    