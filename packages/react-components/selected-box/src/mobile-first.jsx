
    import { renderless, api } from '@opentiny/vue-renderless/selected-box/vue'
    import '@opentiny/vue-theme/selected-box/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function selectedBox(props) {
      const {inverse,total,select,config} = props
      const defaultProps = {
        ...$props,
        ...props,
        inverse,total,select,config
      }
      const { ref, current: vm, parent } = useVm()
      const list=useRef()
const popover=useRef()
      const { state,handleClear,handleMouseenter,handleMouseleave,handleDelete } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[list,popover]
      })
      return (
          
<div data-tag="tiny-selected-box"  className="h-full mx-2 grid grid-cols-1 grid-rows-[theme(spacing.9)_auto] bg-color-bg-1">    
<div data-tag="tiny-selected-box-content"  className="flex justify-between items-center text-xs text-color-text-primary px-2">      
<div data-tag="tiny-selected-box-select"  className="max-w-[theme(spacing.32)]">        
<Slot name="select" params={state.slotParams} parent_children={props.children} slots={props.slots}>          
<span  className="cursor-pointer">{i18nSelected()}</span>

        </Slot>

      </div>

      
<div data-tag="tiny-selected-box-clear"  className="flex space-x-2 select-none text-color-brand">        
<Slot name="button" params={state.slotParams} parent_children={props.children} slots={props.slots}></Slot>

        
<Slot name="clear" params={state.slotParams} clear={handleClear} parent_children={props.children} slots={props.slots}>          
<div style={{display:state.showClear?'block':'none'}}  onClick={handleClear} className="cursor-pointer">{t('ui.selectedBox.clear')}</div>

        </Slot>

      </div>

    </div>

    
<div data-tag="tiny-selected-box-list" ref={list} v-ref="list"  className={vc([
        'overflow-x-hidden overflow-y-auto text-xs text-color-text-primary',
        { 'line-through decoration-solid decoration-color-text-primary': state.inverse }
      ])}>      

  {
    state.select.map((option, i)=>(
      <div  key={`o${i}-${state.refresh}`} data-key={keyOption(option)} data-tag="tiny-selected-box-item"  className="cursor-pointer hover:bg-color-bg-2 px-2 rounded-sm">        
<div  data-tag="tiny-selected-box-option" className="grid grid-cols-[auto_theme(spacing.6)]">          
<div  data-tag="tiny-selected-box-truncate" className="truncate">            
<Slot name="option" params={state.slotParams} option={option} mouseenter={handleMouseenter} mouseleave={handleMouseleave} parent_children={props.children} slots={props.slots}>              
<div  className="h-7 truncate translate-y-1">                
<div  onMouseenter={handleMouseenter} onMouseleave={handleMouseleave} className="truncate relative top-1/2 -translate-y-1/2">                  
{textPrimary(option)}

                </div>

              </div>

              
<div style={{display:state.showAuxi?'block':'none'}}  className="h-7 truncate -translate-y-1">                
<div  onMouseenter={handleMouseenter} onMouseleave={handleMouseleave} className="truncate text-color-text-placeholder relative top-1/2 -translate-y-1/2">                  
{textAuxi(option)}

                </div>

              </div>

            </Slot>

          </div>

          
<div data-tag="tiny-selected-box-close">            
<Slot name="close" params={state.slotParams} option={option} close={handleDelete} parent_children={props.children} slots={props.slots}>              
<div data-tag="tiny-selected-box-icon"  className={vc([
                  'h-7 translate-y-1 flex items-center justify-end',
                  'fill-color-icon-primary hover:fill-color-icon-hover'
                ])}>                
<iconClose onClick={handleDelete(option)}></iconClose>

              </div>

            </Slot>

          </div>

        </div>

      </div>
    ))
  }
  

    </div>

    
<tinyPopover ref={popover} v-ref="popover" trigger="manual"  content={state.popoverContent} value={state.popoverVisible} onChange={(e)=>state.popoverVisible = e.value} className="hidden"></tinyPopover>

  </div>


      );
    }
    