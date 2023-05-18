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
import {
  iconEdit,
  iconSetting,
  iconConmentRefresh,
  iconUnfilter,
  iconMinscreen,
  iconAscending,
  iconFullscreen,
  iconDescending,
  iconSortDefault
} from '@opentiny/vue-icon'

const GlobalConfig = {
  validConfig: {
    message: 'tooltip'
  },
  // 默认开启点击头部单元格触发排序
  sortConfig: {},
  // 默认不开启隔行换色和行高亮，不暴露此配置
  stripe: false,
  // 鼠标移入表格行是否高亮显示
  highlightHoverRow: true,
  resizable: true,
  fit: true,
  showHeader: true,
  defaultTreeIndent: 16,
  defaultTreeSpacing: 30,
  rowId: '_RID', // 行数据的唯一主键字段名
  version: 0, // 版本号，对于某些带数据缓存的功能有用到，上升版本号可以用于重置数据
  optimization: {
    animat: true,
    delayHover: 250,
    scrollX: {
      gt: 100
    },
    scrollY: {
      gt: 500
    }
  },
  icon: {
    sortAsc: iconAscending(),
    sortDesc: iconDescending(),
    sortDefault: iconSortDefault(),
    required: 'tiny-grid-required-icon',
    filter: iconUnfilter(),
    edit: iconEdit(),
    tree: 'tiny-grid-icon__caret-right',
    refresh: iconConmentRefresh(),
    minscreen: iconMinscreen(),
    fullscreen: iconFullscreen(),
    custom: iconSetting(),
    jumpPrev: 'tiny-grid-icon__d-arrow-left',
    jumpNext: 'tiny-grid-icon__d-arrow-right',
    prevPage: 'tiny-grid-icon__arrow-left',
    nextPage: 'tiny-grid-icon__arrow-right',
    zoomIn: 'tiny-grid-icon__zoomin',
    zoomOut: 'tiny-grid-icon__zoomout',
    modalClose: 'tiny-grid-icon__close',
    modalInfo: 'tiny-grid-icon__info',
    modalSuccess: 'tiny-grid-icon__success',
    modalWarning: 'tiny-grid-icon__warning',
    modalError: 'tiny-grid-icon__error',
    modalQuestion: 'tiny-grid-icon__question',
    modalLoading: 'tiny-grid-icon__refresh roll',
    caretBottom: 'tiny-grid-icon__caret-bottom',
    dropdownBottom: 'tiny-grid-icon__arrow-bottom',
    btnLoading: 'tiny-grid-icon__refresh roll'
  },
  grid: {},
  menu: {},
  tooltip: {
    trigger: 'hover',
    theme: 'dark'
  },
  pager: {},
  toolbar: {
    resizable: {
      storage: false
    },
    buttons: []
  },
  modal: {
    zIndex: 2000,
    minWidth: 340,
    minHeight: 200,
    lockView: true,
    mask: true,
    duration: 3000,
    marginSize: 10,
    animat: true
  },
  i18n: (key) => key,
  constant: {
    insertedField: '_$inserted',
    deletedField: '_$deleted',
    asyncPrefix: '_$async_'
  },
  TINY_TABLE_CUSTOM_COLUMN_WIDTH: 'TINY_TABLE_CUSTOM_COLUMN_WIDTH',
  TINY_TABLE_CUSTOM_SETTING: 'TINY_TABLE_CUSTOM_SETTING'
}

export default GlobalConfig

export const prefix = 'tiny-grid'
