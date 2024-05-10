
    import { renderless, api } from '@opentiny/vue-renderless/filter-box/vue'
    import '@opentiny/vue-theme/filter-box/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function filterBox(props) {
      const {label,value,tip,placeholder,showClose,disabled,dropDownVisible,blank} = props
      const defaultProps = {
        ...$props,
        ...props,
        label,value,tip,placeholder,showClose,disabled,dropDownVisible,blank
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,handeClick,handleClear } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div  onClick={handeClick} className={vc(['tiny-filter-box', disabled && 'disabled', blank && 'is-blank'])}>    
<p  className={vc(['title', dropDownVisible && 'active'])}>      
<label >{label}</label>

      
<tinyTooltip style={{display:tip?'block':'none'}} effect="light" content={tip} placement="top">        
<iconHelp ></iconHelp>

      </tinyTooltip>

    </p>

    
<p   className={vc(['value', !value && value !== 0 && 'placeholder'],'value')}>      
{value || value === 0 ? value : placeholder}

    </p>

    
<iconError style={{display:value && showClose && !disabled?'block':'none'}}  onClick={handleClear} className="filter-icon-close"></iconError>

    
<iconArrow style={{display:!(value && showClose && !disabled)?'block':'none'}}  className={vc(['filter-box-icon', dropDownVisible && 'is-reverse'])}></iconArrow>

  </div>


      );
    }
    