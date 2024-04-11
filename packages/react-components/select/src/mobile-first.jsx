
    import { renderless, api } from '@opentiny/vue-renderless/select/vue'
    import '@opentiny/vue-theme/select/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function select(props) {
      const {id,multiple,name,dataset,readonly,tabindex,dropStyle,valueField,textField,copyable,size,options,showCheck,showAlloption,hideDrop,modelValue,showOverflowTooltip,remote,remoteConfig,placement,loading,disabled,valueKey,clearable,noDataText,filterable,loadingText,noMatchText,popperClass,allowCreate,placeholder,remoteMethod,filterMethod,collapseTags,autocomplete,multipleLimit,reserveKeyword,automaticDropdown,defaultFirstOption,popperAppendToBody,showDropdown,expandTags,renderType,gridOp,treeOp,delay,cacheOp,isDropInheritWidth,tagSelectable,selectConfig,radioConfig,allowCopy,textSplit,autoClose,queryDebounce,ignoreEnter,dropdownIcon,disabledTooltipContent,hoverExpand,optimization,displayOnly,initQuery,extraQueryParams,shape,label,tip,updateDelay,showTips,popperOptions,title,closeByMask,searchPlaceholder,blank} = props
      const defaultProps = {
        ...$props,
        ...props,
        id,multiple,name,dataset,readonly,tabindex,dropStyle,valueField,textField,copyable,size,options,showCheck,showAlloption,hideDrop,modelValue,showOverflowTooltip,remote,remoteConfig,placement,loading,disabled,valueKey,clearable,noDataText,filterable,loadingText,noMatchText,popperClass,allowCreate,placeholder,remoteMethod,filterMethod,collapseTags,autocomplete,multipleLimit,reserveKeyword,automaticDropdown,defaultFirstOption,popperAppendToBody,showDropdown,expandTags,renderType,gridOp,treeOp,delay,cacheOp,isDropInheritWidth,tagSelectable,selectConfig,radioConfig,allowCopy,textSplit,autoClose,queryDebounce,ignoreEnter,dropdownIcon,disabledTooltipContent,hoverExpand,optimization,displayOnly,initQuery,extraQueryParams,shape,label,tip,updateDelay,showTips,popperOptions,title,closeByMask,searchPlaceholder,blank
      }
      const { ref, current: vm, parent } = useVm()
      const select=useRef()
const tagsGroup=useRef()
const reference=useRef()
const tags=useRef()
const tags-content=useRef()
const input=useRef()
const popper=useRef()
const selectTree=useRef()
const scrollbar=useRef()
      const { state,toggleMenu,deleteTag,handleEnterTag,handleFocus,handleBlur,managePlaceholder,resetInputState,navigateOptions,selectOption,deletePrevTag,handleComposition,debouncedQueryChange,debouncedOnInputChange,onMouseenterNative,onMouseleaveNative,handleCopyClick,handleClearClick,handleDropdownClick,handleMenuEnter,doDestroy,loadTreeData,nodeCollapse,nodeExpand,nodeCheckClick,treeNodeClick,toggleCheckAll } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[select,tagsGroup,reference,tags,tags-content,input,popper,selectTree,scrollbar]
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
    } onClick={toggleMenu} clickoutside a($attrs, ['class', 'style'], true) className={vc([hoverExpand ? 'align-top' : '', $parent.$attrs.class],'inline-block relative w-full outline-0 group [&_[data-tag=tiny-tag]]:max-w-[144px]')}>    
<div ref={tagsGroup} v-ref="tagsGroup" style={state.selectFiexd}  className={vc([
        { 'absolute top-0 left-0 right-0': hoverExpand },
        { 'absolute w-full': state.isExpand && hoverExpand },
        { 'z-[2]': state.isExpand && hoverExpand && (state.inputHovering || state.visible) }
      ])}>      
<tinyFilter style={{display:shape === 'filter'?'block':'none'}} ref={reference} v-ref="reference" onClick={toggleMenu} show-close={clearable} placeholder={placeholder} disabled={state.selectDisabled} label={label} tip={tip} value={
          multiple
            ? state.selected.map((item) => (item.state ? item.state.currentLabel : item.currentLabel)).join('; ')
            : state.selectedLabel
        } drop-down-visible={state.visible} blank={blank}>      </tinyFilter>

      
