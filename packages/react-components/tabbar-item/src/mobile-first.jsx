
    import { renderless, api } from '@opentiny/vue-renderless/tabbar-item/vue'
    import '@opentiny/vue-theme/tabbar-item/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function tabbarItem(props) {
      const {dot,icon,name,badge,text,customIcon} = props
      const defaultProps = {
        ...$props,
        ...props,
        dot,icon,name,badge,text,customIcon
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,onClick } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div data-tag="tiny-tabbar-item" style={{display:state.showVm?'block':'none'}}  style={{ color: state.renderColor }} onClick={onClick} className={vc([
      m(
        'flex flex-1 flex-col items-center justify-center cursor-pointer mx-0.5 [&:first-of-type]:ml-1 [&:last-of-type]:mr-1',
        state.customIcon ? 'my-1.5' : 'my-1'
      )
    )}>    
<div data-tag="tiny-tabbar-item-icon"  className={vc([
        'relative pointer-events-none',
        state.customIcon ? 'w-11 h-11 [&_svg]:w-11 [&_svg]:h-11' : 'w-6 h-6 [&_svg]:w-6 [&_svg]:h-6 my-1'
      ])}>      
<Slot name="icon" active={state.renderActive} parent_children={props.children} slots={props.slots}>        
<tinyBadge type="icon" value={badge} style={{display:badge?'block':'none'}}>          
<Component is={icon}  style={{ fill: state.renderColor }} className={vc({ 'fill-color-brand': state.renderActive || state.customIcon })}></Component>

        </tinyBadge>

        
<tinyBadge type="icon" is-dot={dot} style={{display:!(badge)?'block':'none'}}>          
<Component is={icon}  style={{ fill: state.renderColor }} className={vc({ 'fill-color-brand': state.renderActive || state.customIcon })}></Component>

        </tinyBadge>

        
<Component style={{display:!(!(badge))?'block':'none'}} is={icon}  style={{ fill: state.renderColor }} className={vc({ 'fill-color-brand': state.renderActive || state.customIcon })}></Component>

      </Slot>

    </div>

    
<div style={{display:!state.customIcon?'block':'none'}} data-tag="tiny-tabbar-item-title"  style={{ color: state.renderColor, width: state.itemWidth }} className={vc([
        'pointer-events-none overflow-hidden whitespace-nowrap text-ellipsis text-xs text-center leading-3',
        { 'text-color-brand': state.renderActive }
      ])}>      
<Slot  parent_children={props.children} slots={props.slots}>{text || name}</Slot>

    </div>

  </div>


      );
    }
    