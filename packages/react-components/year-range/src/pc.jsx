
    import { renderless, api } from '@opentiny/vue-renderless/year-range/vue'
    import '@opentiny/vue-theme/year-range/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function yearRange(props) {
      const {emitter} = props
      const defaultProps = {
        ...$props,
        ...props,
        emitter
      }
      const { ref, current: vm, parent } = useVm()
      const leftYearTable=useRef()
const rightRearTable=useRef()
      const { state,handleShortcutClick,leftPrevYear,handleChangeRange,handleRangePick,rightNextYear } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[leftYearTable,rightRearTable]
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

              
<div >{state.leftLabel}</div>

            </div>

            
<yearTable ref={leftYearTable} v-ref="leftYearTable" selection-mode={state.selectionMode} date={state.leftDate} default-value={state.defaultValue} min-date={state.minDate} max-date={state.maxDate} range-state={state.rangeState} disabled-date={state.disabledDate} start-year={state.leftStartYear} onChangerange={handleChangeRange} onPick={handleRangePick}>            </yearTable>

          </div>

          
<div  className="tiny-picker-panel__content tiny-date-range-picker__content is-right">            
<div  className="tiny-date-range-picker__header">              
<button type="button" onClick={rightNextYear}  className="tiny-picker-panel__icon-btn tiny-icon-d-arrow-right">                
<iconDouble ></iconDouble>

              </button>

              
<div >{state.rightLabel}</div>

            </div>

            
<yearTable ref={rightRearTable} v-ref="rightRearTable" selection-mode={state.selectionMode} date={state.rightDate} default-value={state.defaultValue} min-date={state.minDate} max-date={state.maxDate} range-state={state.rangeState} disabled-date={state.disabledDate} start-year={state.rightStartYear} onChangerange={handleChangeRange} onPick={handleRangePick}>            </yearTable>

          </div>

        </div>

      </div>

    </div>

  </transition>


      );
    }
    