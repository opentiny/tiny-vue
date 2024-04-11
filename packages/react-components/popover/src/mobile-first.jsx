
    import { renderless, api } from '@opentiny/vue-renderless/popover/vue'
    import '@opentiny/vue-theme/popover/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function popover(props) {
      const {} = props
      const defaultProps = {
        ...$props,
        ...props,
        
      }
      const { ref, current: vm, parent } = useVm()
      const root=useRef()
const popper=useRef()
const wrapper=useRef()
      const { state,handleAfterEnter,handleAfterLeave } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[root,popper,wrapper]
      })
      return (
          
<span ref={root} v-ref="root"  className={vc([$attrs.class)}>    
<transition name={transition} onAfter={handleAfterEnter} onAfter={handleAfterLeave}>      
<div data-tag="tiny-popover tiny-popper"  ref={popper} v-ref="popper" style={{display:!disabled && state.showPopper?'block':'none'}} style={{ width: width + 'px' }} role="tooltip" id={state.tooltipId} aria-hidden={disabled || !state.showPopper ? 'true' : 'false'} className={vc([m(gcls('popper'), popperClass)])}>        
<div  data-tag="tiny-popover-arrow" className="hidden sm:block">          
<Slot style={{display:slots.header?'block':'none'}} name="header" parent_children={props.children} slots={props.slots}></Slot>

          
<div style={{display:!(slots.header)?'block':'none'}}  text className={vc([gcls('title')])}></div>

          
<Slot  parent_children={props.children} slots={props.slots}>{content}</Slot>

          
<Slot name="footer" parent_children={props.children} slots={props.slots}></Slot>

          
<div data-tag="tiny-popover-visible" style={{display:visibleArrow?'block':'none'}} x-arrow  className={vc([gcls('arrow'), gcls('placement-' + state.xPlacement.split('-')[0])])}></div>

        </div>

        
<div data-tag="tiny-popover-body"  className={vc([
            'sm:hidden block fixed left-0 right-0 top-0 bottom-0 text-sm text-color-text-primary transition-top ease-out duration-300',
            `before:content-[''] before:fixed before:left-0 before:right-0 before:top-0 before:bottom-0 before:w-full before:h-full before:bg-color-bg-7`
          ])}>          
<div  className={vc(['absolute bottom-0 top-auto left-1/2 -translate-x-1/2 w-full max-h-full p-3 pointer-events-auto'])}>            
<div  className="flex flex-col w-full h-full rounded-lg overflow-hidden shadow-xl bg-color-bg-1">              
<div data-tag="tiny-popover-header"  className="flex items-center leading-6 text-sm px-6 pt-5">                
<span  className="flex-auto text-base truncate font-semibold">{title || t('ui.alert.title')}</span>

                
<iconClose onClick={state.showPopper = false}></iconClose>

              </div>

              
<div data-tag="tiny-popover-content"  className="flex flex-auto leading-5 overflow-auto mx-6 mt-4 mb-5">                
<Slot  parent_children={props.children} slots={props.slots}> 
{content}</Slot>

              </div>

              
<div data-tag="tiny-popover-footer" style={{display:slots.footer?'block':'none'}}  className="w-full py-2.5 px-6 border-t-0.5 border-color-border-separator text-center">                
<Slot name="footer" parent_children={props.children} slots={props.slots}></Slot>

              </div>

            </div>

          </div>

        </div>

      </div>

    </transition>

    
<span data-tag="tiny-popover-reference" ref={wrapper} v-ref="wrapper">      
<Slot name="reference" parent_children={props.children} slots={props.slots}></Slot>

    </span>

  </span>


      );
    }
    