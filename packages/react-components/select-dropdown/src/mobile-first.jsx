
    import { renderless, api } from '@opentiny/vue-renderless/select-dropdown/vue'
    import '@opentiny/vue-theme/select-dropdown/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function selectDropdown(props) {
      const {placement,boundariesPadding,popperOptions,visibleArrow,appendToBody,transformOrigin,reference,popper,offset,modelValue,arrowOffset,isDropInheritWidth,title,closeByMask,searchPlaceholder} = props
      const defaultProps = {
        ...$props,
        ...props,
        placement,boundariesPadding,popperOptions,visibleArrow,appendToBody,transformOrigin,reference,popper,offset,modelValue,arrowOffset,isDropInheritWidth,title,closeByMask,searchPlaceholder
      }
      const { ref, current: vm, parent } = useVm()
      const mask=useRef()
const drawerBox=useRef()
      const { state,closeModal,handleClear,debouncedQueryChange,cancelSearch,toggleSelectedBox,selectDropdownConfirm,deleteSelected,selectedBoxConfirm } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[mask,drawerBox]
      })
      return (
          
<div style={{display:state.device === 'pc'?'block':'none'}} data-tag="tiny-select-dropdown tiny-popper"    style={{
      minWidth: state.minWidth,
      width: isDropInheritWidth ? state.minWidth : 'auto'
    }} className={vc([state.popperClass, state.visible ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'],'absolute z-[1001] border-none rounded bg-color-bg-1 shadow-md mt-1 box-border transition-[transform,opacity] ease-in-out duration-300 origin-top')}>    
<Slot  parent_children={props.children} slots={props.slots}></Slot>

  </div>

  
<div data-tag="tiny-select-dropdown tiny-popper"  style={{display:!(state.device === 'pc')?'block':'none'}} className="text-sm overflow-hidden">    


    
<div ref={mask} v-ref="mask"  onClick={closeModal($event, true)} style={{ 'z-index': state.zIndex }} className={vc([
        m(
          'fixed left-0 right-0 top-0 bottom-0 w-full h-full bg-color-bg-7 transition-[opacity] ease-linear duration-100 opacity-0',
          { 'opacity-100': state.visible }
        )
      )}></div>

    


    
<div data-tag="tiny-select-dropdown-main" ref={drawerBox} v-ref="drawerBox" style={{ 'z-index': state.zIndex }}  className={vc([
        m(
          'fixed w-full max-w-full flex flex-col justify-between bg-color-bg-1 shadow-sm border-color-border-separator max-h-[90%]',
          'min-h-[256px] left-0 bottom-0 border-t-0.5 rounded-t-lg transition-translate ease-linear duration-200 translate-y-full',
          { 'translate-y-0': state.visible }
        )
      )}>      
<div data-tag="tiny-select-dropdown-header"  className="px-4 pt-4">        
<div  className="flex mb-3">          
<span style={{display:state.showClose?'block':'none'}}  onClick={handleClear} className="inline-block h-6 leading-6 text-color-brand">{t('ui.base.clear')}</span>

          
<p  className="flex-1 text-base text-center leading-5">{title}</p>

          
<iconClose custom-class="w-5 h-5 ml-4  cursor-pointer" onClick={closeModal($event, false)}></iconClose>

        </div>

        
<div style={{display:state.filterable?'block':'none'}}  className="flex mb-3">          
<tinySearch value={state.query} onChange={(e)=>state.query = e.value} placeholder={searchPlaceholder}  onInput={debouncedQueryChange} clearable big className="flex-1 px-0"></tinySearch>

          
<span  onClick={cancelSearch} className="inline-block h-8 leading-8 text-color-text-secondary shrink-0 ml-3 text-base">{t('ui.base.cancel')}</span>

        </div>

      </div>

      
<div data-tag="tiny-select-dropdown-body"  className="px-4 pb-4 overflow-auto flex-1 scrollbar-size-0">        
<Slot  parent_children={props.children} slots={props.slots}></Slot>

      </div>

      
<div style={{display:state.multiple?'block':'none'}} data-tag="tiny-select-dropdown-footer"  className="px-4 h-18 flex justify-between items-center bg-color-bg-1 shadow-[0_-2px_6px_rgba(0,0,0,0.08)] shrink-0">        
<div >          
<span onClick={toggleSelectedBox(true)}  className="mr-2">{t('ui.select.selectedNum').replace('{num}', state.selected.length)}</span>

          
<iconChevron style={{display:state.selected.length !== 0?'block':'none'}} custom-class="w-5 h-5 cursor-pointer"></iconChevron>

        </div>

        
<tinyButton type="primary" custom-class="w-28" onClick={selectDropdownConfirm}>{t('ui.base.confirm')}</tinyButton>

      </div>

      
<div style={{display:state.multiple?'block':'none'}} data-tag="tiny-selected-box"   className={vc([state.showSelectedBox ? 'h-full p-4' : 'h-0 p-0'],'absolute left-0 bottom-0 flex flex-col w-full bg-color-bg-1 transition-all ease-linear duration-200 overflow-hidden z-[2001]')}>        
<div data-tag="tiny-selected-box-header"  className="flex h-10 justify-between items-center">          
<span  onClick={deleteSelected('', true)} className="inline-block h-6 py-1 text-color-brand">{t('ui.base.clear')}</span>

          
<iconClose custom-class="w-5 h-5 ml-4 cursor-pointer" onClick={toggleSelectedBox(false)}></iconClose>

        </div>

        
<div data-tag="tiny-selected-box-body"  className="flex-1 overflow-auto mb-3">          
<ul >            

  {
    state.selectedArr.map((item, index)=>(
      <li  key={(item.value || '') + index}  className="flex h-12 justify-between items-center">              
<span  className="mr-4 flex-1 leading-5 line-clamp-2">{item.label}</span>

              
<iconError custom-class="w-5 h-5 cursor-pointer fill-color-none-hover" onClick={deleteSelected(item)}></iconError>

            </li>
    ))
  }
  

          </ul>

        </div>

        
<div data-tag="tiny-selected-box-footer"  className="text-center">          
<tinyButton type="primary" custom-class="w-full" onClick={selectedBoxConfirm}>{t('ui.base.confirm')}</tinyButton>

        </div>

      </div>

    </div>

  </div>


      );
    }
    