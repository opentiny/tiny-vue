
    import { renderless, api } from '@opentiny/vue-renderless/grid-toolbar/vue'
    import '@opentiny/vue-theme/grid-toolbar/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function gridToolbar(props) {
      const {} = props
      const defaultProps = {
        ...$props,
        ...props,
        
      }
      const { ref, current: vm, parent } = useVm()
      const switch=useRef()
      const { state,handleInput,handleClose,handleCustomMouseMove,handleRowDropEnd,handlerSetting,handelNumberSorting,saveSettings,handleReset,showOrHideAllColumns,cancelSettings } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[switch]
      })
      return (
          
<tinyModal width="600" title={t('ui.grid.individuation.title')} value={visible} onChange={(e)=>visible = e.value} onInput={handleInput} onClose={handleClose} onCustom={handleCustomMouseMove}>    
<template slot>      
<div  style={{display:visible?'block':'none'}} className="tiny-grid-custom tiny-grid__wrapper">        
<div  className="tiny-grid-custom__tabs">          
<div  className="tiny-grid-custom__tabs-head">            
<ul >              
<li onClick={activeName = 'base'}  className={vc({
                  'tiny-grid-custom__tabs-selected': activeName === 'base'
                })}>                
<span >{t('ui.grid.individuation.tabs.base.title')}</span>

              </li>

              
<li style={{display:other?'block':'none'}} onClick={activeName = 'other'}  className={vc({
                  'tiny-grid-custom__tabs-selected': activeName === 'other'
                })}>                
<span >{t('ui.grid.individuation.tabs.other.title')}</span>

              </li>

            </ul>

          </div>

          
<div  className="tiny-grid-custom__tabs-body">            
<div style={{display:activeName === 'base'?'block':'none'}}  className={vc(['tabs-body-item', animateShow === 'base' ? 'active-item' : ''])}>              
<div  className="tiny-grid-custom__alert">                
<Component  is="icon-help" className="tiny-svg-size"></Component>

                
<p >{t('ui.grid.individuation.tabs.base.tips')}</p>

              </div>

              
<tinyGrid  auto-resize={true} data={columns} row-class-name={rowClassName} row-key drop-config={dropConfig} tree-config={{ children: 'children' }} show-header={false} edit-config={{ trigger: 'click', mode: 'cell', showStatus: true }} max-height={historyConfig.tableMaxHeight} onRow={handleRowDropEnd} className="tiny-grid-custom__setting">                
<tinyGrid style={{display:initSettings.showIndex?'block':'none'}} type="index" width="60"></tinyGrid>

                
<tinyGrid field="title" tree-node></tinyGrid>

                
<tinyGrid field="property" width="120px" class-name="setting-item">                  
<template slot>                    
<div style={{display:!row.children?'block':'none'}}  className="setting-icon">                      
<span  title={visibleTitle(row)} className="icon">                        
<Component  is={row.visible ? 'icon-eyeopen' : 'icon-eyeclose'} onClick={handlerSetting('visible', row, data)} className={vc([{ open: row.visible }])}></Component>

                      </span>

                      
<span  title={sortTitle(row)} className="icon">                        
<Component  is={row.order ? constants.icon[row.order] : 'icon-minus'} onClick={handlerSetting('order', row)} className={vc({ sort: row.order, 'is-visible': !row.sortable })}></Component>

                      </span>

                      
<span  title={fixedTitle(row)} className="icon">                        
<Component style={{display:row.level === 1 && showFixed?'block':'none'}}  is={row.fixed ? constants.icon[row.fixed] : 'icon-unlock'} onClick={handlerSetting('fixed', row)} className={vc({ lock: row.fixed })}></Component>

                      </span>

                    </div>

                  </template>

                </tinyGrid>

                
<tinyGrid style={{display:numberSorting && !isGroup?'block':'none'}} width="100px" editor={{}} renderer={renderNumberSorting}>                  
<template slot>                    
<tinySelect value={row.sortingIndex} onChange={(e)=>row.sortingIndex = e.value} onChange={handelNumberSorting($event, row)}>                      

  {
    sortingOptions.map(item=>(
      <tinyOption  key={item} label={item} value={item}>                      </tinyOption>
    ))
  }
  

                    </tinySelect>

                  </template>

                </tinyGrid>

              </tinyGrid>

            </div>

            
<div style={{display:activeName === 'other'?'block':'none'}}  className={vc(['tabs-body-item', animateShow === 'other' ? 'active-item' : ''])}>              
<div  className="tiny-grid-custom__alert">                
<Component  is="icon-help" className="tiny-svg-size"></Component>

                
<p >{t('ui.grid.individuation.tabs.other.tips')}</p>

              </div>

              
<ul  className="tiny-grid-custom__setting other-setting">                
<li  className="setting-item">                  
<span  className="label">{t('ui.grid.individuation.tabs.other.sortType')}</span>

                  
<span  className="selection">                    
<tinyRadio value={settings.sortType} onChange={(e)=>settings.sortType = e.value} label="page">{t('ui.grid.individuation.tabs.other.currPageSort')}</tinyRadio>

                    
<tinyRadio value={settings.sortType} onChange={(e)=>settings.sortType = e.value} label="all">{t('ui.grid.individuation.tabs.other.allDataSort')}</tinyRadio>

                  </span>

                </li>

                
<li  className="setting-item">                  
<span  className="label">{t('ui.grid.individuation.tabs.other.pageSize')}</span>

                  
<span  className="selection">                    

  {
    initSettings.pageSizes.map((item, index)=>(
      <tinyRadio  key={index} value={settings.pageSize} onChange={(e)=>settings.pageSize = e.value} label={item}>{item}</tinyRadio>
    ))
  }
  

                  </span>

                </li>

              </ul>

            </div>

            
<tinyCustom style={{display:multipleHistory && activeName === 'base'?'block':'none'}} ref={switch} v-ref="switch" history-config={historyConfig}></tinyCustom>

          </div>

        </div>

        
<div style={{display:!multipleHistory || (multipleHistory && activeName === 'base')?'block':'none'}}  dir={TinyTheme === 'saas' ? 'rtl' : 'ltr'} className="tiny-grid-custom__footer">          
<tinyButton type="primary" onClick={saveSettings} disabled={saveDisabled}>            
{t('ui.grid.individuation.saveBtn')}

          </tinyButton>

          
<tinyButton onClick={handleReset}>            
{t('ui.grid.individuation.resetBtn')}

          </tinyButton>

          
<tinyButton style={{display:showHideAll?'block':'none'}} onClick={showOrHideAllColumns(!showAll)}>{showAll ? t('ui.grid.individuation.hideAll') : t('ui.grid.individuation.showAll')}</tinyButton>

          
<tinyButton onClick={cancelSettings}>            
{t('ui.grid.individuation.cancelBtn')}

          </tinyButton>

        </div>

      </div>

    </template>

  </tinyModal>


      );
    }
    