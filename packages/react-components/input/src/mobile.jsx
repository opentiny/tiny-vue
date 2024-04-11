
    import { renderless, api } from '@opentiny/vue-renderless/input/vue'
    import '@opentiny/vue-theme/input/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function input(props) {
      const {name,selectMenu,ellipsis,contentStyle,labelWidth,tips,isSelect,type,label,modelValue,disabled,readonly,clearable,suffixIcon,prefixIcon,autocomplete,showPassword,validateEvent,showWordLimit,title,counter,autosize,tabindex,width,textAlign,resize} = props
      const defaultProps = {
        ...$props,
        ...props,
        name,selectMenu,ellipsis,contentStyle,labelWidth,tips,isSelect,type,label,modelValue,disabled,readonly,clearable,suffixIcon,prefixIcon,autocomplete,showPassword,validateEvent,showWordLimit,title,counter,autosize,tabindex,width,textAlign,resize
      }
      const { ref, current: vm, parent } = useVm()
      const input=useRef()
const textarea=useRef()
      const { state,showBox,handleInput,handleChange,handleCompositionStart,handleCompositionUpdate,handleCompositionEnd,handleFocus,handleBlur,clear,handlePasswordVisible } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[input,textarea]
      })
      return (
          
<div  style={$attrs.style} onMouseenter={state.hovering = true} onMouseleave={state.hovering = false} className={vc([
      type === 'textarea' ? 'tiny-mobile-textarea' : 'tiny-mobile-input',
      state.inputSize ? 'tiny-mobile-input-' + state.inputSize : '',
      {
        'is-focus': state.focused,
        'is-disabled': state.inputDisabled,
        'is-exceed': state.inputExceed,
        'is-showlimit': state.isWordLimitVisible && type === 'textarea',
        'tiny-mobile-input-group': slots.prepend || slots.append,
        'tiny-mobile-input-group-append': slots.append,
        'tiny-mobile-input-group-prepend': slots.prepend
      }
    ])}>    
<div  style={{display:slots.title || title?'block':'none'}} className="tiny-mobile-input__title">      
<Slot name="title" parent_children={props.children} slots={props.slots}>{title}</Slot>

    </div>


    
<div  style={{display:type !== 'textarea'?'block':'none'}} className="tiny-mobile-input__wrapper">      


      
<div style={{display:isSelect?'block':'none'}}  onClick={showBox} className="tiny-mobile-input__select">        
<input type="text" readonly  a($attrs, ['size', 'class', 'style', '^on[A-Z]']) value={state.checkedLabel} disabled={state.inputDisabled} name={name} aria-label={label} style={state.inputStyle} tabindex={tabindex} onInput={handleInput} onChange={handleChange} className="tiny-mobile-input__inner"></input>

        
<div  style={{
            transform: state.boxVisibility ? 'rotate(90deg)' : 'none'
          }} className="tiny-mobile-input__select-icon">          
<IconChevronRight ></IconChevronRight>

        </div>

      </div>


      
<template style={{display:!(isSelect)?'block':'none'}}>        
<input style={{display:type !== 'textarea'?'block':'none'}} ref={input} v-ref="input" name={name} a($attrs, ['size', 'class', 'style', '^on\w+'])  style={state.inputStyle} tabindex={tabindex} type={showPassword ? (state.passwordVisible ? 'text' : 'password') : type} disabled={state.inputDisabled} readonly={readonly} autocomplete={autocomplete} onCompositionstart={handleCompositionStart} onCompositionupdate={handleCompositionUpdate} onCompositionend={handleCompositionEnd} onInput={handleInput} onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} aria-label={label} className="tiny-mobile-input__inner"></input>

        


        
<div  style={{display:slots.prepend?'block':'none'}} className="tiny-mobile-input-group__prepend">          
<span ><Slot name="prepend" parent_children={props.children} slots={props.slots}></Slot></span>

        </div>

        


        
<div  style={{display:slots.prefix || prefixIcon?'block':'none'}} className="tiny-mobile-input__prefix">          
<Slot name="prefix" parent_children={props.children} slots={props.slots}></Slot>

          
<Component style={{display:prefixIcon?'block':'none'}} is={prefixIcon}  className="tiny-mobile-input__icon"></Component>

        </div>

        


        
<span  style={{display:getSuffixVisible()?'block':'none'}} className="tiny-mobile-input__suffix">          
<template style={{display:!state.showClear || !state.showPwdVisible || !state.isWordLimitVisible?'block':'none'}}>            
<Slot name="suffix" parent_children={props.children} slots={props.slots}></Slot>

            
<Component style={{display:suffixIcon?'block':'none'}} is={suffixIcon}  className="tiny-mobile-input__icon"></Component>

          </template>

          
<iconClose style={{display:state.showClear?'block':'none'}}   onClick={clear} className="tiny-mobile-input__icon tiny-mobile-input__clear"></iconClose>

          
<Component style={{display:state.showPwdVisible?'block':'none'}} is={state.passwordVisible ? 'icon-eyeopen' : 'icon-eyeclose'}  onClick={handlePasswordVisible} className="tiny-mobile-input__icon"></Component>

          
<span style={{display:state.isWordLimitVisible?'block':'none'}}  className="tiny-mobile-input__count">            
<span  className="tiny-mobile-input__count-inner">{state.showWordLimit ? `${state.textLength}/${state.upperLimit}` : state.textLength}</span>

          </span>

          
<i  style={{display:state.validateState?'block':'none'}}  className={vc(['tiny-mobile-input__validateIcon', validateIcon],'tiny-mobile-input__icon')}>          </i>

        </span>

        


        
<div  style={{display:slots.append?'block':'none'}} className="tiny-mobile-input-group__append">          
<Slot name="append" parent_children={props.children} slots={props.slots}></Slot>

        </div>

      </template>

    </div>


    
<textarea style={{display:!(slots.append)?'block':'none'}} ref={textarea} v-ref="textarea" name={name} a($attrs, ['type', 'class', 'style', '^on[A-Z]'])  tabindex={tabindex} onCompositionstart={handleCompositionStart} onCompositionupdate={handleCompositionUpdate} onCompositionend={handleCompositionEnd} onInput={handleInput} disabled={state.inputDisabled} readonly={readonly} autocomplete={autocomplete} style={{ ...state.textareaStyle, width: $attrs.cols ? 'auto' : '100%' }} onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} aria-label={label} className={vc(['tiny-mobile-textarea__inner', { 'is-focus': state.focused }])}>    </textarea>


    


    
<span style={{display:state.isWordLimitVisible && type === 'textarea'?'block':'none'}}  className="tiny-mobile-textarea__count">{state.showWordLimit ? `${state.textLength}/${state.upperLimit}` : state.textLength}</span>


    


    
<div  style={{display:slots.tips || tips?'block':'none'}} className="tiny-mobile-input__tips">      
<Slot name="tips" parent_children={props.children} slots={props.slots}>{tips}</Slot>

    </div>


    


    
<tinyAction value={state.sheetvalue} onChange={(e)=>state.sheetvalue = e.value} menus={selectMenu} ellipsis={ellipsis} content-style={contentStyle} visible={state.boxVisibility} onUpdate:visible={state.boxVisibility = $event}></tinyAction>

  </div>


      );
    }
    