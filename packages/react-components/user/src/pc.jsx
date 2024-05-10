
    import { renderless, api } from '@opentiny/vue-renderless/user/vue'
    import '@opentiny/vue-theme/user/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function user(props) {
      const {modelValue,multiple,size,displayOnly,disabled,sortable,valueSplit,textSplit,valueField,textField,collapseTags,showOverflowTooltip,placeholder,cache,delay,suggestLength,cacheFields,cacheKey,UserCache,fetchW3Accounts,fetchUserByUserId,fetchSuggestUser,sortByFetchData,popperClass,popperAppendToBody,tabindex,tagSelectable,copyable,batch,allowCopy,noDataText,loadingText,autoClose,queryDebounce,hideSelected,ignoreEnter,showTips,maxWidth,keepFocus,changeCompat,multiLineDrag} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,multiple,size,displayOnly,disabled,sortable,valueSplit,textSplit,valueField,textField,collapseTags,showOverflowTooltip,placeholder,cache,delay,suggestLength,cacheFields,cacheKey,UserCache,fetchW3Accounts,fetchUserByUserId,fetchSuggestUser,sortByFetchData,popperClass,popperAppendToBody,tabindex,tagSelectable,copyable,batch,allowCopy,noDataText,loadingText,autoClose,queryDebounce,hideSelected,ignoreEnter,showTips,maxWidth,keepFocus,changeCompat,multiLineDrag
      }
      const { ref, current: vm, parent } = useVm()
      const select=useRef()
      const { state,useSortable,handleBlur,userChange,visibleChange } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[select]
      })
      return (
          
<div  onMouseover={useSortable}  className={vc([multiLineDrag ? 'draggableClass' : '','tiny-user]')}>    
<tinySelect ref={select} v-ref="select" popper-class={'tiny-user' + (popperClass ? ' ' + popperClass : '')} popper-append-to-body={popperAppendToBody} onBlur={handleBlur} onFocus={$emit('focus', $event)}  value={state.user} onChange={(e)=>state.user = e.value} a($attrs, ['^on[A-Z]']) display-only={displayOnly} disabled={disabled} show-overflow-tooltip={showOverflowTooltip} hide-drop={!state.visible} size={size} placeholder={placeholder} collapse-tags={collapseTags} multiple={multiple} onChange={userChange} loading={state.loading} filterable clearable remote remote-method={searchMethod} onVisible={visibleChange} onClear={$parent.$emit('clear')} tabindex={tabindex} tag-selectable={tagSelectable} copyable={copyable} allow-copy={allowCopy} text-split={textSplit} loading-text={loadingText} no-data-text={noDataText} auto-close={autoClose} query-debounce={queryDebounce} ignore-enter={ignoreEnter} show-tips={showTips} keep-focus={keepFocus} className="tiny-user__select">      
<template slot>        
<div >          
<iconGroup style={{display:multiple?'block':'none'}}  className="tiny-svg-size"></iconGroup>

          
<iconUser style={{display:!(multiple)?'block':'none'}}  className="tiny-svg-size"></iconUser>

        </div>

      </template>

      
<template style={{display:slots.label?'block':'none'}} slot>        
<Slot name="label" user={item} parent_children={props.children} slots={props.slots}></Slot>

      </template>

      

  {
    filter().map(option=>(
      <tinyOption  title={option.userCN + (option.dept ? ' ' + option.dept : '')}  visible={option._show} key={option[state.valueField]} label={option[state.textField]} value={option[state.valueField]} className="tiny-user__select-dropdown">        
<Slot name="options" slot-scope={option} parent_children={props.children} slots={props.slots}>          
<span  className="tiny-user_select left">{option.userCN}</span>

          
<span  className="tiny-user_select right">{option.dept}</span>

        </Slot>

      </tinyOption>
    ))
  }
  

    </tinySelect>

  </div>


      );
    }
    