
    import { renderless, api } from '@opentiny/vue-renderless/search/vue'
    import '@opentiny/vue-theme/search/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function search(props) {
      const {mini,big,size,suffixIcon,transparent,searchTypes,placeholder,modelValue,tabindex,clearable,isEnterSearch,showButton,changeBgColor} = props
      const defaultProps = {
        ...$props,
        ...props,
        mini,big,size,suffixIcon,transparent,searchTypes,placeholder,modelValue,tabindex,clearable,isEnterSearch,showButton,changeBgColor
      }
      const { ref, current: vm, parent } = useVm()
      const input=useRef()
const selector=useRef()
      const { state,showSelector,searchEnterKey,handleInput,handleChange,clear,searchClick,changeKey } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[input,selector]
      })
      return (
          
<div  data-tag="tiny-search" onMouseenter={state.hovering = true} onMouseleave={state.hovering = false} className={vc([m(gcls('search-default')))}>    
<div  data-tag="tiny-search__line" className={vc([
        m(
          gcls('pc-search-line'),
          gcls({ 'pc-search-line-focus': state.focus }),
          gcls({ 'pc-search-line-unfocus': !state.focus }),
          gcls({ 'pc-search-line-big': big }),
          gcls(`pc-search-line-${size}`),
          gcls({ 'pc-search-line-unbig': size === 'small' && !big })
        )
      )}>      
<transition name="mf-transition-search-line-fade" mode="out-in">        
<div style={{display:!state.collapse && state.types.length?'block':'none'}} data-tag="tiny-search__present"  onClick={showSelector} className={vc([
            m(
              gcls('pc-search-present'),
              gcls({ 'pc-search-present-big': big }),
              gcls(`pc-search-present-${size}`),
              gcls({ 'pc-search-present-unbig': size === 'small' && !big })
            )
          )}>          
<Slot name="text" slot-scope={state.searchValue} parent_children={props.children} slots={props.slots}>            
<span data-tag="tiny-search__text"  className={vc([m(gcls('pc-search-present-pointer')))}>{state.searchValue.text}</span>

          </Slot>

          
<span data-tag="tiny-icon-outer"  className={vc([m(gcls('pc-search-present-icon-outer')))}>            
<iconChevron data-tag="tiny-svg-size"  className={vc([m(gcls('pc-search-present-icon-chevron-down')))}></iconChevron>

          </span>

        </div>

      </transition>

      
<input ref={input} v-ref="input" value={state.currentValue} onChange={(e)=>state.currentValue = e.value}  style={
          transparent && state.collapse
            ? {
                background: 'rgba(255,255,255,0.3)'
              }
            : {}
        } placeholder={placeholder} type="text" data-tag="tiny-search__input" onKeyup={searchEnterKey} onInput={handleInput} onChange={handleChange} onFocus={state.focus = true} onBlur={state.focus = false}  tabindex={tabindex} className={vc([
          m(
            gcls({ 'pc-search-input-background-transparent': transparent }),
            gcls({ 'pc-search-input-background-transparent-collapse': transparent && state.collapse }),
            gcls('pc-search-input-default'),
            gcls({ 'pc-search-input-collapse': state.collapse }),
            gcls({ 'pc-search-input-uncollapse': !state.collapse }),
            gcls({ 'pc-search-input-collapse-big': state.collapse && big }),
            gcls(`pc-search-input-collapse-${size}`),
            gcls({ 'pc-search-input-collapse-unbig': state.collapse && size === 'small' && !big }),
            gcls({ 'pc-search-input-big': big }),
            gcls(`pc-search-input-${size}`),
            gcls({ 'pc-search-input-unbig': size === 'small' && !big })
          )
        )}></input>

      
<transition name="mf-transition-icon-scale-in">        
<div data-tag="tiny-search__input-btn"  style={{display:state.showClear && !state.collapse?'block':'none'}} className={vc([
            m(
              gcls('pc-search-input-btn-transtion'),
              gcls({ 'pc-search-input-btn-transtion-big': big }),
              gcls(`pc-search-input-btn-transtion-${size}`),
              gcls({ 'pc-search-input-btn-transtion-unbig': size === 'small' && !big })
            )
          )}>          
<a  onClick={clear} className={vc([
              m(
                gcls('pc-search-input-btn-transtion-a'),
                gcls({ 'pc-search-input-btn-transtion-a-big': big }),
                gcls(`pc-search-input-btn-transtion-a-${size}`),
                gcls({ 'pc-search-input-btn-transtion-a-unbig': size === 'small' && !big })
              )
            )}>            
<iconClose  data-tag="tiny-svg-size"  className={vc([m(gcls('pc-search-input-btn-transtion-svg-size')))}></iconClose>

          </a>

        </div>

      </transition>

      
<div data-tag="tiny-search__input-btn"  className={vc([
          m(
            gcls('pc-search-input-btn'),
            gcls({ 'pc-search-input-btn-big': big }),
            gcls(`pc-search-input-btn-${size}`),
            gcls({ 'pc-search-input-btn-unbig': size === 'small' && !big })
          )
        )}>        
<a  onClick={searchClick} className={vc([
            m(
              gcls('pc-search-input-btn-a'),
              gcls({ 'pc-search-input-btn-a-big': big }),
              gcls(`pc-search-input-btn-a-${size}`),
              gcls({ 'pc-search-input-btn-a-unbig': size === 'small' && !big })
            )
          )}>          
<iconSearch  data-tag="tiny-svg-size" className={vc([
              m(
                gcls('pc-search-input-btn-icon-search'),
                gcls({ 'pc-search-input-btn-icon-search-transparent': state.collapse && transparent })
              )
            )}></iconSearch>

        </a>

      </div>

    </div>

    
<transition name="mf-transition-zoom-in-top" mode="out-in">      
<div style={{display:state.show && state.types.length?'block':'none'}} ref={selector} v-ref="selector" data-tag="tiny-search__selector"  className={vc([m(gcls('search-selector')))}>        
<div data-tag="tiny-search__selector-body"  className={vc([m(gcls('search-selector-body')))}>          
<ul data-tag="tiny-search__poplist">            

  {
    state.types.map((item, index)=>(
      <li  key={index} data-tag="tiny-search__poplist-item"  onClick={changeKey(item)} className={vc([
                m(
                  gcls('search-selector-poplist-item'),
                  gcls({ 'search-selector-poplist-item-big': big }),
                  gcls(`search-selector-poplist-item-${size}`),
                  gcls({ 'search-selector-poplist-item-unbig': size === 'small' && !big })
                )
              )}>              
<Slot name="poplist" slot-scope={item} parent_children={props.children} slots={props.slots}>{item.text}
 </Slot>

            </li>
    ))
  }
  

          </ul>

        </div>

      </div>

    </transition>

    
<div  className={vc([m(gcls('mobile-search')))}>      
<tinyInput value={state.currentValue} onChange={(e)=>state.currentValue = e.value} onInput={handleInput} custom-class={
          m(
            gcls('mobile-search-input'),
            gcls({ 'mobile-search-input-bg-change': changeBgColor }),
            gcls({ 'mobile-search-input-big': big })
          )
        } placeholder={placeholder} size={size}>        
<template slot>          
<iconSearch  data-tag="tiny-svg-size" className={vc([
              m(gcls('mobile-search-svg-size'), gcls({ 'mobile-search-svg-size-color': state.collapse && transparent }))
            )}></iconSearch>

        </template>

        
<template style={{display:state.showClear && !state.collapse?'block':'none'}} slot>          
<span  className="inline-block rounded-full">            
<iconError data-tag="tiny-svg-size" custom-class="w-4 h-4 fill-color-none-hover relative -top-0.5" onClick={clear}></iconError>

          </span>

        </template>

      </tinyInput>

      
<tinyButton type="text" onClick={searchClick}  className={vc([m(gcls('mobile-search-button'), gcls({ 'mobile-search-button-notShowButton': !showButton })))}>{t('ui.search.placeholder')}</tinyButton>

    </div>

  </div>


      );
    }
    