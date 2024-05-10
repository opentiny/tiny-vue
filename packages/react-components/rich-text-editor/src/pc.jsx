
    import { renderless, api } from '@opentiny/vue-renderless/rich-text-editor/vue'
    import '@opentiny/vue-theme/rich-text-editor/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function richText(props) {
      const {} = props
      const defaultProps = {
        ...$props,
        ...props,
        
      }
      const { ref, current: vm, parent } = useVm()
      const tablePanelRef=useRef()
      const { state,state.editor.chain,handleChange,toggleTablePanel,tableMouseMove,tableChoose,eventClick } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[tablePanelRef]
      })
      return (
          
<div  className="tiny-rich-text-editor">    
<div  className="tiny-rich-text-editor__toolbar">      


      
        
<button key={'fz' + item} style={{display:item === 'font-size'?'block':'none'}} title={t('ui.richTextEditor.fontSize')}  className="font-size-box">          
<TinyIconRichTextFontSize ></TinyIconRichTextFontSize>

          
<div  className="font-size-options">            
<button onClick={state.editor.chain().focus().setSize({ size: 12 }).run()}>12px</button>

            
<button onClick={state.editor.chain().focus().setSize({ size: 14 }).run()}>14px</button>

            
<button onClick={state.editor.chain().focus().setSize({ size: 16 }).run()}>16px</button>

            
<button onClick={state.editor.chain().focus().setSize({ size: 18 }).run()}>18px</button>

            
<button onClick={state.editor.chain().focus().setSize({ size: 20 }).run()}>20px</button>

            
<button onClick={state.editor.chain().focus().setSize({ size: 24 }).run()}>24px</button>

            
<button onClick={state.editor.chain().focus().setSize({ size: 30 }).run()}>30px</button>

          </div>

        </button>

        
<button key={'lh' + item} style={{display:!(item === 'font-size')?'block':'none'}}  title={t('ui.richTextEditor.lineHeight')} className="line-height-button">          
<div  className="line-height-icon">            
<TinyIconRichTextLineHeight ></TinyIconRichTextLineHeight>

          </div>

          
<div  className="line-height-options">            
<button  onClick={state.editor.chain().focus().setP({ level: 1 }).run()} className="line-1.0">1.0</button>

            
<button  onClick={state.editor.chain().focus().setP({ level: 1.5 }).run()} className="line-1.5">1.5</button>

            
<button  onClick={state.editor.chain().focus().setP({ level: 2 }).run()} className="line-2.0">2.0</button>

            
<button  onClick={state.editor.chain().focus().setP({ level: 2.5 }).run()} className="line-2.5">2.5</button>

          </div>

        </button>

        
<button key={'h-box' + item} style={{display:!(!(item === 'font-size'))?'block':'none'}} title={t('ui.richTextEditor.hBox')}  className="h-box">          
<div  className="h-ico">            
<TinyIconRichTextHeading ></TinyIconRichTextHeading>

          </div>

          
<div  className="h-options">            
<button title="paragraph" onClick={state.editor.chain().focus().setParagraph().run()}>              
<TinyIconRichTextParagraph ></TinyIconRichTextParagraph>

            </button>

            
<button title="h1" onClick={state.editor.chain().focus().toggleHeading({ level: 1 }).run()}>              
<TinyIconRichTextH1 ></TinyIconRichTextH1>

            </button>

            
<button title="h2" onClick={state.editor.chain().focus().toggleHeading({ level: 2 }).run()}>              
<TinyIconRichTextH2 ></TinyIconRichTextH2>

            </button>

            
<button title="h3" onClick={state.editor.chain().focus().toggleHeading({ level: 3 }).run()}>              
<TinyIconRichTextH3 ></TinyIconRichTextH3>

            </button>

            
<button title="h4" onClick={state.editor.chain().focus().toggleHeading({ level: 4 }).run()}>              
<TinyIconRichTextH4 ></TinyIconRichTextH4>

            </button>

            
<button title="h5" onClick={state.editor.chain().focus().toggleHeading({ level: 5 }).run()}>              
<TinyIconRichTextH5 ></TinyIconRichTextH5>

            </button>

            
<button title="h6" onClick={state.editor.chain().focus().toggleHeading({ level: 6 }).run()}>              
<TinyIconRichTextH6 ></TinyIconRichTextH6>

            </button>

          </div>

        </button>

        
<button key={'img' + item} style={{display:!(!(!(item === 'font-size')))?'block':'none'}} title={t('ui.richTextEditor.img')}  className="image-button">          
<TinyIconRichTextImage ></TinyIconRichTextImage>

          
<div  className="img-option">            
<div  className="img-item">              
<input onChange={handleChange} id="img-btn" type="file" accept="image/*, video/*"></input>

              
<label for="img-btn">本地资源</label>

            </div>

            
<div onClick={handleChange(null)}  className="img-item">              
<div >资源链接</div>

            </div>

          </div>

        </button>

        
<button key={'color' + item} style={{display:!(!(!(!(item === 'font-size'))))?'block':'none'}} title={t('ui.richTextEditor.color')}  className="color-button">          
<label for="tiny-color">            
<TinyIconRichTextColor ></TinyIconRichTextColor>

          </label>

          
<input id="tiny-color" type="color" onInput={state.editor.chain().focus().setColor($event.target.value).run()}></input>

        </button>

        
<button key={'bg' + item} style={{display:!(!(!(!(!(item === 'font-size')))))?'block':'none'}} title={t('ui.richTextEditor.backgroundColor')}  className="color-button">          
<label for="tiny--back-color">            
<TinyIconRichbackgroundColor ></TinyIconRichbackgroundColor>

          </label>

          
<input id="tiny-back-color" type="color" onInput={state.editor.chain().focus().setBackColor({ bgColor: $event.target.value }).run()}></input>

        </button>

        
<button key={'table' + item} style={{display:!(!(!(!(!(!(item === 'font-size'))))))?'block':'none'}} title={t('ui.richTextEditor.table')}  className="table-button">          
<div  clickoutside onClick={toggleTablePanel} className="table-box">            
<div  className="table-icon">              
<TinyIconRichTextTable ></TinyIconRichTextTable>

            </div>

            
<div  ref={tablePanelRef} v-ref="tablePanelRef" style={{display:state.isShowTable?'block':'none'}} onMousemove={tableMouseMove} onClick={tableChoose} className="table-panel">              
<div  className="table-row">                
<div   className={vc({ isActive: 1 <= state.flagX && 1 <= state.flagY },'item')}></div>

                
<div   className={vc({ isActive: 2 <= state.flagX && 1 <= state.flagY },'item')}></div>

                
<div   className={vc({ isActive: 3 <= state.flagX && 1 <= state.flagY },'item')}></div>

                
<div   className={vc({ isActive: 4 <= state.flagX && 1 <= state.flagY },'item')}></div>

              </div>

              
<div  className="table-row">                
<div   className={vc({ isActive: 1 <= state.flagX && 2 <= state.flagY },'item')}></div>

                
<div   className={vc({ isActive: 2 <= state.flagX && 2 <= state.flagY },'item')}></div>

                
<div   className={vc({ isActive: 3 <= state.flagX && 2 <= state.flagY },'item')}></div>

                
<div   className={vc({ isActive: 4 <= state.flagX && 2 <= state.flagY },'item')}></div>

              </div>

              
<div  className="table-row">                
<div   className={vc({ isActive: 1 <= state.flagX && 3 <= state.flagY },'item')}></div>

                
<div   className={vc({ isActive: 2 <= state.flagX && 3 <= state.flagY },'item')}></div>

                
<div   className={vc({ isActive: 3 <= state.flagX && 3 <= state.flagY },'item')}></div>

                
<div   className={vc({ isActive: 4 <= state.flagX && 3 <= state.flagY },'item')}></div>

              </div>

              
<div  className="table-row">                
<div   className={vc({ isActive: 1 <= state.flagX && 4 <= state.flagY },'item')}></div>

                
<div   className={vc({ isActive: 2 <= state.flagX && 4 <= state.flagY },'item')}></div>

                
<div   className={vc({ isActive: 3 <= state.flagX && 4 <= state.flagY },'item')}></div>

                
<div   className={vc({ isActive: 4 <= state.flagX && 4 <= state.flagY },'item')}></div>

              </div>

            </div>

          </div>

        </button>

        
<button key={'unlink' + item} style={{display:!(state.isShowTable)?'block':'none'}} title={t('ui.richTextEditor.unlink')} onClick={eventClick(state.editor, item)} disabled={!state.editor?.isActive(Active(item))}>          
<img style={{display:item.img?'block':'none'}} src={eventImg(item)} alt="" srcset=""></img>

          
<Component style={{display:!(item.img)?'block':'none'}} is={eventImg(item)}></Component>

        </button>

        
<button key={'editor' + item} style={{display:!(!(item.img))?'block':'none'}} title={t(`ui.richTextEditor.${item}`)} onClick={eventClick(state.editor, item)}  className={vc({ 'is-active': state.editor?.isActive(Active(item)) })}>          
<img style={{display:item.img?'block':'none'}} src={eventImg(item)} alt="" srcset=""></img>

          
<Component style={{display:!(item.img)?'block':'none'}} is={eventImg(item)}></Component>

        </button>

      

      


      
<Slot name="toolBar" option={state.editor} parent_children={props.children} slots={props.slots}></Slot>

      
<BubbleMenu editor={state.editor} tippy-options={{ duration: 100 }} style={{display:state.editor?'block':'none'}} should-show={shouldShow}  className="bubble-menu">        
<button title="add column before" onClick={state.editor.chain().focus().addColumnBefore().run()} disabled={!state.editor?.can().addColumnBefore()}>          
<TinyIconRichTextAddColumnBefore ></TinyIconRichTextAddColumnBefore>

        </button>

        
<button title="add column after" onClick={state.editor.chain().focus().addColumnAfter().run()} disabled={!state.editor?.can().addColumnAfter()}>          
<TinyIconRichTextAddColumnAfter ></TinyIconRichTextAddColumnAfter>

        </button>

        
<button title="delete column" onClick={state.editor.chain().focus().deleteColumn().run()} disabled={!state.editor?.can().deleteColumn()}>          
<TinyIconRichTextDeleteColumn ></TinyIconRichTextDeleteColumn>

        </button>

        
<button title="add row before" onClick={state.editor.chain().focus().addRowBefore().run()} disabled={!state.editor?.can().addRowBefore()}>          
<TinyIconRichTextAddRowBefore ></TinyIconRichTextAddRowBefore>

        </button>

        
<button title="add row after" onClick={state.editor.chain().focus().addRowAfter().run()} disabled={!state.editor?.can().addRowAfter()}>          
<TinyIconRichTextAddRowAfter ></TinyIconRichTextAddRowAfter>

        </button>

        
<button title="delete row" onClick={state.editor.chain().focus().deleteRow().run()} disabled={!state.editor?.can().deleteRow()}>          
<TinyIconRichTextDeleteRow ></TinyIconRichTextDeleteRow>

        </button>

        
<button title="delete table" onClick={state.editor.chain().focus().deleteTable().run()} disabled={!state.editor?.can().deleteTable()}>          
<TinyIconRichTextDeleteTable ></TinyIconRichTextDeleteTable>

        </button>

        
<button title="toggle header cell" onClick={state.editor.chain().focus().toggleHeaderCell().run()} disabled={!state.editor?.can().toggleHeaderCell()}>          
<TinyIconRichTextHeading ></TinyIconRichTextHeading>

        </button>

        
<button title="merge Or split" onClick={state.editor.chain().focus().mergeOrSplit().run()} disabled={!state.editor?.can().mergeOrSplit()}>          
<TinyIconRichTextMergeCells ></TinyIconRichTextMergeCells>

        </button>

      </BubbleMenu>

    </div>

    
<div  className="tiny-rich-text-editor__container">      
<EditorContent editor={state.editor}></EditorContent>

    </div>

  </div>


      );
    }
    