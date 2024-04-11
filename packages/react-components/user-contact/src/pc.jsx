
    import { renderless, api } from '@opentiny/vue-renderless/user-contact/vue'
    import '@opentiny/vue-theme/user-contact/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function userContact(props) {
      const {data,showArrow,espace,showName,showNumber,showImg,placement,popperClass,popperAppendToBody,isNewImMode} = props
      const defaultProps = {
        ...$props,
        ...props,
        data,showArrow,espace,showName,showNumber,showImg,placement,popperClass,popperAppendToBody,isNewImMode
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,doUserAction } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div  className="tiny-user-contact">    
<Popover placement="bottom-start" onShow={show = true} onHide={show = false} trigger="hover" popper-class={'tiny-user-contact' + (showArrow ? ' showArrow' : '') + (popperClass ? ' ' + popperClass : '')} append-to-body={popperAppendToBody} visible-arrow={showArrow}>      
<template slot>        
<a href={getUserHref()} onClick={doUserAction}  className="dropdown-part">          
<userHead style={{display:showImg?'block':'none'}} min={true} round={true} value={data.imgUrl} onChange={(e)=>data.imgUrl = e.value} type="image"></userHead>

          
<div  className="tiny-user-contact__role">            
<span style={{display:showName?'block':'none'}}  className="tiny-user-contact__role-name">{data.userName}</span>

            
<span style={{display:showNumber?'block':'none'}}  className="tiny-user-contact__role-number">{data.roleNumber}</span>

          </div>

        </a>

        
<Component is={show ? 'icon-chevron-up' : 'icon-chevron-down'}  className="tiny-svg-size tiny-user-contact__arrow"></Component>

      </template>

      
<cardTemplate style={{display:slots.default?'block':'none'}} tools={data.tools}  className="tiny-user-contact__main">        
<Slot  parent_children={props.children} slots={props.slots}></Slot>

      </cardTemplate>

      
<cardTemplate style={{display:!(slots.default)?'block':'none'}} tools={data.tools}  className="tiny-user-contact__main">        
<template slot>          
<div  className="tiny-user-contact__header">            
<div  className="tiny-user-contact__title">              
<userHead round={true} value={data.imgUrl} onChange={(e)=>data.imgUrl = e.value} type="image"></userHead>

              
<div  className="tiny-user-contact__role">                
<span style={{display:showName?'block':'none'}}  className="tiny-user-contact__role-name">{data.userName}</span>

                
<span style={{display:showNumber?'block':'none'}}  className="tiny-user-contact__role-number">                  
{t('ui.usercard.empno')}
：
{data.roleNumber}

                </span>

              </div>

            </div>

          </div>

        </template>

        
<div >          
<div  className="tiny-user-contact__message">            

  {
    data.values.map(item=>(
      <div  key={item.text}  className="tiny-user-contact__state">              
<span  className="tiny-user-contact__state-left">{item.text}
：</span>

              
<span  className="tiny-user-contact__state-right">{item.value}</span>

            </div>
    ))
  }
  

          </div>

          
<espace style={{display:espace && espace.length?'block':'none'}} data={espace}></espace>

        </div>

      </cardTemplate>

    </Popover>

  </div>


      );
    }
    