
    import { renderless, api } from '@opentiny/vue-renderless/radio/vue'
    import '@opentiny/vue-theme/radio/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function radio(props) {
      const {modelValue,events,label,text,disabled,name,border,size,tabindex,displayOnly} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,events,label,text,disabled,name,border,size,tabindex,displayOnly
      }
      const { ref, current: vm, parent } = useVm()
      const radio=useRef()
const label=useRef()
      const { state,handleChange } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[radio,label]
      })
      return (
          
<label data-tag="tiny-radio"  role="radio" aria-checked={state.model === label} aria-disabled={state.isDisabled} tabindex="-1" onKeydown={state.model = state.isDisabled ? state.model : label} a($attrs, ['class', 'style', 'onClick'], true) className={vc([
      m(
        gcls('radio-default'),
        gcls(
          state.isDisplayOnly
            ? state.model === label
              ? 'readonly-is-checked'
              : 'readonly-is-not-checked'
            : 'not-readonly-common'
        ),
        gcls({ 'verticalStyle': state.vertical })
      )
    )}>    
<span data-tag="tiny-radio-content"  className={vc([
        m(
          gcls('radio-label-common'),
          gcls(state.size === 'medium' ? 'radio-label-size-medium' : 'radio-label-size-common'),
          gcls(state.isDisplayOnly && state.model === label && 'hidden-radio')
        )
      )}>      
<span data-tag="tiny-radio-icon"  tabindex={tabindex} className={vc([m(gcls('radio-label-circle')))}>        


        
<iconRadio  className={vc([
            m(
              gcls('icon-common'),
              gcls('pc-show'),
              gcls({ 'radio-active': !state.isDisabled }),
              gcls({ 'radio-hover': !state.isDisabled }),
              gcls({ 'icon-radio-disabled': state.isDisabled }),
              gcls({ 'icon-radio-default': !state.isDisabled }),
              gcls('icon-radio-common'),
              gcls(state.size === 'medium' ? 'icon-radio-size-medium' : 'icon-radio-size-common')
            )
          )}></iconRadio>

        
<iconRadioselected  className={vc([
            m(
              gcls('icon-common'),
              gcls('pc-show'),
              state.model === label ? gcls('icon-show') : gcls('icon-hidden'),
              gcls({ 'radio-hover-selected': !state.isDisabled }),
              gcls({ 'radio-active-selected': !state.isDisabled }),
              gcls('icon-radioselected-common'),
              gcls({ 'icon-radioselected-disabled': state.isDisabled }),
              gcls({ 'icon-radioselected-default': !state.isDisabled }),
              gcls(state.size === 'medium' ? 'icon-radioselected-size-medium' : 'icon-radioselected-size-common')
            )
          )}></iconRadioselected>

        


        
<iconMobile  className={vc([
            m(
              gcls('icon-common'),
              gcls('mobile-show'),
              gcls({ 'mobile-icon-radio-disabled': state.isDisabled }),
              gcls({ 'mobile-icon-radio-default': !state.isDisabled }),
              gcls('icon-radio-common')
            )
          )}></iconMobile>

        
<iconMobile  className={vc([
            m(
              gcls('icon-common'),
              gcls('mobile-show'),
              state.model === label ? gcls('icon-show') : gcls('icon-hidden'),
              gcls('icon-radioselected-common'),
              gcls({ 'mobile-icon-radioselected-disabled': state.isDisabled }),
              gcls({ 'mobile-icon-radioselected-default': !state.isDisabled })
            )
          )}></iconMobile>

      </span>

      
<input ref={radio} v-ref="radio"  value={label} type="radio" aria-hidden="true" value={state.model} onChange={(e)=>state.model = e.value} onFocus={state.focus = true} onBlur={state.focus = false} onChange={handleChange} name={name} disabled={state.isDisabled}  className={vc([m(gcls('radio-input')))}></input>

    </span>

    
<span data-tag="tiny-radio-label" ref={label} v-ref="label"   className={vc([
        m(
          gcls('radio-text-common'),
          gcls(state.size === 'medium' ? 'radio-text-size-medium' : 'radio-text-size-common'),
          gcls({ 'label-disabled': state.isDisabled }),
          gcls(
            state.isDisplayOnly ? (state.model === label ? 'readonly-checked-label' : '') : 'not-readly-common-label'
          )
        )
      )}>      
<Slot  parent_children={props.children} slots={props.slots}>{text || label}</Slot>

    </span>

  </label>


      );
    }
    