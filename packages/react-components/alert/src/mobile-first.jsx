
    import { renderless, api } from '@opentiny/vue-renderless/alert/vue'
    import '@opentiny/vue-theme/alert/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function alert(props) {
      const {icon,type,size,description,title,closable,center,showIcon,closeText,singleLine,scrolling,showFoldable,customClass} = props
      const defaultProps = {
        ...$props,
        ...props,
        icon,type,size,description,title,closable,center,showIcon,closeText,singleLine,scrolling,showFoldable,customClass
      }
      const { ref, current: vm, parent } = useVm()
      const ContentDescribe=useRef()
const ContentDefault=useRef()
      const { state,handleHeaderClick,handleClose } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[ContentDescribe,ContentDefault]
      })
      return (
          
<transition >    
<div data-tag="tiny-alert" style={{display:state.show?'block':'none'}}  className={vc([
        m(
          'min-h-min flex py-2 sm:py-3 px-4 my-2 rounded box-border font-light sm:font-normal text-color-text-primary',
          { 'bg-color-info-primary-subtler': type === 'info' || !type },
          { 'bg-color-error-subtler': type === 'error' },
          { 'bg-color-warning-subtler': type === 'warning' },
          { 'bg-color-success-subtler': type === 'success' },
          { 'text-center': center },
          customClass
        )
      )}>      
<Component style={{display:showIcon?'block':'none'}} is={state.getIcon} custom-class="h-4.5 w-4.5 mt-1 sm:mt-0.5 sm:h-6 sm:w-5 sm:h-5 fill-current"  className={vc([
          { 'text-color-info-primary': type === 'info' || !type },
          { 'text-color-error': type === 'error' },
          { 'text-color-warning': type === 'warning' },
          { 'text-color-success': type === 'success' }
        ])}></Component>

      
<div data-tag="tiny-alert-foldable" style={{display:showFoldable?'block':'none'}}   className={vc([showIcon ? 'mx-2' : 'mr-2','flex-1 leading-6 text-sm overflow-hidden]')}>        
<div data-tag="tiny-alert-large" style={{display:size === 'large'?'block':'none'}} onClick={handleHeaderClick}  className="inline-flex cursor-pointer font-medium">          
<span data-tag="tiny-alert-title">            
<Slot name="title" parent_children={props.children} slots={props.slots}>{state.getTitle}</Slot>

          </span>

          
<span data-tag="tiny-alert-icon"  className="ml-2.5"><iconChevron   className={vc([state.contentVisible ? 'rotate-180' : 'rotate-0'],'transition-transform duration-300 align-top my-1 fill-color-icon-placeholder')}></iconChevron></span>

        </div>


        
<div data-tag="tiny-alert-content" ref={ContentDescribe} v-ref="ContentDescribe"  className={vc([
            'transition-all duration-900 ease-linear',
            { 'hidden': size === 'large' && !description && !slots.description },
            { 'overflow-y-auto': state.scrollStatus },
            state.contentVisible ? 'max-h-[theme(spacing.72)]' : 'max-h-0'
          ])}>          
<div data-tag="tiny-alert-singline"   className={vc([
              { 'truncate': singleLine },
              {
                'hover:animate-[leftMove_10s_linear_infinite] hover:overflow-visible cursor-pointer':
                  singleLine && scrolling
              }
            ],'text-color-text-secondary')}>            
<Slot name="description" parent_children={props.children} slots={props.slots}>{description}</Slot>

          </div>

        </div>


        
<div data-tag="tiny-alert-default" ref={ContentDefault} v-ref="ContentDefault" style={{display:size === 'large' && slots.default?'block':'none'}}  className={vc([
            'transition-all duration-900 ease-linear',
            { 'pt-2': description && state.contentVisible },
            { 'overflow-y-auto': state.scrollStatus },
            state.contentVisible ? 'max-h-[theme(spacing.72)]' : 'max-h-0'
          ])}>          
<Slot  parent_children={props.children} slots={props.slots}></Slot>

        </div>

      </div>

      
<div data-tag="tiny-alert-notfoldable" style={{display:!(size === 'large' && slots.default)?'block':'none'}}   className={vc([showIcon ? 'ml-2' : '', closable ? 'mr-2' : ''],'flex-1 leading-6 text-sm overflow-hidden cursor-pointer')}>        
<div data-tag="tiny-alert-large" style={{display:size === 'large'?'block':'none'}}  className="font-medium">          
<Slot name="title" parent_children={props.children} slots={props.slots}>{state.getTitle}</Slot>

        </div>

        
<div data-tag="tiny-alert-singlelinebox"  className={vc([{ 'hidden': size === 'large' && !description && !slots.description }])}>          
<div data-tag="tiny-alert-singleline"  className={vc([
              { 'truncate': singleLine },
              {
                'hover:animate-[leftMove_10s_linear_infinite] hover:overflow-visible cursor-pointer':
                  singleLine && scrolling
              }
            ])}>            
<Slot name="description" parent_children={props.children} slots={props.slots}>{description}</Slot>

          </div>

        </div>

        
<div style={{display:size === 'large' && slots.default?'block':'none'}}  className="pt-2">          
<Slot  parent_children={props.children} slots={props.slots}></Slot>

        </div>

      </div>

      
<iconClose style={{display:!closeText && closable?'block':'none'}} onClick={handleClose}  className="h-4 w-4 mt-1 cursor-pointer fill-color-text-primary opacity-70"></iconClose>

      
<span style={{display:!(!closeText && closable)?'block':'none'}} data-tag="tiny-alert-close-text" onClick={handleClose}  className="leading-6 text-sm cursor-pointer">{closeText}</span>

    </div>

  </transition>


      );
    }
    