
    import { renderless, api } from '@opentiny/vue-renderless/bulletin-board/vue'
    import '@opentiny/vue-theme/bulletin-board/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function bulletinBoard(props) {
      const {title,icon,showMore,moreLink,tabTitle,activeName,data} = props
      const defaultProps = {
        ...$props,
        ...props,
        title,icon,showMore,moreLink,tabTitle,activeName,data
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state, } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div  className="tiny-bulletin-board">    
<p  className="tiny-bulletin-board__title">{title}</p>

    
<tabs value={state.actName} onChange={(e)=>state.actName = e.value}>      

  {
    undefined.map((item, index) of tabTitle=>(
      <tabItem  key={index} name={(index + 1).toString()}>        
<template slot>          
<span >{item}</span>

        </template>

        
<div  className="tiny-bulletin-board__contain">          

  {
    state.dataList.map((subItem, subIndex)=>(
      <div  key={subIndex}  className="tiny-bulletin-board__item">            
<a style={{display:subItem.url || subItem.route?'block':'none'}} href={subItem.url || getRoute(subItem.route)} target={subItem.target}  rel="noopener noreferrer" className="tiny-bulletin-board__textTitle">              
<span style={{display:subIndex === 0?'block':'none'}}  className="tiny-bulletin-board__new">                
<Component is={icon}  className="tiny-svg-size"></Component>
{icon ? '' : 'NEW'}

              </span>

              
{subItem.text}

            </a>

            
<span style={{display:!(subIndex === 0)?'block':'none'}}  className="tiny-bulletin-board__textTitle">              
<span style={{display:subIndex === 0?'block':'none'}}  className="tiny-bulletin-board__new">                
<Component is={icon}  className="tiny-svg-size"></Component>
{icon ? '' : 'NEW'}

              </span>

              
{subItem.text}

            </span>

            
<p  className="tiny-bulletin-board__textDate">{subItem.date}</p>

          </div>
    ))
  }
  

          
<div style={{display:showMore?'block':'none'}}  className="tiny-bulletin-board__more">            
<a style={{display:showMore && state.moreLink && (state.moreLink.url || state.moreLink.route)?'block':'none'}} href={state.moreLink.url || getRoute(state.moreLink.route)}  target={state.moreLink.target} rel="noopener noreferrer" className="tiny-bulletin-board__more-link">              
<span >{state.moreLink.text || 'more'}</span>

              
<iconChevron  className="tiny-svg-size"></iconChevron>

            </a>

          </div>

        </div>

      </tabItem>
    ))
  }
  

    </tabs>

  </div>


      );
    }
    