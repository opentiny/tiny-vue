
    import { renderless, api } from '@opentiny/vue-renderless/pull-refresh/vue'
    import '@opentiny/vue-theme/pull-refresh/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function pullRefresh(props) {
      const {modelValue,loosingText,animationDuration,hasMore,disabledPullDown,disabledPullUp,pullUpDistance,pullUpLoadingText,pullDownLoadingText} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,loosingText,animationDuration,hasMore,disabledPullDown,disabledPullUp,pullUpDistance,pullUpLoadingText,pullDownLoadingText
      }
      const { ref, current: vm, parent } = useVm()
      const track=useRef()
const content=useRef()
const foot=useRef()
      const { state, } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[track,content,foot]
      })
      return (
          
<div  style={state.refreshStyle} className="tiny-mobile-pull-refresh">    
<div  ref={track} v-ref="track" style={{
        'transition-duration': state.animationDuration + 'ms',
        transform: 'translate3d(0px,' + state.translate3d + 'px,0px)'
      }} className="tiny-mobile-pull-refresh__track">      
<div  className="tiny-mobile-pull-refresh__tips tiny-mobile-pull-refresh__head">        
<span style={{display:!state.pullDownLoading?'block':'none'}}>{state.pullDownReplaces}</span>


        
<Slot name="header" style={{display:state.pullDownLoading?'block':'none'}} parent_children={props.children} slots={props.slots}>          
<div style={{display:state.pullDownLoading?'block':'none'}}  className="tiny-mobile-pull-refresh-loading-content">            
<div  className={vc([
                'tiny-mobile-pull-refresh__loading',
                state.pullDownLoading ? 'tiny-mobile-pull-refresh__loading-animation' : null
              ])}>              
<div  className="tiny-mobile-pull-refresh__loading-inner"></div>

            </div>

            
<div  style={{display:state.pullDownLoadingText?'block':'none'}} className="tiny-mobile-pull-refresh__text">              
{state.pullDownLoadingText}

            </div>

          </div>

        </Slot>

      </div>

      
<div  ref={content} v-ref="content" className="tiny-mobile-pull-refresh__content">        
<Slot  parent_children={props.children} slots={props.slots}></Slot>


        
<div  style={{display:!state.disabledPullUp?'block':'none'}} ref={foot} v-ref="foot" className="tiny-mobile-pull-refresh__foot">          
<Slot name="footer" parent_children={props.children} slots={props.slots}>            
<div style={{display:state.hasMore?'block':'none'}}  className="tiny-mobile-pull-refresh-loading-content">              
<div  className="tiny-mobile-pull-refresh__loading tiny-mobile-pull-refresh__loading-animation">                
<div  className="tiny-mobile-pull-refresh__loading-inner"></div>

              </div>

              
<div  style={{display:state.pullUpLoadingText?'block':'none'}} className="tiny-mobile-pull-refresh__text">                
{state.pullUpLoadingText}

              </div>

            </div>

            
<div style={{display:!(state.pullUpLoadingText)?'block':'none'}}>{state.noMoreText}</div>

          </Slot>

        </div>

      </div>

    </div>

  </div>


      );
    }
    