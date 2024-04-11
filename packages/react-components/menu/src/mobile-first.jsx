
    import { renderless, api } from '@opentiny/vue-renderless/menu/vue'
    import '@opentiny/vue-theme/menu/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function menu(props) {
      const {} = props
      const defaultProps = {
        ...$props,
        ...props,
        
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,filterInput } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div data-tag="tiny-menu"   className={vc([widthAdapt ? 'w-full' : 'w-28 sm:w-56'],'h-full pt-0 sm:pt-4 bg-color-bg-2 sm:bg-color-bg-1 overflow-y-auto')}>    
<div data-tag="tiny-menu-filter" style={{display:showFilter?'block':'none'}}  className="px-6 pb-3 pt-0 hidden sm:block [&_svg]:fill-color-text-placeholder">      
<tinyInput value={state.filterText} onChange={(e)=>state.filterText = e.value} onUpdate:modelValue={filterInput($event)} suffix-icon={searchIcon} placeholder={t('ui.treeMenu.placeholder')}></tinyInput>

    </div>

    
<div data-tag="tiny-menu-empty" style={{display:state.isEmpty?'block':'none'}}  className="relative w-full min-h-[theme(spacing.16)]">      
<tinyException component-page type="noresult" tiny_mode="mobile-first" tiny_mode_root></tinyException>

    </div>

    
<div data-tag="tiny-slot-empty" style={{display:!data.length?'block':'none'}}>      
<Slot name="empty" parent_children={props.children} slots={props.slots}>        
<div  className="relative w-full min-h-[theme(spacing.16)] flex justify-center items-center">          
<span >{emptyText || t('ui.tree.emptyText')}</span>

        </div>

      </Slot>

    </div>

    

  {
    state.filterValue ? state.filterData : state.data.map((item, index)=>(
      <menuNode  style={{display:!item.hidden?'block':'none'}} key={item.id || index} nodes={item} depth={1} current-paths={state.currentPaths} expanded-keys-path={state.expandedKeysPath} actived-keys-path={state.activedKeysPath} actived-keys={state.activedKeys} only-check-children={onlyCheckChildren}>    </menuNode>
    ))
  }
  

  </div>


      );
    }
    