
    import { renderless, api } from '@opentiny/vue-renderless/input/vue'
    import '@opentiny/vue-theme/input/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function input(props) {
      const {name,size,form,type,mask,label,modelValue,height,resize,counter,autosize,disabled,readonly,tabindex,clearable,suffixIcon,prefixIcon,autocomplete,showPassword,memorySpace,validateEvent,showWordLimit,displayOnly,displayOnlyContent,frontClearIcon,showEmptyValue,hoverExpand} = props
      const defaultProps = {
        ...$props,
        ...props,
        name,size,form,type,mask,label,modelValue,height,resize,counter,autosize,disabled,readonly,tabindex,clearable,suffixIcon,prefixIcon,autocomplete,showPassword,memorySpace,validateEvent,showWordLimit,displayOnly,displayOnlyContent,frontClearIcon,showEmptyValue,hoverExpand
      }
      const { ref, current: vm, parent } = useVm()
      const prepend=useRef()
const input=useRef()
const prefix=useRef()
const suffix=useRef()
const append=useRef()
const panel=useRef()
const textarea=useRef()
      const { state,handleEnterDisplayOnlyContent,handleCompositionEnd,handleCompositionUpdate,handleCompositionStart,handleBlur,handleFocus,handleInput,handleChange,selectedMemory,clear,handlePasswordVisible,handleEnterTextarea,handleLeaveTextarea } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[prepend,input,prefix,suffix,append,panel,textarea]
      })
      return (
          
<div  style={$attrs.style} onMouseenter={
      ($event) => {
        state.hovering = true
        $emit('mouseenter', $event)
      }
    } onMouseleave={
      ($event) => {
        state.hovering = false
        $emit('mouseleave', $event)
      }
    } onClick={$emit('click', $event)} className={vc([
      $attrs.class,
      type === 'textarea' ? 'tiny-textarea' : 'tiny-input',
      state.inputSize ? 'tiny-input-' + state.inputSize : '',
      {
        'is-disabled': state.inputDisabled,
        'is-exceed': state.inputExceed,
        'tiny-input-group': slots.prepend || slots.append,
        'tiny-input-group-append': slots.append,
        'tiny-input-group-prepend': slots.prepend,
        'tiny-input-prefix': slots.prefix || prefixIcon,
        'tiny-input-suffix': slots.suffix || suffixIcon || clearable || showPassword || (mask && state.inputDisabled),
        'tiny-input-word-limit': state.isWordLimitVisible,
        'is-display-only': state.isDisplayOnly
      }
    ])}>    
<template style={{display:type !== 'textarea'?'block':'none'}}>      


      
<div  ref={prepend} v-ref="prepend" style={{display:slots.prepend?'block':'none'}} className="tiny-input-group__prepend">        
<Slot name="prepend" parent_children={props.children} slots={props.slots}></Slot>

      </div>

      
<span  className="tiny-input-display-only">        
<tinyTooltip style={{display:state.isDisplayOnly?'block':'none'}} effect="light" content={state.displayOnlyTooltip} display={type === 'password'} placement="top" onMouseenter={handleEnterDisplayOnlyContent}>          
<span  style={{display:type === 'password'?'block':'none'}} className="tiny-input-display-only__content">{state.hiddenPassword}</span>

          
<span  style={{display:!(type === 'password')?'block':'none'}} className="tiny-input-display-only__mask">            
<span  className="tiny-input-display-only__mask-text">{state.displayedMaskValue}</span>

            
<Component is={state.maskValueVisible ? 'icon-eyeopen' : 'icon-eyeclose'} onClick={state.maskValueVisible = !state.maskValueVisible}></Component>

          </span>

          
<span  style={{display:!(!(type === 'password'))?'block':'none'}} className="tiny-input-display-only__content">{state.displayOnlyText}</span>

        </tinyTooltip>

        
<input style={{display:type !== 'textarea'?'block':'none'}} ref={input} v-ref="input" name={name} data-tag="tiny-input-inner" a($attrs, ['type', 'class', 'style', '^on\w+', 'id'])  tabindex={tabindex} type={showPassword ? (state.passwordVisible ? 'text' : 'password') : type} disabled={state.inputDisabled} readonly={readonly} unselectable={readonly ? 'on' : 'off'} autocomplete={autocomplete} onCompositionend={handleCompositionEnd} onCompositionupdate={handleCompositionUpdate} onCompositionstart={handleCompositionStart} onBlur={handleBlur} onFocus={handleFocus} onInput={handleInput} onChange={handleChange} aria-label={label} onKeyup={$emit('keyup', $event)} onKeydown={$emit('keydown', $event)} onPaste={$emit('paste', $event)} className={vc(['tiny-input__inner', mask && state.inputDisabled && !state.maskValueVisible && 'tiny-input__mask'])}></input>

      </span>

      
<tinyTall style={{display:isMemoryStorage?'block':'none'}} name={name} localstorage-data={storageData} is-memory-storage={isMemoryStorage} onSelected={selectedMemory}></tinyTall>

      


      
<span  ref={prefix} v-ref="prefix" style={{display:!state.isDisplayOnly && (slots.prefix || prefixIcon)?'block':'none'}} className="tiny-input__prefix">        
<Slot name="prefix" parent_children={props.children} slots={props.slots}></Slot>

        
<Component style={{display:prefixIcon?'block':'none'}} is={prefixIcon}  className="tiny-svg-size tiny-input__icon"></Component>

      </span>

      


      
<div >        
<transition name="tiny-transition-icon-out-in">          
<span  ref={suffix} v-ref="suffix" style={{display:!state.isDisplayOnly && getSuffixVisible()?'block':'none'}} className="tiny-input__suffix">            
<span  className="tiny-input__suffix-inner">              


              
<iconClose style={{display:frontClearIcon && state.showClear?'block':'none'}}   onClick={clear} className="tiny-svg-size tiny-input__icon tiny-input__clear"></iconClose>

              
<template style={{display:!state.showClear || !state.showPwdVisible || !state.isWordLimitVisible?'block':'none'}}>                
<Slot name="suffix" parent_children={props.children} slots={props.slots}></Slot>

                
<Component style={{display:suffixIcon?'block':'none'}} is={suffixIcon}  className="tiny-svg-size tiny-input__icon"></Component>

              </template>

              


              
<iconClose style={{display:!frontClearIcon && state.showClear?'block':'none'}}   onClick={clear} className="tiny-svg-size tiny-input__icon tiny-input__clear"></iconClose>

              
<Component style={{display:showPassword?'block':'none'}} is={state.passwordVisible ? 'icon-eyeopen' : 'icon-eyeclose'}  onClick={handlePasswordVisible} className="tiny-svg-size tiny-input__icon"></Component>

              
<Component style={{display:mask && state.inputDisabled?'block':'none'}} is={state.maskValueVisible ? 'icon-eyeopen' : 'icon-eyeclose'}  onClick={state.maskValueVisible = !state.maskValueVisible} className="tiny-svg-size tiny-input__icon"></Component>

              
<span style={{display:state.isWordLimitVisible?'block':'none'}}  className="tiny-input__count">                
<span  className="tiny-input__count-inner"><span  className="tiny-input__count-text-length">                    
{state.showWordLimit ? `${state.textLength}` : ''}

                  </span>

                  
<span  className="tiny-input__count-upper-limit">                    
{state.showWordLimit ? `/${state.upperLimit}` : state.textLength}

                  </span></span>

              </span>

            </span>

            
<i  style={{display:state.validateState?'block':'none'}}  className={vc(['tiny-input__validateIcon', validateIcon],'tiny-input__icon')}>            </i>

          </span>

        </transition>

      </div>

      


      
<div  ref={append} v-ref="append" style={{display:slots.append?'block':'none'}} className="tiny-input-group__append">        
<Slot name="append" parent_children={props.children} slots={props.slots}></Slot>

      </div>

      


      
<div  ref={panel} v-ref="panel" style={{display:slots.panel?'block':'none'}} className="tiny-input-group__panel">        
<Slot name="panel" parent_children={props.children} slots={props.slots}></Slot>

      </div>

    </template>

    
<span  style={{display:!(slots.panel)?'block':'none'}} className={vc([
        autosize ? 'tiny-textarea-autosize-display-only' : 'tiny-textarea-display-only',
        hoverExpand && 'tiny-textarea__inner-con'
      ])}>      
<tinyTooltip style={{display:state.isDisplayOnly?'block':'none'}} effect="light" content={state.displayOnlyTooltip} placement="top" onMouseenter={handleEnterDisplayOnlyContent($event, 'textarea')}>        
<span  className="tiny-textarea-display-only__content">{state.displayOnlyText}</span>

      </tinyTooltip>

      
<textarea ref={textarea} v-ref="textarea" a($attrs, ['type', 'class', 'style', 'id']) tabindex={tabindex}   onCompositionstart={handleCompositionStart} onCompositionupdate={handleCompositionUpdate} onCompositionend={handleCompositionEnd} onInput={handleInput} disabled={state.inputDisabled} readonly={readonly} unselectable={readonly ? 'on' : 'off'} autocomplete={autocomplete} style={state.textareaStyle} onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} onMouseenter={handleEnterTextarea($event)} onMouseleave={handleLeaveTextarea($event)} aria-label={label} onKeyup={$emit('keyup', $event)} onKeydown={$emit('keydown', $event)} onPaste={$emit('paste', $event)} className={vc([hoverExpand && !state.enteredTextarea && 'tiny-textarea__fix-height','tiny-textarea__inner]')}>      </textarea>

    </span>

    
<span style={{display:state.isWordLimitVisible && type === 'textarea'?'block':'none'}}  className="tiny-input__count">      
<span  className="tiny-input__count-inner"><span  className="tiny-input__count-text-length">          
{state.showWordLimit ? `${state.textLength}` : ''}

        </span>

        
<span  className="tiny-input__count-upper-limit">          
{state.showWordLimit ? `/${state.upperLimit}` : state.textLength}

        </span>

      </span>

    </span>

    
<Slot  parent_children={props.children} slots={props.slots}></Slot>

  </div>


      );
    }
    