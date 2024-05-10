
    import { renderless, api } from '@opentiny/vue-renderless/timeline-item/vue'
    import '@opentiny/vue-theme/timeline-item/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function timelineItem(props) {
      const {node,space,lineWidth,shape} = props
      const defaultProps = {
        ...$props,
        ...props,
        node,space,lineWidth,shape
      }
      const { ref, current: vm, parent } = useVm()
      const description=useRef()
      const { state,handleClick } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[description]
      })
      return (
          
<div   style={state.computedItemStyle} className={vc([state.computedItemCls,'tiny-timeline-item]')}>    
<template style={{display:!rootProps.vertical?'block':'none'}}>      
<template style={{display:rootProps.textPosition === 'right'?'block':'none'}}>        
<div  onClick={handleClick(node)} className="icon step-icon">          
<span style={{display:(node.index < state.current || node.error) && !rootProps.onlyNumber?'block':'none'}} custom-title={node.index + rootProps.start}  className="icon-wrap">            
<iconClose style={{display:node.error?'block':'none'}}  className="tiny-svg-size fixicon"></iconClose>

            
<iconYes style={{display:!(node.error)?'block':'none'}}  className="tiny-svg-size fixicon"></iconYes>

          </span>

          
<span style={{display:!(!(node.error))?'block':'none'}}>{rootProps.showNumber ? node.index + rootProps.start : ''}</span>

        </div>


        
<div  className="node-description">          
<Slot name="text" slot-scope={node} parent_children={props.children} slots={props.slots}>            
<div  text onClick={handleClick(node)} className="name"></div>

          </Slot>

          
<div  style={{ width: state.computedLineWidth }} className={vc([
              'line',
              {
                'line-done': node.index < state.current,
                'line-end': node.index === state.nodesLength - 1
              }
            ])}></div>


          
<div  ref={description} v-ref="description" className="tiny-timeline-item__description">            
<Slot name="description" slot-scope={node} parent_children={props.children} slots={props.slots}>              
{node.description}

            </Slot>

            
<div style={{display:node.index === rootProps.active?'block':'none'}}>              
<Slot name="active-node-desc" slot-scope={node} parent_children={props.children} slots={props.slots}></Slot>

            </div>

          </div>

        </div>

      </template>

      
<template style={{display:!(!(!(node.error)))?'block':'none'}}>        
<Slot name="top" slot-scope={node} parent_children={props.children} slots={props.slots}>          
<div  className="date-time">            
<span  className="time">{getDate(node[rootProps.timeField]).date}
 
{getDate(node[rootProps.timeField]).time}</span>

          </div>

        </Slot>

        
<div  className="tiny-steps__node">          
<div  onClick={handleClick(node)} className="icon">            
<span style={{display:(node.index < state.current || node.error) && !rootProps.onlyNumber?'block':'none'}} custom-title={node.index + rootProps.start}  className="icon-wrap">              
<iconClose style={{display:node.error?'block':'none'}}  className="tiny-svg-size fixicon"></iconClose>

              
<iconYes style={{display:!(node.error)?'block':'none'}}  className="tiny-svg-size fixicon"></iconYes>

            </span>

            
<span style={{display:!(!(node.error))?'block':'none'}}>{rootProps.showNumber ? node.index + rootProps.start : ''}</span>

          </div>


          


          
<div  className={vc([
              'line',
              {
                'line-done': node.index < state.current,
                'line-end': node.index === state.nodesLength - 1
              }
            ])}></div>

        </div>

        
<div  className="node-description">          
<Slot name="bottom" slot-scope={node} parent_children={props.children} slots={props.slots}>            
<div  text onClick={handleClick(node)} className="name"></div>

            
<div  style={{display:rootProps.showStatus?'block':'none'}} className="status">              
{getStatus(node.index)}

            </div>

          </Slot>

        </div>

      </template>

    </template>

    
<template style={{display:!(rootProps.showStatus)?'block':'none'}}>      
<Slot name="left" slot-scope={node} parent_children={props.children} slots={props.slots}>        
<div style={{display:shape === 'circle'?'block':'none'}}  className="date-time">          
<span  className="date">{getDate(node[rootProps.timeField]).date}</span>

          
<span  className="time">{getDate(node[rootProps.timeField]).time}</span>

        </div>

      </Slot>

      
<div  className="tiny-timeline-item__pillar">        
<div style={{display:shape === 'circle'?'block':'none'}}  onClick={handleClick(node)} className="icon">          
<iconYes style={{display:state.isReverse ? node.index > state.current : node.index < state.current?'block':'none'}}  className="tiny-svg-size"></iconYes>

          
<span style={{display:!(state.isReverse ? node.index > state.current : node.index < state.current)?'block':'none'}}>{rootProps.showNumber
              ? state.isReverse
                ? state.nodesLength - 1 - node.index + rootProps.start
                : node.index + rootProps.start
              : ''}</span>

        </div>

        
<div style={{display:!(!(state.isReverse ? node.index > state.current : node.index < state.current))?'block':'none'}}  onClick={handleClick(node)} className="dot-container">          
<span  className="dot"></span>

        </div>

        
<div  className="line"></div>

      </div>

      
<Slot name="right" slot-scope={node} parent_children={props.children} slots={props.slots}>        
<div  onClick={handleClick(node)} className="tiny-timeline-item__content">          
<div  className="name">{node[rootProps.nameField]}</div>

          
<div style={{display:shape === 'dot'?'block':'none'}}  className="time">{node[rootProps.timeField]}</div>

        </div>

      </Slot>

    </template>

  </div>


      );
    }
    