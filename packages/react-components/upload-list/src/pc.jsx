
    import { renderless, api } from '@opentiny/vue-renderless/upload-list/vue'
    import '@opentiny/vue-theme/upload-list/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function uploadList(props) {
      const {disabled,display,files,filesIcon,handlePreview,isEdm,isFolder,listType,openDownloadFile,srcList,isFolderTitle,listOption,maxNameLength,mode,reUploadable,reUploadTip,selected,displayOnly,handleDownloadFile,handleReUpload,compact} = props
      const defaultProps = {
        ...$props,
        ...props,
        disabled,display,files,filesIcon,handlePreview,isEdm,isFolder,listType,openDownloadFile,srcList,isFolderTitle,listOption,maxNameLength,mode,reUploadable,reUploadTip,selected,displayOnly,handleDownloadFile,handleReUpload,compact
      }
      const { ref, current: vm, parent } = useVm()
      const uploadList=useRef()
const uploadListLi=useRef()
      const { state,handlePreview,handleDownloadFile,reUpload,remove,handleClick } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[uploadList,uploadListLi]
      })
      return (
          
<div style={{display:listType === 'saas'?'block':'none'}} ref={uploadList} v-ref="uploadList"   className={vc([
      state.files.length || mode === 'bubble' ? 'border-zero' : 'border-top',
      { 'mode-bubble': mode === 'bubble' }
    ],'tiny-upload-list--saas')}>    
<div style={{display:state.files.length?'block':'none'}}  className="tiny-upload-list-panel">      

  {
    state.files.map(file=>(
      <div ref={uploadListLi} v-ref="uploadListLi"  data-tag="tiny-upload-list-item"   key={file.uid} tabindex="0" onClick={$emit('click-file-list', file)} className={vc({
          'selected': file.uid === (selected && selected.uid),
          'compact': compact
        },'tiny-upload-list-item')}>        
<Slot file={file} parent_children={props.children} slots={props.slots}>          
<div  className="tiny-upload-list-thumb">            
<template style={{display:~['uploading'].indexOf(file.status)?'block':'none'}}>              
<div  className="uploading-mask"></div>

              
<div  className="uploading-progress">                
<div  className="uploading-progress-panel">                  
<div  style={{
                      width: `${parsePercentage(Math.max(0, Math.min(file.percentage || 0, 100)))}%`
                    }} className="uploading-progress-bar"></div>

                </div>

              </div>

            </template>

            
<Component style={{display:~['uploading', 'success', 'downloading'].indexOf(file.status)?'block':'none'}}  style={{ fill: getFileIcon({ type: getFileType({ file }) }).color }} is={getFileIcon({ type: getFileType({ file }) }).name} className="file-icon"></Component>

            
<div style={{display:~['fail'].indexOf(file.status)?'block':'none'}}  className="upload-fail">              
<iconCue  className="upload-fail-icon"></iconCue>

            </div>

          </div>

          
<div  className="tiny-upload-list-content">            
<div  className="file-name">              
<div  className="file-name-box">                
<span title={file.name}>{file.name
                    .split('.')
                    .filter((item, i, arr) => arr.length - 1 > i || arr.length === 1)
                    .join('.')}</span>

                
<span >.
{file.name.split('.')[file.name.split('.').length - 1]}</span>

              </div>

              
<div  className="operate-panel">                
<Slot name="operate" file={file} parent_children={props.children} slots={props.slots}>                  
<span style={{display:handlePreview && ~['success', 'downloading'].indexOf(file.status)?'block':'none'}}  onClick={handlePreview(file)} className="operate-btn">{t('ui.uploadList.preview')}</span>

                  
<span style={{display:handleDownloadFile && !~['fail', 'uploading'].indexOf(file.status)?'block':'none'}}  onClick={handleDownloadFile(file)} className="operate-btn">{t('ui.uploadList.download')}</span>

                  
<span style={{display:(isEdm ? true : handleReUpload) && ~['fail'].indexOf(file.status)?'block':'none'}}  onClick={reUpload(file)} className="operate-btn">{t('ui.uploadList.reUpload')}</span>

                  
<span style={{display:!displayOnly?'block':'none'}}  onClick={remove({ file })} className="operate-btn">{t('ui.uploadList.delete')}</span>

                </Slot>

              </div>

            </div>

            
<div  className="file-size">              
<span  className="file-size-content">                
<span style={{display:~['fail'].indexOf(file.status)?'block':'none'}}  className="fail">                  
<span >{t('ui.uploadList.uploadFailed')}</span>

                </span>

                
<span style={{display:!(~['fail'].indexOf(file.status))?'block':'none'}}>{formatFileSize((file.size * file.percentage) / 100) + '/' + formatFileSize(file.size)}</span>

                
<span style={{display:!(!(~['fail'].indexOf(file.status)))?'block':'none'}}>{formatFileSize(file.size)}</span>

              </span>

              
<span  className="file-size-right">                
<Slot name="assist-content" file={file} parent_children={props.children} slots={props.slots}></Slot>

              </span>

            </div>

          </div>

        </Slot>

        
<tinyProgress style={{display:file.showDownloadBar?'block':'none'}}  show-text={false} stroke-width={4} percentage={file.downloadPercentage || 0} status={file.downloadStatus || 'default'} className="tiny-upload-list__download-bar"></tinyProgress>

      </div>
    ))
  }
  

    </div>

    
<div style={{display:!(file.showDownloadBar)?'block':'none'}}  className="no-attachments">      
{t('ui.uploadList.noAttachments')}

    </div>

  </div>

  
<div style={{display:!(!(file.showDownloadBar))?'block':'none'}}  className="tiny-upload-list__wrapper">    
<transitionGroup tag="ul"  name="tiny-list" className={vc(['tiny-upload-list', 'tiny-upload-list--' + listType, { 'is-disabled': disabled }])}>      

  {
    files.map(file=>(
      <li  key={file.uid} tabindex="0"  className="tiny-upload-list__li">        
<div  onKeydown={!disabled && $emit('remove', file)} onFocus={state.focusing = true} onBlur={state.focusing = false} onClick={state.focusing = false} className={vc([
            'tiny-upload-list__item',
            'is-' + file.status,
            state.focusing ? 'focusing' : '',
            { isEdm },
            { showUpdate: listOption.showUpdate },
            { showDel: listOption.showDel }
          ])}>          
<Slot file={file} parent_children={props.children} slots={props.slots}>            
<img  style={{display:
                file.status !== 'uploading' &&
                file.status !== 'fail' &&
                ['picture-card', 'picture'].indexOf(listType) > -1
              ?'block':'none'}} src={file.url} alt="" className="tiny-upload-list__item-thumbnail"></img>

            
<tinyTooltip placement="top" effect="light" disabled={state.tooltipDisabled}>              
<template slot>                
<span style={{display:file.status === 'fail'?'block':'none'}}  className="tiny-upload-list__item-tooltip"><iconOperationfaild  className="tiny-upload-list__icon-operationfaild"></iconOperationfaild>
{t('ui.fileUpload.networkError')}</span>

                
<span style={{display:!(file.status === 'fail')?'block':'none'}}  className="tiny-upload-list__item-tooltip">{isFolderTitle ? (file.path || '') + file.name : file.name}</span>

              </template>

              
<a  onClick={handleClick($event, file)} title={state.tooltipDisabled ? (isFolderTitle ? (file.path || '') + file.name : file.name) : ''} className={vc(['tiny-upload-list__item-name', { isFail: isEdm && file.status === 'fail' }])}>                
<iconAttachment style={{display:!isFolder?'block':'none'}} fill={isEdm && file.status === 'fail' ? '#f5222d' : ''}  className="tiny-svg-size"></iconAttachment>
{file.name.length > maxNameLength ? file.name.substring(0, maxNameLength) + '...' : file.name}

              </a>

            </tinyTooltip>

            
<div  style={{display:isEdm?'block':'none'}} className={vc(['tiny-upload-list__item-edminfo', { isFail: isEdm && file.status === 'fail' }])}>              
<span >{file.docId}</span>

              
<span >{file.version}</span>

              
<span >{file.size}</span>

              
<span >{file.serverName}</span>

            </div>

            
<label  style={{display:!state.preViewComponent?'block':'none'}} className="tiny-upload-list__item-status-label">              
<iconSuccessful  style={{display:listType === 'text'?'block':'none'}} className="tiny-svg-size icon-successful"></iconSuccessful>

              
<iconYes  style={{display:['picture-card', 'picture'].indexOf(listType) > -1?'block':'none'}} className="tiny-svg-size tiny-icon-check"></iconYes>

            </label>

            
<span style={{display:isEdm && !isFolder && !disabled && file.status !== 'fail' && listOption.showUpdate?'block':'none'}} title={t('ui.fileUpload.updateFile')} onClick={$emit('update', file)}>              
<iconFile  fill={isEdm && file.status === 'fail' ? '#f5222d' : ''} className="tiny-svg-size icon-refres"></iconFile>

            </span>

            
<span style={{display:!disabled && reUploadable && file.status === 'fail'?'block':'none'}} title={t('ui.fileUpload.reUploadFile')} onClick={$emit('reUpload', file)}>              
<iconRefres  fill={isEdm ? '#f5222d' : ''} className="tiny-svg-size icon-refres"></iconRefres>

            </span>

            
<span style={{display:!disabled && listOption.showDel?'block':'none'}} title={t('ui.fileUpload.deleteFile')} onClick={$emit('remove', file)}>              
<Component is={state.closeComponent}  fill={isEdm && file.status === 'fail' ? '#f5222d' : ''} className="tiny-svg-size icon-close"></Component>

            </span>

            
<i  style={{display:!disabled && listOption.showDel?'block':'none'}} className="tiny-icon-close-tip">              
{t('ui.fileUpload.deleteTip')}</i>

            
<tinyProgress style={{display:file.status === 'uploading' || file.status === 'downloading'?'block':'none'}} type={listType === 'picture-card' ? state.progressType : 'line'} stroke-width={listType === 'picture-card' ? state.progressStrokeWidth : 2} width={state.progressWidth} percentage={parsePercentage(file.percentage)} show-text={!state.progressWidth}>            </tinyProgress>

            
<div style={{display:file.status === 'uploading' && listType === 'picture-card' && state.progressWidth?'block':'none'}}  onClick={$emit('remove', file)} className="tiny-upload-list__item-cancel">              
{t('ui.fileUpload.cancelFile')}

            </div>

            
<tinyTooltip placement="top" effect="light" disabled={state.tooltipDisabled || file.status !== 'fail'}>              
<template slot>                
<span  className="tiny-upload-list__item-tooltip"><iconOperationfaild  className="tiny-upload-list__icon-operationfaild"></iconOperationfaild>
{t('ui.fileUpload.pictureNetworkError')}</span>

              </template>

              
<span  style={{display:listType === 'picture-card' && (state.progressWidth ? file.status !== 'uploading' : true)?'block':'none'}} className="tiny-upload-list__item-actions">                
<span style={{display:openDownloadFile?'block':'none'}}  title={t('ui.fileUpload.downloadFile')} onClick={handleClick(file)} className="tiny-upload-list__item-download">                  
<iconDownload  className="tiny-svg-size"></iconDownload>

                </span>

                
<span  style={{display:handlePreview && file.status !== 'fail'?'block':'none'}} title={t('ui.fileUpload.previewFile')} onClick={handlePreview(file)} className="tiny-upload-list__item-preview">                  
<iconFullscreen style={{display:state.preViewComponent?'block':'none'}}  className="tiny-svg-size tiny-svg-fullscreen"></iconFullscreen>

                  
<iconView style={{display:!(state.preViewComponent)?'block':'none'}}  className="tiny-svg-size"></iconView>

                </span>

                
<span style={{display:isEdm && !isFolder && !disabled?'block':'none'}} title={t('ui.fileUpload.updateFile')}  onClick={$emit('update', file)} className="tiny-upload-list__item-refres">                  
<iconFile  className="tiny-svg-size"></iconFile>

                </span>

                
<span style={{display:!disabled?'block':'none'}}  title={t('ui.fileUpload.deleteFile')} onClick={$emit('remove', file)} className="tiny-upload-list__item-delete">                  
<iconDel  className="tiny-svg-size"></iconDel>

                </span>

              </span>

            </tinyTooltip>

          </Slot>

        </div>

        
<div style={{display:state.preViewComponent && listType === 'picture-card'?'block':'none'}}  title={isFolderTitle ? (file.path || '') + file.name : file.name} className={vc(['tiny-upload-list__li-title', file.status === 'fail' && 'is-fail'])}>          
{file.name.length > maxNameLength ? file.name.substring(0, maxNameLength) + '...' : file.name}

        </div>

      </li>
    ))
  }
  

    </transitionGroup>

    
<div style={{display:reUploadable && state.failUploadFileCount && listType === 'text'?'block':'none'}}  className="tiny-upload-list__text-title">      
<iconOperationfaild  className="tiny-upload-list__icon-operationfaild"></iconOperationfaild>
{typeof reUploadTip === 'function'
          ? reUploadTip(state.failUploadFileCount)
          : t('ui.fileUpload.reUploadTip', { number: state.failUploadFileCount })}

      
<tinyButton type="text" onClick={$emit('ReUploadTotal', files)}>{t('ui.fileUpload.reUploadFile')}</tinyButton>

    </div>

  </div>


      );
    }
    