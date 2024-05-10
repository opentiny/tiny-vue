
    import { renderless, api } from '@opentiny/vue-renderless/grid-toolbar/vue'
    import '@opentiny/vue-theme/grid-toolbar/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function gridToolbar(props) {
      const {column} = props
      const defaultProps = {
        ...$props,
        ...props,
        column
      }
      const { ref, current: vm, parent } = useVm()
      const list=useRef()
const switch=useRef()
const tooltip=useRef()
      const { state,handleInput,handleClose,selectedTemplateChange,searchChange,handelClearAll,selectFocus,sortSelectChange,clickSortDisplay,handleMouseenter,handleMouseleave,handleFixedItemClick,handleDropdownMouseenter,handleDropdownMouseleave,handleSortItemClick,hiddenColumn,saveSettings,initStorage,handleReset,cancelSettings } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[list,switch,tooltip]
      })
      return (
          
<tinyModal width="800" title=" "  value={visible} onChange={(e)=>visible = e.value} onInput={handleInput} onClose={handleClose} className="tiny-grid-toolbar-modal">    
<template slot>      
<div  style={{display:visible?'block':'none'}} className="tiny-grid-custom">        
<div  className="tiny-grid-custom__tabs">          
<div  className="tiny-grid-custom__tabs-head">            
<ul >              
<li onClick={activeName = 'base'}  className={vc({
                  'tiny-grid-custom__tabs-selected': activeName === 'base' && other,
                  'tiny-grid-custom__tabs-base': !other
                })}>                
<span >{t('ui.grid.individuation.columnSet')}</span>

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
<tinySplit value={splitVal} onChange={(e)=>splitVal = e.value} trigger-simple collapse-left-top>                
<template slot>                  
<div  className="left-panel">                    
<div style={{display:multipleHistory?'block':'none'}}  className="select-template">                      
<tinySelect value={selectedTemplate} onChange={(e)=>selectedTemplate = e.value} shape="filter" label={t('ui.grid.individuation.selectTemplate')} onChange={selectedTemplateChange} clearable>                        

  {
    templateOptions.map(item=>(
      <tinyOption  key={item.id} label={item.name} value={item.id}>                        </tinyOption>
    ))
  }
  

                      </tinySelect>

                    </div>

                    
<tinySearch style={{display:search?'block':'none'}} value={searchValue} onChange={(e)=>searchValue = e.value} onInput={searchChange} placeholder={t('ui.grid.individuation.toolbar.search')}></tinySearch>

                    
<div style={{display:searchValue?'block':'none'}}>                      
<tinyCheckbox value={checkedColumns} onChange={(e)=>checkedColumns = e.value} vertical>                        

  {
    searchColumns.map(column=>(
      <tinyCheckbox  label={column.property} disabled={column.alwaysShow} key={column.property}>                          
<titleRender column={column}></titleRender>

                        </tinyCheckbox>
    ))
  }
  

                      </tinyCheckbox>

                    </div>

                    
<div style={{display:!(searchValue)?'block':'none'}}>                      
<div  className="check-all-btn">                        
<tinyCheckbox indeterminate={isIndeterminate} value={checkAll} onChange={(e)=>checkAll = e.value}>                          
{t('ui.grid.individuation.toolbar.all')}

                        </tinyCheckbox>

                      </div>

                      
<tinyCheckbox value={checkedColumns} onChange={(e)=>checkedColumns = e.value} vertical>                        
                          
<div style={{display:defer(Math.floor(index / 5))?'block':'none'}} key={index}>                            
<p style={{display:group.label?'block':'none'}}   className={vc([index === 0 && 'group-label-first'],'group-label')}>                              
{group.label}

                            </p>

                            

  {
    group.data.map(column=>(
      <tinyCheckbox  label={column.property} disabled={column.alwaysShow} key={column.property}>                              
<titleRender column={column}></titleRender>

                            </tinyCheckbox>
    ))
  }
  

                          </div>

                        

                      </tinyCheckbox>

                    </div>

                  </div>

                </template>

                
<template slot>                  
<div  className="right-panel">                    
<div  className="header">                      
<p >                        
{t('ui.grid.individuation.toolbar.selected')}
 (
{visibleColumns.length}
/
{columns.length}
)
                      </p>

                      
<span style={{display:!hideFixedColumn?'block':'none'}}>{t('ui.grid.individuation.toolbar.freeze')}</span>

                      
<span style={{display:!hideSortColumn?'block':'none'}}>{t('ui.grid.individuation.toolbar.sort')}</span>

                      
<span  onClick={handelClearAll} className="clear-all">{t('ui.grid.individuation.toolbar.clear')}</span>

                    </div>

                    
<ul ref={list} v-ref="list">                      

  {
    visibleColumns.map((column, index)=>(
      <li  key={column.property + index}  data-tag="tiny-grid-toolbar-item" data-row={column.property} className={vc([column.fixed, getRowClassName(column)])}>                        
<div style={{display:defer(Math.floor(index / 3))?'block':'none'}} style="display: contents">                          
<div style={{display:dropConfig.plugin?'block':'none'}}  className="drag-icon toolbar-drag-item">                            
<span ></span>

                            
<span ></span>

                            
<span ></span>

                            
<span ></span>

                            
<span ></span>

                            
<span ></span>

                          </div>

                          
<div  className="sort-number">                            
<div style={{display:column.numberSortVisible?'block':'none'}}  clickoutside className="sort-number-editor">                              
<tinySelect ref={'select' + index} value={column.sortingIndex} onChange={(e)=>column.sortingIndex = e.value} automatic-dropdown onFocus={selectFocus($event, column.sortingIndex)} onChange={sortSelectChange}>                                

  {
    sortingOptions.map(item=>(
      <tinyOption  key={item} label={item} value={item}>                                </tinyOption>
    ))
  }
  

                              </tinySelect>

                            </div>

                            
<div style={{display:!(column.numberSortVisible)?'block':'none'}}  onClick={clickSortDisplay(column, index)} className="sort-number-display">                              
{column.sortingIndex}

                            </div>

                          </div>

                          
<p   onMouseenter={handleMouseenter} onMouseleave={handleMouseleave} className={vc([dropConfig.plugin && 'dragable'],'name toolbar-drag-item')}>                            
<titleRender column={column}></titleRender>

                          </p>

                          
<div style={{display:!hideFixedColumn?'block':'none'}}  className="dropdown-column">                            
<tinyDropdown show-icon={false} onItem={handleFixedItemClick} trigger="hover">                              
<span  className={vc(['left', 'right'].includes(column.fixed) && 'dropdown-btn')}>                                
<iconLeft style={{display:column.fixed === 'left'?'block':'none'}}></iconLeft>

                                
<iconRight style={{display:!(column.fixed === 'left')?'block':'none'}}></iconRight>

                                
<span style={{display:!(!(column.fixed === 'left'))?'block':'none'}}  className="set-btn">{t('ui.grid.individuation.toolbar.set')}</span>

                              </span>

                              
<template slot>                                
<tinyDropdown onMouseenter={handleDropdownMouseenter($event, index)} onMouseleave={handleDropdownMouseleave($event, index)}>                                  

  {
    column.fixedOption.map(item=>(
      <tinyDropdown  key={item.value} label={item.label} item-data={{ value: item.value, property: column.property }}>{item.label}</tinyDropdown>
    ))
  }
  

                                </tinyDropdown>

                              </template>

                            </tinyDropdown>

                          </div>

                          
<div style={{display:!hideSortColumn?'block':'none'}}   className={vc([!column.sortable && 'visibility-hidden'],'dropdown-column')}>                            
<tinyDropdown show-icon={false} onItem={handleSortItemClick} trigger="hover">                              
<span  className={vc(['asc', 'desc'].includes(column.order) && 'dropdown-btn')}>                                
<iconAscending style={{display:column.order === 'asc'?'block':'none'}}></iconAscending>

                                
<iconDescending style={{display:!(column.order === 'asc')?'block':'none'}}></iconDescending>

                                
<span style={{display:!(!(column.order === 'asc'))?'block':'none'}}   className={vc([!column.sortable && 'visibility-hidden'],'set-btn')}>{t('ui.grid.individuation.toolbar.set')}</span>

                              </span>

                              
<template slot>                                
<tinyDropdown onMouseenter={handleDropdownMouseenter($event, index)} onMouseleave={handleDropdownMouseleave($event, index)}>                                  

  {
    column.sortOption.map(item=>(
      <tinyDropdown  key={item.value} label={item.label} item-data={{ value: item.value, property: column.property }}>{item.label}</tinyDropdown>
    ))
  }
  

                                </tinyDropdown>

                              </template>

                            </tinyDropdown>

                          </div>

                          
<span   onClick={hiddenColumn(column.property)} className={vc([column.alwaysShow && 'visibility-hidden'],'close-icon')}><iconClose ></iconClose></span>

                        </div>

                      </li>
    ))
  }
  

                    </ul>

                  </div>

                </template>

              </tinySplit>

            </div>

            
<div style={{display:activeName === 'other'?'block':'none'}}  className={vc(['tabs-body-item', animateShow === 'other' ? 'active-item' : ''])}>              
<div  className="other-setting">                
<span  className="label">{t('ui.grid.individuation.tabs.other.pageSize')}</span>

                
<tinyRadio value={settings.pageSize} onChange={(e)=>settings.pageSize = e.value}>                  

  {
    initSettings.pageSizes.map((item, index)=>(
      <tinyRadio  key={index} label={item}>{item}</tinyRadio>
    ))
  }
  

                </tinyRadio>

              </div>

            </div>

          </div>

        </div>

        
<div  dir={tinyTheme === 'saas' ? 'rtl' : 'ltr'} className="tiny-grid-custom__footer">          
<tinyButton type="primary" onClick={saveSettings}>{t('ui.grid.individuation.saveBtn')}</tinyButton>

          
<tinyCustom style={{display:multipleHistory && activeName === 'base'?'block':'none'}} ref={switch} v-ref="switch" custom-mode={customMode} selected-template-val={selectedTemplateVal} history-config={historyConfig} onInit={initStorage}></tinyCustom>

          
<tinyButton onClick={handleReset}>{t('ui.grid.individuation.resetBtn')}</tinyButton>

          
<tinyButton onClick={cancelSettings}>{t('ui.grid.individuation.cancelBtn')}</tinyButton>

        </div>

      </div>

      
<tinyTooltip ref={tooltip} v-ref="tooltip" value={tooltipVisible} onChange={(e)=>tooltipVisible = e.value} popper-class="absolute" manual={true} effect="light" content={tooltipContent} placement="top">      </tinyTooltip>

    </template>

  </tinyModal>


      );
    }
    