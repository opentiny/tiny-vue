
    import { renderless, api } from '@opentiny/vue-renderless/image-viewer/vue'
    import '@opentiny/vue-theme/image-viewer/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function imageViewer(props) {
      const {urlList,zIndex,onSwitch,onClose,showIndex,isThumbnail,isMenuView,modalView,modalHeight,bgColor} = props
      const defaultProps = {
        ...$props,
        ...props,
        urlList,zIndex,onSwitch,onClose,showIndex,isThumbnail,isMenuView,modalView,modalHeight,bgColor
      }
      const { ref, current: vm, parent } = useVm()
      const isThumbnailContent=useRef()
const isMenuViewContent=useRef()
const canvasBox=useRef()
const viewerItem=useRef()
const thumbnailCanvasBox=useRef()
      const { state,activeItems,hide,toggleMode,handleActions,itemClick,prev,next,handleImgError,handleMouseDown,handleImgLoad,imagePreview,touchstart,touchmove,touchend,selectOption } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[isThumbnailContent,isMenuViewContent,canvasBox,viewerItem,thumbnailCanvasBox]
      })
      return (
          
<div data-tag="tiny-image-viewer" style={{display:state.showImageViewer?'block':'none'}}>    
<transition name="viewer-fade">      
<div style={{display:state.showImageViewer?'block':'none'}} data-tag="tiny-image-body"  style={{ 'z-index': state.zIndex, 'height': modalView && modalHeight + 'px' }} className={vc(['left-0 right-0 top-0 bottom-0 hidden sm:flex z-10', modalView ? '' : 'fixed'])}>        
<div data-tag="tiny-isthumbnail" style={{display:state.isThumbnail?'block':'none'}} ref={isThumbnailContent} v-ref="isThumbnailContent"  style={{ backgroundColor: bgColor === 'white' && bgColor }} className={vc([
            'flex-none w-[12%] h-full flex flex-col overflow-y-scroll items-center scrollbar-size-0',
            bgColor !== 'white' ? 'bg-color-icon-primary' : ''
          ])}>          

  {
    state.urlList.map((item, i)=>(
      <div  key={i}  ref={`isThumbnail_${i}`} className="w-[88%] [&:not(:last-child)]:mb-2 [&:first-of-type]:mt-2">            
<div onClick={activeItems(i)}  className={vc(['rounded cursor-pointer p-1', { 'bg-color-brand': state.currentIndex === i }])}>              
<img  ref={`img_${i}`} src={item.url} className="max-h-full max-w-full aspect-square bg-current rounded"></img>

              
<div title={item.name || item.url}  className={vc([
                  'px-1 mt-1 sm:text-xs text-sm leading-5 overflow-hidden whitespace-nowrap text-ellipsis',

                  bgColor === 'white'
                    ? state.currentIndex !== i
                      ? 'text-color-text-primary'
                      : 'text-color-bg-1'
                    : 'text-color-bg-1'
                ])}>                
{item.name}

              </div>

            </div>

          </div>
    ))
  }
  

        </div>

        
<div data-tag="tiny-is-menu-view" style={{display:state.isMenuView?'block':'none'}} ref={isMenuViewContent} v-ref="isMenuViewContent"  className={vc([
            'flex-none w-[12%] h-full flex flex-col overflow-y-scroll items-center scrollbar-size-0',
            bgColor !== 'white' ? 'bg-color-icon-primary' : 'bg-color-bg-1'
          ])}>          

  {
    state.urlList.map((items, i)=>(
      <div  key={i}  className="w-[88%]">            
<div onClick={activeItems(i)} ref={`isMenuView_${i}`}  className={vc([
                '[&:first-of-type]:mt-2.5 rounded cursor-pointer flex mx-1 h-9 items-center',
                { 'bg-color-brand': state.currentIndex === i }
              ])}>              
<iconPicture  ref={`img_${i}`} src={items.url} className={vc([
                  'max-h-full max-w-full w-[9%] h-auto my-2.5 mx-1.5 object-none',
                  bgColor === 'white'
                    ? state.menuItemIndex !== i
                      ? 'fill-color-text-primary'
                      : 'fill-color-bg-1'
                    : 'fill-color-bg-1'
                ])}></iconPicture>

              
<div title={items.name || items.url}  className={vc([
                  'w-[67%] sm:text-xs text-sm leading-5 overflow-hidden whitespace-nowrap text-ellipsis',
                  bgColor === 'white'
                    ? state.menuItemIndex !== i
                      ? 'text-color-text-primary'
                      : 'text-color-bg-1'
                    : 'text-color-bg-1'
                ])}>                
{items.name}

              </div>

            </div>

          </div>
    ))
  }
  

        </div>

        
<div  data-tag="tiny-image-tools" className="flex-auto h-full relative">          
<div data-tag="tiny-image-pc-mask"  className="absolute w-full h-full top-0 left-0 bg-color-bg-7"></div>

          


          
<span data-tag="tiny-image-pc-close" style={{display:modalView || (!state.isThumbnail && !state.isMenuView)?'block':'none'}}  onClick={hide} className="z-[1] flex absolute items-center justify-center rounded-full box-border select-none top-20 right-20 bottom-10 text-xl cursor-pointer w-8 h-8 hover:bg-color-text-primary active:bg-color-border fill-color-bg-1 bg-color-border">            
<iconClose  className="fill-color-bg-1 cursor-pointer"></iconClose>

          </span>

          


          
<div data-tag="tiny-image-pc-actions"  className="z-[1] absolute inline-flex items-center justify-center box-border select-none left-1/2 bottom-12 -translate-x-1/2 w-80 h-10 px-4 bg-color-bg-7 rounded cursor-pointer">            
<div  className="w-full h-full text-justify cursor-default text-2xl flex items-center justify-between fill-color-bg-1">              
<Component is={state.mode.icon}  onClick={toggleMode} className="cursor-pointer"></Component>

              
<iconZoom  onClick={handleActions('zoomOut')} className="cursor-pointer"></iconZoom>

              
<iconZoom  onClick={handleActions('zoomIn')} className="cursor-pointer"></iconZoom>

              
<iconRefres  onClick={handleActions('clocelise')} className="cursor-pointer"></iconRefres>

              
<iconRepeat  onClick={handleActions('anticlocelise')} className="cursor-pointer"></iconRepeat>

              
<iconDel  onClick={handleActions('delImage')} className="cursor-pointer"></iconDel>

              
<a href={`${state.currentImg}`} target="_blank" rel="noopener noreferrer" download  className="cursor-pointer inline-flex fill-color-bg-1"><iconDownload ></iconDownload></a>

              
<tinyDropdown show-self-icon  onItem={itemClick} className="flex">                
<span ><iconEditor ></iconEditor></span>

                
<template slot>                  
<tinyDropdown checked-status placement="top">                    
<template slot>                      
<tinyDropdown current-index={0} selected={selectedIndex === '0' && !state.isThumbnail && !state.isMenuView} item-data={!state.isThumbnail && !state.isMenuView ? '4' : '1'}>{state.isThumbnail || state.isMenuView ? t('ui.imageViewer.hide') : t('ui.imageViewer.show')}</tinyDropdown>

                      
<tinyDropdown current-index={1} selected={selectedIndex === '1' || state.isThumbnail} item-data="2">{t('ui.imageViewer.thumbnail')}</tinyDropdown>

                      
<tinyDropdown current-index={2} selected={selectedIndex === '2' || state.isMenuView} item-data="3">{t('ui.imageViewer.menu')}</tinyDropdown>

                    </template>

                  </tinyDropdown>

                </template>

              </tinyDropdown>

              
<iconArrow onClick={prev}  className={vc(['cursor-pointer', { 'is-disabled': !state.infinite && state.isFirst }])}></iconArrow>

              
<iconArrow onClick={next}  className={vc(['cursor-pointer', { 'is-disabled': !state.infinite && state.isLast }])}></iconArrow>

            </div>

          </div>

          


          
<div data-tag="tiny-image-pc-index" style={{display:showIndex?'block':'none'}}  className="z-10 absolute flex items-center justify-center box-border left-1/2 -translate-x-1/2 px-4 bottom-5">            
<span  className="h-4.5 inline-flex items-center text-color-text-primary">              
{state.index + 1 + '/' + state.urlList.length}

            </span>

          </div>

          


          
<div data-tag="tiny-image-pc-canvas"  className="z-10 flex w-full h-full items-center justify-center">            
              
<img style={{display:i === state.index?'block':'none'}} ref={`img_${i}`} key={i} src={state.currentImg} style={state.imgStyle} onError={handleImgError} onMousedown={handleMouseDown} onLoad={handleImgLoad}></img>

            

          </div>

        </div>

      </div>

    </transition>

    
<transition name="viewer-fade">      
<div style={{display:state.isThumbnail?'block':'none'}} data-tag="tiny-image-mobile-thumbnail-list"  className={vc(['w-screen h-screen fixed top-0 left-0 sm:hidden z-40', { 'hidden': state.hiddenThumbnail }])}>        
<div  className="bg-color-bg-1 w-screen h-screen overflow-auto">          

  {
    state.urlList.map((item, i)=>(
      <div   key={i} onTouchstart={imagePreview(i)} className="px-4 pt-4 [&:last-of-type]:mb-5 cursor-pointer">            
<img  ref={`img_${i}`} src={item.url} className="bg-current w-full h-auto"></img>

            
<div title={item.name || item.url}  className="color-text-primary mt-2 sm:text-xs text-sm leading-5 overflow-hidden whitespace-nowrap text-ellipsis text-color-text-primary">              
{item.name}

            </div>

          </div>
    ))
  }
  

        </div>

      </div>

      
<div data-tag="tiny-image-mobile-common" style={{display:!(state.isThumbnail)?'block':'none'}}  className="w-screen h-screen fixed top-0 left-0 z-50 sm:hidden">        
<div data-tag="tiny-image-mobile-mask"  className="absolute w-full h-full top-0 left-0 bg-black"></div>

        
<div data-tag="tiny-image-mobile-index"  swipeleft swiperight className="left-0 right-0 top-0 bottom-0 fixed">          
<div style={{display:showIndex?'block':'none'}}  className="absolute flex items-center justify-center box-border left-1/2 -translate-x-1/2 px-4 bottom-12">            
<span  className="h-4.5 inline-flex items-center text-color-bg-1">              
{state.index + 1 + '/' + state.urlList.length}

            </span>

          </div>

          
<div data-tag="tiny-image-mobile-canvas" ref={canvasBox} v-ref="canvasBox"  className="w-full h-full">            
<div  style={{
                'width': `${state.imageAllWidth}px`,
                'transition-duration': `${state.imageTransition}ms`,
                transform: 'translateX(' + state.imageTransformSize + 'px)'
              }} className="h-full flex items-center justify-center">              
                

  {
    urlList.map((url, i)=>(
      <div data-tag="tiny-image-mobile-viewer-item"  ref={viewerItem} v-ref="viewerItem"  key={i} style={
                    Object.assign({ width: `${state.imageItemWidth}px` }, i === state.index ? state.imgStyle : '')
                  } className="relative shrink h-full">                  
<div  className="absolute top-0 left-0 right-0 bottom-0 text-center transition-transform inline-block duration-300">                    
<img style={{display:i === state.index?'block':'none'}} key={i}  ref={`img_${i}`} src={state.currentImg} style={state.imgStyle} onMousedown={handleMouseDown} onError={handleImgError} onLoad={handleImgLoad} onTouchstart={touchstart} onTouchmove={touchmove} onTouchend={touchend} className={vc([
                        'block w-full h-full object-contain',
                        {
                          'object-fill': state.fullScreen
                        }
                      ])}></img>

                  </div>

                </div>
    ))
  }
  

              

            </div>

          </div>

        </div>

      </div>

    </transition>

    
<transition name="viewer-fade">      
<div data-tag="tiny-image-isthumbnail-preview" style={{display:state.isImagePreview?'block':'none'}}  className="w-screen h-screen fixed top-0 left-0 z-50 sm:hidden">        
<div data-tag="tiny-image-mobile-mask"  className="absolute w-full h-full top-0 left-0 bg-black"></div>

        
<div data-tag="tiny-image-isthumbnail-index"  swipeleft swiperight className="left-0 right-0 top-0 bottom-0 fixed">          
<div style={{display:showIndex?'block':'none'}}  className="absolute flex items-center justify-center box-border left-1/2 -translate-x-1/2 px-4 bottom-12">            
<span  className="h-4.5 inline-flex items-center text-color-bg-1">              
{state.index + 1 + '/' + state.urlList.length}

            </span>

          </div>

          
<div data-tag="tiny-image-isthumbnail-canvas" ref={thumbnailCanvasBox} v-ref="thumbnailCanvasBox"  className="w-full h-full">            
<div  style={{
                'width': `${state.imageAllWidth}px`,
                'transition-duration': `${state.imageTransition}ms`,
                transform: 'translateX(' + state.imageTransformSize + 'px)'
              }} className="h-full flex items-center justify-center">              

  {
    state.urlList.map((url, i)=>(
      <div data-tag="tiny-image-isthumbnail-viewer-item"  ref={viewerItem} v-ref="viewerItem"  key={i} style={Object.assign({ width: `${state.imageItemWidth}px` }, i === state.index ? state.imgStyle : '')} className="relative shrink h-full">                
<div  className="absolute top-0 left-0 right-0 bottom-0 text-center transition-transform inline-block duration-300">                  
<img key={i}  ref={`img_${i}`} src={state.currentImg} style={state.imgStyle} onMousedown={handleMouseDown} onError={handleImgError} onLoad={handleImgLoad} onTouchstart={touchstart} onTouchmove={touchmove} onTouchend={touchend} className={vc([
                      'block w-full h-full object-contain',
                      {
                        'object-fill': state.fullScreen
                      }
                    ])}></img>

                </div>

              </div>
    ))
  }
  

            </div>

          </div>

        </div>

      </div>

    </transition>

    
<tinyAction type="action" menus={[
        { type: 'save', label: t('ui.imageViewer.save') },
        { type: 'thumbnail', label: t('ui.imageViewer.thumbnail') },
        { type: 'del', label: t('ui.imageViewer.del') }
      ]} visible={state.boxVisibility} onUpdate:visible={state.boxVisibility = $event} onClick={selectOption}>      
<template slot>        
<div  className={vc([{ 'text-color-error': data.data.type === 'del' }])}>{data.data.label}</div>

      </template>

    </tinyAction>

  </div>


      );
    }
    