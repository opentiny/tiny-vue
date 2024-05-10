
    import { renderless, api } from '@opentiny/vue-renderless/cascader-select/vue'
    import '@opentiny/vue-theme/cascader-select/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function cascaderSelect(props) {
      const {modelValue,options,threeDimensional,swipeDuration,visibleOptionNum,optionHeight,fieldNames,visible,valueType,valueField,textField,childrenField,disabled,textColor,lockScroll,customClass,panelCustomClass,type} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,options,threeDimensional,swipeDuration,visibleOptionNum,optionHeight,fieldNames,visible,valueType,valueField,textField,childrenField,disabled,textColor,lockScroll,customClass,panelCustomClass,type
      }
      const { ref, current: vm, parent } = useVm()
      const selectPanel=useRef()
const swipeRef=useRef()
      const { state,confirm } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[selectPanel,swipeRef]
      })
      return (
          
<div data-tag="tiny-mobile-cascader-select">    
<tinyAction custom-class={m('rounded-t-lg bg-color-bg-1', customClass)} lock-scroll={lockScroll} visible={state.actionSheetVisible} onUpdate:visible={state.actionSheetVisible = $event}>      
<div data-tag="tiny-mobile-cascader-select-body"   className="w-full h-max rounded-t-lg bg-color-bg-1 select-none overflow-hidden">        
<div data-tag="tiny-mobile-cascader-select-selectpanel" ref={selectPanel} v-ref="selectPanel"  className={vc([m('w-full h-max grid', panelCustomClass))}>          
<div data-tag="tiny-cascader-select-picker"  className="relative text-sm">            
<Slot name="top" parent_children={props.children} slots={props.slots}></Slot>

            
<div data-tag="tiny-cascader-picker__column"  style={columnStyle} className={vc([gcls('picker-column'))}>              

  {
    columnsList.map((column, columnIndex)=>(
      <div  key={columnIndex} data-tag="tiny-cascader-picker__columnitem"  className={vc([gcls('picker-columnitem'))}>                
<Slot style={{display:columnIndex > 0?'block':'none'}} name="split" parent_children={props.children} slots={props.slots}></Slot>

                
<pickerColumn ref={swipeRef} v-ref="swipeRef" column={column} disabled={isDisabled} text-color={textColor} columns-type={columnsType} field-names={columnFieldNames} value={defaultValues[columnIndex]} three-dimensional={threeDimensional} swipe-duration={swipeDuration} visible-option-num={visibleOptionNum} option-height={optionHeight} onChange={
                    (option) => {
                      changeHandler(columnIndex, option)
                    }
                  }></pickerColumn>

              </div>
    ))
  }
  

            </div>


            
<Slot name="default" parent_children={props.children} slots={props.slots}></Slot>

          </div>

        </div>

        
<div  data-tag="tiny-mobile-cascader-select-button" className="w-full h-11 mt-4 flex justify-center items-center">          
<tinyButton type="primary" size="large" custom-class={
              m(
                'h-10 sm:h-10 w-full sm:w-auto mx-4 sm:mx-0 flex justify-center items-center',
                isDisabled ? 'bg-color-icon-disabled' : 'bg-color-icon-focus'
              )
            } disabled={isDisabled} onClick={confirm}>{t('ui.button.confirm')}</tinyButton>

        </div>

      </div>

    </tinyAction>

  </div>


      );
    }
    