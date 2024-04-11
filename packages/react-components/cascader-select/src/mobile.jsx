
    import { renderless, api } from '@opentiny/vue-renderless/cascader-select/vue'
    import '@opentiny/vue-theme/cascader-select/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function cascaderSelect(props) {
      const {modelValue,options,visible,cycleRoll,valueType,valueField,textField,disabled,textColor} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,options,visible,cycleRoll,valueType,valueField,textField,disabled,textColor
      }
      const { ref, current: vm, parent } = useVm()
      const selectPanel=useRef()
      const { state,handleTouchstart,confirm } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[selectPanel]
      })
      return (
          
<tinyAction data-tag="tiny-mobile-cascader-select" content-class="rounded-t-lg bg-white" visible={state.actionSheetVisible} onUpdate:visible={state.actionSheetVisible = $event}>    
<div   className="w-full h-max rounded-t-lg bg-white select-none overflow-hidden">      
<div ref={selectPanel} v-ref="selectPanel"  className={vc([
          'w-full h-max grid',
          { 'grid-cols-1': state.selectorCount === 1 },
          { 'grid-cols-2': state.selectorCount === 2 },
          { 'grid-cols-3': state.selectorCount === 3 }
        ])}>        

  {
    state.selectorCount.map((v, i)=>(
      <div  key={`s${i}`}  style="transform: translate3d(0, 0, 0)" onTouchstart={handleTouchstart} onTouchend={($event) => handleTouchend($event, i)} onTouchmove={($event) => throttledHandleTouchmove($event, i)} className="h-40">          

  {
    state[`selector${i}`].visibleOptions.map((option, j)=>(
      <div  data-tag="tiny-mobile-cs-option" date-status={statusOpt(option)} data-option={option[valueField]} key={`s${i}o${j}`}  className={vc([
              m(
                'w-full h-8 flex justify-center items-center cursor-pointer relative',
                { 'text-xs': styleOpt(option) === 2 },
                { 'text-sm': styleOpt(option) === 1 },
                { 'text-base': styleOpt(option) === 0 },
                { [textColor.third || 'text-color-icon-placeholder']: styleOpt(option) === 2 },
                { [textColor.second || 'text-color-icon-secondary']: styleOpt(option) === 1 },
                { [textColor.first || 'text-color-icon-focus']: styleOpt(option) === 0 },
                { [textColor.disabled || 'text-color-icon-disabled']: statusOpt(option) === 'disabled' }
              )
            )}>            
<Slot name="option" { i, j, option } parent_children={props.children} slots={props.slots}>              
{option[textField]}

            </Slot>

          </div>
    ))
  }
  

        </div>
    ))
  }
  

      </div>

      
<div  className="w-full h-11 flex justify-center items-center">        
<tinyButton type="primary" size="large"  disabled={state.confirmDisabled} onClick={confirm} className="bg-color-icon-focus h-10 flex justify-center items-center">{t('ui.button.confirm')}</tinyButton>

      </div>

    </div>

  </tinyAction>


      );
    }
    