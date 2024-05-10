
    import { renderless, api } from '@opentiny/vue-renderless/link-menu/vue'
    import '@opentiny/vue-theme/link-menu/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function linkMenu(props) {
      const {data,maxItem,icon,props,title,defaultExpandAll,searchIcon,ellipsis,wrap,getMenuDataSync,keepSelectedNodes} = props
      const defaultProps = {
        ...$props,
        ...props,
        data,maxItem,icon,props,title,defaultExpandAll,searchIcon,ellipsis,wrap,getMenuDataSync,keepSelectedNodes
      }
      const { ref, current: vm, parent } = useVm()
      const tree=useRef()
      const { state,showDialog,getValue,sureNodevalue,hideDialog } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[tree]
      })
      return (
          
<div  className="tiny-link-menu">    
<div  className="tiny-link-menu__nav">      

  {
    state.listItem.map((item, index)=>(
      <a  href={item.url}  key={index} className="tiny-link-menu__nav-item">        
<Slot name="navicon" slot-scope={item.icon} parent_children={props.children} slots={props.slots}>          
<Component is={item.icon}></Component>

        </Slot>

        
<span >{item.label}</span>

      </a>
    ))
  }
  

      
<button type="button"  onClick={showDialog} className="tiny-link-menu__btn">        
<iconSetting ></iconSetting>

      </button>

    </div>

    
<tinyDialog visible={state.boxVisibility} onUpdate:visible={state.boxVisibility = $event} title={state.titles} width="30%" close-on-click-modal={false}>      
<div  className="tiny-link-menu__filert">        
<tinyInput placeholder={t('ui.linkMenu.placeholder')} value={state.filterText} onChange={(e)=>state.filterText = e.value} suffix-icon={searchIcon}></tinyInput>

      </div>

      
<tinyTree data={state.datas} icon={icon}  default-expand-all={defaultExpandAll} show-checkbox node-key="id" filter-node-method={filterNode} onCheck={getValue} ref={tree} v-ref="tree" className={vc({
          'tiny-link-menu__wrap': wrap,
          'tiny-link-menu__overflow': !wrap ? ellipsis : false
        })}>        
<template slot>          
<div  className="tree-node">            
<div  className="tree-menus-link">              
<a  title={data.label} href={data.disabled ? void 0 : data.url || void 0} className="tree-node-body">                
<Slot name="nodeicon" slot-scope={data.icon} parent_children={props.children} slots={props.slots}>                  
<Component is={data.icon}></Component>

                </Slot>

                
<span  className="tree-node-name">                  
<Slot name="node" label={data.label} parent_children={props.children} slots={props.slots}>                    
{data.label}

                  </Slot>

                </span>

              </a>

            </div>

          </div>

        </template>

      </tinyTree>

      
<template slot>        
<div  className="tiny-link-menu__dialog-btn">          
<Slot name="foot" parent_children={props.children} slots={props.slots}>            
<tinyButton type="primary" disabled={state.disabled} reset-time={0} onClick={sureNodevalue}>{t('ui.linkMenu.sure')}</tinyButton>

            
<tinyButton disabled={state.disabled} reset-time={0} onClick={hideDialog}>{t('ui.linkMenu.cancel')}</tinyButton>

          </Slot>

        </div>

      </template>

    </tinyDialog>

  </div>


      );
    }
    