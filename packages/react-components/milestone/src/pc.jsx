
    import { renderless, api } from '@opentiny/vue-renderless/milestone/vue'
    import '@opentiny/vue-theme/milestone/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function milestone(props) {
      const {solid,start,lineStyle,timeField,showNumber,flagBefore,completedField,milestonesStatus,statusField,nameField,flagField,flagNameField,flagContentField,flagStatusField,data,space} = props
      const defaultProps = {
        ...$props,
        ...props,
        solid,start,lineStyle,timeField,showNumber,flagBefore,completedField,milestonesStatus,statusField,nameField,flagField,flagNameField,flagContentField,flagStatusField,data,space
      }
      const { ref, current: vm, parent } = useVm()
      const tooltip=useRef()
      const { state,handleClick,flagOperate,
                flagOperate,handleFlagClick } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[tooltip]
      })
      return (
          
<div  className="tiny-milestone">    
<tooltip ref={tooltip} v-ref="tooltip" type="normal" placement="top" content={state.tipContent}></tooltip>

    

  {
    data.map((node, index)=>(
      <div  key={index} style={{ width: space ? space + 'px' : 100 / data.length + '%' }}  className={vc(['tiny-milestone__node', { 'is-solid': solid }, `node-status-${node[statusField]}`])}>      
<Slot name="top" slot-scope={node} top-slot-class="top-slot-class" parent_children={props.children} slots={props.slots}></Slot>

      
<div style={getMileIcon(node)}   onClick={handleClick({ index, node })} className={vc([node[statusField] === completedField && !solid ? 'is-completed' : '', `status-${node[statusField]}`],'tiny-milestone__icon tiny-milestone__icon-custom')}>        
<Slot name="icon" slot-scope={node} parent_children={props.children} slots={props.slots}>          
<iconYes style={{display:node[statusField] === completedField?'block':'none'}}  className="tiny-svg-size"></iconYes>

          
<span style={{display:!(node[statusField] === completedField)?'block':'none'}}>{showNumber ? index + start : ''}</span>

        </Slot>

      </div>

      
<div  style={getLineColor(node[statusField])} className={vc([
          'tiny-milestone__line',
          {
            'tiny-milestone__line-end': index === data.length - 1,
            'tiny-milestone__line-completed-custom': node[statusField] === 'completed'
          }
        ])}>        
<div style={{display:index < data.length - 1?'block':'none'}}>          

  {
    getMileContent({ data, index }).map((flag, idx)=>(
      <div  style={{
              left: `calc(${(100 / (data[flagBefore ? index : index + 1][flagField].length + 1)) * (idx + 1)}% - 29px)`
            }} key={idx}  className={vc(['tiny-milestone__flag', `flag-status-${flag[flagStatusField]}`])}>            
<div style={{ background: milestonesStatus[flag[flagStatusField]] }}  onMouseleave={flagOperate({ over: false })} onMouseenter={
                flagOperate({
                  event: $event,
                  text: flag[flagContentField],
                  over: true
                })
              } onClick={handleFlagClick({ idx, flag })} className="tiny-milestone__flag-content">              
<Slot name="flag" slot-scope={flag} parent_children={props.children} slots={props.slots}>                
<p style={{display:flag[flagNameField]?'block':'none'}}>{flag[flagNameField]}</p>

                
<p style={{display:flag[flagContentField]?'block':'none'}}  className="content">                  
{flag[flagContentField]}

                </p>

              </Slot>

            </div>

            
<div style={{ background: milestonesStatus[flag[flagStatusField]] }}  className="tiny-milestone__flag-line">              
<div style={{
                  'border-color': milestonesStatus[flag[flagStatusField]]
                }}  className="tiny-milestone__dot"></div>

            </div>

          </div>
    ))
  }
  

        </div>

      </div>

      
<div  className="tiny-milestone__description">        
<Slot name="bottom" slot-scope={node} parent_children={props.children} slots={props.slots}>          
<div  className="tiny-milestone__description-name">            
{node[nameField]}

          </div>

          
<div  className="tiny-milestone__description-status">            
{node[timeField]}

          </div>

        </Slot>

      </div>

    </div>
    ))
  }
  

  </div>


      );
    }
    