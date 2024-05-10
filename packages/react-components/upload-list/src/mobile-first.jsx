
    import { renderless, api } from '@opentiny/vue-renderless/upload-list/vue'
    import '@opentiny/vue-theme/upload-list/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function uploadList(props) {
      const {disabled,display,files,filesIcon,handlePreview,isEdm,isFolder,listType,openDownloadFile,srcList,isFolderTitle,listOption,maxNameLength,scale,showName,types,edm,displayOnly,handleDownloadFile,handleReUpload,isDragover,selected,triggerClick,isHwh5,triggerPlay,mode,lockScroll,compact} = props
      const defaultProps = {
        ...$props,
        ...props,
        disabled,display,files,filesIcon,handlePreview,isEdm,isFolder,listType,openDownloadFile,srcList,isFolderTitle,listOption,maxNameLength,scale,showName,types,edm,displayOnly,handleDownloadFile,handleReUpload,isDragover,selected,triggerClick,isHwh5,triggerPlay,mode,lockScroll,compact
      }
      const { ref, current: vm, parent } = useVm()
      const uploadList=useRef()
const uploadListLi=useRef()
      const { state,handlePreview,handleDownloadFile,reUpload,remove,showOperatePanel,!disabled && remove,play,pause,handleTriggerClick } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[uploadList,uploadListLi]
      })
      return (
          
<div data-tag="tiny-upload-list">    
<div data-tag="tiny-upload-list-text" style={{display:listType === 'text' || listType === 'saas'?'block':'none'}} ref={uploadList} v-ref="uploadList"   className={vc([
        state.files.length || mode === 'bubble' ? 'sm:border-0' : 'sm:border-t',
        { 'sm:h-52 overflow-y-auto overflow-x-hidden': mode === 'bubble' }
      ],'border-dashed border-color-border')}>      
<div data-tag="tiny-upload-list-files" style={{display:state.files.length?'block':'none'}}  className="text-[0]">        

  {
    state.files.map((file, index)=>(
      <div data-tag="tiny-upload-list-item" ref={uploadListLi} v-ref="uploadListLi"    key={file.uid} tabindex="0" onClick={$emit('click-file-list', file)} className={vc({
            'sm:border-color-brand border-color-border-separator': file.uid === (selected && selected.uid),
            'mb-2': index !== state.files.length - 1,
            'sm:min-w-[theme(spacing.112)]': compact
          },'group relative sm:inline-block min-w-full p-3 mr-2 border-0.5 sm:border border-color-border-separator rounded hover:bg-color-bg-2')}>          
<Slot file={file} parent_children={props.children} slots={props.slots}>            
<div data-tag="tiny-upload-list-status"   className={vc({ 'bg-color-error rounded-sm': ~['fail'].indexOf(file.status) },'relative inline-block w-8 h-8 mr-2 align-top')}>              
<template style={{display:~['uploading'].indexOf(file.status)?'block':'none'}}>                
<div  className="w-full h-full absolute top-0 left-0 bg-black opacity-50 rounded-sm"></div>

                
<div  className="w-full h-full absolute top-0 left-0 overflow-hidden flex px-1 items-center justify-center rounded-sm">                  
<div data-tag="tiny-upload-list-animation"  className="bg-color-icon-tertiary w-full h-0.5 rounded">                    
<div  style={{
                        width: `${parsePercentage(Math.max(0, Math.min(file.percentage || 0, 100)))}%`
                      }} className="bg-white h-full transition-all"></div>

                  </div>

                </div>

              </template>

              
<Component style={{display:~['uploading', 'success', 'downloading'].indexOf(file.status)?'block':'none'}} custom-class="w-full h-full rounded-sm" style={{ fill: getFileIcon({ type: getFileType({ file }) }).color }} is={getFileIcon({ type: getFileType({ file }) }).name}></Component>

              
<div data-tag="tiny-upload-list-fail" style={{display:~['fail'].indexOf(file.status)?'block':'none'}}  className="relative w-full h-full bg-black/50 rounded">                
<iconCue  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fill-color-error"></iconCue>

              </div>

            </div>

            
<div data-tag="tiny-upload-list-content"  className="relative inline-block w-[calc(100%-theme(spacing.10))] text-xs pr-10 sm:pr-0">              
<div  data-tag="tiny-upload-list-name" className="flex h-4">                
<div  className="flex-1 sm:mr-6 text-sm sm:text-xs leading-3 sm:leading-3 text-color-text-primary overflow-hidden text-ellipsis whitespace-nowrap">                  
<span title={file.name}>{file.name
                      .split('.')
                      .filter((item, i, arr) => arr.length - 1 > i || arr.length === 1)
                      .join('.')}</span>

                  
<span >.
{file.name.split('.')[file.name.split('.').length - 1]}</span>

                </div>

                
<div data-tag="tiny-upload-list-operate"  className="hidden sm:block sm:invisible sm:group-hover:visible min-w-fit text-color-brand-hover text-xs">                  
<Slot name="operate" file={file} parent_children={props.children} slots={props.slots}>                    
<span style={{display:handlePreview && ~['success', 'downloading'].indexOf(file.status)?'block':'none'}}  onClick={handlePreview(file)} className="mr-2 cursor-pointer">{t('ui.uploadList.preview')}</span>

                    
<span style={{display:handleDownloadFile && !~['fail', 'uploading'].indexOf(file.status)?'block':'none'}}  onClick={handleDownloadFile(file)} className="mr-2 cursor-pointer">{t('ui.uploadList.download')}</span>

                    
<span style={{display:(isEdm ? true : handleReUpload) && ~['fail'].indexOf(file.status)?'block':'none'}}  onClick={reUpload(file)} className="mr-2 cursor-pointer">{t('ui.uploadList.reUpload')}</span>

                    
<span style={{display:!displayOnly?'block':'none'}}  onClick={remove({ file })} className="cursor-pointer">{t('ui.uploadList.delete')}</span>

                  </Slot>

                </div>

              </div>

              
<div  data-tag="tiny-upload-list-content" className="flex h-4 leading-5">                
<span  className="overflow-hidden text-ellipsis whitespace-nowrap font-light sm:font-normal">                  
<span style={{display:~['fail'].indexOf(file.status)?'block':'none'}}>                    
<span  className="hidden sm:inline text-color-error-hover">{t('ui.uploadList.uploadFailed')}</span>

                    
<span  className="inline sm:hidden text-color-error-hover">{t('ui.uploadList.uploadFailedAndReupload')}</span>

                  </span>

                  
<span style={{display:!(~['fail'].indexOf(file.status))?'block':'none'}}  className="text-color-text-placeholder">{formatFileSize((file.size * file.percentage) / 100) + '/' + formatFileSize(file.size)}</span>

                  
<span style={{display:!(!(~['fail'].indexOf(file.status)))?'block':'none'}}  className="text-color-text-placeholder">{formatFileSize(file.size)}</span>

                </span>

                
<span  className="flex-1 ml-2 overflow-hidden text-ellipsis whitespace-nowrap text-right text-color-none">                  
<Slot name="assist-content" file={file} parent_children={props.children} slots={props.slots}></Slot>

                </span>

              </div>

              
<div data-tag="tiny-upload-list-icon"  className="sm:invisible absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer">                
<iconEllipsis style={{display:~['success', 'downloading'].indexOf(file.status)?'block':'none'}} onClick={showOperatePanel({ file })}  className="fill-color-text-primary"></iconEllipsis>

                
<iconError style={{display:!displayOnly && ~['uploading', 'fail'].indexOf(file.status)?'block':'none'}}  onClick={remove({ file })} className="fill-color-none-hover"></iconError>

              </div>

              
<div  onClick={reUpload(file)} className="absolute left-0 top-0 w-[calc(100%-theme(spacing.10))] h-full mr-10 sm:hidden sm:mr-0"></div>

            </div>

          </Slot>

          
<tinyProgress style={{display:file.showDownloadBar?'block':'none'}}  show-text={false} stroke-width={4} percentage={file.downloadPercentage || 0} status={file.downloadStatus || 'default'} className="absolute left-0 bottom-0 w-full"></tinyProgress>

        </div>
    ))
  }
  

      </div>

      
<div data-tag="tiny-upload-list-noattachments" style={{display:!(file.showDownloadBar)?'block':'none'}}   className={vc([displayOnly ? '' : 'hidden','mt-4 text-color-none text-xs sm:block]')}>        
{t('ui.uploadList.noAttachments')}

      </div>

    </div>

    
<div data-tag="tiny-upload-list-drag-single" style={{display:!(!(file.showDownloadBar))?'block':'none'}}  className="border-dashed border-color-border text-center">      
<Slot name="upload" parent_children={props.children} slots={props.slots}></Slot>

      
<div   className={vc([files.length ? 'z-0' : 'z-[-1]'],'absolute w-full h-full top-0 left-0')}>        
<div style={{display:!files.length?'block':'none'}}>          
<iconFileupload custom-class="w-20 h-20 mt-6"  className={vc([isDragover ? 'fill-color-brand' : 'fill-color-none-hover'])}></iconFileupload>

          
<div   className={vc([isDragover ? 'mt-4' : '','mb-0.5 text-sm text-color-text-secondary]')}>            
{isDragover ? t('ui.uploadList.releaseAndUpload') : t('ui.uploadList.dragOrClickImport')}

          </div>

          
<Slot style={{display:!isDragover?'block':'none'}} name="tip" parent_children={props.children} slots={props.slots}></Slot>

        </div>

        
<div  style={{display:!(!isDragover)?'block':'none'}} className="h-full">          

  {
    files.map(file=>(
      <div  key={file.uid} tabindex="0">            
<Slot file={file} parent_children={props.children} slots={props.slots}>              
<div style={{display:['fail'].includes(file.status)?'block':'none'}}>                
<iconFileupload custom-class="w-12 h-12 mt-6"  className={vc([isDragover ? 'fill-color-brand' : 'fill-color-none-hover'])}></iconFileupload>

                
<div  className="mt-4.5">                  
<iconCue  className="fill-color-error"></iconCue>

                  
<span  className="mt-1 pl-1 align-middle text-color-error text-xs">{t('ui.uploadList.uploadFailed')}</span>

                </div>

              </div>

              
<div style={{display:!(['fail'].includes(file.status))?'block':'none'}}>                
<div  className="relative inline-block w-12 h-12 mt-6 align-top">                  
<div style={{display:~['uploading'].indexOf(file.status)?'block':'none'}}  className="w-1/2 h-full absolute top-0 left-0 rounded-l overflow-hidden">                    
<div  style={{
                        transform: `translateY(-50%) rotate(${parsePercentage(
                          (Math.max(0, Math.min(file.percentage || 0, 100) - 50) / 50) * 180
                        )}deg)`
                      }} className="absolute w-16 h-16 top-1/2 right-0 origin-right bg-color-bg-7"></div>

                  </div>

                  
<div style={{display:~['uploading'].indexOf(file.status)?'block':'none'}}  className="w-1/2 h-full absolute top-0 left-1/2 rounded-r overflow-hidden">                    
<div  style={{
                        transform: `translateY(-50%) rotate(${parsePercentage(
                          (Math.min(50, file.percentage || 0) / 50) * 180
                        )}deg)`
                      }} className="absolute w-16 h-16 top-1/2 left-0 origin-left bg-color-bg-7"></div>

                  </div>

                  
<Component style={{display:~['uploading', 'success', 'downloading'].indexOf(file.status)?'block':'none'}} custom-class="w-full h-full rounded-sm" style={{ fill: getFileIcon({ type: getFileType({ file }) }).color }} is={getFileIcon({ type: getFileType({ file }) }).name}></Component>

                </div>

                
<div  className="mt-3 mb-2">{file.name}</div>

                
<div >                  
<span  onClick={remove({ file })} className="text-color-brand cursor-pointer">{t('ui.uploadList.delete')}</span>

                </div>

              </div>

            </Slot>

          </div>
    ))
  }
  

        </div>

      </div>

    </div>

    
<div data-tag="tiny-upload-list-picture-card" style={{display:!(~['uploading', 'success', 'downloading'].indexOf(file.status))?'block':'none'}}  className={vc([
        { 'grid grid-cols-3 gap-x-4 sm:grid-cols-[repeat(auto-fit,theme(spacing.24))]': listType === 'picture-card' },
        showName ? 'gap-y-8' : 'gap-y-4'
      ])}>      

  {
    files.map((file, index)=>(
      <div   key={file.uid} tabindex="0" onKeydown={!disabled && remove({ file })} className={vc([
          'group relative',
          { 'hidden': listType === 'picture-single' && index },
          listType === 'picture-single'
            ? `w-24 h-24 sm:w-[calc(${scale}*theme(spacing.20))] sm:h-20`
            : 'w-full pt-[100%]'
        ])}>        
<div  className="absolute top-0 left-0 w-full h-full">          
<Slot file={file} parent_children={props.children} slots={props.slots}>            
<iconError style={{display:!displayOnly && (file.status !== 'uploading' || ~['video', 'audio'].indexOf(file.type))?'block':'none'}}   onClick={remove({ file })} className={vc([
                { 'sm:hidden -top-1.5': !~['video', 'audio'].indexOf(file.type) },
                listType === 'picture-single' ? '-right-1.5' : '-right-1.5'
              ],'absolute w-5 h-5 -top-1.5 fill-color-none-hover hover:cursor-pointer z-[1]')}></iconError>

            
<div   className={vc([
                !~['uploading', 'fail'].indexOf(file.status) ? 'after:hidden sm:after:group-hover:block' : '',
                { 'mb-7': listType === 'picture-card' && showName },
                ~['video', 'audio'].indexOf(file.type) ? 'after:opacity-0' : 'after:opacity-50'
              ],'relative w-full h-full after:absolute after:w-full after:h-full after:left-0 after:top-0 after:rounded after:bg-color-bg-7')}>              
<video style={{display:file.type === 'video'?'block':'none'}} ref={'video' + (file.uid || index)}  className="w-full h-full border rounded object-cover">                
<source src={file.url} type="video/mp4"></source>

                
<source src={file.url} type="video/ogg"></source>

                
<source src={file.url} type="video/webm"></source>

              </video>

              
<div style={{display:!(file.type === 'video')?'block':'none'}}  className="flex w-full h-full justify-center items-center border rounded border-transparent bg-color-info-secondary-subtle">                
<audio ref={'audio' + (file.uid || index)} onLoadedmetadata={
                    ($event) => {
                      handleLoadedmetadata({ e: $event, file })
                    }
                  } onTimeupdate={
                    ($event) => {
                      handleTimeupdate({ e: $event, file })
                    }
                  }>                  
<source src={file.url} type="video/mp3"></source>

                  
<source src={file.url} type="video/ogg"></source>

                  
<source src={file.url} type="video/wav"></source>

                </audio>

              </div>

              
<img style={{display:!(!(file.type === 'video'))?'block':'none'}}  src={file.url} alt="" className="w-full h-full border rounded"></img>

              
<div title={file.name}   className={vc({ 'hidden': !showName },'mt-2 overflow-hidden overflow-ellipsis whitespace-nowrap text-color-text-primary text-xs')}>                
{file.name}

              </div>

              
<div  className="absolute w-full top-1/2 left-0 -translate-y-1/2 z-[1] text-center hover:cursor-pointer">                
<div style={{display:~['uploading'].indexOf(file.status)?'block':'none'}}>                  
<tinyProgress  percentage={parsePercentage(file.percentage)} show-text={false} stroke-width={4} color="#fff" className="inline-block w-[calc(100%-theme(spacing.10))]"></tinyProgress>

                  
<div  className="mt-3 text-color-text-inverse text-xs">                    
{~['video', 'audio'].indexOf(file.type)
                        ? t('ui.uploadList.uploading')
                        : t('ui.uploadList.pictureUploading')}

                  </div>

                </div>

                
<div style={{display:!(~['uploading'].indexOf(file.status))?'block':'none'}}>                  
<span  className="block sm:group-hover:hidden">                    
<iconCue  className="w-6 h-6 fill-color-icon-inverse"></iconCue>

                    
<div  className="mt-1 text-color-text-inverse text-xs">{t('ui.uploadList.uploadFailed')}</div>

                  </span>

                  
<span  className="hidden sm:group-hover:block">                    
<iconRefres style={{display:isEdm ? true : handleReUpload?'block':'none'}}  onClick={reUpload(file)} className="w-6 h-6 mr-2 fill-color-icon-inverse"></iconRefres>

                    
<iconDel style={{display:!displayOnly && listType !== 'picture-single'?'block':'none'}}  onClick={remove({ file })} className="w-6 h-6 fill-color-icon-inverse"></iconDel>

                  </span>

                </div>

                
<div style={{display:!(!displayOnly && listType !== 'picture-single')?'block':'none'}}>                  
<div  className={vc(['hidden', { 'sm:group-hover:block': !~['video', 'audio'].indexOf(file.type) }])}>                    
<Slot name="operate" file={file} parent_children={props.children} slots={props.slots}>                      
<iconEyeopen style={{display:handlePreview?'block':'none'}}  onClick={handlePreview(file)} className="w-6 h-6 mr-2 fill-color-icon-inverse"></iconEyeopen>

                      
<iconDownload style={{display:handleDownloadFile?'block':'none'}}  onClick={handleDownloadFile(file)} className="w-6 h-6 mr-2 fill-color-icon-inverse"></iconDownload>

                      
<iconDel style={{display:!displayOnly?'block':'none'}}  onClick={remove({ file })} className="w-6 h-6 fill-color-icon-inverse"></iconDel>

                    </Slot>

                  </div>

                  
<div style={{display:file.type === 'video'?'block':'none'}}   className={vc([!file.isPlay ? 'bg-color-bg-7' : 'bg-opacity-0','inline-block w-8 h-8 text-center rounded-full group-hover:bg-color-bg-7]')}>                    
<iconRight style={{display:!file.isPlay?'block':'none'}}  onClick={play({ file, index, type: 'video' })} className="w-4 h-4 mt-2 fill-color-icon-inverse"></iconRight>

                    
<iconPause style={{display:file.isPlay?'block':'none'}}  onClick={pause({ file, index, type: 'video' })} className="w-6 h-6 hidden group-hover:inline-block mt-1 fill-color-icon-inverse"></iconPause>

                  </div>

                  
<div style={{display:file.type === 'audio'?'block':'none'}}>                    
<iconAudio  onClick={play({ file, index, type: 'audio' })} className="w-6 h-6 fill-color-brand"></iconAudio>

                    
<div >{`${file.currentSecond || 0} / ${file.totalSecond || 0}`}</div>

                  </div>

                </div>

              </div>

            </div>

            
<div style={{display:handlePreview && ~['success'].indexOf(file.status)?'block':'none'}}  onClick={handlePreview(file)} className="absolute w-full h-full left-0 top-0 sm:hidden"></div>

          </Slot>

        </div>

      </div>
    ))
  }
  

      

  {
    types.map((type, i)=>(
      <div  key={i}   className={vc([
          listType === 'picture-single' ? `w-24 h-24 sm:w-[calc(${scale}*theme(spacing.20))] sm:h-20` : 'pt-[100%]',
          { 'hidden': displayOnly && files.length },
          { 'hidden': !displayOnly && listType === 'picture-single' && files.length }
        ],'relative')}>        
<div  className="absolute top-0 left-0 w-full h-full">          
<Slot name="upload" type={type} parent_children={props.children} slots={props.slots}></Slot>

        </div>

      </div>
    ))
  }
  

    </div>

    
<tinyAction show-header={false} lock-scroll={lockScroll} visible={state.showPanel} onUpdate:visible={state.showPanel = $event} custom-class="!min-h-0 py-0">      
<Slot name="operate" file={state.currentFile || {}} parent_children={props.children} slots={props.slots}>        
<div data-tag="tiny-upload-list-download"  className="text-center">          
<div style={{display:handleDownloadFile?'block':'none'}}  onClick={
              () => {
                state.showPanel = false
                handleDownloadFile(state.currentFile)
              }
            } className="h-12 flex items-center justify-center border-b border-color-border-separator cursor-pointer">            
{t('ui.uploadList.download')}

          </div>

          
<div data-tag="tiny-upload-list-handle-preview" style={{display:handlePreview?'block':'none'}}  onClick={
              () => {
                state.showPanel = false
                handlePreview(state.currentFile)
              }
            } className="h-12 flex items-center justify-center border-b border-color-border-separator cursor-pointer">            
{t('ui.uploadList.preview')}

          </div>

          
<div data-tag="tiny-upload-list-panel" style={{display:!displayOnly?'block':'none'}}  onClick={
              () => {
                state.showPanel = false
                remove({ file: state.currentFile })
              }
            } className="h-12 flex items-center justify-center cursor-pointer">            
{t('ui.uploadList.delete')}

          </div>

          
<div  className="h-2 bg-color-bg-2"></div>

          
<div  onClick={state.showPanel = false} className="h-12 flex items-center justify-center cursor-pointer">            
{t('ui.uploadList.cancel')}

          </div>

        </div>

      </Slot>

    </tinyAction>

    
<tinyAction show-header={false} lock-scroll={lockScroll} visible={state.showTriggerPanel} onUpdate:visible={state.showTriggerPanel = $event} custom-class="!min-h-0 py-0">      
<div data-tag="tiny-upload-list-vadio-content"  className="text-center">        
<div  onClick={handleTriggerClick($event, state.triggerClickType === 'video' ? 3 : 2)} className="h-12 flex items-center justify-center cursor-pointer">          
{t('ui.uploadList.shoot')}

        </div>

        
<div  onClick={handleTriggerClick($event, 1)} className="h-12 flex items-center justify-center cursor-pointer">          
{t('ui.uploadList.selectFromAlbum')}

        </div>

        
<div  className="h-2 bg-color-bg-2"></div>

        
<div  onClick={state.showTriggerPanel = false} className="h-12 flex items-center justify-center cursor-pointer">          
{t('ui.uploadList.cancel')}

        </div>

      </div>

    </tinyAction>

    
<tinyRecord is-hwh5={isHwh5} onTrigger={handleTriggerClick} value={state.showAudioPanel} onChange={(e)=>state.showAudioPanel = e.value}></tinyRecord>

  </div>


      );
    }
    