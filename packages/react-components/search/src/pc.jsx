
    import { renderless, api } from '@opentiny/vue-renderless/search/vue'
    import '@opentiny/vue-theme/search/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function search(props) {
      const {mini,transparent,searchTypes,placeholder,modelValue,tabindex,clearable,isEnterSearch,typeValue,size} = props
      const defaultProps = {
        ...$props,
        ...props,
        mini,transparent,searchTypes,placeholder,modelValue,tabindex,clearable,isEnterSearch,typeValue,size
      }
      const { ref, current: vm, parent } = useVm()
      const input=useRef()
const selector=useRef()
      const { state,showSelector,searchEnterKey,handleChange,handleInput,clear,searchClick,changeKey } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[input,selector]
      })
      return (
          
<div  onMouseenter={state.hovering = true} onMouseleave={state.hovering = false} className={vc([
      'tiny-search',
      { mini },
      { collapse: state.collapse },
      state.searchSize ? 'tiny-search--' + state.searchSize : ''
    ])}>    
<div  className={vc(['tiny-search__line', { focus: state.focus }])}>      
<div  style={{display:slots.prefix?'block':'none'}} className="tiny-search__prefix">        
<Slot name="prefix" parent_children={props.children} slots={props.slots}></Slot>

      </div>

      
<transition name="tiny-transition-search-line-fade" mode="out-in">        
<div style={{display:!state.collapse && state.types.length?'block':'none'}}  onClick={showSelector} className="tiny-search__present">          
<Slot name="text" slot-scope={state.searchValue} parent_children={props.children} slots={props.slots}>            
<span  className="tiny-search__text">{state.searchValue.text}</span>

          </Slot>

          
<span  className="icon-outer">            
<iconChevron  className="tiny-svg-size"></iconChevron>

          </span>

        </div>

      </transition>

      
<input ref={input} v-ref="input" 
          a($attrs, [
            'type',
            'class',
            'style',
            '^on\w+',
            'id',
            'disabled',
            'clearable',
            'max',
            'min',
            'readonly',
            'step'
          ])
         value={state.currentValue} onChange={(e)=>state.currentValue = e.value} style={
          transparent
            ? {
                border: 'transparent',
                background: state.collapse ? 'rgba(255,255,255,0.3)' : '#fff'
              }
            : {}
        } placeholder={placeholder} type="text"  onKeyup={searchEnterKey($event)} onChange={handleChange} onInput={handleInput} onFocus={state.focus = true} onBlur={state.focus = false}  tabindex={tabindex} className="tiny-search__input"></input>

      
<transition name="tiny-transition-icon-scale-in">        
<div  style={{display:state.showClear && !state.collapse?'block':'none'}} className="tiny-search__input-btn">          
<a onClick={clear($event)}>            
<iconClose   className="tiny-svg-size"></iconClose>

          </a>

        </div>

      </transition>

      
<Slot style={{display:slots.suffix?'block':'none'}} name="suffix" parent_children={props.children} slots={props.slots}></Slot>

      
<div style={{display:!(slots.suffix)?'block':'none'}}  className="tiny-search__input-btn">        
<a onClick={searchClick($event)}>          
<iconSearch style={{ fill: state.collapse && transparent ? '#fff' : '' }}  className="tiny-svg-size"></iconSearch>

        </a>

      </div>

    </div>

    
<transition name="tiny-transition-zoom-in-top" mode="out-in">      
<div style={{display:state.show && state.types.length?'block':'none'}} ref={selector} v-ref="selector"  className="tiny-search__selector">        
<div  className="tiny-search__selector-body">          
<ul  className="tiny-search__poplist">            

  {
    state.types.map((item, index)=>(
      <li  key={index}  onClick={changeKey(item)} className="tiny-search__poplist-item">              
<Slot name="poplist" slot-scope={item} parent_children={props.children} slots={props.slots}>                
{item.text}

              </Slot>

            </li>
    ))
  }
  

          </ul>

        </div>

      </div>

    </transition>

  </div>


      );
    }
    