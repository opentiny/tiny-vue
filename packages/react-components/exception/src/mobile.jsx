
    import { renderless, api } from '@opentiny/vue-renderless/exception/vue'
    import '@opentiny/vue-theme/exception/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function exception(props) {
      const {type,message,subMessage,exceptionClass,buttonText,imageUrl} = props
      const defaultProps = {
        ...$props,
        ...props,
        type,message,subMessage,exceptionClass,buttonText,imageUrl
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,create } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div   className={vc([exceptionClass,'tiny-mobile-exception]')}>    
<div  className="tiny-mobile-exception__content">      
<img style={{display:imageUrl?'block':'none'}} src={imageUrl}  className="tiny-mobile-exception__image"></img>

      
<div style={{display:!(imageUrl)?'block':'none'}}   className={vc(['tiny-mobile-exception__content-' + type],'tiny-mobile-exception__content-view')}></div>

      
<Slot name="content" parent_children={props.children} slots={props.slots}>        
<div  className="tiny-mobile-exception__content-message">          
<div  className="main-message">            
{state.message}

          </div>

          
<div style={{display:subMessage?'block':'none'}}  className="sub-message">            
{subMessage}

          </div>

          
<Slot style={{display:type === 'nodata'?'block':'none'}} parent_children={props.children} slots={props.slots}>            
<tinyButton onClick={create} type="primary" size="medium" round>              
{buttonText ? buttonText : t('ui.exception.create')}

            </tinyButton>

          </Slot>

        </div>

      </Slot>

    </div>

    
<div  className="tiny-mobile-exception__footer">      
<Slot name="footer" parent_children={props.children} slots={props.slots}></Slot>

    </div>

  </div>


      );
    }
    