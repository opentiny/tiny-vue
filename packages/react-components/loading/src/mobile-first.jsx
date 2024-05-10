
    import { renderless, api } from '@opentiny/vue-renderless/loading/vue'
    import '@opentiny/vue-theme/loading/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function loading(props) {
      const {_constants,loadingImg,size} = props
      const defaultProps = {
        ...$props,
        ...props,
        _constants,loadingImg,size
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,handleAfterLeave } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<transition name="tiny-loading-fade" onAfter={handleAfterLeave}>    
<div data-tag="tiny-loading" style={{display:state.visible?'block':'none'}}  style={`background-color:${state.background}`} className={vc([
        m(
          state.customClass,
          gcls('loading-default'),

          gcls({ 'loading-fullscreen': state.fullscreen }),
          gcls({ 'loading-unfullscreen': !state.fullscreen })
        )
      )}>      
<div data-tag="tiny-loading-body"  className={vc([
          m(
            gcls('loading-content'),
            gcls({ 'loading-size-mini': size === 'mini' }),
            gcls({ 'loading-size-unmini': size !== 'mini' })
          )
        )}>        
<img style={{display:!state.spinner?'block':'none'}} data-tag="tiny-loading-icon"  src={state.loadingImg} style={state.iconStyle} className={vc([
            m(
              gcls({
                'loading-unspinner-size-default': !size || !['large', 'medium', 'small', 'mini'].includes(size)
              }),
              gcls({ 'loading-unspinner-size-large': size === 'large' }),
              gcls({ 'loading-unspinner-size-medium': size === 'medium' }),
              gcls({ 'loading-unspinner-size-small': size === 'small' }),
              gcls({ 'loading-unspinner-size-mini': size === 'mini' })
            )
          )}></img>

        
<Component data-tag="tiny-loading-spinner" style={{display:!(!state.spinner)?'block':'none'}} is={state.spinner}  className={vc([m(gcls('loading-spinner')))}></Component>

        
<span data-tag="tiny-loading-text" style={{display:state.text?'block':'none'}}  className={vc([
            m(
              gcls('loading-spinner-text'),
              gcls({ 'loading-spinner-size-mini': size === 'mini' }),
              gcls({ 'loading-spinner-size-unmini': size !== 'mini' })
            )
          )}>{state.text}</span>

      </div>

    </div>

  </transition>


      );
    }
    