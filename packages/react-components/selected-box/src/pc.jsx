
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
          
<div  className="tiny-selected-box">    
<div  className="tiny-selected-box__header">      
<div  className="tiny-selected-box__header-select">        
<Slot name="select" params={state.slotParams} parent_children={props.children} slots={props.slots}>          
<span  className="tiny-selected-box__header-select-label">{i18nSelected()}</span>

        </Slot>

      </div>

      
<div  className="tiny-selected-box__header-right">        
<Slot name="button" params={state.slotParams} parent_children={props.children} slots={props.slots}></Slot>

        
<Slot name="clear" params={state.slotParams} clear={handleClear} parent_children={props.children} slots={props.slots}>          
<div  onClick={handleClear} className="tiny-selected-box__header-right-label">{t('ui.selectedBox.clear')}</div>

        </Slot>

      </div>

    </div>

    
<div ref={list} v-ref="list"  className={vc(['tiny-selected-box__list', { 'tiny-selected-box__list--inverse': state.inverse }])}>      

  {
    state.select.map((option, i)=>(
      <div  key={`o${i}-${state.refresh}`} data-key={keyOption(option)} data-tag="tiny-selected-box-item"  className="tiny-selected-box__item">        
<div  className="tiny-selected-box__item-grid">          
<div  className="tiny-selected-box__item-grid-left">            
<Slot name="option" params={state.slotParams} option={option} mouseenter={handleMouseenter} mouseleave={handleMouseleave} parent_children={props.children} slots={props.slots}>              
<div  className="tiny-selected-box__item-grid-left-label">                
<div  onMouseenter={handleMouseenter} onMouseleave={handleMouseleave} className="tiny-selected-box__item-grid-left-label-pri">                  
{textPrimary(option)}

                </div>

              </div>

              
<div style={{display:state.showAuxi?'block':'none'}}  className="tiny-selected-box__item-grid-left-text">                
<div  onMouseenter={handleMouseenter} onMouseleave={handleMouseleave} className="tiny-selected-box__item-grid-left-text-aux">                  
{textAuxi(option)}

                </div>

              </div>

            </Slot>

          </div>

          
<div >            
<Slot name="close" params={state.slotParams} option={option} close={handleDelete} parent_children={props.children} slots={props.slots}>              
<div  className="tiny-selected-box__item-grid-right">                
<iconClose onClick={handleDelete(option)}></iconClose>

              </div>

            </Slot>

          </div>

        </div>

      </div>
    ))
  }
  

    </div>

    
<tinyPopover ref={popover} v-ref="popover" trigger="manual"  content={state.popoverContent} value={state.popoverVisible} onChange={(e)=>state.popoverVisible = e.value} className="tiny-selected-box__popover"></tinyPopover>

  </div>


      );
    }
    