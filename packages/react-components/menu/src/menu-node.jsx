
    import { renderless, api } from '@opentiny/vue-renderless/menu/vue'
    import '@opentiny/vue-theme/menu/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function menu(props) {
      const {activedKeys,nodes,default} = props
      const defaultProps = {
        ...$props,
        ...props,
        activedKeys,nodes,default
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,handelNodeClick } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div  className="w-full">    
<div  className="w-full hidden sm:block">      
<div  onClick={handelNodeClick(nodes)} className="w-full px-2 mb-1">        
<div   style={{ 'padding-left': depth * 24 + 'px' }} className={vc([
            nodes.isCurrent ? 'text-color-brand text-sm bg-color-fill-6 rounded hover:bg-color-brand-disabled' : '',
            currentPaths.includes(nodes.id) ? 'text-color-brand' : '',
            nodes.disabled ? 'text-color-text-disabled cursor-not-allowed' : ''
          ],'relative w-full h-12 flex text-sm overflow-hidden cursor-pointer hover:bg-color-bg-2 rounded')}>          
<a   title={nodes.label} href={nodes.url || void 0} style="text-decoration: none" className={vc([nodes.disabled ? 'text-color-text-disabled cursor-not-allowed' : ''],'flex items-center whitespace-normal')}>            
<Component style={{display:nodes.customIcon?'block':'none'}} is={nodes.customIcon} custom-class="mr-3 w-4.5 h-4.5 flex-shrink-0"  className={vc([
                nodes.isCurrent
                  ? 'fill-color-brand'
                  : nodes.disabled
                    ? 'fill-color-icon-disabled'
                    : 'fill-color-icon-primary'
              ])}></Component>

            
<span  className="line-clamp-1">{nodes.label}</span>

          </a>

          
<iconRightward style={{display:nodes.children && nodes.children.length?'block':'none'}}   className={vc([
              nodes.isCurrent
                ? 'fill-color-brand'
                : nodes.disabled
                  ? 'fill-color-icon-disabled'
                  : 'fill-color-icon-secondary',
              state.showNodes || nodes.visible ? 'rotate-90' : ''
            ],'absolute right-3 top-4 transition-transform duration-300 ease-in-out')}></iconRightward>

        </div>

      </div>

      
<menuTransition >        
<div style={{display:state.showNodes || nodes.visible?'block':'none'}}>          

  {
    undefined.map((node, index) of nodes.children=>(
      <menuNode  key={index} nodes={node} label={node.label} depth={depth + 1} current-paths={currentPaths} expanded-keys-path={expandedKeysPath} actived-keys-path={activedKeysPath} actived-keys={activedKeys}>          </menuNode>
    ))
  }
  

        </div>

      </menuTransition>

    </div>

    
<div  className="w-full block sm:hidden">      
<a   href={nodes.url || void 0} style="text-decoration: none" onClick={handelNodeClick(nodes)} className={vc([
          nodes.disabled || (onlyCheckChildren && nodes.children) ? 'text-color-text-disabled cursor-not-allowed' : '',
          nodes.isCurrent ? 'text-color-brand bg-color-bg-1' : ''
        ],'w-full whitespace-normal text-sm leading-5.5 py-3 px-0 overflow-hidden line-clamp-2')}>        
<span  className="relative px-4 line-clamp-2">          
{nodes.label}

          
<i style={{display:nodes.isCurrent?'block':'none'}}  style="height: calc(100% - 6px)" className="absolute left-0 top-0.5 w-0.5 bg-color-brand"></i>

        </span>

      </a>

      
<ul style={{display:nodes.children?'block':'none'}}>        

  {
    undefined.map((node, index) of nodes.children=>(
      <li  key={index}>          
<a   href={node.url || void 0} style="text-decoration: none" onClick={handelNodeClick(node)} className={vc([
              node.disabled ? 'text-color-text-disabled cursor-not-allowed' : '',
              node.isCurrent ? 'text-color-brand bg-color-bg-1' : ''
            ],'block w-full whitespace-normal text-xs leading-5.5 py-3 px-0 overflow-hidden')}>            
<span  className="w-full relative pl-6 pr-4 line-clamp-2">              
{node.label}

              
<i style={{display:node.isCurrent?'block':'none'}}  style="height: calc(100% - 6px)" className="absolute left-0 top-0.5 w-0.5 bg-color-brand"></i>

            </span>

          </a>

        </li>
    ))
  }
  

      </ul>

    </div>

  </div>


      );
    }
    