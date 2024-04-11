
    import { renderless, api } from '@opentiny/vue-renderless/crop/vue'
    import '@opentiny/vue-theme/crop/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function crop(props) {
      const {} = props
      const defaultProps = {
        ...$props,
        ...props,
        
      }
      const { ref, current: vm, parent } = useVm()
      const cropInput=useRef()
const cropImage=useRef()
      const { state,setImage,item.method } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[cropInput,cropImage]
      })
      return (
          
<div  className="tiny-crop__wrapper">    
<div  style={{ opacity: state.cropvisible ? 1 : 0 }} style={{display:preview?'block':'none'}} className="tiny-croppreview">      
<div  className="croppreviewb">        
<div  className="croppreview"></div>

      </div>

      
<div  className="croppreviewm">        
<div  className="croppreview"></div>

      </div>

      
<div  className="croppreviews">        
<div  className="croppreview"></div>

      </div>

    </div>

    
<div  style={{display:state.cropvisible?'block':'none'}} className="tiny-crop">      
<div  className="tiny-crop__dialog">        
<input ref={cropInput} v-ref="cropInput" type="file" name="image" accept="image/*" onChange={setImage}></input>

        
<div  className="tiny-crop__dialog-cropper">          
<img src={state.src} ref={cropImage} v-ref="cropImage" id="crops" alt={state.alt}></img>

        </div>

        
<div  className="tiny-crop__dialog-content__handle">          
<div  className="tiny-crop__dialog-content__handle__button">            

  {
    state.renderIcon.map((item, index)=>(
      <div   onClick={item.method} key={index} className="iconButton">              
<Component is={item.icon}  className="iconButtonset"></Component>

            </div>
    ))
  }
  

          </div>

        </div>

        
<div  className="tiny-crop__dialog-content">          
<div  className="tiny-crop__dialog-content__crop">            
<img style={{display:state.cropImg?'block':'none'}} src={state.cropImg} alt="post-crop"></img>

            
<h1 style={{display:!(state.cropImg)?'block':'none'}}>              
{t('ui.crop.croppedImage')}

            </h1>

          </div>

        </div>

      </div>

    </div>

  </div>


      );
    }
    