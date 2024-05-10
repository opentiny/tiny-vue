
    import { renderless, api } from '@opentiny/vue-renderless/image/vue'
    import '@opentiny/vue-theme/image/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function image(props) {
      const {src,fit,lazy,scrollContainer,previewSrcList,zIndex} = props
      const defaultProps = {
        ...$props,
        ...props,
        src,fit,lazy,scrollContainer,previewSrcList,zIndex
      }
      const { ref, current: vm, parent } = useVm()
      const imageViewer=useRef()
      const { state,clickHandler } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[imageViewer]
      })
      return (
          
<div  className="tiny-image">    
<Slot style={{display:state.loading?'block':'none'}} name="placeholder" parent_children={props.children} slots={props.slots}>      
<div  className="tiny-image__placeholder"></div>

    </Slot>

    
<Slot style={{display:!(state.loading)?'block':'none'}} name="error" parent_children={props.children} slots={props.slots}>      
<div  className="tiny-image__error"></div>

    </Slot>

    
<img style={{display:!(!(state.loading))?'block':'none'}}  $attrs onClick={clickHandler} src={state.src} style={state.getImageStyle}  className={vc({
        'tiny-image__inner-center': state.getAlignCenter,
        'tiny-image__preview': state.getPreview
      },'tiny-image__inner')}></img>

    
<teleport to="body">      
<imageViewer ref={imageViewer} v-ref="imageViewer" z-index={zIndex} style={{display:state.getPreview && state.showViewer?'block':'none'}} on-close={closeViewer} url-list={previewSrcList}></imageViewer>

    </teleport>

  </div>


      );
    }
    