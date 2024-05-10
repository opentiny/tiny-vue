
    import { renderless, api } from '@opentiny/vue-renderless/form-item/vue'
    import '@opentiny/vue-theme/form-item/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function formItem(props) {
      const {_constants,appendToBody,error,for,inlineMessage,label,labelWidth,manual,popperOptions,default,prop,required,rules,showMessage,size,tipContent,validateDisabled,validateDebounce,validatePosition,validateStatus,validateType} = props
      const defaultProps = {
        ...$props,
        ...props,
        _constants,appendToBody,error,for,inlineMessage,label,labelWidth,manual,popperOptions,default,prop,required,rules,showMessage,size,tipContent,validateDisabled,validateDebounce,validatePosition,validateStatus,validateType
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,handleMouseenter,handleMouseleave } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div data-tag="tiny-form-item"  className={vc([
      m(
        `flex min-h-[theme(spacing.12)] sm:min-h-[theme(spacing.7)] mb-0 p-0 sm:mb-4 box-border after:content-[''] after:table after:clear-both before:content-['']  before:table border-b-0.5 border-color-border-separator sm:border-none`,
        state.validateState === 'error' && state.validateType === 'text' ? 'mb-0 sm:mb-5' : '',
        state.formInline ? 'align-sub' : '',
        state.labelPosition === 'top' ? 'block mb-4' : '',
        state.validateState === 'error'
          ? '[&_input]:border-color-error [&_textarea]:border-color-error [&_input:focus]:border-color-error [&_input:hover]:border-color-error [&_textarea:focus]:border-color-error [&_textarea:hover]:border-color-error'
          : '',
        state.labelPosition === 'top' && !state.hideRequiredAsterisk ? 'pl-0' : '',
        !slots.label && !label ? 'border-none' : '',
        state.isDisplayOnly ? 'border-none py-0.5' : ''
      )
    )}>    
<labelWrap is-auto-width={state.labelStyle && state.labelStyle.width === 'auto'} update-all={state.labelWidth === 'auto'} is-mobile-first={true}>      
<label data-tag="tiny-item-label" style={{display:slots.label || label?'block':'none'}}  style={state.labelStyle} for={state.labelFor} className={vc([
          m(
            'py-3 sm:py-1.5 sm:min-h-[theme(spacing.7)] relative align-bottom float-left text-sm pr-3 sm:pr-4 box-border leading-5',
            'overflow-hidden text-ellipsis text-left sm:text-right',
            state.labelPosition === 'top'
              ? 'float-none inline-block text-left sm:text-left leading-none px-0 pt-0 pb-1.5 h-auto min-h-0 sm:py-0 sm:pb-0.5 sm:min-h-[theme(spacing.0)]'
              : 'min-h-[theme(spacing.9)]',
            state.labelPosition === 'left' ? 'text-left' : '',
            state.formInline && state.labelPosition === 'top' ? 'block' : '',
            state.isDisplayOnly ? 'leading-none h-auto align-[inherit] pr-4' : '',
            tipContent ? 'pr-5 sm:pr-7' : '',
            state.labelPosition === 'top' && !state.hideRequiredAsterisk
              ? 'overflow-visible relative before:absolute before:-left-2.5'
              : '',
            state.disabled ? 'text-color-icon-placeholder sm:text-color-text-secondary' : 'text-color-text-secondary',
            state.formItemSize === 'medium' ? 'sm:text-sm' : 'sm:text-xs'
          )
        )}>        
<span  className={vc([
            m(
              'max-h-[theme(spacing.10)] line-clamp-2 inline-block relative top-px pl-2 sm:pl-0 leading-normal',
              (state.isRequired || required) && !state.hideRequiredAsterisk
                ? `before:content-['*'] before:text-color-error before:absolute before:left-0 before:sm:relative`
                : '',
              state.isDisplayOnly ? 'pl-0 before:hidden' : ''
            )
          )}>          
<Slot name="label" parent_children={props.children} slots={props.slots}>            
{label + state.labelSuffix}

          </Slot>

        </span>

        
<tinyTooltip style={{display:tipContent?'block':'none'}} effect="light" content={tipContent} placement="top">          
<iconHelp custom-class="h-4 w-4 ml-0.5 absolute right-1 sm:right-2 align-text-bottom fill-color-text-secondary"  className={vc([state.labelPosition === 'top' ? 'top-0.5 sm:top-1.5' : 'top-3.5 sm:top-1.5'])}></iconHelp>

        </tinyTooltip>

      </label>

    </labelWrap>

    
<div data-tag="tiny-form-item-inline"  className={vc([
        m(
          `flex-1 m-0 sm:m-auto relative sm:pt-0 sm:top-auto text-sm after:content-['']  after:table after:clear-both before:content-['']  before:table [&_button:not(:last-child)]:mr-2`,
          '[&_[data-tag=tiny-checkbox]]:py-0 [&_[data-tag=tiny-input]]:w-full',
          '[&_[data-tag=tiny-input]_textarea]:px-0 sm:[&_[data-tag=tiny-input]_textarea]:px-3 [&_[data-tag=tiny-input]_textarea]:w-full [&_[data-tag=tiny-input]_textarea]:pt-1 sm:[&_[data-tag=tiny-input]_textarea]:pt-2',
          state.formInline ? 'align-sub leading-none' : '',
          state.labelPosition === 'top' && !state.hideRequiredAsterisk
            ? state.isDisplayOnly
              ? 'pl-0'
              : 'pl-2 sm:pl-0'
            : 'pt-2',
          state.formItemSize === 'medium' ? 'sm:text-sm' : 'sm:text-xs'
        )
      )}>      
<div data-tag="tiny-form-item-display-only" style={{display:state.isDisplayOnly && state.isBasicComp?'block':'none'}}  type-name={state.typeName} onMouseenter={handleMouseenter} onMouseleave={handleMouseleave} className={vc([
          'break-all min-h-[28px] leading-7 text-color-text-primary',
          state.typeName === 'textarea' ? 'line-clamp-3' : 'line-clamp-1'
        ])}>        
{state.displayedValue || '-'}

      </div>

      
<div data-tag="tiny-form-item-show" style={{display:!(state.isDisplayOnly && state.isBasicComp)?'block':'none'}}  className={vc([
          '[&_[aria-label=checkbox-group]]:pl-0.5 sm:[&_[aria-label=checkbox-group]]:pl-0',
          '[&_>:first-child[data-tag=tiny-checkbox]]:pl-0.5 sm:[&_>:first-child[data-tag=tiny-checkbox]]:pl-0',
          '[&_>:first-child[data-tag=tiny-cascader]]:w-full',
          '[&_>:first-child[class=tiny-autocomplete]]:w-full',
          '[&_>:first-child[class=tiny-cascader]]:w-full',
          state.isDisplayOnly
            ? '[&_>*:not([data-tag^=tiny-],[class^=tiny-])]:leading-8 [&_>*:not([data-tag^=tiny-],[class^=tiny-])]:sm:leading-normal'
            : ''
        ])}>        
<Slot  parent_children={props.children} slots={props.slots}></Slot>

      </div>

      
<Slot data-tag="tiny-form-item-error" style={{display:state.validateState === 'error' && showMessage && state.showMessage?'block':'none'}} name="error" parent_children={props.children} slots={props.slots}>        
<div  title={state.validateMessage} className={vc([
            m(
              ' relative sm:absolute left-0 bottom-1 sm:-bottom-5 text-color-error text-xs leading-normal line-clamp-3 sm:line-clamp-1',
              (typeof inlineMessage === 'boolean' && inlineMessage) || state.inlineMessage
                ? 'relative top-auto left-auto inline-block'
                : '',
              state.formItemSize === 'small' ? 'pt-0.5' : '',
              state.formItemSize === 'mini' ? 'pt-px' : ''
            )
          )}>          
{state.validateMessage}

        </div>

      </Slot>

    </div>

  </div>


      );
    }
    