<template>
    <div class="box tiny-rich-text-editor">
        <div class="button-area">
            <!-- starter-kit功能区 -->
            <button @click="state.editor.chain().focus().toggleBold().run()">
                bold加粗
            </button>
            <button @click="state.editor.chain().focus().toggleItalic().run()">
                italic斜体
            </button>
            <button @click="state.editor.chain().focus().setParagraph().run()">
                paragraph
            </button>
            <button @click="state.editor.chain().focus().toggleHeading({ level: 1 }).run()">
                h1
            </button>
            <button @click="state.editor.chain().focus().toggleHeading({ level: 2 }).run()">
                h2
            </button>
            <button @click="state.editor.chain().focus().toggleHeading({ level: 3 }).run()">
                h3
            </button>
            <button @click="state.editor.chain().focus().toggleBulletList().run()">
                bullet list无序列表
            </button>
            <button @click="state.editor.chain().focus().toggleOrderedList().run()">
                ordered list有序列表
            </button>
            <button @click="state.editor.chain().focus().toggleBlockquote().run()">
                blockquote引用
            </button>
            <button @click="state.editor.chain().focus().toggleCode().run()">
                code
            </button>
            <button @click="state.editor.chain().focus().toggleCodeBlock().run()">
                code block
            </button>
            <button @click="state.editor.chain().focus().unsetAllMarks().run()">
                clear marks
            </button>
            <button @click="state.editor.chain().focus().clearNodes().run()">
                clear nodes
            </button>
            <button @click="state.editor.chain().focus().undo().run()">
                undo
            </button>
            <button @click="state.editor.chain().focus().redo().run()">
                redo
            </button>
            <!-- 图片 -->
            <button @click="state.addImage(state.editor)">
                setImage
            </button>
            <!-- 颜色 -->
            <input type="color" @input="state.editor.chain().focus().setColor($event.target.value).run()"
                :value="state.editor?.getAttributes('textStyle').color">
            <!-- 表格功能按钮 -->
            <button @click="state.editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()">
                insertTable
            </button>
            <button @click="state.editor.chain().focus().addColumnBefore().run()"
                :disabled="!state.editor?.can().addColumnBefore()">
                addColumnBefore
            </button>
            <button @click="state.editor.chain().focus().addColumnAfter().run()"
                :disabled="!state.editor?.can().addColumnAfter()">
                addColumnAfter
            </button>
            <button @click="state.editor.chain().focus().deleteColumn().run()"
                :disabled="!state.editor?.can().deleteColumn()">
                deleteColumn
            </button>
            <button @click="state.editor.chain().focus().addRowBefore().run()"
                :disabled="!state.editor?.can().addRowBefore()">
                addRowBefore
            </button>
            <button @click="state.editor.chain().focus().addRowAfter().run()"
                :disabled="!state.editor?.can().addRowAfter()">
                addRowAfter
            </button>
            <button @click="state.editor.chain().focus().deleteRow().run()" :disabled="!state.editor?.can().deleteRow()">
                deleteRow
            </button>
            <button @click="state.editor.chain().focus().deleteTable().run()"
                :disabled="!state.editor?.can().deleteTable()">
                deleteTable
            </button>
            <button @click="state.editor.chain().focus().toggleHeaderCell().run()"
                :disabled="!state.editor?.can().toggleHeaderCell()">
                toggleHeaderCell
            </button>
            <button @click="state.editor.chain().focus().mergeOrSplit().run()"
                :disabled="!state.editor?.can().mergeOrSplit()">
                mergeOrSplit
            </button>
            <button @click="state.editor.chain().focus().setCellAttribute('backgroundColor', '#FAF594').run()"
                :disabled="!state.editor?.can().setCellAttribute('backgroundColor', '#FAF594')">
                setCellAttribute
            </button>
        </div>
        <div class="small-box">
            <EditorContent :editor="state.editor"></EditorContent>
        </div>
    </div>
