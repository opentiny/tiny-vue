import type { ExtensionOptions } from '@/types'
import { type Editor, type Range } from '@tiptap/core'
import type { TableOptions } from '@tiptap/extension-table'
import TiptapTable from '@tiptap/extension-table'
import TableHeader from '../table-header'
import TableRow from '../table-row'
import TableCell from '../table-cell'
import {
  iconRichTextAddColumnAfter,
  iconRichTextAddColumnBefore,
  iconRichTextAddRowAfter,
  iconRichTextAddRowBefore,
  iconRichTextDeleteColumn,
  iconRichTextDeleteRow,
  iconRichTextDeleteTable,
  iconRichTextHeading,
  iconRichTextMergeCells,
  iconRichTextTable,
  IconRichTextHighLight
} from '@opentiny/vue-icon'

const Table = TiptapTable.extend<ExtensionOptions & TableOptions>({
  addExtensions() {
    return [TableHeader, TableRow, TableCell]
  },
  addOptions() {
    return {
      ...this.parent?.(),
      getToolbarMenus() {
        return [
          {
            key: 'table',
            icon: iconRichTextTable(),
            action: ({ editor }: { editor: Editor }) => {
              return ({ row, col }) => {
                editor.chain().focus().insertTable({ rows: row, cols: col }).run()
              }
            },
            config: { withTable: true }
          }
        ]
      },
      getSlashMenus() {
        return [
          {
            priority: 70,
            icon: iconRichTextTable(),
            title: '表格',
            keywords: ['table', 'biaoge'],
            command: ({ editor, range }: { editor: Editor; range: Range }) => {
              editor.chain().focus().deleteRange(range).insertTable({ rows: 3, cols: 3 }).run()
            }
          }
        ]
      },
      getBubbleMenu() {
        return {
          pluginKey: 'tableBubbleMenu',
          shouldShow: ({ editor }) => {
            return editor.isActive('table')
          },
          items: [
            {
              icon: iconRichTextAddColumnBefore(),
              priority: 10,
              isDisabled: ({ editor }: { editor: Editor }) => {
                return () => !editor.can().addColumnBefore()
              },
              action: ({ editor }: { editor: Editor }) => {
                return () => editor.chain().focus().addColumnBefore().run()
              }
            },
            {
              icon: iconRichTextAddColumnAfter(),
              priority: 20,
              isDisabled: ({ editor }: { editor: Editor }) => {
                return () => !editor.can().addColumnAfter()
              },
              action: ({ editor }: { editor: Editor }) => {
                return () => editor.chain().focus().addColumnAfter().run()
              }
            },
            {
              icon: iconRichTextDeleteColumn(),
              priority: 30,
              isDisabled: ({ editor }: { editor: Editor }) => {
                return () => !editor.can().deleteColumn()
              },
              action: ({ editor }: { editor: Editor }) => {
                return () => editor.chain().focus().deleteColumn().run()
              }
            },
            {
              icon: iconRichTextAddRowBefore(),
              priority: 40,
              isDisabled: ({ editor }: { editor: Editor }) => {
                return () => !editor.can().addRowBefore()
              },
              action: ({ editor }: { editor: Editor }) => {
                return () => editor.chain().focus().addRowBefore().run()
              }
            },
            {
              icon: iconRichTextAddRowAfter(),
              priority: 50,
              isDisabled: ({ editor }: { editor: Editor }) => {
                return () => !editor.can().addRowAfter()
              },
              action: ({ editor }: { editor: Editor }) => {
                return () => editor.chain().focus().addRowAfter().run()
              }
            },
            {
              icon: iconRichTextDeleteRow(),
              priority: 60,
              isDisabled: ({ editor }: { editor: Editor }) => {
                return () => !editor.can().deleteRow()
              },
              action: ({ editor }: { editor: Editor }) => {
                return () => editor.chain().focus().deleteRow().run()
              }
            },
            {
              icon: iconRichTextDeleteTable(),
              priority: 70,
              isDisabled: ({ editor }: { editor: Editor }) => {
                return () => !editor.can().deleteTable()
              },
              action: ({ editor }: { editor: Editor }) => {
                return () => editor.chain().focus().deleteTable().run()
              }
            },
            {
              icon: iconRichTextHeading(),
              priority: 80,
              isActive: ({ editor }: { editor: Editor }) => {
                return () => editor.isActive(TableHeader.name)
              },
              isDisabled: ({ editor }: { editor: Editor }) => {
                return () => !editor.can().toggleHeaderCell()
              },
              action: ({ editor }: { editor: Editor }) => {
                return () => editor.chain().focus().toggleHeaderCell().run()
              }
            },
            {
              icon: iconRichTextMergeCells(),
              priority: 90,
              isDisabled: ({ editor }: { editor: Editor }) => {
                return () => !editor.can().mergeOrSplit()
              },
              action: ({ editor }: { editor: Editor }) => {
                return () => editor.chain().focus().mergeOrSplit().run()
              }
            },
            {
              icon: IconRichTextHighLight(),
              priority: 100,
              isDisabled: ({ editor }: { editor: Editor }) => {
                return () => !editor.can().toggleHeaderCell()
              },
              action: ({ editor }: { editor: Editor }) => {
                return (info) => {
                  const color = info.backgroundColor
                  editor.chain().focus().setCellAttribute('backgroundColor', color).run()
                }
              },
              input: {
                type: 'color',
                cb: ({ editor }: { editor: Editor }) => {
                  return (e: InputEvent) => {
                    const color = e.target?.value
                    if (color) {
                      editor.chain().focus().setCellAttribute('backgroundColor', color).run()
                      // editor.chain().focus().setCellAttribute('colspan', 2).run()
                    }
                  }
                }
              }
            }
          ]
        }
      }
    }
  }
})

export default Table
export { Table, TableOptions }
