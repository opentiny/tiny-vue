
    import { renderless, api } from '@opentiny/vue-renderless/list/vue'
    import '@opentiny/vue-theme/list/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function list(props) {
      const {content,subText,contentDes,list,id} = props
      const defaultProps = {
        ...$props,
        ...props,
        content,subText,contentDes,list,id
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,clickList } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div   onClick={clickList} className={vc({ 'is-show-prefix': slots.prefix, 'is-padding': list },'tiny-mobile-list')}>    
<div  style={{display:slots.prefix?'block':'none'}} className="tiny-mobile-list__prefix">      
<Slot name="prefix" parent_children={props.children} slots={props.slots}></Slot>

    </div>

    
<div  className="tiny-mobile-list__content">      
<div  className="tiny-mobile-list__content-text">        
<Slot  parent_children={props.children} slots={props.slots}>          
<span  className="tiny-mobile-list__main-text">{content}</span>

        </Slot>

        
<span style={{display:subText?'block':'none'}}  className="tiny-mobile-list__sub-text">{subText}</span>

      </div>

      
<div style={{display:slots.description?'block':'none'}}  className="tiny-mobile-list__content-des">        
<Slot name="description" parent_children={props.children} slots={props.slots}></Slot>

      </div>

      
<p style={{display:contentDes?'block':'none'}}  className="tiny-mobile-list__content-des">        
{contentDes}

      </p>

    </div>

    
<div style={{display:slots.suffix?'block':'none'}}  className="tiny-mobile-list__suffix">      
<Slot name="suffix" parent_children={props.children} slots={props.slots}></Slot>

    </div>

  </div>


      );
    }
    