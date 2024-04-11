
    import { renderless, api } from '@opentiny/vue-renderless/pop-upload/vue'
    import '@opentiny/vue-theme/pop-upload/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function popUpload(props) {
      const {data,uploadName,httpRequest,beforeUpload,beforeRemove,size,dialogTitle,uploadButtonText,withCredentials,submitButtonText,cancelButtonText,uploadFileType,maxUploadFileSize,accept,disabled,multiple,limit,headers,action,fileList} = props
      const defaultProps = {
        ...$props,
        ...props,
        data,uploadName,httpRequest,beforeUpload,beforeRemove,size,dialogTitle,uploadButtonText,withCredentials,submitButtonText,cancelButtonText,uploadFileType,maxUploadFileSize,accept,disabled,multiple,limit,headers,action,fileList
      }
      const { ref, current: vm, parent } = useVm()
      const upload=useRef()
      const { state,showDialog,closeDialog,closeErrorTips,closeSuccessTips,fileUploadChange,errorEvent,handleExceed,progressEvent,handleAvatarSuccess,deleteFile,uploadSubmit } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[upload]
      })
      return (
          
<div  className="tiny-popupload">    
<tinyButton size={size} onClick={showDialog} disabled={state.disabled}>{state.uploadButtonText}</tinyButton>

    
<tinyModal  value={state.isShowDialog} onChange={(e)=>state.isShowDialog = e.value} title={state.dialogTitle} width="648" onClose={closeDialog} className="tiny-popupload__modal">      
<div  className="tiny-popupload__dialog">        
<div  className="tiny-popupload__dialog-header">          
<tinyAlert size="large" style={{display:
              state.tipsTitle[0] !== undefined || state.tipsTitle[1] !== undefined || state.tipsTitle[2] !== undefined
            ?'block':'none'}} title={state.tipsTitleText}>            
<div  className="tiny-popupload__dialog-tips">              

  {
    state.tipsTitle.filter((value) => value !== undefined).map((item, index)=>(
      <p  key={index}>                
{item.count !== undefined ? state.limitCountTips + ':' + item.count : ''}

                
{item.type !== undefined ? state.limitTypeTips + ':' + item.type : ''}

                
{item.size !== undefined ? state.limitSizeTips + ':' + item.size : ''}

              </p>
    ))
  }
  

            </div>

          </tinyAlert>

          
<tinyAlert type="error" size="large" style={{display:state.errorTips.length > 0?'block':'none'}} onClose={closeErrorTips}>            
<div  className="tiny-popupload__dialog-tips">              

  {
    state.errorTips.map((item, index)=>(
      <p  key={index}>                
{item.size !== undefined ? item.size + ':' + state.errorSizeTips : ''}

                
{item.type !== undefined ? item.type + ':' + state.errorTypeTips : ''}

                
{item.num !== undefined ? state.errorNumTips : ''}

                
{item.error !== undefined ? state.uploadErrorTips : ''}

              </p>
    ))
  }
  

            </div>

          </tinyAlert>

          
<tinyAlert type="success" size="large" style={{display:state.successTips.length > 0?'block':'none'}} onClose={closeSuccessTips}>            
<div  className="tiny-popupload__dialog-tips">              

  {
    state.successTips.map((item, index)=>(
      <p  key={index}>{item}
,
{state.uploadSuccessTips}</p>
    ))
  }
  

            </div>

          </tinyAlert>

        </div>

        
<div  className="tiny-popupload__dialog-body">          
<tinyFile ref={upload} v-ref="upload" data={data} onChange={fileUploadChange} http-request={httpRequest} name={uploadName} onError={errorEvent} onExceed={handleExceed} onProgress={progressEvent} before-upload={beforeAvatarUpload} onSuccess={handleAvatarSuccess} with-credentials={state.withCredentials} multiple={state.multiple} accept={state.accept} filters={state.filters} limit={limit} headers={state.headers} action={state.action} auto-upload={false}>            
<template slot>              
<tinyButton size="small" type="primary">{state.multiple ? state.uploadsButtonText : state.uploadButtonText}</tinyButton>

            </template>

          </tinyFile>

          
<div  className="tiny-popupload__dialog-table">            
<div  className="tiny-popupload__dialog-table-header">              
<p  className="header-col col1">{state.fileName}</p>

              
<p  className="header-col col2">{state.fileSize}</p>

              
<p  className="header-col col3">{state.fileStatus}</p>

            </div>

            
<div  className="tiny-popupload__dialog-table-body">              
<ul  className="tiny-popupload__dialog-table-list">                

  {
    state.uploadList.map((item, index)=>(
      <li   key={index} className="tiny-popupload__dialog-table-item">                  
<p  className="body-col col1">{item.name}</p>

                  
<p  className="body-col col2">{formatFileSize(item.size)}</p>

                  
<p  className="body-col col3">                    
<span >                      
<IconDel  onClick={deleteFile(item)} className="delIcon"></IconDel>

                    </span>

                  </p>

                </li>
    ))
  }
  

              </ul>

            </div>

          </div>

        </div>

        
<div  style={{display:state.theme === 'saas'?'block':'none'}} className="tiny-popupload__dialog-footer">          
<tinyButton onClick={closeDialog}>{state.cancelButtonText}</tinyButton>

          
<tinyButton type="primary" disabled={state.uploadList.length === 0} onClick={uploadSubmit}>{state.submitButtonText}</tinyButton>

        </div>

        
<div  style={{display:!(state.theme === 'saas')?'block':'none'}} className="tiny-popupload__dialog-footer">          
<tinyButton type="primary" disabled={state.uploadList.length === 0} onClick={uploadSubmit}>{state.submitButtonText}</tinyButton>

          
<tinyButton onClick={closeDialog}>{state.cancelButtonText}</tinyButton>

        </div>

      </div>

    </tinyModal>

  </div>


      );
    }
    