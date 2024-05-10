
    import { renderless, api } from '@opentiny/vue-renderless/pager-item/vue'
    import '@opentiny/vue-theme/pager-item/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function pagerItem(props) {
      const {disabled,currentPage,pageCount,pagerCount,popupIcon,doubleLeftIcon,doubleRightIcon,isBeforePageChange} = props
      const defaultProps = {
        ...$props,
        ...props,
        disabled,currentPage,pageCount,pagerCount,popupIcon,doubleLeftIcon,doubleRightIcon,isBeforePageChange
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,onPagerClick,onMouseenter } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div  className="tiny-pager__group tiny-unselect">    
<ul  onClick={onPagerClick} className="tiny-pager__pages">      
<li  style={{display:pageCount > 0?'block':'none'}} text className={vc({ 'is-active': currentPage === 1 })}></li>

      
<li  style={{display:state.showPrevMore?'block':'none'}} onMouseenter={onMouseenter('left')} onMouseleave={state.quickprevIconClass = popupIcon}  className={vc([state.quickprevIconClass === popupIcon && 'is-popup'],'dot quickprev')}>        
<Component is={state.quickprevIconClass}></Component>

      </li>

      

  {
    state.pagers.map(pager=>(
      <li  key={pager}  text className={vc({ 'is-active': currentPage === pager })}></li>
    ))
  }
  

      
<li  style={{display:state.showNextMore?'block':'none'}} onMouseenter={onMouseenter('right')} onMouseleave={state.quicknextIconClass = popupIcon}  className={vc([state.quicknextIconClass === popupIcon && 'is-popup'],'dot quicknext')}>        
<Component is={state.quicknextIconClass}></Component>

      </li>

      
<li  style={{display:pageCount > 1?'block':'none'}} text className={vc({ 'is-active': pageCount === currentPage })}></li>

    </ul>

  </div>


      );
    }
    