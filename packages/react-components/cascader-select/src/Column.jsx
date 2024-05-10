
    import { renderless, api } from '@opentiny/vue-renderless/cascader-select/vue'
    import '@opentiny/vue-theme/cascader-select/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function cascaderSelect(props) {
      const {value,columnsType,column,threeDimensional,swipeDuration,visibleOptionNum,optionHeight,fieldNames,default,disabled,textColor} = props
      const defaultProps = {
        ...$props,
        ...props,
        value,columnsType,column,threeDimensional,swipeDuration,visibleOptionNum,optionHeight,fieldNames,default,disabled,textColor
      }
      const { ref, current: vm, parent } = useVm()
      const roller=useRef()
      const { state,onTouchStart,onTouchMove,onTouchEnd,stopMomentum } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[roller]
      })
      return (
          
<div data-tag="tiny-cascader-picker__list"  onTouchstart={onTouchStart} onTouchmove={onTouchMove} onTouchend={onTouchEnd} className={vc([gcls('col-list'))}>    
<div ref={roller} v-ref="roller" data-tag="tiny-cascader-picker-roller"  style={threeDimensional ? state.touchRollerStyle : state.touchTileStyle} onTransitionend={stopMomentum} className={vc([gcls('col-roller'))}>      

  {
    column.map((item, index)=>(
      <div  key={item[fieldNames.value] || index}>        


        
<div style={{display:item && item[fieldNames.text] && threeDimensional?'block':'none'}} data-tag="tiny-cascader-picker-roller-item"  style={setRollerStyle(index + 1)} className={vc([
            m(
              gcls('col-roller-item'),
              { 'invisible opacity-0': isHidden(index + 1) },
              { 'text-color-brand': item === column[state.currIndex - 1] },
              { 'text-color-icon-disabled': item === column[state.currIndex - 1] && disabled }
            )
          )}>          
{item[fieldNames.text]}

        </div>

        


        
<div style={{display:item && item[fieldNames.text] && !threeDimensional?'block':'none'}} data-tag="tiny-cascader-picker-roller-item-tile"  style={{ height: pxCheck(optionHeight), lineHeight: pxCheck(optionHeight) }} className={vc([
            m(
              gcls('col-item-tile'),
              textColor.default || 'text-color-text-primary',
              { [textColor.third || 'text-color-icon-placeholder']: OptionStyle(item, column, 2) },
              { [textColor.second || 'text-color-icon-secondary']: OptionStyle(item, column, 1) },
              { [textColor.first || 'text-color-icon-focus']: OptionStyle(item, column, 0) },
              { [textColor.disabled || 'text-color-icon-disabled']: OptionStyle(item, column, 0) && disabled }
            )
          )}>          
{item[fieldNames.text]}

        </div>

      </div>
    ))
  }
  

    </div>

    
<div data-tag="tiny-cascader-picker-roller-mask"  style={state.maskStyles} className={vc([gcls('col-roller-mask'))}></div>

  </div>


      );
    }
    