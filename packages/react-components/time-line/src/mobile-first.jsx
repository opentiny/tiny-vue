
    import { renderless, api } from '@opentiny/vue-renderless/time-line/vue'
    import '@opentiny/vue-theme/time-line/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function timeLine(props) {
      const {vertical,nameField,timeField,tipsField,autoColorField,data,space,subField,foldDisabled,nodeMax,limitedNodes} = props
      const defaultProps = {
        ...$props,
        ...props,
        vertical,nameField,timeField,tipsField,autoColorField,data,space,subField,foldDisabled,nodeMax,limitedNodes
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,changeStatus } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div  data-tag="tiny-timeline" className="inline-flex flex-col">    

  {
    state.stackNodes.map((node, index)=>(
      <div data-tag="tiny-timeline-nodes"  key={index} style={{
        height: index === state.stackNodes.length - 1 ? '' : space && space + 'px'
      }}  className={vc(['inline-flex', getStatusCls(index)])}>      
<ul  data-tag="tiny-timeline-list" className="inline-flex sm:items-start">        
<Slot style={{display:subField?'block':'none'}} name="left" slot-scope={node} parent_children={props.children} slots={props.slots}>          
<li  className="text-color-text-secondary text-left !mr-2 inline-flex text-xs">            
<div  className="sm:inline-block hidden leading-5 w-32">              
<span >{getDate(node[timeField]).date}</span>

              
<span  className="ml-1">{getDate(node[timeField]).time}</span>

            </div>

            
<div  className="sm:hidden inline-flex flex-col leading-5.5 w-20">              
<span  className="text-sm">{getDate(node[timeField]).date}</span>

              
<span  className="text-sm mb-6">{getDate(node[timeField]).time}</span>

            </div>

          </li>

        </Slot>

        
<li data-tag="tiny-timeline-autocolor" style={{
            height: index === state.stackNodes.length - 1 ? '' : space && space + 'px'
          }}  className="ml-1.5 relative h-full">          
<div  className={vc([
              'sm:w-px absolute mt-4 h-[calc(100%-theme(spacing.3))]',
              {
                'sm:bg-color-bg-3 sm:border-0 border-l-0.5 border-l-color-bg-3': index !== state.stackNodes.length - 1
              }
            ])}></div>

          
<div  className="mt-1 w-3 h-3 leading-3 box-border relative text-xs text-center -ml-1.5 cursor-pointer inline-flex items-center justify-center align-top">            
<span style={{display:typeof node[autoColorField] === 'string'?'block':'none'}}  className={vc([
                'rounded-full block w-1.5 h-1.5',
                node[autoColorField] === 'success' && 'bg-color-success',
                node[autoColorField] === 'error' && 'bg-color-error',
                node[autoColorField] === 'info' && 'bg-color-text-disabled'
              ])}></span>

            
<span style={{display:!(typeof node[autoColorField] === 'string')?'block':'none'}}  className={vc(['rounded-full block w-1.5 h-1.5 bg-color-brand'])}></span>

            
<Component style={{display:!(!(typeof node[autoColorField] === 'string'))?'block':'none'}} is={node[autoColorField]}></Component>

          </div>

        </li>

        
<Slot style={{display:!subField?'block':'none'}} name="left" slot-scope={node} parent_children={props.children} slots={props.slots}>          
<li data-tag="tiny-timeline-list-left"  className="sm:text-color-text-secondary text-color-text-placeholder text-left sm:pl-3 !pl-2 inline-flex flex-col sm:flex-row">            
<span  className="inline-block sm:text-xs text-sm sm:leading-5 leading-5.5">{getDate(node[timeField]).date}
 
{getDate(node[timeField]).time}</span>

            
<span style={{display:node[nameField]?'block':'none'}}  className="sm:hidden inline-block sm:leading-5 leading-5.5 text-sm overflow-hidden text-ellipsis whitespace-nowrap max-w-[theme(spacing.56)] mb-6 text-color-text-primary">{node[nameField]}</span>

            
<span style={{display:node[tipsField]?'block':'none'}}  className="sm:hidden max-w-[theme(spacing.56)] inline-block text-color-icon-secondary text-xs mt-2.5 leading-5">{node[tipsField]}</span>

          </li>

        </Slot>

        
<li  className={vc([
            'hidden sm:text-xs text-sm text-color-text-primary sm:inline-flex flex-col',
            subField ? '!ml-4.5' : '!ml-3 '
          ])}>          
<span  className={vc([
              'inline-block leading-5 sm:text-xs text-sm overflow-hidden text-ellipsis whitespace-nowrap max-w-[theme(spacing.56)]',
              { 'mb-4': !subField }
            ])}>{node[nameField]}</span>

          
<span style={{display:subField?'block':'none'}}  className="max-w-[theme(spacing.56)] inline-block text-color-icon-secondary sm:text-xs text-sm leading-5 mb-4 break-all break-words">{node[tipsField]}</span>

        </li>

        
<li style={{display:subField?'block':'none'}}  className={vc(['sm:hidden text-xs text-color-text-primary inline-flex flex-col', subField ? '!ml-4.5' : '!ml-3 '])}>          
<span  className="inline-block leading-5.5 sm:text-xs text-sm overflow-hidden text-ellipsis whitespace-nowrap max-w-[theme(spacing.56)]">{node[nameField]}</span>

          
<span style={{display:node[tipsField]?'block':'none'}}  className="max-w-[theme(spacing.56)] break-all break-words leading-5 inline-block text-color-icon-secondary text-xs sm:text-xs">{node[tipsField]}</span>

        </li>

      </ul>

    </div>
    ))
  }
  

    
<div data-tag="tiny-timeline-showdata" style={{display:state.showData?'block':'none'}}  className="sm:ml-6 ml-5 sm:m-0 my-1 sm:leading-5 sm:h-5 leading-5.5 inline-flex items-center">      
<div data-tag="tiny-timeline-status"  onClick={changeStatus} className="sm:h-3 h-3.5 cursor-pointer inline-flex text-color-brand fill-color-brand sm:text-xs text-sm">        
<span style={{display:state.showAll?'block':'none'}}  className="inline-flex items-center">收起</span>

        
<span style={{display:!(state.showAll)?'block':'none'}}  className="inline-flex items-center">展开</span>

        
<iconChevron style={{display:state.showAll?'block':'none'}}  className="w-3 h-3 sm:ml-2 ml-1 my-px sm:my-0"></iconChevron>

        
<iconChevron style={{display:!(state.showAll)?'block':'none'}}  className="w-3 h-3 sm:ml-2 ml-1 my-px sm:my-0"></iconChevron>

      </div>

    </div>

  </div>


      );
    }
    