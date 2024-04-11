
    import { renderless, api } from '@opentiny/vue-renderless/multi-select/vue'
    import '@opentiny/vue-theme/multi-select/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function multiSelect(props) {
      const {dataSource,modelValue,searchValue,defaultSelectedArray,filterable,searchPlaceholder,type,disabled,mask,maskOptions} = props
      const defaultProps = {
        ...$props,
        ...props,
        dataSource,modelValue,searchValue,defaultSelectedArray,filterable,searchPlaceholder,type,disabled,mask,maskOptions
      }
      const { ref, current: vm, parent } = useVm()
      const headerBox=useRef()
const searchInput=useRef()
      const { state,handleClick,handleSearchBtnClick,handleSearchInput,handleClose,wheelChange,clickWheelItem,reset,confirm } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[headerBox,searchInput]
      })
      return (
          
<div  clickoutside className="tiny-mobile-multi-select">    
<div  ref={headerBox} v-ref="headerBox" className={vc([
        'tiny-mobile-multi-select__header',
        { 'show-search': filterable, 'is-searching': state.isSearching, 'is-disabled': disabled }
      ])}>      
<template style={{display:!state.isSearching?'block':'none'}}>        
<div  className="tiny-mobile-multi-select__header-item-box">          

  {
    undefined.map((item, index) of dataSource=>(
      <div  key={index}  onClick={handleClick(index)} style={state.labelsStyle[index]} className={vc(['tiny-mobile-multi-select__header-item', { 'item-disabled': item.disabled }])}>            
<div  className={vc([
                'tiny-mobile-multi-select__header__label',
                state.headerInfo[index]?.isSelected ? 'tiny-mobile-multi-select__header__active' : ''
              ])}>              
{state.headerInfo[index]?.title}

            </div>


            
<div  style={{
                transform: state.headerInfo[index]?.isUP ? 'rotate(180deg)' : 'none'
              }} className={vc([
                'tiny-mobile-multi-select__header__icon',
                state.headerInfo[index]?.isSelected ? 'tiny-mobile-multi-select__header__active' : ''
              ])}>              
<IconChevronDown ></IconChevronDown>

            </div>

          </div>
    ))
  }
  

        </div>


        
<div style={{display:filterable && state.showOptions?'block':'none'}}  onClick={handleSearchBtnClick} className="tiny-mobile-multi-select__header-search-icon">          
<IconSearch ></IconSearch>

        </div>

      </template>


      
<template style={{display:!(!state.isSearching)?'block':'none'}}>        
<div  className="tiny-mobile-multi-select__header-search">          
<tinyInput ref={searchInput} v-ref="searchInput" type="text" value={state.searchValue} onChange={(e)=>state.searchValue = e.value} placeholder={searchPlaceholder} onInput={handleSearchInput}>            
<template slot>              
<IconSearch  className="tiny-mobile-multi-select__header-prefix-icon"></IconSearch>

            </template>

          </tinyInput>

        </div>

        
<div  onClick={handleSearchBtnClick} className="tiny-mobile-multi-select__header-cancel-btn">          
{t('ui.base.cancel')}

        </div>

      </template>

    </div>


    
<tinyMask visible={state.showMask} onClick={handleClose}></tinyMask>


    
<div  style={{display:state.showOptions?'block':'none'}} className={vc(['tiny-mobile-multi-select__content', !dataSource[state.headerIndex]?.hasFooter ? 'noFooter' : ''])}>      
<div style={{display:type === 'list'?'block':'none'}}  className="tiny-mobile-multi-select__option-list">        

  {
    state.currentOptions.map((item, index)=>(
      <tinyMulti  option={item} key={index}></tinyMulti>
    ))
  }
  

      </div>


      
<tinyWheel style={{display:!(type === 'list')?'block':'none'}} data-source={state.wheelData} default-selected-indexs={state.defaultSelectedIndexs} has-footer={dataSource[state.headerIndex]?.hasFooter} onChange={wheelChange} onClick={clickWheelItem}></tinyWheel>


      
<Slot name="footer" parent_children={props.children} slots={props.slots}>        
<div  style={{display:state.showOptions && dataSource[state.headerIndex]?.hasFooter?'block':'none'}} className="tiny-mobile-multi-select__footer">          
<tinyButton round size="large" type="secondary" onClick={reset}>{t('ui.base.reset')}</tinyButton>

          
<tinyButton round size="large" type="primary" onClick={confirm}>{t('ui.button.confirm')}</tinyButton>

        </div>

      </Slot>

    </div>

  </div>


      );
    }
    