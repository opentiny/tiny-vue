/**
 * MIT License
 *
 * Copyright (c) 2019 Xu Liangzhan
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

const columnIsVisible = (children) =>
  Array.isArray(children) && children.length && children.some((column) => column.visible)

export const getAllColumns = (columns) => {
  const result = []

  columns.forEach((column) => {
    if (column.visible) {
      const children = column.children

      if (columnIsVisible(children)) {
        result.push(column)
        result.push.apply(result, getAllColumns(children))
      } else {
        result.push(column)
      }
    }
  })

  return result
}

export const convertToRows = (originColumns) => {
  let maxLevel = 1
  const walkTree = (column, parent) => {
    if (parent) {
      column.level = parent.level + 1

      if (maxLevel < column.level) {
        maxLevel = column.level
      }
    }

    const children = column.children

    if (columnIsVisible(children)) {
      let colSpan = 0

      children.forEach((childColumn) => {
        if (childColumn.visible) {
          walkTree(childColumn, column)
          colSpan += childColumn.colSpan
        }
      })
      column.colSpan = colSpan
    } else {
      column.colSpan = 1
    }
  }

  originColumns.forEach((column) => {
    column.level = 1
    walkTree(column)
  })

  const allRows = []

  for (let i = 0; i < maxLevel; i++) {
    allRows.push([])
  }

  const allColumns = getAllColumns(originColumns)

  allColumns.forEach((column) => {
    column.rowSpan = columnIsVisible(column.children) ? 1 : maxLevel - column.level + 1

    allRows[column.level - 1].push(column)
  })

  return allRows
}
