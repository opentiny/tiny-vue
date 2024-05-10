
    import { renderless, api } from '@opentiny/vue-renderless/input/vue'
    import '@opentiny/vue-theme/input/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function input(props) {
      const {name,size,form,type,mask,label,modelValue,height,resize,counter,autosize,disabled,readonly,tabindex,clearable,suffixIcon,prefixIcon,autocomplete,showPassword,validateEvent,showWordLimit,customClass,displayOnly,displayOnlyContent,showEmptyValue} = props
      const defaultProps = {
        ...$props,
        ...props,
        name,size,form,type,mask,label,modelValue,height,resize,counter,autosize,disabled,readonly,tabindex,clearable,suffixIcon,prefixIcon,autocomplete,showPassword,validateEvent,showWordLimit,customClass,displayOnly,displayOnlyContent,showEmptyValue
      }
      const { ref, current: vm, parent } = useVm()
      const prepend=useRef()
const input=useRef()
const prefix=useRef()
const suffix=useRef()
const append=useRef()
const panel=useRef()
const textarea=useRef()
      const { state,handleEnterDisplayOnlyContent,handleCompositionStart,handleCompositionUpdate,handleCompositionEnd,handleInput,handleFocus,handleBlur,handleChange,selectedMemory,clear,handlePasswordVisible } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[prepend,input,prefix,suffix,append,panel,textarea]
      })
      return (
          
<div  data-tag="tiny-input" style={$attrs.style} onMouseenter={
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
      m(
        'relative text-xs',
        type !== 'textarea' || slots.prepend || slots.append ? 'inline-table' : '',
        type !== 'textarea' ? 'w-full' : 'align-bottom',
        slots.prepend || slots.append ? 'leading-normal border-separate border-spacing-0' : '',
        $attrs.class
      )
    )}>    
<template style={{display:type !== 'textarea'?'block':'none'}}>      


      
<div data-tag="tiny-input-prepend" ref={prepend} v-ref="prepend"  style={{display:slots.prepend && !state.isDisplayOnly?'block':'none'}} className="border-r-0 rounded-tr-none rounded-br-none bg-color-bg-2 text-color-text-placeholder border border-solid border-color-border rounded px-3 py-0 w-px align-middle table-cell relative whitespace-nowrap">        
<Slot name="prepend" parent_children={props.children} slots={props.slots}></Slot>

      </div>

      
<span   data-tag="tiny-input-display-only" className={vc([state.inputSizeMf === 'medium' ? 'sm:text-sm' : 'sm:text-xs'],'relative text-sm')}>        
<tinyTooltip style={{display:state.isDisplayOnly?'block':'none'}} effect="light" content={state.displayOnlyTooltip} display={type === 'password'} placement="top" popper-options={{ bubbling: true }} onMouseenter={handleEnterDisplayOnlyContent}>          
<span  style={{display:type === 'password'?'block':'none'}} className="absolute top-0 left-0 max-w-full overflow-hidden text-ellipsis whitespace-nowrap leading-7 sm:leading-normal text-color-text-primary">{state.hiddenPassword}</span>

          
<span  style={{display:!(type === 'password')?'block':'none'}} className="absolute top-0 left-0 max-w-full flex items-center leading-7 sm:leading-normal text-color-text-primary">            
<span  className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap mr-4">              
{state.displayedMaskValue}

            </span>

            
<Component is={state.maskValueVisible ? 'icon-eyeopen' : 'icon-eyeclose'} onClick={state.maskValueVisible = !state.maskValueVisible}></Component>

          </span>

          
<span  style={{display:!(!(type === 'password'))?'block':'none'}} className="absolute top-0 left-0 max-w-full overflow-hidden text-ellipsis whitespace-nowrap leading-7 sm:leading-normal text-color-text-primary">            
{state.displayOnlyText}

          </span>

        </tinyTooltip>

        
