
    import { renderless, api } from '@opentiny/vue-renderless/fall-menu/vue'
    import '@opentiny/vue-theme/fall-menu/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function fallMenu(props) {
      const {data} = props
      const defaultProps = {
        ...$props,
        ...props,
        data
      }
      const { ref, current: vm, parent } = useVm()
      const list=useRef()
const fall=useRef()
      const { state,arrowClick,mouseover,mouseout,overContent } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[list,fall]
      })
      return (
          
<div  className="tiny-fall-menu">    
<div  className="tiny-fall-menu__wrap">      
<div  className="tiny-fall-menu__nav">        
<div  className="tiny-fall-menu__subnav">          
<div style={{display:state.pager != 1?'block':'none'}}  onClick={arrowClick(-1)} className="icon-slot-left">            
<Slot name="left" parent_children={props.children} slots={props.slots}>              
<iconChevron  className="tiny-svg-size"></iconChevron>

            </Slot>

          </div>

          
<div ref={list} v-ref="list" style={{ left: state.left }}  className="tiny-fall-menu__list">            
<ul >              

  {
    state.data.map((level1, index)=>(
      <li  key={index} onMouseover={mouseover(index)} onMouseout={mouseout}  className={vc({
                  'fall-hide': index >= state.pagerData.index[state.pager - 1] && state.pager !== state.pagerData.size
                })}>                
<Slot name="level1" slot-scope={level1} parent_children={props.children} slots={props.slots}>                  
<a href={level1.url}  className={vc({ now: index === state.activeNode })}>{level1.title}
 </a>

                </Slot>

              </li>
    ))
  }
  

            </ul>

          </div>

          
<div style={{display:state.pager !== state.pagerData.size?'block':'none'}}  onClick={arrowClick(1)} className="icon-slot-right">            
<Slot name="right" parent_children={props.children} slots={props.slots}>              
<iconChevron  className="tiny-svg-size"></iconChevron>

            </Slot>

          </div>

        </div>

        
<tinyRow >          
<div ref={fall} v-ref="fall" style={{display:state.isActive?'block':'none'}}   onMouseover={overContent(true)} onMouseout={overContent(false)} className={vc({ active: state.isActive },'tiny-fall-menu__box')}>            
<div  className="contbox">              

  {
    state.level2data.map((level2, index)=>(
      <tinyCol  key={index} xs={6} sm={3} md={3} lg={3} xl={2}  className="cont">                
<ul  className="sublist clearfix">                  
<li >                    
<h3  className="mcate-item-hd">                      
<Slot name="level2" slot-scope={level2} parent_children={props.children} slots={props.slots}>                        
<span >{level2.title}</span>

                      </Slot>

                    </h3>

                    
<p  className="mcate-item-bd">                      
<Slot name="level3" slot-scope={level2.children} parent_children={props.children} slots={props.slots}>                        

  {
    level2.children.map((level3, index)=>(
      <a  href={level3.url} key={index}>{level3.title}</a>
    ))
  }
  

                      </Slot>

                    </p>

                  </li>

                </ul>

              </tinyCol>
    ))
  }
  

            </div>

          </div>

        </tinyRow>

      </div>

    </div>

  </div>


      );
    }
    