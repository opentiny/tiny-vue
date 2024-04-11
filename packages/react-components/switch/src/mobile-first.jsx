
    import { renderless, api } from '@opentiny/vue-renderless/switch/vue'
    import '@opentiny/vue-theme/switch/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function switch(props) {
      const {modelValue,trueValue,falseValue,disabled,size,tabindex,types} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,trueValue,falseValue,disabled,size,tabindex,types
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,toggle } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<span  data-tag="tiny-switch" tabindex={tabindex} onClick={toggle} onKeydown={toggle} className={vc([
      m(
        gcls('switch-default'),
        gcls(`switch-${size ? size : 'small'}`),
        gcls(
          `${state.currentValue === trueValue ? 'switch-true' : 'switch-false'}${
            disabled || types === 'loading' ? '-disabled' : '-not-disabled'
          }`
        )
      )
    )}>    
<span data-tag="tiny-switch-handle"  className={vc([
        m(
          gcls('switch-handle-default'),
          gcls(`switch-handle-${size ? size : 'small'}`),
          gcls(
            `${
              state.currentValue === trueValue
                ? `switch-handle-true-${size ? size : 'small'}${disabled || types === 'loading' ? '-disabled' : ''}`
                : `switch-handle-false-${size ? size : 'small'}${disabled || types === 'loading' ? '-disabled' : ''}`
            }`
          )
        )
      )}></span>

    
<span data-tag="tiny-switch-inner"  className={vc([
        m(
          gcls(`switch-inner-default`),
          gcls(`switch-inner-${size ? size : 'small'}`),
          gcls(
            `${
              state.currentValue === trueValue
                ? types === 'word'
                  ? 'switch-inner-true-word'
                  : `switch-inner-true-${size ? size : 'small'}-icon`
                : types === 'word'
                  ? `switch-inner-false-${size ? size : 'small'}-word`
                  : 'switch-inner-false-icon'
            }`
          )
        )
      )}>      
<div data-tag="tiny-switch-word" style={{display:types === 'word'?'block':'none'}}  className="sm:text-xs text-sm">        
<Slot style={{display:state.currentValue === trueValue?'block':'none'}} name="open" parent_children={props.children} slots={props.slots}>{t('yes')}</Slot>

        
<Slot style={{display:state.currentValue === falseValue?'block':'none'}} name="close" parent_children={props.children} slots={props.slots}>{t('no')}</Slot>

      </div>

      
<div data-tag="tiny-switch-icon" style={{display:types === 'icon'?'block':'none'}}>        
<Slot style={{display:state.currentValue === trueValue?'block':'none'}} name="open" parent_children={props.children} slots={props.slots}>          
<svg viewBox="0 0 24 24"  className={vc([
              gcls(`switch-icon-${size ? size : 'small'}`),
              gcls(`switch-icon-true-${disabled ? 'disabled' : 'default'}`)
            ])}>            
<path d="M9.9 15.6l9.4-9.4c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-10 10.1c-.4.4-1 .4-1.4 0-.1 0-.1-.1-.2-.1l-5.8-5.8c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l5.2 5.2z"></path>

          </svg>

        </Slot>

        
<Slot style={{display:state.currentValue === falseValue?'block':'none'}} name="close" parent_children={props.children} slots={props.slots}>          
<svg viewBox="0 0 24 24"  className={vc([
              gcls(`switch-icon-${size ? size : 'small'}`),
              gcls(`switch-icon-false-${disabled ? 'disabled' : 'default'}`)
            ])}>            
<path d="M13.4 12l6.3-6.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L12 10.6 5.7 4.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l6.3 6.3-6.3 6.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l6.3-6.3 6.3 6.3c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L13.4 12z"></path>

          </svg>

        </Slot>

      </div>

      
<div data-tag="tiny-switch-loading" style={{display:types === 'loading'?'block':'none'}}>        
<Slot style={{display:state.currentValue === trueValue?'block':'none'}} name="open" parent_children={props.children} slots={props.slots}>          
<svg viewBox="0 0 48 48"  className={vc([gcls(`switch-loading-${size ? size : 'small'}`), gcls('switch-icon-true-disabled')])}>            
<path d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" transform="rotate(275.098 75 75)">              
<animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="1s" repeatCount="indefinite"></animateTransform>

            </path>

          </svg>

        </Slot>

        
<Slot data-tag="tiny-switch-close" style={{display:state.currentValue === falseValue?'block':'none'}} name="close" parent_children={props.children} slots={props.slots}>          
<svg viewBox="0 0 48 48"  className={vc([gcls(`switch-loading-${size ? size : 'small'}`), gcls('switch-icon-false-disabled')])}>            
<path d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" transform="rotate(275.098 75 75)">              
<animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="1s" repeatCount="indefinite"></animateTransform>

            </path>

          </svg>

        </Slot>

      </div>
 </span></span>


      );
    }
    