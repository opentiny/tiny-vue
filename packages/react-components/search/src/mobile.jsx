
    import { renderless, api } from '@opentiny/vue-renderless/search/vue'
    import '@opentiny/vue-theme/search/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function search(props) {
      const {transparent,searchTypes,placeholder,buttonText,modelValue,themeType,isEnterSearch} = props
      const defaultProps = {
        ...$props,
        ...props,
        transparent,searchTypes,placeholder,buttonText,modelValue,themeType,isEnterSearch
      }
      const { ref, current: vm, parent } = useVm()
      const input=useRef()
      const { state,searchClick,searchEnterKey,handleChange,handleInput,clear } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[input]
      })
      return (
          
<div  className={vc([
      'tiny-mobile-search',
      `tiny-mobile-search-${themeType}`,
      { collapse: state.collapse },
      { focus: state.focus || (!state.focus && state.currentValue) }
    ])}>    
<div  className={vc(['tiny-mobile-search__line'])}>      
<div  className="tiny-mobile-search__box">        
<div  className="tiny-mobile-search__input-btn">          
<a  className="tiny-mobile-search__icon">            
<iconSearch style={{ fill: state.collapse && transparent ? '#fff' : '' }} onClick={searchClick}></iconSearch>

          </a>

        </div>

        
<input ref={input} v-ref="input" value={state.currentValue} onChange={(e)=>state.currentValue = e.value} style={
            transparent
              ? {
                  border: 'transparent',
                  background: state.collapse ? 'rgba(255,255,255,0.3)' : '#fff'
                }
              : {}
          } placeholder={placeholder} type="text"  onKeyup={searchEnterKey} onChange={handleChange} onInput={handleInput} onFocus={state.focus = true} onBlur={state.focus = false}  className={vc(['tiny-mobile-search__input', `tiny-mobile-search__input-${themeType}`])}></input>

        
<span  style={{display:state.currentValue?'block':'none'}} className="tiny-mobile-search__close-icon">          
<iconClose onClick={clear}></iconClose>

        </span>

      </div>

      
<label  className="tiny-mobile-search__label">        
<span >{placeholder}</span>

      </label>

    </div>

    
<div  className="tiny-mobile-search__right">      
<Slot  parent_children={props.children} slots={props.slots}>        
<div  onClick={searchClick} className="tiny-mobile-search__present">          
<span  className="tiny-mobile-search__text">{buttonText}</span>

        </div>

      </Slot>

    </div>

  </div>


      );
    }
    