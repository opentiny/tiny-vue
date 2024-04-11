
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
      const popover=useRef()
const select=useRef()
      const { state,handleSaveConfirm,handleSave,handleSelectChange,handleApply,handleEdit,handleDel,handleApplyConfirm,handleEditConfirm,handleDelConfirm } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[popover,select]
      })
      return (
          
<tinyPopover style={{display:customMode === 'saas'?'block':'none'}} ref={popover} v-ref="popover" width="280" value={templateVisible} onChange={(e)=>templateVisible = e.value} placement="top" popper-class="grid-toolbar-template-popover" trigger="manual">    
<div >      
<div  style={{display:selectedTemplateVal.id?'block':'none'}} className="radio-box">        
<tinyRadio value={saveMethod} onChange={(e)=>saveMethod = e.value} label="overwrite">          
{t('ui.grid.individuation.overwriteSave')}

        </tinyRadio>

        
<tinyRadio value={saveMethod} onChange={(e)=>saveMethod = e.value} label="save">          
{t('ui.grid.individuation.saveAs')}

        </tinyRadio>

      </div>

      
<tinyInput style={{display:saveMethod === 'save'?'block':'none'}} value={savedTemplateName} onChange={(e)=>savedTemplateName = e.value} type="text" placeholder={t('ui.grid.individuation.defaultTemplateName')}></tinyInput>

      
<tinyInput style={{display:!(saveMethod === 'save')?'block':'none'}} value={selectedTemplateName} onChange={(e)=>selectedTemplateName = e.value} placeholder={t('ui.grid.individuation.reserveTemplateName')} type="text"></tinyInput>

      
<div  className="btn-box">        
<tinyButton onClick={templateVisible = false}>          
{t('ui.grid.individuation.cancelBtn')}

        </tinyButton>

        
<tinyButton type="primary" onClick={handleSaveConfirm(saveMethod)}>          
{t('ui.grid.individuation.saveBtn')}

        </tinyButton>

      </div>

    </div>

    
<template slot>      
<tinyButton  onClick={templateVisible = !templateVisible} className="save-btn">        
{t('ui.grid.individuation.saveTemplate')}

      </tinyButton>

    </template>

  </tinyPopover>

  
<div style={{display:!(!(saveMethod === 'save'))?'block':'none'}}  className="tiny-grid-custom-switch">    
<tinyLayout >      
<tinyRow no-space>        
<tinyCol span={12}>          
<div  className="tiny-grid-custom-switch__title">            
<tinyAlert style={{display:historyConfig.showTitle?'block':'none'}} description={historyConfig.title || t('ui.grid.individuation.switchtitle')} closable={false}></tinyAlert>

          </div>

        </tinyCol>

      </tinyRow>

      
<tinyRow no-space>        
<tinyCol style={{display:historyConfig.showSave?'block':'none'}} span={2}>          
<div >            
<tinyButton type="primary" size="mini" disabled={historyConfig.saveDisabled || saveDisabled} onClick={handleSave}>              
{historyConfig.saveText || t('ui.grid.individuation.switchsave')}

            </tinyButton>

          </div>

        </tinyCol>

        
<tinyCol span={2}>          
<div  className="tiny-grid-custom-switch__label">            
{historyConfig.labelText || t('ui.grid.individuation.switchlabel')}

          </div>

        </tinyCol>

        
<tinyCol span={5}>          
<div  className="tiny-grid-custom-switch__content">            
<tinySelect clearable ref={select} v-ref="select" value-field="id" text-field="name" placeholder={historyConfig.selectPlaceholder || t('ui.select.placeholder')} disabled={historyConfig.selectDisabled || selectDisabled} options={options} onChange={handleSelectChange} value={selected} onChange={(e)=>selected = e.value}></tinySelect>

          </div>

        </tinyCol>

        
<tinyCol span={3}>          
<div >            
<span style={{display:historyConfig.showApply?'block':'none'}} title={historyConfig.applyTitle || t('ui.grid.individuation.switchapply')}   onClick={handleApply} className={vc({
                'tiny-grid-custom-switch__icon-btn--disabled': historyConfig.applyDisabled || applyDisabled
              },'tiny-grid-custom-switch__icon-btn')}>              
<Component is={historyConfig.applyIcon || IconSave}></Component>

            </span>

            
<span style={{display:historyConfig.showEdit?'block':'none'}} title={historyConfig.editTitle || t('ui.grid.individuation.switchedit')}   onClick={handleEdit} className={vc({
                'tiny-grid-custom-switch__icon-btn--disabled': historyConfig.editDisabled || editDisabled
              },'tiny-grid-custom-switch__icon-btn')}>              
<Component is={historyConfig.editIcon || IconEdit}></Component>

            </span>

            
<span style={{display:historyConfig.showDel?'block':'none'}} title={historyConfig.delTitle || t('ui.grid.individuation.switchdel')}   onClick={handleDel} className={vc({
                'tiny-grid-custom-switch__icon-btn--disabled': historyConfig.delDisabled || delDisabled
              },'tiny-grid-custom-switch__icon-btn')}>              
<Component is={historyConfig.delIcon || IconDel}></Component>

            </span>

          </div>

        </tinyCol>

      </tinyRow>

    </tinyLayout>

    


    
<tinyDialog top="30vh" width="420px" dialog-class="tiny-grid-custom-switch__dialog-box" draggable append-to-body visible={visible} close-on-click-modal={false} title={dialogTitle} onUpdate:visible={visible = $event}>      


      
<div style={{display:status === 'save'?'block':'none'}}  className="tiny-grid-custom-switch__confirm-btns">        
<tinyButton type="primary" onClick={handleSaveConfirm('save')}>          
{t('ui.grid.individuation.switchonlytemp')}

        </tinyButton>

        
<tinyButton onClick={handleSaveConfirm('save-apply')}>          
{t('ui.grid.individuation.switchtempapply')}

        </tinyButton>

        
<tinyButton onClick={handleSaveConfirm('overwrite')} disabled={!selected}>          
{t('ui.grid.individuation.switchtempoverwrite')}

        </tinyButton>

      </div>

      


      
<template style={{display:status === 'apply'?'block':'none'}}>        
<div  className="tiny-grid-custom-switch__del-tip">          
{selectedName}

        </div>

        
<div  className="tiny-grid-custom-switch__del-tip">          
{t('ui.grid.individuation.switchapplycon')}

        </div>

      </template>

      


      
<template style={{display:status === 'edit'?'block':'none'}}>        
<tinyInput value={editName} onChange={(e)=>editName = e.value}></tinyInput>

      </template>

      


      
<template style={{display:status === 'del'?'block':'none'}}>        
<div  className="tiny-grid-custom-switch__del-tip">          
{selectedName}

        </div>

        
<div  className="tiny-grid-custom-switch__del-tip">          
{t('ui.grid.individuation.switchdelcon')}

        </div>

      </template>

      
<template slot>        
<template style={{display:~['apply', 'edit', 'del'].indexOf(status)?'block':'none'}}>          
<template style={{display:status === 'apply'?'block':'none'}}>            
<tinyButton type="primary" onClick={handleApplyConfirm('yes')}>              
{t('ui.grid.individuation.switchdelyes')}

            </tinyButton>

            
<tinyButton onClick={handleApplyConfirm('no')}>              
{t('ui.grid.individuation.switchdelno')}

            </tinyButton>

          </template>

          
<template style={{display:status === 'edit'?'block':'none'}}>            
<tinyButton type="primary" disabled={!editName} onClick={handleEditConfirm('yes')}>              
{t('ui.grid.individuation.switchdelyes')}

            </tinyButton>

            
<tinyButton onClick={handleEditConfirm('no')}>              
{t('ui.grid.individuation.switchdelno')}

            </tinyButton>

          </template>

          
<template style={{display:status === 'del'?'block':'none'}}>            
<tinyButton type="primary" onClick={handleDelConfirm('yes')}>              
{t('ui.grid.individuation.switchdelyes')}

            </tinyButton>

            
<tinyButton onClick={handleDelConfirm('no')}>              
{t('ui.grid.individuation.switchdelno')}

            </tinyButton>

          </template>

        </template>

      </template>

    </tinyDialog>

  </div>


      );
    }
    