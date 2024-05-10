
    import { renderless, api } from '@opentiny/vue-renderless/cascader/vue'
    import '@opentiny/vue-theme/cascader/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function cascader(props) {
      const {modelValue,options,props,size,placeholder,disabled,clearable,filterable,filterMethod,separator,showAllLevels,collapseTags,debounce,beforeFilter,popperClass,placement,popperOptions,visibleArrow,offset,boundariesPadding,arrowOffset,popperAppendToBody,autoSize,displayOnly,shape,label,tip,hoverExpand,blank} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,options,props,size,placeholder,disabled,clearable,filterable,filterMethod,separator,showAllLevels,collapseTags,debounce,beforeFilter,popperClass,placement,popperOptions,visibleArrow,offset,boundariesPadding,arrowOffset,popperAppendToBody,autoSize,displayOnly,shape,label,tip,hoverExpand,blank
      }
      const { ref, current: vm, parent } = useVm()
      const reference=useRef()
const input=useRef()
const tags-content=useRef()
const tooltip=useRef()
const popper=useRef()
const panel=useRef()
const suggestionPanel=useRef()
      const { state,handleKeyDown,toggleDropDownVisible,handleFocus,handleBlur,handleClear,deleteTag,handleMouseenter,handleMouseleave,handleDelete,handleDropdownLeave,handleExpandChange,handleSuggestionKeyDown,handleSuggestionClick } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[reference,input,tags-content,tooltip,popper,panel,suggestionPanel]
      })
      return (
          
<div ref={reference} v-ref="reference"  clickoutside onMouseenter={state.inputHover = true} onMouseleave={state.inputHover = false} onClick={() => toggleDropDownVisible(state.readonly ? undefined : true)} onKeydown={handleKeyDown} className={vc([
      'tiny-cascader',
      state.realSize && `tiny-cascader--${state.realSize}`,
      { 'is-disabled': state.isDisabled },
      { 'tiny-cascader-multiple': state.multiple },
      { 'is-display-only': state.isDisplayOnly },
      { 'show-auto-width': state.showAutoWidth },
      { 'is-hover-expand': hoverExpand }
    ])}>    
<tinyFilter style={{display:shape === 'filter'?'block':'none'}} onClick={toggleDropDownVisible()} show-close={clearable} placeholder={placeholder} disabled={state.isDisabled} label={label} tip={tip} value={state.multiple ? state.presentTags.map((item) => item.text).join('; ') : state.inputValue} drop-down-visible={state.dropDownVisible} blank={blank}></tinyFilter>

    
<div  className="tiny-cascader-content">      
<tinyInput style={{display:shape !== 'filter'?'block':'none'}} ref={input} v-ref="input" model-value={state.multiple ? state.presentText : state.inputValue} size={state.realSize} placeholder={state.placeholder} readonly={state.readonly} disabled={state.isDisabled} display-only={displayOnly} display-only-content={state.multiple ? state.presentTags.map((item) => item.text).join('; ') : ''} validate-event={false}  onFocus={handleFocus} onBlur={handleBlur} onUpdate:modelValue={(val) => handleInput(val, {})} className={vc({ 'is-focus': state.dropDownVisible })}>        
<template slot>          
<iconClose style={{display:state.clearBtnVisible?'block':'none'}} key="clear"  onClick={handleClear} className={vc(['tiny-input__icon', 'tiny-input__icon-close'])}></iconClose>

          
<Component style={{display:!(state.clearBtnVisible)?'block':'none'}} is={state.dropDownVisible ? 'icon-chevron-up' : 'icon-chevron-down'} key="arrow-down"  onClick={toggleDropDownVisible()} className={vc(['tiny-input__icon', state.dropDownVisible && 'is-reverse'])}></Component>

        </template>

      </tinyInput>

      
<div ref={tags-content} v-ref="tags-content" style={{display:state.multiple && !state.isDisplayOnly && !shape?'block':'none'}}   className={vc({
          'is-expand-content': hoverExpand && !state.isDisabled && (state.inputHover || state.dropDownVisible)
        },'tiny-cascader__tags')}>        
<tinyTag style={{display:hoverExpand?'block':'none'}}  type="info" closable={false} size={state.tagSize} className={vc(['tiny-cascader__tags-collapse', { 'is-hidden': state.isHidden }])}>+ 
{state.collapseTagsLength}</tinyTag>

        

  {
    state.presentTags.map((tag, index)=>(
      <tinyTag  key={tag.key} type="info" size={state.tagSize} hit={tag.hitState} closable={tag.closable} disable-transitions onClose={deleteTag(index)} onMouseenter={handleMouseenter} onMouseleave={handleMouseleave}>          
<span >{tag.text}</span>

        </tinyTag>
    ))
  }
  

        
<input style={{display:filterable && !state.isDisabled?'block':'none'}} value={state.inputValue} onChange={(e)=>state.inputValue = e.value} type="text"  placeholder={state.presentTags.length ? '' : placeholder} onInput={(e) => handleInput(state.inputValue, e)} onClick={toggleDropDownVisible(true)} onKeydown={handleDelete} className="tiny-cascader__search-input"></input>

      </div>

    </div>

    
<tinyTooltip ref={tooltip} v-ref="tooltip" value={state.tooltipVisible} onChange={(e)=>state.tooltipVisible = e.value} manual={true} effect="light" content={state.tooltipContent} placement="top">    </tinyTooltip>

    


    
<transition name="tiny-zoom-in-top" onAfter={handleDropdownLeave}>      
<div style={{display:state.dropDownVisible?'block':'none'}} ref={popper} v-ref="popper"   className={vc([
          'tiny-popper',
          'tiny-cascader-dropdown',
          'tiny-cascader__dropdown',
          popperClass,
          { 'is-auto-size': autoSize, 'is-multiple': state.multiple }
        ])}>        
<tinyCascader ref={panel} v-ref="panel" style={{display:!state.filtering?'block':'none'}} value={state.checkedValue} onChange={(e)=>state.checkedValue = e.value} options={options} props={state.config} border={false} render-label={slots.default} onExpand={handleExpandChange} onClose={toggleDropDownVisible(false)}></tinyCascader>

        
<tinyScrollbar ref={suggestionPanel} v-ref="suggestionPanel" style={{display:filterable?'block':'none'}} style={{display:state.filtering?'block':'none'}} tag="ul"  view-class="tiny-cascader__suggestion-list" onKeydown={handleSuggestionKeyDown} className="tiny-cascader__suggestion-panel">          
<template slot style={{display:state.suggestions.length?'block':'none'}}>            

  {
    state.suggestions.map((item, index)=>(
      <li  key={item.uid}  tabindex={-1} onClick={handleSuggestionClick(index)} className={vc(['tiny-cascader__suggestion-item', item.checked && 'is-checked'])}>              


              
<Slot name="filter" item={item.text} parent_children={props.children} slots={props.slots}>                
{item.text}

              </Slot>

              
<iconYes style={{display:item.checked?'block':'none'}}  className="icon-check"></iconYes>

            </li>
    ))
  }
  

          </template>

          
<Slot name="empty" style={{display:!state.suggestions.length?'block':'none'}} parent_children={props.children} slots={props.slots}>            
<li  className="tiny-cascader__empty-text">              
{t('ui.cascader.noMatch')}

            </li>

          </Slot>

        </tinyScrollbar>

      </div>

    </transition>

  </div>


      );
    }
    