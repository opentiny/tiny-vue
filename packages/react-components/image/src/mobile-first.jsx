
    import { renderless, api } from '@opentiny/vue-renderless/image/vue'
    import '@opentiny/vue-theme/image/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function image(props) {
      const {src,fit,lazy,scrollContainer,previewSrcList,zIndex,showIndex,showHover,previewVisible,round,imageSize} = props
      const defaultProps = {
        ...$props,
        ...props,
        src,fit,lazy,scrollContainer,previewSrcList,zIndex,showIndex,showHover,previewVisible,round,imageSize
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,clickHandler,deleteHander } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div data-tag="tiny-image"  style={{ 'width': `${!lazy ? imageSize : ''}px`, 'height': `${!lazy ? imageSize : ''}px` }} className={vc([
      'relative inline-block overflow-hidden w-full rounded',
      {
        'rounded-full': round
      }
    ])}>    
<Slot data-tag="tiny-image-loading" style={{display:state.loading?'block':'none'}} name="placeholder" parent_children={props.children} slots={props.slots}>      
<div  className="w-full h-full"></div>

    </Slot>

    
<Slot style={{display:!(state.loading)?'block':'none'}} name="error" data-tag="tiny-image-error" parent_children={props.children} slots={props.slots}>      
<img  src={state.images.imageError} alt="" className="flex justify-center items-center text-sm align-middle text-color-bg-3 bg-no-repeat bg-center"></img>

    </Slot>

    
<img style={{display:!(!(state.loading))?'block':'none'}} $attrs onClick={clickHandler} src={state.src} style={state.getImageStyle}  className={vc([
        'align-top w-full h-full rounded cursor-pointer',
        { 'relative left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 block': state.getAlignCenter }
      ])}></img>

    
<div data-tag="tiny-image-showhover"  className={vc([
        'inline-block w-full h-full hover:bg-color-text-disabled absolute top-0 left-0 cursor-pointer',
        showHover ? 'block' : 'hidden'
      ])}></div>

    
<teleport to="body">      
<imageViewer z-index={zIndex} style={{display:state.getPreview && state.showViewer?'block':'none'}} on-close={closeViewer} url-list={previewSrcList} show-index={showIndex} onDelete={deleteHander}></imageViewer>

    </teleport>

  </div>


      );
    }
    