<div ref={tags} v-ref="tags"  style={{display:multiple && !state.isDisplayOnly && !shape?'block':'none'}} style={state.tagsStyle} className={vc([
          m(
            gcls('select-tags'),
            { 'pl-9 sm:pl-9': slots.prefix },
            { 'overflow-y-hidden': (state.inputHovering || state.visible) && !state.selected.length },
            { 'h-6 overflow-hidden': hoverExpand },
            { 'pr-6': state.selectDisabled },
            { 'overflow-y-auto max-h-28 h-auto': hoverExpand && (state.inputHovering || state.visible) }
          )
        )}>        
<span style={{display:!state.selectDisabled?'block':'none'}}  className={vc([
            collapseTags
              ? filterable && state.device === 'pc'
                ? 'w-auto max-w-[76%] flex'
                : 'w-full flex'
              : 'contents'
          ])}>          
<span style={{display:(collapseTags || state.device === 'mb') && state.selectedVal.length?'block':'none'}}  className={vc(['contents', collapseTags && filterable ? 'max-w-full flex-1' : ''])}>            
<tinyTag closable={!state.selectDisabled && state.device !== 'mb'} size={state.collapseTagSize} hit={state.selectedVal[0].state ? state.selectedVal[0].state.hitState : state.selectedVal[0].hitState} key={state.key} type="info"  onClose={deleteTag($event, state.selectedVal[0])} disable-transitions className={vc([gcls('tag-info'))}>              
<tinyTooltip effect="light" placement="top" onMouseenter={handleEnterTag($event, getValueKey(state.selectedVal[0]))}>                
<span  className={vc([gcls('tags-text'))}>                  
<Slot name="label" item={getLabelSlotValue(state.selectedVal[0])} parent_children={props.children} slots={props.slots}>{state.selectedVal[0].state
                      ? state.selectedVal[0].state.currentLabel
                      : state.selectedVal[0].currentLabel}</Slot>

                </span>

                
<template style={{display:state.tooltipContent[getValueKey(state.selectedVal[0])]?'block':'none'}} slot>                  
<span  className={vc([gcls('tags-text'))}>                    
<Slot name="label" item={getLabelSlotValue(state.selectedVal[0])} parent_children={props.children} slots={props.slots}>{state.selectedVal[0].state
                        ? state.selectedVal[0].state.currentLabel
                        : state.selectedVal[0].currentLabel}</Slot>

                  </span>

                </template>

              </tinyTooltip>

            </tinyTag>

            
<tinyTag style={{display:state.selectedVal.length > 1?'block':'none'}} closable={false} size={state.collapseTagSize}   type="info" disable-transitions className={vc([gcls('tag-info'),'overflow-visible]')}>              
<span  className={vc([gcls('tags-text'))}>+ 
{state.selectedVal.length - 1}</span>

            </tinyTag>

          </span>

          
<span ref={tags-content} v-ref="tags-content" style={{display:!collapseTags?'block':'none'}}  className="sm:contents hidden">            
<tinyTag style={{display:hoverExpand?'block':'none'}}  type="info" data-tag="tags-collapse" key="tags-collapse" closable={false} size={state.collapseTagSize} className={vc([
                m(
                  gcls('tag-info'),
                  { 'visible static': hoverExpand },
                  { 'invisible absolute': hoverExpand && (state.inputHovering || state.visible || state.isHidden) }
                )
              )}>+ 
{state.collapseTagsLength}</tinyTag>

            

  {
    state.selected.map((item, index)=>(
      <tinyTag  key={getValueKey(item)} closable={!item.selectDisabled && !item.required && state.device !== 'mb'} size={state.collapseTagSize} hit={item.state ? item.state.hitState : item.hitState}  type="info" onClose={deleteTag($event, item)} disable-transitions className={vc([gcls('tag-info'))}>              
<tinyTooltip effect="light" placement="top" onMouseenter={handleEnterTag($event, getValueKey(item))}>                
<span style={{display:!state.visible && state.overflow === index?'block':'none'}}  className={vc([gcls('tags-text'))}>{item.state ? item.state.currentLabel + '... ' : item.currentLabel + '... '}</span>

                
<span style={{display:!(!state.visible && state.overflow === index)?'block':'none'}}  className={vc([gcls('tags-text'))}>                  
<Slot name="label" item={getLabelSlotValue(item)} parent_children={props.children} slots={props.slots}>{item.state ? item.state.currentLabel : item.currentLabel}</Slot>

                </span>

                
<template style={{display:state.tooltipContent[getValueKey(item)]?'block':'none'}} slot>                  
<span style={{display:!state.visible && state.overflow === index?'block':'none'}}  className={vc([gcls('tags-text'))}>{item.state ? item.state.currentLabel + '... ' : item.currentLabel + '... '}</span>

                  
<span style={{display:!(!state.visible && state.overflow === index)?'block':'none'}}  className={vc([gcls('tags-text'))}>                    
<Slot name="label" item={getLabelSlotValue(item)} parent_children={props.children} slots={props.slots}>{item.state ? item.state.currentLabel : item.currentLabel}</Slot>

                  </span>

                </template>

              </tinyTooltip>

            </tinyTag>
    ))
  }
  

          </span>

        </span>


        
<span style={{display:!(!(!state.visible && state.overflow === index))?'block':'none'}}  className={vc([gcls('tags-text'), 'flex'])}>          
<tinyTooltip effect="light" placement="top" disabled={!showTips || state.device === 'mb'}>            
<span  className="inline-block w-full whitespace-nowrap text-ellipsis overflow-hidden text-color-text-disabled">              

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
<div  className={vc([state.showTips && 'max-h-[theme(spacing.72)] overflow-x-hidden w-full', 'inline-block'])}>                
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
          }} className={vc([
            state.selectSize === 'mini' ? 'h-6' : '',
            state.selectSize === 'small' ? 'h-9' : '',
            state.selectSize === 'medium' ? 'h-8' : ''
          ],'hidden sm:inline-block border-none outline-0 p-0 ml-px text-color-text-primary text-xs h-7 appearance-none bg-transparent')}></input>

      </div>

      
<tinyInput style={{display:!shape?'block':'none'}} ref={reference} v-ref="reference" value={state.selectedLabel} onChange={(e)=>state.selectedLabel = e.value} type="text" placeholder={state.currentPlaceholder} name={name} id={id} autocomplete={autocomplete} size={state.selectSize} disabled={state.selectDisabled} readonly={state.readonly} display-only={state.isDisplayOnly} display-only-content={state.displayOnlyContent} unselectable={state.readonly ? 'on' : 'off'} validate-event={false} tabindex={multiple && filterable ? '-1' : tabindex} onFocus={handleFocus} onBlur={handleBlur} onKeyup={debouncedOnInputChange} onKeydown={navigateOptions('next')} onKeydown={navigateOptions('prev')} onKeydown={selectOption} onKeydown={state.visible = false} onKeydown={state.visible = false} onPaste={debouncedOnInputChange} onMouseenter={onMouseenterNative} onMouseleave={onMouseleaveNative}>        
<template slot style={{display:slots.prefix?'block':'none'}}>          
<Slot name="prefix" parent_children={props.children} slots={props.slots}></Slot>

        </template>

        
<template slot>          
<Slot name="suffix" parent_children={props.children} slots={props.slots}></Slot>

          
<span style={{display:state.showCopy?'block':'none'}}  onClick={handleCopyClick} className="h-4 cursor-pointer relative z-[1]">            
<iconCopy  className={vc([gcls('caret'), 'align-top group-hover:fill-color-brand'])}></iconCopy>

          </span>

          
<iconClose style={{display:state.showClose?'block':'none'}}  onClick={handleClearClick} onMouseenter={state.inputHovering = true} className={vc([
              gcls('caret'),
              'hidden sm:inline-block',
              { 'mr-2 fill-color-text-placeholder hover:fill-color-icon-primary': state.showClose },
              { 'mr-1': multiple && state.showClose }
            ])}></iconClose>

          
<Component style={{display:!(remote && filterable && !remoteConfig.showIcon)?'block':'none'}} is={dropdownIcon}  onClick={handleDropdownClick} className={vc([
              m(
                gcls('caret'),
                'hidden sm:inline-block',
                state.iconClass,
                { 'hidden': state.selectDisabled },
                { 'fill-color-brand-hover rotate-180 ': state.visible }
              )
            )}></Component>

          
<iconChevron custom-class="h-5 w-5 sm:h-4 sm:w-4"   className={vc([
              state.selectDisabled
                ? 'fill-color-icon-placeholder sm:fill-color-icon-disabled'
                : 'fill-color-icon-secondary'
            ],'inline-block sm:hidden')}></iconChevron>

        </template>

      </tinyInput>

      
<transition onBefore={handleMenuEnter} onAfter={doDestroy}>        
<tinySelect ref={popper} v-ref="popper" title={title} close-by-mask={closeByMask} search-placeholder={searchPlaceholder} is-drop-inherit-width={isDropInheritWidth} placement={placement} append-to-body={popperAppendToBody} style={{display:!onCopying() && !hideDrop && state.visible && state.emptyText !== false?'block':'none'}} style={dropStyle} popper-options={popperOptions}  className={vc([m('duration-300'))}>          
<div style={{display:shape && filterable?'block':'none'}}   className={vc([remote && !state.options.length ? 'pb-3' : ''],'px-3 pt-3 pb-1 hidden sm:block')}>            
<tinyInput ref={input} v-ref="input" type="text" value={state.query} onChange={(e)=>state.query = e.value} placeholder={placeholder} onInput={debouncedQueryChange} onFocus={handleFocus} autofocus></tinyInput>

          </div>


          
<tinyTree style={{display:renderType === 'tree'?'block':'none'}}  filter-node-method={filterMethod} props={{ label: textField, isLeaf: 'isLeaf', ...treeOp.props }} expand-on-click-node={false} icon-trigger-click-node={false} node-key={valueField} default-expand-all={state.isExpandAll} check-strictly={treeOp.checkStrictly} default-checked-keys={multiple ? state.defaultCheckedKeys : []} ref={selectTree} v-ref="selectTree" current-node-key={!multiple ? state.currentKey : ''} show-checkbox={multiple} onLoad={loadTreeData} onNode={nodeCollapse} onNode={nodeExpand} onCheck={nodeCheckClick} onNode={treeNodeClick} show-checked-mark={state.device === 'mb'} treeOp className="[&_[data-tag=tiny-checkbox]_>span_>span]:p-1.5 sm:[&_[data-tag=tiny-checkbox]_>span_>span]:p-0"></tinyTree>

          
<template style={{display:optimization && renderType !== 'tree'?'block':'none'}}>            
<div style={{ height: `${state.optimizeStore.recycleScrollerHeight}px` }}>              
<tinyRecycle ref={scrollbar} v-ref="scrollbar" style="height: 100%" key-field={valueField} key={state.magicKey} list-class={[
                  'tiny-select-dropdown__wrap sm:max-h-56 pb-1 sm:pb-0',
                  state.device === 'mb' ? 'scrollbar-size-0' : ''
                ]} items={state.datas} item-size={state.optimizeOpts.optionHeight} style={{display:!state.emptyFlag && !loading?'block':'none'}}>                
<template slot>                  
<tinyOption style={{display:state.showNewOption?'block':'none'}} highlightClass="sm:mb-0" created value={state.device === 'mb' ? state.queryValue : state.query}>                  </tinyOption>

                </template>

                
<template slot>                  
<tinyOption  key={`${item[valueField]}`} label={item[textField]} value={item[valueField]} disabled={item.disabled} required={item.required} highlight-class={item._highlightClass} events={item.events}  className={vc(['absolute w-full'])}>                  </tinyOption>

                </template>

              </tinyRecycle>

            </div>

          </template>

          
<tinyScrollbar style={{display:!optimization && renderType !== 'tree'?'block':'none'}} ref={scrollbar} v-ref="scrollbar" tag="ul" wrap-class={[
              'tiny-select-dropdown__wrap sm:max-h-56 pb-1 sm:pb-0',
              state.device === 'mb' ? 'scrollbar-size-0' : ''
            ]} view-class={['tiny-select-dropdown__list']}  style={{display:state.options.length > 0 && !loading?'block':'none'}}>            
<Slot name="dropdown" parent_children={props.children} slots={props.slots}></Slot>

            
<div style={{display:multiple && showCheck && showAlloption && !state.multipleLimit && !state.query && !remote?'block':'none'}}   data-tag="tiny-select-dropdown-item" onClick={toggleCheckAll(false)}  onMouseenter={state.hoverIndex = -9} className={vc([
                {
                  hover: state.hoverIndex === -9 && state.selectCls !== 'checked-sur'
                },
                { 'text-color-brand sm:bg-color-fill-6 bg-color-bg-1': state.selectCls === 'checked-sur' }
              ],'whitespace-nowrap box-border py-0 h-10 leading-10 sm:h-8 sm:leading-8 text-sm sm:text-xs pl-0 pr-3 sm:px-3 my-1 sm:m-1 rounded cursor-pointer')}>              
<Component is={`icon-${state.selectCls}`}  className={vc([
                  m(['-mt-0.5 mr-2 fill-color-icon-secondary', state.selectCls !== 'check' && 'fill-color-brand'])
                )}></Component>

              
<span  className={vc([state.selectCls === 'checked-sur' ? 'text-color-brand' : 'text-color-text-primary'])}>{t('ui.base.all')}</span>

            </div>


            
<div style={{display:
                multiple &&
                showCheck &&
                showAlloption &&
                !state.multipleLimit &&
                state.query &&
                !state.emptyText &&
                !remote
              ?'block':'none'}}   data-tag="tiny-select-dropdown-item" onClick={toggleCheckAll(true)}  onMouseenter={state.hoverIndex = -9} className={vc([
                {
                  hover: state.hoverIndex === -9 && state.filteredSelectCls !== 'checked-sur'
                },
                { 'text-color-brand sm:bg-color-fill-6 bg-color-bg-1': state.filteredSelectCls === 'checked-sur' }
              ],'whitespace-nowrap box-border py-0 h-10 leading-10 sm:h-8 sm:leading-8 text-sm sm:text-xs pl-0 pr-3 sm:px-3 my-1 sm:m-1 rounded cursor-pointer')}>              
<Component is={`icon-${state.filteredSelectCls}`}  className={vc([
                  m([
                    '-mt-0.5 mr-2 fill-color-icon-secondary',
                    state.filteredSelectCls !== 'check' && 'fill-color-brand'
                  ])
                )}></Component>

              
<span  className={vc([state.filteredSelectCls === 'checked-sur' ? 'text-color-brand' : 'text-color-text-primary'])}>{t('ui.base.all')}</span>

            </div>

            
<tinyOption value={state.device === 'mb' ? state.queryValue : state.query} created style={{display:state.showNewOption?'block':'none'}}>            </tinyOption>

            
<Slot  parent_children={props.children} slots={props.slots}>              

  {
    state.datas.map(item=>(
      <tinyOption   key={`${item[valueField]}`} label={item[textField]} value={item[valueField]} disabled={item.disabled} required={item.required} highlight-class={item._highlightClass} events={item.events}  className={vc(['relative'])}>              </tinyOption>
    ))
  }
  

            </Slot>

          </tinyScrollbar>


          
<template style={{display:
              renderType !== 'tree' && state.emptyText && (!allowCreate || loading || (allowCreate && state.emptyFlag))
            ?'block':'none'}}>            
<div style={{display:loadingText || slots.empty?'block':'none'}}>              
<Slot name="empty" style={{display:slots.empty?'block':'none'}} parent_children={props.children} slots={props.slots}></Slot>

              
<p  style={{display:!(slots.empty)?'block':'none'}} className="py-2.5 px-0 m-0 text-center text-color-text-secondary text-xs">                
{state.emptyText}

              </p>

            </div>

            
<div style={{display:!(!(slots.empty))?'block':'none'}}  className="text-center py-2.5 px-0">              
<span style={{display:!loading?'block':'none'}}  className="py-2.5 px-0 m-0 text-center text-color-text-secondary text-xs">                
{state.emptyText}

              </span>

              
<iconLoading style={{display:!(!loading)?'block':'none'}}  className="fill-color-brand h-4 w-4 inline-block align-top animate-spin"> </iconLoading>

            </div>

          </template>

        </tinySelect>

      </transition>

    </div>

    
<div style={{display:hoverExpand && !state.isDisplayOnly?'block':'none'}}  className={vc([
        m(
          'h-7 invisible',
          { 'h-6': state.selectSize === 'mini' },
          { 'h-7': state.selectSize === 'small' },
          { 'h-8': state.selectSize === 'medium' }
        )
      )}>      
<input disabled></input>

    </div>

  </div>


      );
    }
    