<input style={{display:type !== 'textarea'?'block':'none'}} ref={input} v-ref="input" data-tag="tiny-input-inner" name={name} a($attrs, ['type', 'class', 'style', '^on\w+'])  tabindex={tabindex} type={showPassword ? (state.passwordVisible ? 'text' : 'password') : type} disabled={state.inputDisabled} readonly={readonly} unselectable={readonly ? 'on' : 'off'} autocomplete={autocomplete} onCompositionstart={handleCompositionStart} onCompositionupdate={handleCompositionUpdate} onCompositionend={handleCompositionEnd} onInput={handleInput} onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} aria-label={label} onKeyup={$emit('keyup', $event)} onKeydown={$emit('keydown', $event)} onPaste={$emit('paste', $event)} className={vc([
            m(
              'w-full border-0 sm:border px-0 sm:px-3 sm:border-solid sm:border-color-border sm:hover:border-color-border-hover ' +
                'sm:focus:border-color-brand-focus sm:disabled:border-color-border ' +
                'placeholder:text-color-text-placeholder placeholder:text-sm text-sm sm:placeholder:text-xs sm:text-xs text-color-text-primary ' +
                'bg-color-bg-1 disabled:cursor-not-allowed disabled:text-color-text-disabled ' +
                'sm:disabled:bg-color-bg-4 py-0 outline-0 transition-colors duration-200 ease-in-out ',
              state.inputSizeMf === 'medium'
                ? `h-8 leading-8 ${m('sm:text-sm')} placeholder:text-sm`
                : state.inputSizeMf === 'mini'
                ? 'h-6 leading-6 text-xs placeholder:text-xs'
                : 'h-7 leading-7',
              slots.prepend || slots.append ? 'align-middle table-cell' : 'inline-block',
              slots.prepend && slots.append
                ? 'rounded-none'
                : slots.prepend
                ? 'rounded-tl-none rounded-bl-none rounded-tr rounded-br'
                : slots.append
                ? 'rounded-tl rounded-bl rounded-tr-none rounded-br-none'
                : 'rounded',
              readonly ? ' text-ellipsis overflow-hidden whitespace-nowrap' : 'sm:border',
              (slots.prefix || prefixIcon) && (slots.suffix || suffixIcon || clearable || showPassword)
                ? 'px-6 sm:px-6'
                : slots.prefix || prefixIcon
                ? 'pl-6 sm:pl-6 pr-0 sm:pr-3'
                : slots.suffix || suffixIcon || clearable || showPassword
                ? 'pl-0 sm:pl-3 pr-6 sm:pr-6'
                : '',
              mask && state.inputDisabled
                ? !state.maskValueVisible
                  ? 'font-[serif] pr-6 sm:pr-6'
                  : 'pr-6 sm:pr-6'
                : '',
              (slots.suffix || suffixIcon || showPassword) && clearable ? 'pr-10 sm:pr-10' : '',
              state.isDisplayOnly ? 'invisible h-auto leading-none border-0' : '',
              state.isWordLimitVisible ? (clearable ? 'pr-18 sm:pr-18' : 'pr-14 sm:pr-14') : '',
              customClass
            )
          )}></input>

      </span>

      
<tinyTall style={{display:isMemoryStorage?'block':'none'}} name={name} localstorage-data={storageData} is-memory-storage={isMemoryStorage} onSelected={selectedMemory}></tinyTall>

      


      
<span data-tag="tiny-input-prefix" ref={prefix} v-ref="prefix"  style={{display:(slots.prefix || prefixIcon) && !state.isDisplayOnly?'block':'none'}} className="left-2 transition-all duration-300 ease-in-out text-xs absolute top-1/2 -translate-y-1/2 text-center text-color-text-placeholder flex items-center">        
<Slot name="prefix" parent_children={props.children} slots={props.slots}></Slot>

        
<Component style={{display:prefixIcon?'block':'none'}} is={prefixIcon}  className={vc([
            m(
              'text-center transition-all duration-300 ease-in-out text-xs',
              state.inputSizeMf === 'medium' ? 'leading-8' : state.inputSizeMf === 'mini' ? 'leading-6' : 'leading-7'
            )
          )}></Component>

      </span>

      


      
<span data-tag="tiny-input-suffix" ref={suffix} v-ref="suffix"  style={{display:!state.isDisplayOnly && getSuffixVisible()?'block':'none'}} className="right-2 transition-all duration-300 ease-in-out pointer-events-none text-xs absolute top-1/2 -translate-y-1/2 text-center text-color-text-placeholder flex items-center z-[1]">        
<span  className="pointer-events-auto text-xs flex justify-start items-center">          
<template style={{display:!state.showClear || !state.showPwdVisible || !state.isWordLimitVisible?'block':'none'}}>            
<Slot name="suffix" parent_children={props.children} slots={props.slots}></Slot>

            
<Component style={{display:suffixIcon?'block':'none'}} is={suffixIcon}  className={vc([
                m(
                  'text-center transition-all duration-300 ease-in-out text-xs',
                  state.inputSizeMf === 'medium'
                    ? 'leading-8'
                    : state.inputSizeMf === 'mini'
                    ? 'leading-6'
                    : 'leading-7'
                )
              )}></Component>

          </template>

          
<iconError style={{display:state.showClear?'block':'none'}}   onClick={clear} className={vc([
              m(
                'text-center transition-all duration-300 ease-in-out text-xs cursor-pointer fill-color-none-hover block sm:hidden',
                state.inputSizeMf === 'medium' ? 'leading-8' : state.inputSizeMf === 'mini' ? 'leading-6' : 'leading-7'
              )
            )}></iconError>

          
<iconClose style={{display:state.showClear?'block':'none'}}   onClick={clear} className={vc([
              m(
                'hidden sm:block text-center transition-all duration-300 ease-in-out text-xs cursor-pointer',
                state.inputSizeMf === 'medium' ? 'leading-8' : state.inputSizeMf === 'mini' ? 'leading-6' : 'leading-7'
              )
            )}></iconClose>

          
<Component style={{display:showPassword?'block':'none'}} is={state.passwordVisible ? 'icon-eyeopen' : 'icon-eyeclose'}  onClick={handlePasswordVisible} className={vc([
              m(
                'text-center transition-all duration-300 ease-in-out text-xs',
                state.inputSizeMf === 'medium' ? 'leading-8' : state.inputSizeMf === 'mini' ? 'leading-6' : 'leading-7'
              )
            )}></Component>

          
<Component style={{display:mask && state.inputDisabled?'block':'none'}} is={state.maskValueVisible ? 'icon-eyeopen' : 'icon-eyeclose'}  onClick={state.maskValueVisible = !state.maskValueVisible} className={vc([
              m(
                'text-center transition-all duration-300 ease-in-out text-xs fill-color-text-placeholder',
                state.inputSizeMf === 'medium' ? 'leading-8' : state.inputSizeMf === 'mini' ? 'leading-6' : 'leading-7'
              )
            )}></Component>

          
<span style={{display:state.isWordLimitVisible?'block':'none'}}  className="h-full inline-flex items-center text-xs text-color-text-placeholder">            
<span  className="bg-color-bg-1 leading-none inline-block">{state.showWordLimit ? `${state.textLength}/${state.upperLimit}` : state.textLength}</span>

          </span>

        </span>

        
<i style={{display:state.validateState?'block':'none'}}  className={vc([
            m(
              'text-center transition-all duration-300 ease-in-out text-xs pointer-events-none',
              state.inputSizeMf === 'medium' ? 'leading-8' : state.inputSizeMf === 'mini' ? 'leading-6' : 'leading-7',
              state.validateIcon
            )
          )}>        </i>

      </span>

      


      
<div ref={append} v-ref="append"  style={{display:slots.append && !state.isDisplayOnly?'block':'none'}} className="border-l-0 rounded-tl-none rounded-bl-none bg-color-bg-2 text-color-text-placeholder border border-solid border-color-border rounded-tr rounded-br px-3 py-0 w-px align-middle table-cell relative whitespace-nowrap">        
<Slot name="append" parent_children={props.children} slots={props.slots}></Slot>

      </div>

      


      
<div ref={panel} v-ref="panel" style={{display:slots.panel && !state.isDisplayOnly?'block':'none'}}>        
<Slot name="panel" parent_children={props.children} slots={props.slots}></Slot>

      </div>

    </template>

    
<span style={{display:!(slots.panel && !state.isDisplayOnly)?'block':'none'}} data-tag="tiny-input-textarea">      
<tinyTooltip style={{display:state.isDisplayOnly?'block':'none'}} effect="light" content={state.displayOnlyTooltip} placement="top" popper-options={{ bubbling: true }} onMouseenter={handleEnterDisplayOnlyContent($event, 'textarea')}>        
<span   className={vc([state.inputSizeMf === 'medium' ? 'sm:text-sm' : 'sm:text-xs'],'max-w-full text-ellipsis break-words line-clamp-5 text-sm pt-1.5 text-color-text-primary')}>{state.displayOnlyText}</span>

      </tinyTooltip>

      
<textarea ref={textarea} v-ref="textarea" a($attrs, ['type', 'class', 'style', '^on[A-Z]']) tabindex={tabindex}   onCompositionstart={handleCompositionStart} onCompositionupdate={handleCompositionUpdate} onCompositionend={handleCompositionEnd} onInput={handleInput} disabled={state.inputDisabled} readonly={readonly} unselectable={readonly ? 'on' : 'off'} autocomplete={autocomplete} style={state.textareaStyle} onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} aria-label={label} className={vc([
          readonly ? 'sm:border-0 px-0 py-0' : 'sm:border px-3 py-2',
          state.isDisplayOnly ? 'hidden' : '',
          state.inputSizeMf === 'medium' ? 'sm:placeholder:text-sm sm:text-sm' : 'sm:placeholder:text-xs sm:text-xs'
        ],'block w-full border-0 sm:border-solid sm:border-color-border sm:hover:border-color-border-hover sm:focus:border-color-brand-focus sm:disabled:border-color-border outline-0 rounded placeholder:text-color-text-placeholder placeholder:text-sm text-sm text-color-text-primary bg-color-bg-1 disabled:cursor-not-allowed disabled:text-color-text-disabled sm:disabled:bg-color-bg-4 leading-normal')}>      </textarea>

    </span>

    
<span data-tag="tiny-input-limit" style={{display:state.isWordLimitVisible && type === 'textarea'?'block':'none'}}  className="bg-color-bg-1 text-color-text-placeholder text-xs absolute bottom-1 right-3">{state.showWordLimit ? `${state.textLength}/${state.upperLimit}` : state.textLength}</span>

    
<Slot  parent_children={props.children} slots={props.slots}></Slot>

  </div>


      );
    }
    