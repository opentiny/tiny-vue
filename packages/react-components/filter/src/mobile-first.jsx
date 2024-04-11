
    import { renderless, api } from '@opentiny/vue-renderless/filter/vue'
    import '@opentiny/vue-theme/filter/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function filter(props) {
      const {} = props
      const defaultProps = {
        ...$props,
        ...props,
        
      }
      const { ref, current: vm, parent } = useVm()
      const root=useRef()
const maskPoint=useRef()
const panelMask=useRef()
const panel=useRef()
      const { state,panelToggle,cancel,selectOption,filterSelectOption,reset,confirm } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[root,maskPoint,panelMask,panel]
      })
      return (
          
<div ref={root} v-ref="root" data-tag="tiny-filter"  className={vc([m('text-sm text-color-text-primary relative', customClass))}>    
<tinyFilter model-value={state.showPanelIndex} data={state.labelList} onClick={panelToggle}>      
<Slot active={state.showPanelIndex} value={modelValue} labels={state.labelList} parent_children={props.children} slots={props.slots}></Slot>

      
<template style={{display:filterGroup?'block':'none'}} slot>        
<div data-tag="filter-icon"  onClick={panelToggle('filter')} className="w-full">          
<Slot name="icon" active={state.filterPanel.show || state.hasFilterValue} show={state.filterPanel.show} parent_children={props.children} slots={props.slots}>            
<div  className="w-10 ml-2 flex-none flex justify-center cursor-pointer">              
<IconUnfilter custom-class="w-5 h-5 fill-current"  className={vc([state.filterPanel.show || state.hasFilterValue ? ' text-color-brand' : '')}></IconUnfilter>

            </div>

          </Slot>

        </div>

      </template>

    </tinyFilter>


    
<div ref={maskPoint} v-ref="maskPoint"></div>

    
<div ref={panelMask} v-ref="panelMask" data-tag="panel-mask" style={{display:!manual && state.showPanel?'block':'none'}}  onClick={cancel} className="fixed left-0 right-0 z-40 w-full h-full bg-color-bg-7"></div>


    
<div ref={panel} v-ref="panel" data-tag="tiny-filter-panel" style={{display:!manual && state.showPanel?'block':'none'}}  className={vc([m('absolute top-11 flex flex-col z-40 w-full bg-color-bg-1 overflow-hidden', panelClass))}>      
<div data-tag="panel-scrollbar" style={{display:state.selectPanel.config.type !== 'list'?'block':'none'}}  className="flex-auto m-5 overflow-x-visible overflow-y-auto scrollbar-size-0">        
<TagGroup data-tag="select-group" style={{display:state.showPanelIndex !== -1?'block':'none'}} value={state.selectPanel.selected} onChange={(e)=>state.selectPanel.selected = e.value} data={state.selectPanel.config.options} label={state.selectPanel.config.label} type={state.selectPanel.config.type} multiple={state.selectPanel.config.multiple} column-num={columnNum} onClick={selectOption}></TagGroup>


        
<template style={{display:filterGroup?'block':'none'}}>          

  {
    filterGroup.map((item, index)=>(
      <TagGroup data-tag="filter-group" style={{display:state.filterPanel.show?'block':'none'}}  key={index} value={state.filterPanel.selected[index]} onChange={(e)=>state.filterPanel.selected[index] = e.value} data={item.options} label={item.label} type={item.type} multiple={item.multiple} column-num={columnNum}  onClick={filterSelectOption($event, index)} className={vc([{ 'mt-5': index !== 0 }])}></TagGroup>
    ))
  }
  

        </template>

      </div>


      
<div data-tag="filter-list" style={{display:state.selectPanel.config.type === 'list'?'block':'none'}}  className="leading-[theme(spacing.12)] cursor-pointer h-full py-2 overflow-x-visible overflow-y-auto scrollbar-size-0">        
<div style={{display:state.selectPanel.config.showAll?'block':'none'}}  onClick={selectOption()} className={vc(['px-5 truncate', { 'text-color-brand': state.selectPanel.selected.length === 0 }])}>          
{t('ui.base.all')}

        </div>

        

  {
    state.selectPanel.config.options.map((item, index)=>(
      <div  key={index} title={item.label}  onClick={selectOption(item.value)} className={vc(['px-5 truncate', { 'text-color-brand': state.selectPanel.selected.indexOf(item.value) !== -1 }])}>          
{item.label}

        </div>
    ))
  }
  

      </div>


      
<div data-tag="filter-footer" style={{display:state.selectPanel.config.multiple || state.filterPanel.show?'block':'none'}}  className="flex items-center justify-end mx-5 mb-5">        
<Slot name="footer" cancel={cancel} reset={reset} confirm={confirm} parent_children={props.children} slots={props.slots}>          
<tinyButton style={{display:!state.selectPanel.config.multiple?'block':'none'}} tiny_mode="mobile-first" key="btn1" size="medium" custom-class="sm:max-w-full mr-4 flex-1" onClick={cancel}>{t('ui.base.cancel')}</tinyButton>

          
<tinyButton tiny_mode="mobile-first" key="btn2" size="medium" reset-time={0} custom-class="sm:max-w-full mr-4 flex-1" onClick={reset(state.filterPanel.show)}>{t('ui.base.reset')}</tinyButton>

          
<tinyButton tiny_mode="mobile-first" key="btn3" type="primary" size="medium" custom-class="sm:max-w-full flex-1" onClick={confirm(state.filterPanel.show)}>{t('ui.base.confirm')}</tinyButton>

        </Slot>

      </div>

    </div>

  </div>


      );
    }
    