
    import { renderless, api } from '@opentiny/vue-renderless/wizard/vue'
    import '@opentiny/vue-theme/wizard/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function wizard(props) {
      const {data,pageGuide,timeLineFlow,vertical} = props
      const defaultProps = {
        ...$props,
        ...props,
        data,pageGuide,timeLineFlow,vertical
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,nodeClick,lastStepHandle,btnSaveHandle,nextStepHandle,submitHandle,showNode } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div  className="tiny-wizard">    
<div  style={{display:!vertical?'block':'none'}} className="tiny-wizard__nomarl">      
<ul  className="tiny-wizard__steps">        

  {
    state.datas.map((item, index)=>(
      <li   key={index}  className={vc([
            {
              'is-ready': item.status === state.ready,
              'is-doing': item.status === state.doing
            }
          ],'tiny-wizard__steps-item')}>          
<div  className="tiny-wizard__chart">            
<span  className="tiny-wizard__chart-line"></span>

            
<span style={{display:pageGuide && item.status === state.doing?'block':'none'}}  className="tiny-wizard__chart-svg">              
<tinyIcon onClick={nodeClick(item, index, $event)}></tinyIcon>

            </span>

            
<span style={{display:!(pageGuide && item.status === state.doing)?'block':'none'}}  onClick={nodeClick(item, index, $event)} className="tiny-wizard__chart-icon statues">{index + 1}</span>

            
<span  className="tiny-wizard__chart-line"></span>

          </div>

          
<div  className="tiny-wizard__name">            
<Slot name="base" slot-scope={item} parent_children={props.children} slots={props.slots}>              
<span  className="name">{item.name}</span>

            </Slot>

          </div>

        </li>
    ))
  }
  

      </ul>

      
<div  style={{display:pageGuide?'block':'none'}} className="tiny-wizard__button">        
<Slot name="stepbutton" parent_children={props.children} slots={props.slots}>          
<tinyButton reset-time={0} onClick={lastStepHandle}>{t('ui.wizard.previousStep')}</tinyButton>

          
<tinyButton reset-time={0} onClick={btnSaveHandle}>{t('ui.wizard.save')}</tinyButton>

          
<tinyButton reset-time={0} onClick={nextStepHandle}>{t('ui.wizard.nextStep')}</tinyButton>

          
<tinyButton reset-time={0} style={{display:state.submitShow?'block':'none'}} onClick={submitHandle}>{t('ui.wizard.submit')}</tinyButton>

        </Slot>

      </div>

    </div>

    
<div   style={{display:vertical?'block':'none'}} className={vc({ 'is-time-line-flow': timeLineFlow },'tiny-wizard__vertical')}>      
<ul  className="tiny-wizard__steps">        

  {
    state.datas.map((item, index)=>(
      <li    key={index} className={vc([
            {
              'is-ready': item.status === state.ready,
              'is-doing': item.status === state.doing,
              'is-time-line-ready': timeLineFlow && item.nodeStatus === state.ready,
              'is-time-line-doing': timeLineFlow && item.nodeStatus === state.doing
            }
          ],'tiny-wizard__steps-item')}>          
<div  className="tiny-wizard__node-wrapper">            
<div  style={{display:timeLineFlow?'block':'none'}} onClick={showNode(item, index, $event)} className="tiny-wizard__date">              
<span >{item.date}</span>

              
<span  className="tiny-wizard__date-wrapper">                
<tinyIcon  className="date-icon"></tinyIcon>

              </span>

            </div>

            
<div   className={vc({ 'is-time-line': timeLineFlow },'tiny-wizard__chart-line')}>              
<div  style={{display:!timeLineFlow?'block':'none'}} onClick={showNode(item, index, $event)} className="tiny-wizard__chart-icon">                
{index + 1}

              </div>

              
<span style={{display:timeLineFlow?'block':'none'}}  className="tiny-wizard__time-wrapper">                
<Component is={state.iconYes} onClick={showNode(item, index, $event)}></Component>

              </span>

            </div>

            
<div  style={{display:!timeLineFlow?'block':'none'}} onClick={showNode(item, index, $event)} className="tiny-wizard__chart-name">              
<Slot name="vertical" slot-scope={item} parent_children={props.children} slots={props.slots}>                
<span  className="name">{item.name}</span>

                
<span  style={{display:item.showNode && item.content?'block':'none'}} className="children-name">{item.content}</span>

              </Slot>

            </div>

          </div>

          
<ul style={{display:timeLineFlow?'block':'none'}}>            
<template style={{display:item.showNode?'block':'none'}}>              

  {
    item.value.map((value, index)=>(
      <li    key={index} className={vc([
                  {
                    'is-ready': value.status === state.ready,
                    'is-doing': value.status === state.doing
                  }
                ],'tiny-wizard__chart-children')}>                
<div  className="tiny-wizard__date time-line-text">                  
{value.time}

                </div>

                
<div  className="tiny-wizard__chart-line">                  
<div  onClick={nodeClick(value, index, $event)} className="tiny-wizard__chart-icon time-line-icon"></div>

                </div>

                
<div  className="tiny-wizard__chart-detail">                  
<div  className="detail-title">{value.name}</div>

                  
<tinyUser data={value}></tinyUser>

                </div>

              </li>
    ))
  }
  

            </template>

          </ul>

        </li>
    ))
  }
  

      </ul>

    </div>

  </div>


      );
    }
    