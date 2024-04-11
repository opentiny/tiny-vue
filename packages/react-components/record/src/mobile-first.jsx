
    import { renderless, api } from '@opentiny/vue-renderless/record/vue'
    import '@opentiny/vue-theme/record/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function record(props) {
      const {modelValue,isHwh5,lockScroll} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,isHwh5,lockScroll
      }
      const { ref, current: vm, parent } = useVm()
      const canvas=useRef()
      const { state,handleCancel,handleConfirm,toogleRecord } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[canvas]
      })
      return (
          
<div data-tag="tiny-record">    
<tinyAction title={t('ui.record.record')} visible={modelValue} lock-scroll={lockScroll} custom-class="pb-0" mask-closable={false} onUpdate:visible={$emit('update:modelValue', $event)}>      
<template slot>        
<div data-tag="tiny-record-header-left"  onClick={handleCancel} className="text-base text-color-text-secondary">          
{t('ui.record.cancel')}

        </div>

      </template>

      
<template slot>        
<div data-tag="tiny-record-header-right"  onClick={handleConfirm} className={vc(['text-color-brand', ['recording', 'pause'].includes(state.record.status) ? '' : 'hidden'])}>          
{t('ui.record.confirm')}

        </div>

      </template>

      
<template slot>        
<div data-tag="tiny-record-header-default"  className="flex justify-center flex-wrap text-base text-color-text-secondary">          
<div data-tag="tiny-record-time"   className={vc(['recording', 'pause'].includes(state.record.status) ? 'visible' : 'invisible','font-light')}>            
{state.recodeTime}

          </div>

          
<div data-tag="tiny-record-ready"   className={vc(['recording'].includes(state.record.status) ? 'h-24' : 'h-10 my-7','relative w-full text-center px-4')}>            
<canvas style={{display:['recording'].includes(state.record.status)?'block':'none'}} ref={canvas} v-ref="canvas"  className="w-full h-full"></canvas>

            
<span style={{display:!(['recording'].includes(state.record.status))?'block':'none'}}  className="absolute left-0 bottom-0 w-full">{['ready'].includes(state.record.status)
                ? t('ui.record.clickToStartRecording')
                : t('ui.record.clickToResumeRecording')}</span>

          </div>

          
<div data-tag="tiny-record-recording"   className={vc([
              ['recording'].includes(state.record.status)
                ? 'border-color-border-separator shadow-sm'
                : 'border-color-brand'
            ],'flex w-16 h-16 justify-center items-center mt-0 m-10 border rounded-full cursor-pointer')}>            
<div data-tag="tiny-record-tooglerecord" onClick={toogleRecord}>              
<iconMic style={{display:!['recording'].includes(state.record.status)?'block':'none'}} custom-class="w-10 h-10 fill-color-brand"></iconMic>

              
<div style={{display:!(!['recording'].includes(state.record.status))?'block':'none'}}  className="w-6 h-6 bg-color-error rounded"></div>

            </div>

          </div>

        </div>

      </template>

    </tinyAction>

  </div>


      );
    }
    