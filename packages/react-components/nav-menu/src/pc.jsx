
    import { renderless, api } from '@opentiny/vue-renderless/nav-menu/vue'
    import '@opentiny/vue-theme/nav-menu/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function navMenu(props) {
      const {data,parentKey,overflow,beforeSkip,fetchMenuData,fields,prevent,allowFullUrl} = props
      const defaultProps = {
        ...$props,
        ...props,
        data,parentKey,overflow,beforeSkip,fetchMenuData,fields,prevent,allowFullUrl
      }
      const { ref, current: vm, parent } = useVm()
      const navMenu=useRef()
const tooltip=useRef()
      const { state,showSubMenu,willHideSubMenu,clickMenu,stopHideSubMenu,setSubMenu,leaveMoreMune,handleTitleMouseenter,handleTitleMouseleave } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[navMenu,tooltip]
      })
      return (
          
<div  ref={navMenu} v-ref="navMenu" className="tiny-nav-menu">    
<div   style={{display:/^(retract|fixed)$/.test(overflow)?'block':'none'}} onMouseenter={showSubMenu(state.data[0].children, { more: true })} onMouseleave={willHideSubMenu} className={vc({ mobile: slots['mobile-menu'] },'more-button')}>      
<Component is={state.showMore ? 'IconSandwichExpand' : 'IconSandwichCollapse'}></Component>

    </div>

    
<div style={{display:slots.logo?'block':'none'}}  className="slot-logo">      
<Slot name="logo" parent_children={props.children} slots={props.slots}></Slot>

    </div>

    
<div  className="menu-container">      
<ul style={{display:state.data && state.data.length?'block':'none'}} style={state.isSaaSTheme ? {} : state.menuStyle}  className="menu">        

  {
    state.data.map((item, index)=>(
      <li  key={index + (item.title || '')}>          
<Component is={getTag(item)} to={getRoute(item)}  onMouseenter={showSubMenu(item.children, { index }, $event)} onMouseleave={willHideSubMenu} onClick={clickMenu(item, index)} className={vc({
              active: index === state.activeIndex,
              selected: index === state.selectedIndex
            })}>{item.title}</Component>

        </li>
    ))
  }
  

      </ul>

    </div>

    
<div style={{display:state.isShowMore?'block':'none'}} style={{ marginLeft: state.marginLeft + 'px' }}  onMouseenter={showSubMenu(state.more[0].children, { more: true })} onMouseleave={willHideSubMenu} className="more">      
{t('ui.navMenu.moreText')}

    </div>

    
<div style={{display:slots.toolbar?'block':'none'}}  className="slot-toolbar">      
<Slot name="toolbar" parent_children={props.children} slots={props.slots}></Slot>

    </div>

    
<div style={{display:slots['mobile-menu']?'block':'none'}}  className="slot-mobile-menu">      
<Slot name="mobile-menu" parent_children={props.children} slots={props.slots}></Slot>

    </div>

    
<transition name="tiny-transition-zoom-in-top" mode="out-in">      
<div style={{display:state.showPopmenu?'block':'none'}}  style={state.popStyle}  onMouseenter={stopHideSubMenu} onMouseleave={willHideSubMenu} className={vc([state.popClass, { slide: state.showPopmenu }, { 'show-left-menu': state.showMore }],'popmenu tiny-min-scrollbar')}>        
<div style={{display:state.showMore?'block':'none'}}  className="more-menu">          
<ul >            

  {
    state.more.map((item, index)=>(
      <li  key={index + (item.title || '')}  className={vc({ active: index === state.subActiveIndex, selected: index === state.moreItemSelectedIndex })}>              
<Component is={getTag(item)} to={getRoute(item)}  onMouseenter={setSubMenu(item.children, index)} onMouseleave={leaveMoreMune} onClick={clickMenu(item, index)} className={vc({ showicon: item.children })}>                
{item.title}

              </Component>

              
<iconChevron style={{display:item.children?'block':'none'}}  className="more-icon"></iconChevron>

            </li>
    ))
  }
  

          </ul>

        </div>

        
<div style={{display:state.subMenus && state.subMenus.length?'block':'none'}}   className={vc({ 'full-width': !state.showMore },'sub-menu')}>          
<ul  className="sub-menu-ul">            

  {
    state.subMenus.map((group, index)=>(
      <li  key={index + (group.title || '')}   className={vc({
                'col-xs-24 col-sm-12 col-md-8 col-lg-6 col-xl-4':
                  !state.isSaaSTheme && !state.popClass.includes('single')
              },'sub-menu-li')}>              
<ul  className="group">                
<li   className={vc([!!group.title ? '' : 'tiny-nav-menu__sub-menu-title-blank','tiny-nav-menu__sub-menu-title]')}>                  
<Component is={getTag(group)} to={getRoute(group)} onClick={clickMenu(group, -1, index)} onMouseenter={handleTitleMouseenter($event)} onMouseleave={handleTitleMouseleave}  className={vc({ selected: index === state.subIndex && state.subItemSelectedIndex === -1 })}>                    
{group.title}

                  </Component>

                  
<iconChevron style={{display:group.url?'block':'none'}}  className="go-to-icon"></iconChevron>

                </li>

                

  {
    group.children.map((item, i)=>(
      <li  key={i + (item.title || '')}   className={vc({
                    'only-secondary-title': !group.title && !state.subMenu[i].children,
                    'third-title': item.children && item.children.length
                  },'sub-item')}>                  
<Component is={getTag(item)} to={getRoute(item)} onClick={clickMenu(item, i, index)}  className={vc({ selected: i === state.subItemSelectedIndex && index === state.subIndex })}>                    
{item.title}

                  </Component>


                  
<ul style={{display:item.children && item.children.length?'block':'none'}}>                    

  {
    item.children.map((subItem, j)=>(
      <li  key={j + (subItem.title || '')}  className="sub-item">                      
<Component is={getTag(subItem)} to={getRoute(subItem)} onClick={clickMenu(subItem)}>                        
{subItem.title}

                      </Component>

                    </li>
    ))
  }
  

                  </ul>

                </li>
    ))
  }
  

              </ul>

            </li>
    ))
  }
  

          </ul>

        </div>

      </div>

    </transition>

    
<tinyTooltip ref={tooltip} v-ref="tooltip" value={state.tooltipVisible} onChange={(e)=>state.tooltipVisible = e.value} manual={true} effect="light" content={state.tooltipContent} placement="top">    </tinyTooltip>

  </div>


      );
    }
    