
    import { renderless, api } from '@opentiny/vue-renderless/autocomplete/vue'
    import '@opentiny/vue-theme/autocomplete/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function autocomplete(props) {
      const {valueKey,popperClass,tabindex,popperOptions,placeholder,clearable,disabled,name,size,modelValue,maxlength,minlength,autofocus,fetchSuggestions,triggerOnFocus,customItem,selectWhenUnmatched,prefixIcon,suffixIcon,label,debounce,placement,hideLoading,popperAppendToBody,highlightFirstItem,displayOnly} = props
      const defaultProps = {
        ...$props,
        ...props,
        valueKey,popperClass,tabindex,popperOptions,placeholder,clearable,disabled,name,size,modelValue,maxlength,minlength,autofocus,fetchSuggestions,triggerOnFocus,customItem,selectWhenUnmatched,prefixIcon,suffixIcon,label,debounce,placement,hideLoading,popperAppendToBody,highlightFirstItem,displayOnly
      }
      const { ref, current: vm, parent } = useVm()
      const input=useRef()
const popper=useRef()
      const { state,handleChange,handleFocus,handleBlur,handleClear,highlight,handleKeyEnter,close,doDestroy,select } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[input,popper]
      })
      return (
          
<div  clickoutside aria-haspopup="listbox" role="combobox" aria-expanded={state.suggestionVisible} aria-owns={state.id} className={vc(['tiny-autocomplete', { 'show-auto-width': state.showAutoWidth }])}>    
<tinyInput tabindex={tabindex} display-only={displayOnly} ref={input} v-ref="input" f($props, $attrs) front-clear-icon onUpdate:modelValue={handleChange} onFocus={handleFocus} onBlur={handleBlur} onClear={handleClear} onKeydown={highlight(state.highlightedIndex - 1)} onKeydown={highlight(state.highlightedIndex + 1)} onKeydown={handleKeyEnter} onKeydown={close}>      
<template slot style={{display:slots.prepend?'block':'none'}}>        
<Slot name="prepend" parent_children={props.children} slots={props.slots}></Slot>

      </template>

      
<template slot style={{display:slots.append?'block':'none'}}>        
<Slot name="append" parent_children={props.children} slots={props.slots}></Slot>

      </template>

      
<template slot style={{display:slots.prefix?'block':'none'}}>        
<Slot name="prefix" parent_children={props.children} slots={props.slots}></Slot>

      </template>

      
<template slot style={{display:slots.suffix?'block':'none'}}>        
<Slot name="suffix" parent_children={props.children} slots={props.slots}></Slot>

      </template>

    </tinyInput>

    
<transition name="tiny-zoom-in-top" onAfter={doDestroy}>      
<div ref={popper} v-ref="popper" style={{display:hideLoading ? suggestionState.showPopper && !state.loading : suggestionState.showPopper?'block':'none'}}   style={{ width: suggestionState.dropdownWidth }} role="region" className={vc([popperClass ? popperClass : '', { 'is-loading': !hideLoading && state.loading }],'tiny-autocomplete tiny-autocomplete-suggestion tiny-popper')}>        
<tinyScrollbar tag="ul" wrap-class="tiny-autocomplete-suggestion__wrap" view-class="tiny-autocomplete-suggestion__list" margin-bottom-adjust={6}>          
<Slot name="panel" loading={!hideLoading && state.loading} list={state.suggestions} highlighted={state.highlightedIndex} id={state.id} select={select} parent_children={props.children} slots={props.slots}>            
<li style={{display:!hideLoading && state.loading?'block':'none'}}  className="tiny-autocomplete-suggestion__list-loading">              
<iconLoading width="1em" height="1em"></iconLoading>

            </li>

            
<template style={{display:!(!hideLoading && state.loading)?'block':'none'}}>              

  {
    state.suggestions.map((item, index)=>(
      <li  key={index}   onClick={select(item)} id={`${state.id}-item-${index}`} role="option" aria-selected={state.highlightedIndex === index} className={vc({ highlighted: state.highlightedIndex === index },'tiny-autocomplete-suggestion__list-item')}>                
<Slot slot-scope={item} parent_children={props.children} slots={props.slots}>                  
{item[valueKey]}

                </Slot>

              </li>
    ))
  }
  

            </template>

          </Slot>

        </tinyScrollbar>

      </div>

    </transition>

  </div>


      );
    }
    