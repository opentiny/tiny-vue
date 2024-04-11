
    import { renderless, api } from '@opentiny/vue-renderless/month-range/vue'
    import '@opentiny/vue-theme/month-range/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function monthRange(props) {
      const {emitter} = props
      const defaultProps = {
        ...$props,
        ...props,
        emitter
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,handleShortcutClick,leftPrevYear,leftNextYear,handleChangeRange,handleRangePick,rightPrevYear,rightNextYear } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<transition name="tiny-zoom-in-top" onAfter={$emit('dodestroy')}>    
<div style={{display:state.visible?'block':'none'}}   className={vc([
        {
          'has-sidebar': slots.sidebar || state.shortcuts
        },
        state.popperClass
      ],'tiny-picker-panel tiny-date-range-picker tiny-popper')}>      
<div  className="tiny-picker-panel__body-wrapper">        
<Slot name="sidebar"  parent_children={props.children} slots={props.slots} className="tiny-picker-panel__sidebar"></Slot>

        
<div  style={{display:state.shortcuts?'block':'none'}} className="tiny-picker-panel__sidebar">          

  {
    state.shortcuts.map((shortcut, key)=>(
      <button type="button"   key={key} onClick={handleShortcutClick(shortcut)} title={shortcut.text} className="tiny-picker-panel__shortcut">            
{shortcut.text}

          </button>
    ))
  }
  

        </div>

        
<div  className="tiny-picker-panel__body">          
<div  className="tiny-picker-panel__content tiny-date-range-picker__content is-left">            
<div  className="tiny-date-range-picker__header">              
<button type="button" onClick={leftPrevYear}  className="tiny-picker-panel__icon-btn tiny-icon-d-arrow-left">                
<iconDouble ></iconDouble>

              </button>

              
<button type="button" style={{display:state.unlinkPanels?'block':'none'}} onClick={leftNextYear} disabled={!state.enableYearArrow}   className={vc({ 'is-disabled': !state.enableYearArrow },'tiny-picker-panel__icon-btn tiny-icon-d-arrow-right')}>                
<iconDouble ></iconDouble>

              </button>

              
<div >{state.leftLabel}</div>

            </div>

            
<monthTable selection-mode="range" date={state.leftDate} default-value={state.defaultValue} min-date={state.minDate} max-date={state.maxDate} range-state={state.rangeState} disabled-date={state.disabledDate} onChangerange={handleChangeRange} onPick={handleRangePick}>            </monthTable>

          </div>

          
<div  className="tiny-picker-panel__content tiny-date-range-picker__content is-right">            
<div  className="tiny-date-range-picker__header">              
<button type="button" style={{display:state.unlinkPanels?'block':'none'}} onClick={rightPrevYear} disabled={!state.enableYearArrow}   className={vc({ 'is-disabled': !state.enableYearArrow },'tiny-picker-panel__icon-btn tiny-icon-d-arrow-left')}>                
<iconDouble ></iconDouble>

              </button>

              
<button type="button" onClick={rightNextYear}  className="tiny-picker-panel__icon-btn tiny-icon-d-arrow-right">                
<iconDouble ></iconDouble>

              </button>

              
<div >{state.rightLabel}</div>

            </div>

            
<monthTable selection-mode="range" date={state.rightDate} default-value={state.defaultValue} min-date={state.minDate} max-date={state.maxDate} range-state={state.rangeState} disabled-date={state.disabledDate} onChangerange={handleChangeRange} onPick={handleRangePick}>            </monthTable>

          </div>

        </div>

      </div>

    </div>

  </transition>


      );
    }
    