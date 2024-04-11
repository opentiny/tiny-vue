
    import { renderless, api } from '@opentiny/vue-renderless/alert/vue'
    import '@opentiny/vue-theme/alert/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function alert(props) {
      const {icon,type,size,description,title,closable,center,showIcon,closeText,customClass} = props
      const defaultProps = {
        ...$props,
        ...props,
        icon,type,size,description,title,closable,center,showIcon,closeText,customClass
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,handleClose } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<transition name="tiny-transition-alert-fade">    
<div style={{display:state.show?'block':'none'}}  className={vc(['tiny-alert', 'tiny-alert--' + type, 'tiny-alert--' + size, { 'is-center': center }, customClass])}>      
<Component style={{display:showIcon?'block':'none'}} is={state.getIcon}  className="tiny-svg-size tiny-alert__icon"></Component>

      
<div   className={vc({ 'close-hidden': !closable },'tiny-alert__content')}>        
<div style={{display:size === 'large'?'block':'none'}}  className="tiny-alert__title">          
<Slot name="title" parent_children={props.children} slots={props.slots}>            
{state.getTitle}

          </Slot>

        </div>

        
<div  className={vc([
            'tiny-alert__description',
            {
              'is-hide': size === 'large' && !description && !slots.description
            }
          ])}>          
<Slot name="description" parent_children={props.children} slots={props.slots}>            
{description}

          </Slot>

        </div>

        
<div style={{display:size === 'large'?'block':'none'}}  className="tiny-alert__opration">          
<Slot  parent_children={props.children} slots={props.slots}></Slot>

        </div>

      </div>

      
<iconClose style={{display:!closeText && closable?'block':'none'}} onClick={handleClose}  className="tiny-svg-size tiny-alert__icon tiny-alert__close"></iconClose>

      
<span  style={{display:!(!closeText && closable)?'block':'none'}} className="is-custom"><Slot name="close" parent_children={props.children} slots={props.slots}></Slot></span>

      
<span style={{display:!(!(!closeText && closable))?'block':'none'}} onClick={handleClose}  className="is-custom">{closeText}</span>

    </div>

  </transition>


      );
    }
    