</template> 

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/rich-text-edtior/vue'
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
// image 包
import Image from '@tiptap/extension-image'
// color 包
import { Color } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'
// table 包
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
// collaboration 包
import Collaboration from '@tiptap/extension-collaboration'
import * as Y from 'yjs'
import { WebrtcProvider } from 'y-webrtc'

import { props, setup, defineComponent } from '@opentiny/vue-common'
import '@opentiny/vue-theme/button/index.less'

export default defineComponent({
    //   emits: ['click', 'hook-updated'],
    //   props: [...props, 'type', 'text', 'size', 'icon', 'resetTime', 'nativeType', 'loading', 'disabled', 'plain', 'autofocus', 'round', 'circle', 'tabindex'],
    components: { EditorContent },
    setup(props, context) {
        return setup({ props, context, renderless, api, extendOptions: { useEditor, Collaboration, StarterKit, Y, WebrtcProvider, Table, TableCell, TableHeader, TableRow, Color, TextStyle, Image } })
    }
})
</script>

<style lang="less">
.is-active {
    border: 1px solid red;
}

.box {
    width: 500px;
    height: 350px;
    margin: 0 auto;
    outline: 3px solid rgb(203, 203, 203);

    &:hover {
        outline: 3px solid black;

        button {
            background-color: #383838;
        }
    }

    border-radius: 8px 8px 0 0;

    button {
        background-color: #9e9e9e;
        color: rgb(202, 202, 202);
        margin: 1px 1px;
        border-radius: 4px;
    }

    button:disabled {
        background-color: rgba(239, 239, 239, 0.3);
        color: rgba(16, 16, 16, 0.3);
        border-color: rgba(118, 118, 118, 0.3);
    }

    .button-area {
        text-align: center;
    }
}

.small-box {
    overflow: auto;
    text-align: center;
    height: 200px;
    margin-right: 2px;

    &::-webkit-scrollbar {
        width: 4px;
        height: 0px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgb(0, 0, 0);
        border-radius: 8px;
    }
}

.ProseMirror {
    outline: none !important;
}

.ProseMirror {
    >*+* {
        margin-top: 0.75em;
    }

    ul,
    ol {
        padding: 0 1rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        line-height: 1.1;
    }

    code {
        background-color: rgba(#616161, 0.1);
        color: #616161;
    }

    pre {
        background: #0D0D0D;
        color: #FFF;
        font-family: 'JetBrainsMono', monospace;
        padding: 0.75rem 1rem;
        border-radius: 0.5rem;

        code {
            color: inherit;
            padding: 0;
            background: none;
            font-size: 0.8rem;
        }
    }

    img {
        max-width: 100%;
        height: auto;
    }

    blockquote {
        padding-left: 1rem;
        border-left: 2px solid rgba(#0D0D0D, 0.1);
    }

    hr {
        border: none;
        border-top: 2px solid rgba(#0D0D0D, 0.1);
        margin: 2rem 0;
    }
}

.ProseMirror {
    table {
        border-collapse: collapse;
        table-layout: fixed;
        width: 100%;
        margin: 0;
        overflow: hidden;

        td,
        th {
            min-width: 1em;
            border: 2px solid #ced4da;
            padding: 3px 5px;
            vertical-align: top;
            box-sizing: border-box;
            position: relative;

            >* {
                margin-bottom: 0;
            }
        }

        th {
            font-weight: bold;
            text-align: left;
            background-color: #f1f3f5;
        }

        .selectedCell:after {
            z-index: 2;
            position: absolute;
            content: "";
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: rgba(200, 200, 255, 0.4);
            pointer-events: none;
        }

        .column-resize-handle {
            position: absolute;
            right: -2px;
            top: 0;
            bottom: -2px;
            width: 4px;
            background-color: #adf;
            pointer-events: none;
        }

        p {
            margin: 0;
        }
    }

    .tableWrapper {
        padding: 1rem 0;
        overflow-x: auto;
    }

    .resize-cursor {
        cursor: ew-resize;
        cursor: col-resize;
    }
}
</style>
