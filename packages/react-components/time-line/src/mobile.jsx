
    import { renderless, api } from '@opentiny/vue-renderless/time-line/vue'
    import '@opentiny/vue-theme/time-line/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function timeLine(props) {
      const {vertical,horizontal,showNumber,nameField,timeField,start,data,space,active,reverse,showStatus,showFoldBtn} = props
      const defaultProps = {
        ...$props,
        ...props,
        vertical,horizontal,showNumber,nameField,timeField,start,data,space,active,reverse,showStatus,showFoldBtn
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,handleClick,toggleFold } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div  className={vc(['tiny-mobile-steps', { 'is-horizontal': horizontal && !vertical }])}>    
<div style={{display:!vertical?'block':'none'}}  className="tiny-mobile-steps-normal">      

  {
    state.nodes.map((node, index)=>(
      <div  key={index} style={{
          width: horizontal ? (space ? space + 'px' : 100 / state.nodes.length + '%') : null
        }}  className={vc(['normal', getStatusCls(index)])}>        
<Slot name="top" slot-scope={node} parent_children={props.children} slots={props.slots}>          
<div  className="date-time">            
<span  className="time">{getDate(node[timeField]).date}
 
{getDate(node[timeField]).time}</span>

          </div>

        </Slot>

        
<div  onClick={handleClick({ index, node })} className="icon">          
<span style={{display:index >= state.current?'block':'none'}}>{showNumber ? index + start : ''}</span>

          
<span style={{display:!(index >= state.current)?'block':'none'}} custom-title={index + start}  className="icon-wrap">            
<iconYes  className="tiny-svg-size fixicon"></iconYes>

          </span>

        </div>

        
<div  className={vc([
            'line',
            {
              'line-done': index < state.current,
              'line-end': index === state.nodes.length - 1
            }
          ])}></div>

        
<div  className="node-description">          
<Slot name="bottom" item={node} parent_children={props.children} slots={props.slots}>            
<div  text className="name"></div>

            
<div  className="status">              
{showStatus ? getStatus(index) : ''}

            </div>

          </Slot>

        </div>

      </div>
    ))
  }
  

    </div>

    
<div style={{display:!(!(index >= state.current))?'block':'none'}}  className={vc(['tiny-mobile-steps-timeline', { reverse }])}>      

  {
    state.nodes.map((node, index)=>(
      <div  key={index}  className="timeline">        
<ul >          
<li >            
<div  className="header">              
<div style={{display:node.time?'block':'none'}}  className="date-time-vertical">                
<span  className="time">{getDate(node[timeField]).date}
 
{getDate(node[timeField]).time}</span>

              </div>

              
<span  className={vc(['round', `round-${node.state}`])}></span>

              
<Slot name="header" item={node} parent_children={props.children} slots={props.slots}>                
<div  className="name">                  
{node.name}

                </div>

              </Slot>

              
<div style={{display:node.showFoldBtn?'block':'none'}}  onClick={toggleFold(node)} className="arrow-btn">                
<div  className={vc(['arrow-btn-arrow', node.fold ? 'arrow-btn-arrow-fold' : ''])}></div>

              </div>

            </div>

            
<div style={{display:!node.fold?'block':'none'}}  className={vc(['content', node.time ? 'content-left-margin' : null])}>              
<Slot name="content" item={node} parent_children={props.children} slots={props.slots}></Slot>

            </div>

            
<div style={{display:state.nodes.length > 1?'block':'none'}}  className={vc(['line', node.time ? 'line-left-margin' : null])}></div>

          </li>

        </ul>

      </div>
    ))
  }
  

    </div>

  </div>


      );
    }
    