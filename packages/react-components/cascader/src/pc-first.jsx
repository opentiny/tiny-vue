
    import { renderless, api } from '@opentiny/vue-renderless/cascader/vue'
    import '@opentiny/vue-theme/cascader/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function cascader(props) {
      const {modelValue,options,props,size,placeholder,disabled,clearable,filterable,filterMethod,separator,showAllLevels,collapseTags,debounce,beforeFilter,popperClass,placement,popperOptions,visibleArrow,offset,boundariesPadding,arrowOffset,popperAppendToBody,autoSize,displayOnly,shape,label,tip,hoverExpand} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,options,props,size,placeholder,disabled,clearable,filterable,filterMethod,separator,showAllLevels,collapseTags,debounce,beforeFilter,popperClass,placement,popperOptions,visibleArrow,offset,boundariesPadding,arrowOffset,popperAppendToBody,autoSize,displayOnly,shape,label,tip,hoverExpand
      }
      const { ref, current: vm, parent } = useVm()
      const reference=useRef()
const input=useRef()
const tags-content=useRef()
const tooltip=useRef()
const popper=useRef()
const panel=useRef()
const suggestionPanel=useRef()
      const { state,handleKeyDown,handleFocus,handleBlur,handleInput,handleClear,toggleDropDownVisible,handleDelete,handleDropdownLeave,handleExpandChange,handleSuggestionKeyDown,handleSuggestionClick } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[reference,input,tags-content,tooltip,popper,panel,suggestionPanel]
      })
      return (
          
<div data-tag="tiny-cascader"  clickoutside onMouseenter={state.inputHover = true} onMouseleave={state.inputHover = false} onClick={() => toggleDropDownVisible(state.readonly ? undefined : true)} onKeydown={handleKeyDown} a($attrs, ['class', 'style'], true) className={vc([
      m(
        'inline-block relative text-sm',
        gcls('type-${state.realSize}'),
        gcls(state.showAutoWidth ? 'show-auto-width' : '')
      )
    )}>    
<div ref={reference} v-ref="reference" data-tag="tiny-cascader-content">      
<tinyInput ref={input} v-ref="input" model-value={state.multiple ? state.presentText : state.inputValue} size={state.realSize} placeholder={state.placeholder} readonly={state.readonly} disabled={state.isDisabled} display-only={displayOnly} display-only-content={state.multiple ? state.presentTags.map((item) => item.text).join('; ') : ''} validate-event={false} onFocus={handleFocus} onBlur={handleBlur} onUpdate:modelValue={handleInput}>        
<template slot>          
<iconClose style={{display:state.clearBtnVisible?'block':'none'}} key="clear" onClick={handleClear}></iconClose>

          
<Component style={{display:!(state.clearBtnVisible)?'block':'none'}} is={state.dropDownVisible ? 'icon-chevron-up' : 'icon-chevron-down'} key="arrow-down" onClick={toggleDropDownVisible()}  className={vc({ 'fill-color-brand': state.dropDownVisible })}></Component>

        </template>

      </tinyInput>

      
<div ref={tags-content} v-ref="tags-content" style={{display:state.multiple && !state.isDisplayOnly && !shape?'block':'none'}} data-tag="tiny-cascader__tags">        
<input style={{display:filterable && !state.isDisabled?'block':'none'}} value={state.inputValue} onChange={(e)=>state.inputValue = e.value} type="text" data-tag="tiny-cascader__search-input"  placeholder={state.presentTags.length ? '' : placeholder} onFocus={handleFocus} onBlur={handleBlur} onInput={(e) => handleInput(state.inputValue, e)} onClick={toggleDropDownVisible(true)} onKeydown={handleDelete} className="flex-1 h-6 text-color-text-primary text-xs border-none outline-0 box-border"></input>

      </div>

    </div>

    
<tinyTooltip ref={tooltip} v-ref="tooltip" value={state.tooltipVisible} onChange={(e)=>state.tooltipVisible = e.value} manual={true} effect="light" content={state.tooltipContent} placement="top">    </tinyTooltip>

    
<transition name="tiny-zoom-in-top" onAfter={handleDropdownLeave}>      
<div style={{display:state.dropDownVisible?'block':'none'}} ref={popper} v-ref="popper" data-tag="tiny-cascader__dropdown"   className={vc([
          m(
            popperClass,
            'my-1 mx-0 text-sm bg-color-bg-1 rounded shadow-md',
            autoSize ? 'bg-transparent border-none shadow-none' : ''
          )
        )}>        
<tinyCascader ref={panel} v-ref="panel" tiny_mode="mobile-first" style={{display:!state.filtering?'block':'none'}} value={state.checkedValue} onChange={(e)=>state.checkedValue = e.value} options={options} props={state.config} border={false} render-label={slots.default} onExpand={handleExpandChange} onClose={toggleDropDownVisible(false)}></tinyCascader>

        
<tinyScrollbar ref={suggestionPanel} v-ref="suggestionPanel" style={{display:filterable?'block':'none'}} style={{display:state.filtering?'block':'none'}} tag="div" data-tag="tiny-cascader__suggestion-panel" wrap-class="overflow-auto pr-2 pb-2"  view-class="tiny-cascader__suggestion-list m-0 py-1.5 px-0 text-sm text-color-text-primary text-center" onKeydown={handleSuggestionKeyDown} className="bg-color-bg-1 border border-solid border-color-border-separator rounded">          
<template slot style={{display:state.suggestions.length?'block':'none'}}>            

  {
    state.suggestions.map((item, index)=>(
      <div  key={item.uid} data-tag="tiny-cascader__suggestion-item"  tabindex={-1} onClick={handleSuggestionClick(index)} className={vc([
                'flex justify-between items-center h-8 py-0 px-2 text-xs text-color-text-primary',
                'text-left outline-0 cursor-pointer',
                item.checked ? 'text-color-brand-hover font-bold' : ''
              ])}>              
<span >{item.text}</span>

              
<iconYes style={{display:item.checked?'block':'none'}}  className={vc([item.checked ? 'fill-color-icon-hover' : '')}></iconYes>

            </div>
    ))
  }
  

          </template>

          
<Slot name="empty" style={{display:!state.suggestions.length?'block':'none'}} parent_children={props.children} slots={props.slots}>            
<div data-tag="tiny-cascader__empty-text"  className="my-2.5 mx-0 text-color-text-placeholder">              
{t('ui.cascader.noMatch')}

            </div>

          </Slot>

        </tinyScrollbar>

      </div>

    </transition>

  </div>


      );
    }
    