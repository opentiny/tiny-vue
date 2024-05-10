
    import { renderless, api } from '@opentiny/vue-renderless/cascader-view/vue'
    import '@opentiny/vue-theme/cascader-view/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function cascaderView(props) {
      const {selected,ellipsis,option,textField,textField2,textField3,loading} = props
      const defaultProps = {
        ...$props,
        ...props,
        selected,ellipsis,option,textField,textField2,textField3,loading
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
          
<div  onClick={$emit('click', $event)} className="flex items-start leading-6 cursor-pointer select-none">    
<span style={{display:option?'block':'none'}}  onClick={$emit('check', option)} className="w-11 h-11 flex-none flex items-center justify-center relative">      
<div  className="absolute left-0 right-0 top-0 bottom-0 z-10"></div>

      
<tinyCheckbox custom-class="flex h-full w-full items-center justify-center" model-value={!option.indeterminate && option.checked} indeterminate={option.indeterminate} disabled={data.disabled}></tinyCheckbox>

    </span>

    
<div  onClick={$emit('expand', option)} className={vc(['flex-auto flex w-full text-sm py-3', { 'truncate': ellipsis }])}>      
<Slot  parent_children={props.children} slots={props.slots}>        
<div  className={vc(['flex-auto', { 'truncate': ellipsis }])}>          
<div  className="flex">            
<div  className={vc([{ 'min-w-[theme(spacing.14)]': !textField3 }, { 'truncate': ellipsis }])}>              
{data[textField]}

            </div>

            
<div style={{display:textField2?'block':'none'}}  className={vc(['ml-5 text-color-text-placeholder', { 'truncate': ellipsis }])}>              
{data[textField2]}

            </div>

          </div>

          
<div style={{display:textField3?'block':'none'}}  className={vc(['text-color-text-placeholder', { 'truncate': ellipsis }])}>            
{data[textField3]}

          </div>

        </div>

        
<div style={{display:!loading && !option.isLeaf?'block':'none'}}  className="flex flex-none w-8 items-center justify-end ml-2">          
<IconChevronRight custom-class="w-4 h-4 fill-current"></IconChevronRight>

        </div>

        
<div style={{display:option.loading?'block':'none'}}  className="flex flex-none w-5 items-center justify-center ml-2">          
<svg  viewBox="25 25 50 50" className="animate-[spin_1.5s_linear_infinite] fill-current">            
<circle  cx="50" cy="50" r="24" fill="none" className="stroke-color-brand tiny-loading-path"></circle>

          </svg>

        </div>

      </Slot>

    </div>

  </div>


      );
    }
    