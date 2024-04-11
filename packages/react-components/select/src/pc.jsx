
    import { renderless, api } from '@opentiny/vue-renderless/select/vue'
    import '@opentiny/vue-theme/select/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function select(props) {
      const {id,multiple,name,dataset,readonly,tabindex,dropStyle,valueField,textField,copyable,size,options,showCheck,showAlloption,hideDrop,modelValue,showOverflowTooltip,remote,remoteConfig,placement,loading,disabled,valueKey,clearable,noDataText,filterable,loadingText,noMatchText,popperClass,allowCreate,placeholder,remoteMethod,filterMethod,collapseTags,autocomplete,multipleLimit,reserveKeyword,automaticDropdown,defaultFirstOption,popperAppendToBody,showDropdown,expandTags,renderType,gridOp,treeOp,delay,cacheOp,isDropInheritWidth,tagSelectable,selectConfig,radioConfig,allowCopy,textSplit,autoClose,queryDebounce,ignoreEnter,dropdownIcon,disabledTooltipContent,hoverExpand,optimization,displayOnly,initQuery,extraQueryParams,shape,label,tip,updateDelay,showTips,popperOptions,trim,topCreate,topCreateText,keepFocus,blank,//,以下为,tiny,新增,searchable,showEmptyImage,inputBoxType,tagType,clearNoMatchValue} = props
      const defaultProps = {
        ...$props,
        ...props,
        id,multiple,name,dataset,readonly,tabindex,dropStyle,valueField,textField,copyable,size,options,showCheck,showAlloption,hideDrop,modelValue,showOverflowTooltip,remote,remoteConfig,placement,loading,disabled,valueKey,clearable,noDataText,filterable,loadingText,noMatchText,popperClass,allowCreate,placeholder,remoteMethod,filterMethod,collapseTags,autocomplete,multipleLimit,reserveKeyword,automaticDropdown,defaultFirstOption,popperAppendToBody,showDropdown,expandTags,renderType,gridOp,treeOp,delay,cacheOp,isDropInheritWidth,tagSelectable,selectConfig,radioConfig,allowCopy,textSplit,autoClose,queryDebounce,ignoreEnter,dropdownIcon,disabledTooltipContent,hoverExpand,optimization,displayOnly,initQuery,extraQueryParams,shape,label,tip,updateDelay,showTips,popperOptions,trim,topCreate,topCreateText,keepFocus,blank,//,以下为,tiny,新增,searchable,showEmptyImage,inputBoxType,tagType,clearNoMatchValue
      }
      const { ref, current: vm, parent } = useVm()
      const select=useRef()
const tagsGroup=useRef()
const reference=useRef()
const tags=useRef()
const tags-content=useRef()
const input=useRef()
const popper=useRef()
const selectGrid=useRef()
const selectTree=useRef()
const scrollbar=useRef()
      const { state,toggleMenu,deleteTag,handleEnterTag,handleFocus,handleBlur,managePlaceholder,resetInputState,navigateOptions,selectOption,deletePrevTag,handleComposition,debouncedQueryChange,debouncedOnInputChange,onMouseenterNative,onMouseleaveNative,handleCopyClick,handleClearClick,handleDropdownClick,handleMenuEnter,doDestroy,selectChange,radioChange,loadTreeData,nodeCollapse,nodeExpand,nodeCheckClick,treeNodeClick,handleQueryChange,clearSearchText,toggleCheckAll } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[select,tagsGroup,reference,tags,tags-content,input,popper,selectGrid,selectTree,scrollbar]
      })
      return (
          
<div ref={select} v-ref="select"  popover  onMouseleave={
      () => {
        state.selectHover = false
        state.inputHovering = false
      }
    } onMouseenter={
      () => {
        state.selectHover = true
        state.inputHovering = true
      }
    } onClick={toggleMenu} clickoutside a($attrs, ['class', 'style'], true) className={vc([
      state.selectSize ? 'tiny-select--' + state.selectSize : '',
      state.collapseTags ? 'tiny-select__collapse-tags' : '',
      filterable ? 'tiny-select__filterable' : '',
      multiple ? 'tiny-select__multiple' : '',
      state.inputHovering || state.visible ? 'is-hover' : '',
      state.isDisplayOnly ? 'is-display-only' : '',
      hoverExpand ? 'is-hover-expand' : '',
      state.selectDisabled ? 'is-disabled' : '',
      $parent.$attrs.class,
      inputBoxType === 'underline' ? 'tiny-select__underline' : ''
    ],'tiny-select')}>    
<div ref={tagsGroup} v-ref="tagsGroup" style={state.selectFiexd}  className={vc(['tiny-select__tags-group', { 'is-expand': state.isExpand }])}>      
<Slot name="reference" parent_children={props.children} slots={props.slots}>        
<tinyFilter style={{display:shape === 'filter'?'block':'none'}} ref={reference} v-ref="reference" onClick={toggleMenu} show-close={clearable} placeholder={placeholder} disabled={state.selectDisabled} label={label} tip={tip} value={
            multiple
              ? state.selected.map((item) => (item.state ? item.state.currentLabel : item.currentLabel)).join('; ')
              : state.selectedLabel
          } drop-down-visible={state.visible} blank={blank}>        </tinyFilter>

        
<div ref={tags} v-ref="tags"  style={{display:multiple && !state.isDisplayOnly && !shape?'block':'none'}} style={state.tagsStyle} className={vc(['tiny-select__tags', { 'is-showicon': slots.prefix }, { 'not-selected': !state.selected.length }])}>          
<span style={{display:!state.selectDisabled?'block':'none'}}>            
<span style={{display:collapseTags && state.selected.length?'block':'none'}}>              
<tinyTag closable={!state.selectDisabled} size={state.collapseTagSize} hit={state.selected[0].state ? state.selected[0].state.hitState : state.selected[0].hitState} key={state.key} type={state.getTagType} onClose={deleteTag($event, state.selected[0])} disable-transitions>                
<tinyTooltip effect="light" placement="top" onMouseenter={handleEnterTag($event, getValueKey(state.selected[0]))}>                  
<span  className="tiny-select__tags-text">                    
<Slot name="label" item={getLabelSlotValue(state.selected[0])} parent_children={props.children} slots={props.slots}>{state.selected[0].state ? state.selected[0].state.currentLabel : state.selected[0].currentLabel}</Slot>

                  </span>

                  
<template slot>                    
<span style={{display:state.tooltipContent[getValueKey(state.selected[0])]?'block':'none'}}>                      
<Slot name="label" item={getLabelSlotValue(state.selected[0])} parent_children={props.children} slots={props.slots}>                        
{state.selected[0].state
                            ? state.selected[0].state.currentLabel
                            : state.selected[0].currentLabel}

                      </Slot>

                    </span>

                  </template>

                </tinyTooltip>

              </tinyTag>

              
<tinyTag style={{display:state.selected.length > 1?'block':'none'}} closable={false} size={state.collapseTagSize} type={state.getTagType} disable-transitions  className="tiny-select__tags-number">                
<span  className="tiny-select__tags-text">+ 
{state.selected.length - 1}</span>

              </tinyTag>

            </span>

            
<span ref={tags-content} v-ref="tags-content" style={{display:!collapseTags?'block':'none'}}>              
<tinyTag style={{display:hoverExpand?'block':'none'}}  type="info" key="tags-collapse" data-tag="tags-collapse" closable={false} size={state.collapseTagSize} className={vc(['tiny-select__tags-collapse', { 'is-hidden': state.isHidden }])}>                + 
{state.collapseTagsLength}

              </tinyTag>

              


              

  {
    state.selected.map((item, index)=>(
      <tinyTag  key={getValueKey(item)} closable={!item.disabled && !item.required} size={state.collapseTagSize} hit={item.state ? item.state.hitState : item.hitState} type={state.getTagType} onClose={deleteTag($event, item)} disable-transitions>                
<tinyTooltip effect="light" placement="top" onMouseenter={handleEnterTag($event, getValueKey(item))}>                  
<span style={{display:!state.visible && state.overflow === index?'block':'none'}}  className="tiny-select__tags-text">                    
{item.state ? item.state.currentLabel + '... ' : item.currentLabel + '... '}

                  </span>

                  
<span style={{display:!(!state.visible && state.overflow === index)?'block':'none'}}  className="tiny-select__tags-text">                    
<Slot name="label" item={getLabelSlotValue(item)} parent_children={props.children} slots={props.slots}>                      
{item.state ? item.state.currentLabel : item.currentLabel}

                    </Slot>

                  </span>

                  
<template style={{display:state.tooltipContent[getValueKey(item)]?'block':'none'}} slot>                    
<span style={{display:!state.visible && state.overflow === index?'block':'none'}}>                      
{item.state ? item.state.currentLabel + '... ' : item.currentLabel + '... '}

                    </span>

                    
<span style={{display:!(!state.visible && state.overflow === index)?'block':'none'}}>                      
<Slot name="label" item={getLabelSlotValue(item)} parent_children={props.children} slots={props.slots}>                        
{item.state ? item.state.currentLabel : item.currentLabel}

                      </Slot>

                    </span>

                  </template>

                </tinyTooltip>

              </tinyTag>
    ))
  }
  

            </span>

          </span>


          
<span style={{display:!(!(!state.visible && state.overflow === index))?'block':'none'}}  className="tiny-select__tags-text is-disabled">            
<tinyTooltip effect="light" placement="top" disabled={!showTips}>              
<span >                

  {
    state.selected.map(item=>(
      <span  key={item.value}>                  
<Slot name="label" item={item} parent_children={props.children} slots={props.slots}>{item.state ? item.state.currentLabel : item.currentLabel}</Slot>
;
                </span>
    ))
  }
  

              </span>


              
<template slot>                
<div  className={vc([state.showTips && 'tiny-select__show-tips', 'tiny-select__show-common'])}>                  
<span style={{display:slots.label?'block':'none'}}>                    

  {
    state.selected.map(item=>(
      <span  key={getValueKey(item)}>                      
<Slot name="label" item={item} parent_children={props.children} slots={props.slots}></Slot>

                    </span>
    ))
  }
  

                  </span>

                  
<span style={{display:!(slots.label)?'block':'none'}}>{disabledTooltipContent || state.disabledTooltipContent}</span>

                </div>

              </template>

            </tinyTooltip>

          </span>


          
<input ref={input} v-ref="input" style={{display:filterable && !state.selectDisabled?'block':'none'}} value={state.query} onChange={(e)=>state.query = e.value} type="text"   disabled={state.selectDisabled} autocomplete={autocomplete} onFocus={handleFocus} onBlur={handleBlur} onKeyup={managePlaceholder} onKeydown={resetInputState} onKeydown={navigateOptions('next')} onKeydown={navigateOptions('prev')} onKeydown={selectOption} onKeydown={state.visible = false} onKeydown={deletePrevTag} onKeydown={state.visible = false} onCompositionstart={handleComposition} onCompositionupdate={handleComposition} onCompositionend={handleComposition} onInput={debouncedQueryChange} style={{
              'flex-grow': '1',
              width: state.inputLength / (state.inputWidth - 32) + '%',
              'max-width': state.inputWidth - 42 + 'px',
              height: 'auto'
            }} className={vc([state.selectSize ? `is-${state.selectSize}` : ''],'tiny-select__input')}></input>

        </div>

        
<tinyInput tiny_mode="pc" style={{display:!shape?'block':'none'}} ref={reference} v-ref="reference" value={state.selectedLabel} onChange={(e)=>state.selectedLabel = e.value} type="text" placeholder={state.currentPlaceholder} name={name} id={id} autocomplete={autocomplete} size={state.selectSize} disabled={state.selectDisabled} readonly={state.readonly} display-only={state.isDisplayOnly} display-only-content={state.displayOnlyContent} unselectable={state.readonly ? 'on' : 'off'} validate-event={false}  tabindex={multiple && filterable ? '-1' : tabindex} onFocus={handleFocus} onBlur={handleBlur} onKeyup={debouncedOnInputChange} onKeydown={navigateOptions('next')} onKeydown={navigateOptions('prev')} onKeydown={selectOption} onKeydown={state.visible = false} onKeydown={state.visible = false} onPaste={debouncedOnInputChange} onMouseenter={onMouseenterNative} onMouseleave={onMouseleaveNative} onCompositionend={handleComposition} className={vc({
            'is-focus': state.visible,
            overflow: state.overflow,
            'is-show-close': state.showClose
          })}>          
<template slot style={{display:slots.prefix?'block':'none'}}>            
<Slot name="prefix" parent_children={props.children} slots={props.slots}></Slot>

          </template>

          
<template slot>            
<Slot name="suffix" parent_children={props.children} slots={props.slots}></Slot>

            
<span style={{display:state.showCopy?'block':'none'}}  onClick={handleCopyClick} className="tiny-select__copy">              
<iconCopy  className="tiny-svg-size tiny-select__caret"></iconCopy>

            </span>

            
<iconClose style={{display:state.showClose?'block':'none'}}  onClick={handleClearClick} onMouseenter={state.inputHovering = true} className="tiny-svg-size tiny-select__caret icon-close"></iconClose>

            


            
<Component style={{display:!(state.showClose)?'block':'none'}} style={{display:!(remote && filterable && !remoteConfig.showIcon)?'block':'none'}} is={state.getIcon.icon}  onClick={handleDropdownClick} className={vc([
                'tiny-svg-size',
                'tiny-select__caret',
                state.iconClass,
                { 'is-reverse': !state.visible && state.getIcon.isDefault },
                { 'not-reverse': !state.getIcon.isDefault }
              ])}></Component>

          </template>

        </tinyInput>

      </Slot>

      
<transition name="tiny-zoom-in-top" onBefore={handleMenuEnter} onAfter={doDestroy}>        
<tinySelect ref={popper} v-ref="popper" is-drop-inherit-width={isDropInheritWidth} placement={placement} append-to-body={popperAppendToBody} style={{display:!onCopying() && !hideDrop && state.visible && state.emptyText !== false?'block':'none'}} style={dropStyle} popper-options={popperOptions}>          
<div style={{display:shape && filterable?'block':'none'}}   className={vc([remote && !state.options.length ? 'tiny-select__remote-input' : ''],'tiny-select__filter-input')}>            
<tinyInput ref={input} v-ref="input" type="text" value={state.query} onChange={(e)=>state.query = e.value} placeholder={placeholder} onInput={debouncedQueryChange} onFocus={handleFocus} autofocus></tinyInput>

          </div>

          
<div style={{display:topCreate?'block':'none'}}  className="tiny-select__top-create">            
<div onClick={$emit('top-create-click', $event)}>              
<iconPlus ></iconPlus>

              
<span >{topCreateText}</span>

            </div>

          </div>

          
<tinyGrid style={{display:renderType === 'grid'?'block':'none'}} auto-resize row-id={valueField} select-config={buildSelectConfig()} radio-config={buildRadioConfig()} ref={selectGrid} v-ref="selectGrid" highlight-current-row={true} columns={gridOp.columns} data={state.gridData} onSelect={selectChange} onSelect={selectChange} onRadio={radioChange}  gridOp></tinyGrid>


          
<tinyTree style={{display:renderType === 'tree'?'block':'none'}} filter-node-method={filterMethod} props={{ label: textField, isLeaf: 'isLeaf', ...treeOp.props }} expand-on-click-node={false} icon-trigger-click-node={false} node-key={valueField} default-expand-all={state.isExpandAll} check-strictly={treeOp.checkStrictly} default-checked-keys={multiple ? state.defaultCheckedKeys : []} ref={selectTree} v-ref="selectTree" current-node-key={!multiple ? state.currentKey : ''} show-checkbox={multiple} onLoad={loadTreeData} onNode={nodeCollapse} onNode={nodeExpand} onCheck={nodeCheckClick} onNode={treeNodeClick} treeOp></tinyTree>

          


          
<tinyInput style={{display:searchable?'block':'none'}} value={state.query} onChange={(e)=>state.query = e.value} placeholder={t('ui.search.placeholder')}  onUpdate:modelValue={handleQueryChange(state.query)} className="tiny-select-dropdown__search">            
<template slot>              


              
<iconSearch  className="tiny-select-dropdown__search-prefix"></iconSearch>

            </template>

            
<template slot>              
<span style={{display:state.query?'block':'none'}}  className="tiny-icon-close">                
<iconClose onClick={clearSearchText}></iconClose>

              </span>

              
<iconSearch  className="tiny-select-dropdown__search-suffix"></iconSearch>

            </template>

          </tinyInput>


          
<template style={{display:optimization && !~['grid', 'tree'].indexOf(renderType)?'block':'none'}}>            
<div style={{ height: `${state.optimizeStore.recycleScrollerHeight}px` }}>              
<tinyRecycle ref={scrollbar} v-ref="scrollbar" style="height: 100%" key={state.magicKey} key-field={valueField} list-class={['tiny-select-dropdown__wrap']} item-class={['tiny-select-dropdown__item-view']} items={state.datas} item-size={state.optimizeOpts.optionHeight} style={{display:!state.emptyFlag && !loading?'block':'none'}}>                
<template slot>                  
<tinyOption value={state.query} created style={{display:state.showNewOption?'block':'none'}}> </tinyOption>

                </template>

                
<template slot>                  
<tinyOption key={`${item[valueField]}`} label={item[textField]} value={item[valueField]} disabled={item.disabled} required={item.required} highlight-class={item._highlightClass} events={item.events} icon={item.icon} >                  </tinyOption>

                </template>

              </tinyRecycle>

            </div>

          </template>

          
<tinyScrollbar style={{display:!optimization && !~['grid', 'tree'].indexOf(renderType)?'block':'none'}} ref={scrollbar} v-ref="scrollbar"  tag="ul" wrap-class={['tiny-select-dropdown__wrap']} view-class={['tiny-select-dropdown__list']}   style={{display:state.options.length > 0 && !loading?'block':'none'}} className={vc({
              'is-empty': !allowCreate && state.query && state.filteredOptionsCount === 0
            })}>            
<Slot name="dropdown" parent_children={props.children} slots={props.slots}></Slot>

            


            
<li style={{display:
                multiple && showCheck && showAlloption && !state.multipleLimit && !state.query && !remote && !filterable
              ?'block':'none'}}  data-tag="tiny-select-dropdown-item"  onClick={toggleCheckAll(false)}  onMouseenter={state.hoverIndex = -9} className={vc([
                {
                  hover: state.hoverIndex === -9 && state.selectCls !== 'checked-sur'
                },
                { 'selected': state.selectCls === 'checked-sur' }
              ],'tiny-option tiny-select-dropdown__item')}>              


              


              
<tinyCheckbox model-value={state.isSelectAll} indeterminate={state.selectCls === 'halfselect'}  className={vc([state.selectCls)}>                
{t('ui.base.all')}

              </tinyCheckbox>

            </li>

            
<li style={{display:
                multiple &&
                showCheck &&
                showAlloption &&
                !state.multipleLimit &&
                state.query &&
                !state.emptyText &&
                !remote &&
                !filterable
              ?'block':'none'}}  data-tag="tiny-select-dropdown-item"  onClick={toggleCheckAll(true)}  onMouseenter={state.hoverIndex = -9} className={vc([
                {
                  hover: state.hoverIndex === -9 && state.filteredSelectCls !== 'checked-sur'
                },
                { 'selected': state.filteredSelectCls === 'checked-sur' }
              ],'tiny-option tiny-select-dropdown__item')}>              


              


              
<tinyCheckbox model-value={state.isSelectAll} indeterminate={state.filteredSelectCls === 'halfselect'}  className={vc([state.selectCls)}>                
{t('ui.base.all')}

              </tinyCheckbox>

            </li>

            
<tinyOption value={state.query} created style={{display:state.showNewOption?'block':'none'}}> </tinyOption>

            
<Slot  parent_children={props.children} slots={props.slots}>              

  {
    state.datas.map(item=>(
      <tinyOption  key={`${item[valueField]}`} label={item[textField]} value={item[valueField]} disabled={item.disabled} required={item.required} highlight-class={item._highlightClass} events={item.events}  icon={item.icon}>              </tinyOption>
    ))
  }
  

            </Slot>

          </tinyScrollbar>

          
<template style={{display:
              renderType !== 'grid' &&
              renderType !== 'tree' &&
              state.emptyText &&
              (!allowCreate || loading || (allowCreate && state.emptyFlag))
            ?'block':'none'}}>            


            
<div style={{display:loadingText || slots.empty?'block':'none'}}>              
<Slot name="empty" style={{display:slots.empty?'block':'none'}} parent_children={props.children} slots={props.slots}></Slot>

              
<span style={{display:!(slots.empty)?'block':'none'}}  className="tiny-select-dropdown__empty-images"></span>

              
<p  style={{display:!(!(slots.empty))?'block':'none'}} className="tiny-select-dropdown__empty">                
{state.emptyText}

              </p>

            </div>

            
<div style={{display:!(!(!(slots.empty)))?'block':'none'}}  className="tiny-select-dropdown__loading">              
<template style={{display:!loading?'block':'none'}}>                
<span style={{display:showEmptyImage?'block':'none'}}  className="tiny-select-dropdown__empty-images"></span>

                
<span style={{display:!(showEmptyImage)?'block':'none'}}  className="tiny-select-dropdown__empty"> 
{state.emptyText}</span>

              </template>

              
<svg style={{display:!(!(showEmptyImage))?'block':'none'}}  viewBox="25 25 50 50" className="circular">                
<circle  cx="50" cy="50" r="24" fill="none" className="path"></circle>

              </svg>

            </div>

          </template>

          


          
<Slot name="footer" parent_children={props.children} slots={props.slots}></Slot>

        </tinySelect>

      </transition>

    </div>

    
<div style={{display:hoverExpand && !state.isDisplayOnly?'block':'none'}}  className="tiny-select__placeholder">      
<input  disabled className="tiny-input__inner"></input>

    </div>

  </div>


      );
    }
    