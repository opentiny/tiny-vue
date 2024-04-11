
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
          
<div data-tag="tiny-pager-item"  className={vc([gcls('pager-group'))}>    
<ul data-tag="pager-item-content"  onClick={onPagerClick} className="inline-flex text-xs">      
<li data-tag="pager-item-hover"  style={{display:pageCount > 0?'block':'none'}} text className={vc([m(gcls('li'), gcls('li-hover'), gcls({ 'is-active': currentPage === 1 })))}></li>

      
<li data-tag="pager-item-premore"  style={{display:state.showPrevMore?'block':'none'}} onMouseenter={onMouseenter('left')} onMouseleave={state.quickprevIconClass = popupIcon} className={vc([m(gcls('li'), gcls('dot')))}>        
<Component  is={state.quickprevIconClass} className={vc([gcls('quick-icon'))}></Component>

      </li>

      

  {
    state.pagers.map(pager=>(
      <li data-tag="pager-item-pager"  key={pager}  text className={vc([m(gcls('li'), gcls('li-hover'), gcls({ 'is-active': currentPage === pager })))}></li>
    ))
  }
  

      
<li data-tag="pager-item-nextmore"  style={{display:state.showNextMore?'block':'none'}} onMouseenter={onMouseenter('right')} onMouseleave={state.quicknextIconClass = popupIcon} className={vc([m(gcls('li'), gcls('dot')))}>        
<Component  is={state.quicknextIconClass} className={vc([gcls('quick-icon'))}></Component>

      </li>

      
<li data-tag="pager-item-active"   style={{display:pageCount > 1?'block':'none'}} text className={vc([m(gcls('li'), gcls({ 'is-active': pageCount === currentPage })),'hover:text-color-brand-hover]')}></li>

    </ul>

  </div>


      );
    }
    