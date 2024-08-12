import {
  ALIGN_CENTER_ICON,
  ALIGN_LEFT_ICON,
  ALIGN_RIGHT_ICON,
  BACKGROUND_COLOR_ICON,
  BLOCKQUOTE_ICON,
  BOLD_ICON,
  CLEAN_ICON,
  CODE_BLOCK_ICON,
  CODE_ICON,
  COLOR_ICON,
  EMOJI_ICON,
  FILE_ICON,
  FULLSCREEN_ICON,
  GLOBAL_LINK_ICON,
  HELP_ICON,
  IMAGE_ICON,
  ITALIC_ICON,
  LINK_ICON,
  LIST_CHECK_ICON,
  LIST_ORDERED_ICON,
  LIST_UNORDERED_ICON,
  REDO_ICON,
  SCREENSHOT_ICON,
  STRIKE_ICON,
  TABLE_ICON,
  TRIANGLE_DOWN_ICON,
  UNDERLINE_ICON,
  UNDO_ICON,
} from './config/icons.config'
import { isNullOrUndefined } from './config/editor.utils';

import { EN_US } from './config/i18n/en-us'
import { ZH_CN } from './config/i18n/zh-cn'
const localLang = localStorage.getItem('lang') || 'zh-cn'
export const LANG_CONF = localLang === 'en-us' ? EN_US : ZH_CN

export const FONT_FAMILY_CONFIG = [
  'songti',
  'yahei',
  'kaiti',
  'heiti',
  'lishu',
  'mono',
  'arial',
  'arialblack',
  'comic',
  'impact',
  'times',
]

export const FONT_SIZE_CONFIG = [
  '12px',
  '13px',
  '14px',
  '15px',
  '16px',
  '17px',
  '18px',
  '19px',
  '20px',
  '22px',
  '24px',
  '26px',
  '29px',
  '32px',
  '36px',
  '40px',
  '48px',
  '72px',
]

export const ICONS_CONFIG: { [key: string]: any } = {
  undo: UNDO_ICON,
  redo: REDO_ICON,
  clean: CLEAN_ICON,

  bold: BOLD_ICON,
  italic: ITALIC_ICON,
  underline: UNDERLINE_ICON,
  strike: STRIKE_ICON,

  font: '',
  size: '',

  color: `<span class="ql-color-inner">
    ${COLOR_ICON}
    ${TRIANGLE_DOWN_ICON}
    <span class="current-color-line"></span>
  </span>`,
  background: `<span class="ql-color-inner">
    ${BACKGROUND_COLOR_ICON}
    ${TRIANGLE_DOWN_ICON}
    <span class="current-color-line color-line-background"></span>
  </span>`,

  align: {
    '': ALIGN_LEFT_ICON,
    center: ALIGN_CENTER_ICON,
    right: ALIGN_RIGHT_ICON,
  },
  list: {
    bullet: LIST_UNORDERED_ICON,
    ordered: LIST_ORDERED_ICON,
    check: LIST_CHECK_ICON,
  },

  code: CODE_ICON,
  'code-block': CODE_BLOCK_ICON,
  blockquote: BLOCKQUOTE_ICON,

  image: IMAGE_ICON,
  file: FILE_ICON,
  'better-table': TABLE_ICON,
  link: LINK_ICON,
  'global-link': GLOBAL_LINK_ICON,
  fullscreen: FULLSCREEN_ICON,
  emoji: EMOJI_ICON,
  help: HELP_ICON,
  screenshot: SCREENSHOT_ICON,
}

export const TABLE_RIGHT_MENU_CONFIG = {
  copyCells: {
    text: LANG_CONF['copy-cells']
  },
  copyTable: {
    text: LANG_CONF['copy-table']
  },
  cutCells: {
    text: LANG_CONF['cut-cells']
  },
  emptyCells: {
    text: LANG_CONF['empty-cells']
  },
  insertRowUp: {
    text: LANG_CONF['insert-row-up']
  },
  insertRowDown: {
    text: LANG_CONF['insert-row-down']
  },
  insertColumnLeft: {
    text: LANG_CONF['insert-column-left']
  },
  insertColumnRight: {
    text: LANG_CONF['insert-column-right']
  },
  mergeCells: {
    text: LANG_CONF['merge-cells']
  },
  unmergeCells: {
    text: LANG_CONF['unmerge-cells']
  },
  deleteRow: {
    text: LANG_CONF['delete-row']
  },
  deleteColumn: {
    text: LANG_CONF['delete-column']
  },
  deleteTable: {
    text: LANG_CONF['delete-table']
  }
}

// 触发上传
export function inputFile(type, accept) {
  const defaultMIMETypes = this.quill.uploader.options[type].join(', ')
  const mimeTypes = accept || defaultMIMETypes
  let fileInput = this.container.querySelector(`input.ql-${type}[type=file]`)
  if (isNullOrUndefined(fileInput)) {
    fileInput = document.createElement('input')
    fileInput.classList.add(`ql-${type}`)
    fileInput.setAttribute('type', 'file')
    fileInput.setAttribute('accept', mimeTypes)
    if (
      this.quill.uploader.options.enableMultiUpload === true ||
      (this.quill.uploader.options.enableMultiUpload.file && type === 'file') ||
      (this.quill.uploader.options.enableMultiUpload.image && type === 'image')
    ) {
      fileInput.setAttribute('multiple', '')
    }
    fileInput.addEventListener('change', () => {
      const range = this.quill.getSelection(true)
      this.quill.uploader.upload(range, fileInput.files, type === 'file')
      fileInput.value = ''
    })
    this.container.appendChild(fileInput)
  }
  fileInput.click()
}

export function getListValue(value, preListValue) {
  let curListValue = value;
  if (preListValue && preListValue === value) {
    curListValue = false;
  } else if (value === 'check') {
    if (preListValue === 'checked' || preListValue === 'unchecked') {
      curListValue = false;
    } else {
      curListValue = 'unchecked';
    }
  }
  return curListValue;
}
