
    import { renderless, api } from '@opentiny/vue-renderless/floating-button/vue'
    import '@opentiny/vue-theme/floating-button/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function floatingButton(props) {
      const {position,backgroundColor,icon,resetTime,animated,expandList,isExpand,vague,mask,elementSelector} = props
      const defaultProps = {
        ...$props,
        ...props,
        position,backgroundColor,icon,resetTime,animated,expandList,isExpand,vague,mask,elementSelector
      }
      const { ref, current: vm, parent } = useVm()
      const floatingButton=useRef()
      const { state,handleClick } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[floatingButton]
      })
      return (
          
<div data-tag="tiny-floating-button-body">    
<div style={{display:vague || mask?'block':'none'}} data-tag="tiny-floating-button-mask"  className={vc([
        'w-screen h-screen fixed top-0 bottom-0 left-0 right-0',
        { 'bg-color-fill-5 backdrop-blur-md': vague },
        { 'bg-black opacity-30': mask }
      ])}></div>

    
<div data-tag="tiny-floating-button"  style={state.style} className={vc([
        'rounded-full fixed bottom-11 leading-none',
        position === 'center' ? '' : position === 'left' ? !state.specialHiddenSpace && 'left-3' : 'right-3'
      ])}>      
<button data-tag="tiny-floating-button-main" onClick={handleClick($event, 0)} ref={floatingButton} v-ref="floatingButton"  className={vc([
          m(
            'w-11 h-11 p-3 rounded-full',
            state.disabled
              ? 'text-color-text-disabled bg-color-bg-3 border-transparent active:cursor-not-allowed'
              : backgroundColor === 'white'
                ? 'bg-color-bg-1'
                : 'text-color-bg-1 bg-color-brand'
          )
        )}>        
<Component data-tag="tiny-floating-button-icon" is={icon}  className={vc([
            m(
              'w-5 h-5 rotate-0 transition-transform duration-300 will-change-transform',
              state.disabled
                ? 'fill-color-icon-disabled active:cursor-not-allowed'
                : backgroundColor === 'white'
                  ? 'fill-color-icon-secondary'
                  : 'fill-color-bg-1',
              { 'rotate-45': state.isExpand }
            )
          )}></Component>

      </button>

      
<div style={{display:state.expandList && state.expandList.length >= 1?'block':'none'}} data-tag="tiny-floating-button-expand-first" onClick={handleClick($event, 1)}  className={vc([
          m(
            'absolute -bottom-5 -mb-0.5 -left-0.5 -z-10 transition-bottom ease-linear duration-100 cursor-pointer',
            {
              'bottom-18 [&_span]:opacity-100 [&_span]:visible': state.isExpand && position === 'right'
            },
            {
              'bottom-16 -mb-1 [&_span]:opacity-100 [&_span]:visible': state.isExpand && position === 'center'
            },
            {
              'bottom-18 [&_span]:opacity-100 [&_span]:visible': state.isExpand && position === 'left'
            }
          )
        )}>        
<button  className={vc([
            m(
              'w-11 h-11 rounded-full mx-0.5',
              state.disabled
                ? 'text-color-text-disabled bg-color-bg-3 border-transparent active:cursor-not-allowed'
                : 'bg-color-info-primary-subtler'
            )
          )}>          
<Component data-tag="tiny-floating-button-icon" is={state.expandList && state.expandList[0].icon}  className={vc([
              'w-5 h-5',
              state.disabled ? 'fill-color-icon-disabled active:cursor-not-allowed' : 'fill-color-brand'
            ])}></Component>

        </button>

        
<span  className={vc([
            'text-center mt-0.5 text-xs w-12 leading-5 block opacity-0 transition-opacity ease-linear duration-100 invisible',
            !mask ? 'text-color-fill-primary' : 'text-color-bg-1'
          ])}>{state.expandList && state.expandList[0].title}</span>

      </div>

      
<div style={{display:state.expandList && state.expandList.length >= 2?'block':'none'}} data-tag="tiny-floating-button-expand-second" onClick={handleClick($event, 2)}  className={vc([
          m(
            'absolute -bottom-5 -mb-0.5 -left-0.5 -z-10 transition-bottom ease-linear duration-100 cursor-pointer',

            {
              '-left-18 bottom-11 mb-0 [&_span]:opacity-100 [&_span]:visible': state.isExpand && position === 'right'
            },
            {
              '-left-18 right-auto bottom-4.5 mb-0 [&_span]:opacity-100 [&_span]:visible':
                state.isExpand && position === 'center'
            },
            {
              'left-18 right-auto bottom-11 mb-0 [&_span]:opacity-100 [&_span]:visible':
                state.isExpand && position === 'left'
            }
          )
        )}>        
<button  className={vc([
            m(
              'w-11 h-11 rounded-full mx-0.5',
              state.disabled
                ? 'text-color-text-disabled bg-color-bg-3 border-transparent active:cursor-not-allowed'
                : 'bg-color-success-subtler'
            )
          )}>          
<Component data-tag="tiny-floating-button-icon" is={state.expandList && state.expandList[1].icon}  className={vc([
              'w-5 h-5',
              state.disabled ? 'fill-color-icon-disabled active:cursor-not-allowed' : 'fill-color-success-active'
            ])}></Component>

        </button>

        
<span  className={vc([
            'text-center text-xs mt-0.5 w-12 leading-5 block opacity-0 transition-opacity ease-linear duration-100 invisible',
            !mask ? 'text-color-fill-primary' : 'text-color-bg-1'
          ])}>{state.expandList && state.expandList[1].title}</span>

      </div>

      
<div style={{display:state.expandList && state.expandList.length >= 3?'block':'none'}} data-tag="tiny-floating-button-expand-third" onClick={handleClick($event, 3)}  className={vc([
          m(
            'absolute -bottom-5 -mb-0.5 -left-0.5 -z-10 transition-bottom ease-linear duration-100 cursor-pointer',
            {
              '-left-18 -bottom-9 -mb-1 [&_span]:opacity-100 [&_span]:visible': state.isExpand && position === 'right'
            },
            {
              'left-18 right-auto bottom-4.5 mb-0 [&_span]:opacity-100 [&_span]:visible':
                state.isExpand && position === 'center'
            },
            {
              'left-18 -bottom-9 -mb-1 right-auto [&_span]:opacity-100 [&_span]:visible':
                state.isExpand && position === 'left'
            }
          )
        )}>        
<button  className={vc([
            m(
              'w-11 h-11 rounded-full mx-0.5',
              state.disabled
                ? 'text-color-text-disabled bg-color-bg-3 border-transparent active:cursor-not-allowed'
                : 'bg-color-warning-subtler'
            )
          )}>          
<Component data-tag="tiny-floating-button-icon" is={state.expandList && state.expandList[2].icon}  className={vc([
              'w-5 h-5',
              state.disabled ? 'fill-color-icon-disabled active:cursor-not-allowed' : 'fill-color-alert-hover'
            ])}></Component>

        </button>

        
<span  className={vc([
            'text-center text-xs mt-0.5 w-12 leading-5 block opacity-0 transition-opacity ease-linear duration-100 invisible',
            !mask ? 'text-color-fill-primary' : 'text-color-bg-1'
          ])}>{state.expandList && state.expandList[2].title}</span>

      </div>

    </div>

  </div>


      );
    }
    