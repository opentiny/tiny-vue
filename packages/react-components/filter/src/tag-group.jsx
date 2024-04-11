
    import { renderless, api } from '@opentiny/vue-renderless/filter/vue'
    import '@opentiny/vue-theme/filter/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function filter(props) {
      const {} = props
      const defaultProps = {
        ...$props,
        ...props,
        
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,selectOptionAll,selectOption } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div data-tag="tiny-filter-tag-group overflow-hidden"  className="clear-both">    
<div data-tag="tag-group-label"  style={{display:label?'block':'none'}} className="h-5 text-sm leading-5 overflow-hidden text-ellipsis whitespace-nowrap">      
{label}

    </div>

    
<div data-tag="tag-group-tags"  className="text-left -mr-3 overflow-hidden clear-both">      
<div style={{display:type === 'tag' && multiple?'block':'none'}}  style={{ width: state.tagWidth }} className={vc(['h-9 mt-3 float-left relative'])}>        
<span  onClick={selectOptionAll} className={vc([
            'h-full block p-2 text-center rounded-sm truncate cursor-pointer border-0.5 mr-3',
            state.selected.length === 0
              ? 'border-current text-color-brand bg-color-info-primary-subtler'
              : 'border-transparent bg-color-bg-2'
          ])}>{t('ui.base.all')}</span>

      </div>

      

  {
    data.map((item, index)=>(
      <div  key={index}  style={{ width: state.tagWidth }} className={vc(['h-9 mt-3 float-left relative'])}>        
<IconSubScript style={{display:state.selected.indexOf(item.value) !== -1 && multiple?'block':'none'}}  className="absolute right-3 w-4 h-4 fill-color-icon-focus"></IconSubScript>

        
<span  title={item.label} onClick={selectOption(item.value)} className={vc([
            'h-full block p-2 text-center rounded-sm truncate cursor-pointer border-0.5 mr-3',
            state.selected.indexOf(item.value) !== -1
              ? 'border-current text-color-brand bg-color-info-primary-subtler'
              : 'border-transparent bg-color-bg-2'
          ])}>{item.label}</span>

      </div>
    ))
  }
  

    </div>

  </div>


      );
    }
    