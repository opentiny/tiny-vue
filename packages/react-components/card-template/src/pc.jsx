
    import { renderless, api } from '@opentiny/vue-renderless/card-template/vue'
    import '@opentiny/vue-theme/card-template/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function cardTemplate(props) {
      const {tools,header,bodyStyle,headerLine} = props
      const defaultProps = {
        ...$props,
        ...props,
        tools,header,bodyStyle,headerLine
      }
      const { ref, current: vm, parent } = useVm()
      const item=useRef()
const selector=useRef()
      const { state,item.click,toolClick } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[item,selector]
      })
      return (
          
<div ref={item} v-ref="item"  className="tiny-card-template">    
<div style={{display:slots.header || header || (tools && tools.length)?'block':'none'}}   className={vc({ 'is-line': headerLine },'tiny-card-template__header')}>      
<Slot name="header" parent_children={props.children} slots={props.slots}>        
<span  className="tiny-card-template__title">{header}</span>

      </Slot>

      
<div style={{display:tools && tools.length?'block':'none'}}  className="tiny-card-template__tools">        
<ul  className="tiny-card-template__list">          

  {
    state.currentTools.map((item, index)=>(
      <li  key={index} title={item.title} onClick={item.click}>            
<Component  is={item.icon} className="tiny-svg-size"></Component>

          </li>
    ))
  }
  

        </ul>

        
<div style={{display:state.moreTools && state.moreTools.length && state.showMoreTools?'block':'none'}} ref={selector} v-ref="selector"  onMouseleave={state.showMoreTools = false} className="tiny-selector tiny-card-template__more">          
<ul  className="tiny-poplist">            

  {
    state.moreTools.map((item, index)=>(
      <li  key={index} title={item.title}  onClick={toolClick(item.click)} className={vc({ 'select-pre': state.isEnter })}>              
<Component  is={item.icon} className="tiny-svg-size"></Component>

              
{item.title}

            </li>
    ))
  }
  

          </ul>

        </div>

      </div>

    </div>

    
<div style={bodyStyle}  className="tiny-card-template__body">      
<Slot  parent_children={props.children} slots={props.slots}></Slot>

    </div>

    
<Slot name="footer" parent_children={props.children} slots={props.slots}></Slot>

  </div>


      );
    }
    