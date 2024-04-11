
    import { renderless, api } from '@opentiny/vue-renderless/select-mobile/vue'
    import '@opentiny/vue-theme/select-mobile/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function selectMobile(props) {
      const {selected,ellipsis,multiple,option,textField,textField2,textField3} = props
      const defaultProps = {
        ...$props,
        ...props,
        selected,ellipsis,multiple,option,textField,textField2,textField3
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state, } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div  onClick={$emit('click', $event)} className="flex items-start leading-6 py-3 cursor-pointer select-none">    
<Component style={{display:multiple?'block':'none'}} is={selected ? 'icon-checked-sur' : 'icon-check'}  custom-class="w-4.5 h-4.5" className={vc(['flex-none mt-1 mr-2', selected ? 'fill-color-brand' : 'fill-color-icon-disabled'])}></Component>

    
<div  className={vc([
        'flex-auto flex w-full text-sm',
        { 'truncate': ellipsis },
        { 'text-color-brand': !multiple && selected }
      ])}>      
<Slot  parent_children={props.children} slots={props.slots}>        
<div  className={vc(['flex-auto', { 'truncate': ellipsis }])}>          
<div  className="flex">            
<div  className={vc([{ 'min-w-[3.75rem]': !textField3 }, { 'truncate': ellipsis }])}>{option[textField]}</div>

            
<div style={{display:textField2?'block':'none'}}  className={vc(['ml-5 text-color-text-placeholder', { 'truncate': ellipsis }])}>              
{option[textField2]}

            </div>

          </div>

          
<div style={{display:textField3?'block':'none'}}  className={vc(['text-color-text-placeholder', { 'truncate': ellipsis }])}>            
{option[textField3]}

          </div>

        </div>

        
<div style={{display:!multiple && selected?'block':'none'}}  className="flex flex-none w-5 items-center justify-center ml-2">          
<IconYes custom-class="w-5 h-5"  className="fill-color-brand"></IconYes>

        </div>

      </Slot>

    </div>

  </div>


      );
    }
    