
    import { renderless, api } from '@opentiny/vue-renderless/exception/vue'
    import '@opentiny/vue-theme/exception/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function exception(props) {
      const {_constants,type,subMessage,exceptionClass,pageEmpty,componentPage} = props
      const defaultProps = {
        ...$props,
        ...props,
        _constants,type,subMessage,exceptionClass,pageEmpty,componentPage
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
          
<div data-tag="tiny-exception"  className={vc([
      m(
        'flex t-0 justify-center items-center w-full h-full bg-transparent sm:bg-color-bg-1 text-center',
        exceptionClass
      )
    )}>    
<div data-tag="tiny-exception-body">      
<div  data-tag="tiny-exception-image" className="bg-cover">        
<Component is={_constants.ICONCONFIG[type.toUpperCase()]} style={{display:state.urlType?'block':'none'}} custom-class={componentPage ? 'w-24 h-24' : 'w-52 h-40'}></Component>

      </div>

      
<Slot name="content" parent_children={props.children} slots={props.slots}>        
<div data-tag="tiny-exception-description">          
<div data-tag="tiny-exception-componentpage"  className={vc(['text-color-text-primary mt-1 text-center text-sm', componentPage ? 'sm:text-xs' : 'sm:text-sm'])}>            
{t(_constants.INTERNALCONFIG[type.toUpperCase()])}

          </div>

          
<div data-tag="tiny-exception-submessage" style={{display:subMessage?'block':'none'}}  className="leading-5.5 sm:leading-3 sm:text-xs mt-1 sm:mt-2 text-color-icon-placeholder">            
{subMessage}

          </div>

          
<div  className="sm:mt-4 mt-6 inline-block">            
<Slot  parent_children={props.children} slots={props.slots}></Slot>

          </div>

        </div>

      </Slot>

    </div>

  </div>


      );
    }
    