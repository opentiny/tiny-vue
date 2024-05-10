
    import { renderless, api } from '@opentiny/vue-renderless/pager/vue'
    import '@opentiny/vue-theme/pager/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function pager(props) {
      const {accurateJumper,appendToBody,currentPage,disabled,hideOnSinglePage,isBeforePageChange,layout,mode,nextText,pageCount,pageSize,pageSizes,pagerCount,popperAppendToBody,showTotalLoading,customTotal,popperClass,prevText,total,size,align} = props
      const defaultProps = {
        ...$props,
        ...props,
        accurateJumper,appendToBody,currentPage,disabled,hideOnSinglePage,isBeforePageChange,layout,mode,nextText,pageCount,pageSize,pageSizes,pagerCount,popperAppendToBody,showTotalLoading,customTotal,popperClass,prevText,total,size,align
      }
      const { ref, current: vm, parent } = useVm()
      const jumperInput=useRef()
const sizesList=useRef()
const pageSize=useRef()
      const { state,prev,handleJumperFocus,handleJumperInput,handleJumperChange,handleCurrentChange,beforePagerChangeHandler,next,handleSizeShowPopover,handleSizeHidePopover,clickSizes,handleSizeChange } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[jumperInput,sizesList,pageSize]
      })
      return (
          
<div style={{display:state.showPager?'block':'none'}}  style={{ textAlign: state.align }} className={vc(['tiny-pager tiny-pager__number', size ? 'tiny-pager--' + size : '', disabled ? 'is-disabled' : ''])}>    
      


      
<button style={{display:item === 'prev'?'block':'none'}} key={'prev' + index} type="button"  disabled={disabled || state.internalCurrentPage <= 1} onClick={prev} className="tiny-pager__btn-prev">        
<span style={{display:prevText?'block':'none'}}>{prevText}</span>

        
<chevronLeft style={{display:!(prevText)?'block':'none'}}  className="tiny-svg-size"></chevronLeft>

      </button>


      


      
<div style={{display:!(!(prevText))?'block':'none'}} key={'jumper' + index}  className="tiny-pager__group">        
<div  className="tiny-pager__goto">          
<span  className="tiny-pager__goto-text">{t('ui.page.jump')}</span>

          
<input type="text" ref={jumperInput} v-ref="jumperInput" value={state.jumperValue} disabled={disabled} onFocus={handleJumperFocus} onInput={handleJumperInput} onChange={handleJumperChange}></input>

          
<span style={{display:state.showJumperSufix?'block':'none'}}  className="tiny-pager__goto-text tiny-pager__goto-text-sufix">{t('ui.page.pageClassifier')}</span>

        </div>

      </div>


      


      
<div style={{display:!(state.showJumperSufix)?'block':'none'}} key={'current' + index}  className="tiny-pager__group tiny-unselect">        
<ul  className="tiny-pager__pages">          
<li  className="is-active">{state.internalCurrentPage}</li>

        </ul>

      </div>


      


      
<pager style={{display:!(!(state.showJumperSufix))?'block':'none'}} key={'pager' + index} is-before-page-change={isBeforePageChange} current-page={state.internalCurrentPage} page-count={state.internalPageCount} pager-count={pagerCount} disabled={disabled} onChange={handleCurrentChange} onBefore={beforePagerChangeHandler}></pager>


      


      
<button style={{display:!(!(!(state.showJumperSufix)))?'block':'none'}} key={'next' + index} type="button"  disabled={disabled || state.internalCurrentPage === state.internalPageCount || state.internalPageCount === 0} onClick={next} className="tiny-pager__btn-next">        
<span style={{display:nextText?'block':'none'}}>{nextText}</span>

        
<chevronRight style={{display:!(nextText)?'block':'none'}}  className="tiny-svg-size"></chevronRight>

      </button>


      


      
<div style={{display:!(!(nextText))?'block':'none'}} key={'sizes' + index}  className="tiny-pager__group tiny-pager__sizes">        
<tinyPopover ref={sizesList} v-ref="sizesList" placement="bottom-start" append-to-body={popperAppendToBody === false ? false : appendToBody} trigger="click" popper-class={'tiny-pager__selector ' + (popperClass ? '' + popperClass : '')} visible-arrow={false} disabled={disabled} onShow={handleSizeShowPopover} onHide={handleSizeHidePopover}>          
<template slot>            
<div  onClick={clickSizes} className="tiny-pager__popover">              
<div ref={pageSize} v-ref="pageSize"   className={vc({ disabled },'tiny-pager__page-size')}>                
<span  className="sizes">{state.internalPageSize}</span>

                
<span >{t('ui.page.page')}</span>

                
<div  className="tiny-pager__page-size-btn">                  
<triangleDown  className={vc(['tiny-svg-size', state.showSizes ? 'tiny-svg-size__reverse-180' : ''])}></triangleDown>

                </div>

              </div>

            </div>

          </template>

          
<div  className="tiny-pager__selector-body">            
<ul  className="tiny-pager__selector-poplist">              

  {
    pageSizes.map((sizeItem, sizeIndex)=>(
      <li  key={sizeIndex}  title={String(sizeItem)} onClick={handleSizeChange(sizeItem)} className={vc(['list-item', sizeItem === state.internalPageSize ? 'is-selected select-pre' : ''])}>                
{sizeItem}

              </li>
    ))
  }
  

            </ul>

          </div>

        </tinyPopover>

      </div>

      
<Slot style={{display:!(!(!(nextText)))?'block':'none'}} parent_children={props.children} slots={props.slots}></Slot>


      


      
<div style={{display:!(!(!(!(nextText))))?'block':'none'}} key={'total' + index}   className={vc({
          'is-disabled': disabled,
          'tiny-pager__loading': showTotalLoading,
          'tiny-pager__pull-left': state.totalFixedLeft
        },'tiny-pager__group')}>        
<div  className={vc(['tiny-pager__total', size ? 'tiny-pager--' + size : ''])}>          
<template style={{display:showTotalLoading?'block':'none'}}>            
<div loading  className="tiny-pager__total-loading"></div>

            
<span  className="tiny-pager__loading-text">{t('ui.page.loadingTotals')}</span>

          </template>

          
<template style={{display:!(showTotalLoading)?'block':'none'}}>            
<span >{t('ui.page.total')}</span>

            
<span  className="tiny-pager__total-allpage"> 
{customTotal ? state.totalText : state.internalTotal}
 </span>

            
<span >{t('ui.page.item')}</span>

          </template>

          
<template style={{display:!(!(showTotalLoading))?'block':'none'}}>            
<span >{t('ui.page.totals')}</span>

            
<span > 
{customTotal ? state.totalText : state.internalTotal}
 </span>

          </template>

        </div>

      </div>

    

  </div>


      );
    }
    