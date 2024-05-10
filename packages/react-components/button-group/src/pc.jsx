
    import { renderless, api } from '@opentiny/vue-renderless/button-group/vue'
    import '@opentiny/vue-theme/button-group/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function buttonGroup(props) {
      const {size,data,plain,modelValue,disabled,valueField,textField,showMore,showEdit,border} = props
      const defaultProps = {
        ...$props,
        ...props,
        size,data,plain,modelValue,disabled,valueField,textField,showMore,showEdit,border
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,handleClick,moreNodeClick } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div   className={vc([size ? 'tiny-button-group--' + size : '', border ? '' : 'tiny-button-group--borderless'],'tiny-button-group')}>    
<Slot  parent_children={props.children} slots={props.slots}>      
<template style={{display:data.length > 0?'block':'none'}}>        
<ul style={{display:!(showMore && showMore > 0)?'block':'none'}}  className="tiny-group-item">          

  {
    data.map((node, index)=>(
      <li  key={index}  className={vc({ active: state.value === node[valueField] })}>            
<button  style={{
                height: size === 'medium' ? '42px' : size === 'small' ? '32px' : size === 'mini' ? '24px' : '',
                'line-height': size === 'medium' ? '40px' : size === 'small' ? '30px' : size === 'mini' ? '22px' : ''
              }} type="button" onClick={handleClick(node)} className={vc([getItemClass(node))}>              
{node[textField]}

            </button>


            
<span style={{display:node.sup?'block':'none'}}  className={vc([
                'tiny-group-item__sup',
                {
                  'tiny-group-item__sup-text': !node.sup.slot && !node.sup.icon && node.sup.text,
                  'tiny-group-item__sup-icon': !node.sup.slot && node.sup.icon
                },
                typeof node.sup.class === 'string' ? node.sup.class : '',
                ...(Array.isArray(node.sup.class) ? node.sup.class : [])
              ])}>              
<Slot style={{display:node.sup.slot?'block':'none'}} name={node.sup.slot} sup={node.sup} parent_children={props.children} slots={props.slots}></Slot>

              
<Component style={{display:!(node.sup.slot)?'block':'none'}} is={node.sup.icon}></Component>

              
<span style={{display:!(!(node.sup.slot))?'block':'none'}}>{node.sup.text}</span>

            </span>

          </li>
    ))
  }
  

        </ul>

        
<ul style={{display:!(!(!(node.sup.slot)))?'block':'none'}}  className="tiny-group-item show-more">          

  {
    state.buttonData.map((node, index)=>(
      <li  key={index}  className={vc({ active: state.value === node[valueField] })}>            
<tinyButton  onClick={handleClick(node)} className={vc([getItemClass(node))}>              
{node[textField]}

            </tinyButton>


            
<span style={{display:node.sup?'block':'none'}}  className={vc([
                'tiny-group-item__sup',
                {
                  'tiny-group-item__sup-text': !node.sup.slot && !node.sup.icon && node.sup.text,
                  'tiny-group-item__sup-icon': !node.sup.slot && node.sup.icon
                },
                typeof node.sup.class === 'string' ? node.sup.class : '',
                ...(Array.isArray(node.sup.class) ? node.sup.class : [])
              ])}>              
<Slot style={{display:node.sup.slot?'block':'none'}} name={node.sup.slot} sup={node.sup} parent_children={props.children} slots={props.slots}></Slot>

              
<Component style={{display:!(node.sup.slot)?'block':'none'}} is={node.sup.icon}></Component>

              
<span style={{display:!(!(node.sup.slot))?'block':'none'}}>{node.sup.text}</span>

            </span>

          </li>
    ))
  }
  

          
<li style={{display:data.length > showMore?'block':'none'}}  className="tiny-group-item__more">            
<tinyPopover visible-arrow={false} width="200" popper-class="tiny-group-item__more-popover">              
<template slot>                
<tinyButton  className="more-button">                  
<iconPopup ></iconPopup>

                </tinyButton>

              </template>

              
<ul  className="more-list">                

  {
    state.moreData.map((moreNode, index)=>(
      <li  key={index}  onClick={moreNodeClick(moreNode)} className={vc({
                    active: state.value === moreNode[valueField],
                    'more-item': true
                  })}>                  
{moreNode[textField]}

                </li>
    ))
  }
  

              </ul>

            </tinyPopover>

          </li>

          
<li style={{display:showEdit?'block':'none'}}  className="tiny-group-item__edit">            
<tinyButton onClick={$emit('edit')}  className="edit-button">              
<iconWriting ></iconWriting>

            </tinyButton>

          </li>

        </ul>

      </template>

      
<span style={{display:!(showEdit)?'block':'none'}}  className="tiny-button-group--empty"> 暂无数据 </span>

    </Slot>

  </div>


      );
    }
    