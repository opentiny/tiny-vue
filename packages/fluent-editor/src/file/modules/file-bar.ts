import Quill from 'quill'
// devui-internal api: utils\public-api.ts

import { unshiftString } from '../../utils/method';
import { LANG_CONF } from '../../config/editor.config'
import File from '../formats/file'
const Delta = Quill.imports['delta']
import {Range } from 'quill/core/selection'

export default class FileBar {
  quill: any
  file: any
  domNode: HTMLElement
  fileRange: any
  template: string

  constructor(quill, target) {
    this.quill = quill
    this.file = target
    const fileBlot = Quill.find(target)
    const index = this.quill.getIndex(fileBlot)
    const [fileItem, offset] = this.quill.scroll.descendant(File, index)
    const length = fileItem && fileItem.length()
    this.fileRange = new Range(index - offset, length)

    const timestamp = Number(this.file.dataset.lastModified)
    const lastModifiedDate = this.formatDate(timestamp)
    this.template = [
      // `<a class="ql-last-modified-date" href="${this.file.href}" target="_blank">${this.file.href}</a>`,
      // '<span class="ql-split"></span>',
      // `<a class="ql-file-preview"><i class="icon-preview"></i></a>`,
      `<a class="ql-file-download"><i class="icon-download"></i></a>`,
      '<a class="ql-file-delete"><i class="icon-delete"></i></a>',
    ].join('')

    this.createFileBar()
  }

  createFileBar() {
    this.domNode = document.createElement('div')
    this.domNode.className = 'ql-file-bar'
    this.domNode.innerHTML = this.template
    // 查看文件
    const filePreview = this.domNode.querySelector('a.ql-file-preview')
    if (filePreview) {
      filePreview.addEventListener('click', (event) => {
        this.operateFile(event, 'view')
      })
    }
    // 下载文件
    const fileDownload = this.domNode.querySelector('a.ql-file-download')
    if (fileDownload) {
      fileDownload.addEventListener('click', (event) => {
        this.operateFile(event, 'download')
      })
    }
    // 删除文件
    const fileDelete = this.domNode.querySelector('a.ql-file-delete')
    if (fileDelete) {
      fileDelete.addEventListener('click', (event) => {
        this.operateFile(event, 'delete')
        const delta = new Delta()
          .retain(this.fileRange.index)
          .delete(this.fileRange.length)
        this.quill.updateContents(delta, Quill.sources.USER)
        this.quill.setSelection(this.fileRange.index)
      })
    }

    this.setPosition()
    this.quill.root.parentNode.appendChild(this.domNode)
  }

  destroy() {
    if (this.domNode) {
      this.domNode.remove()
      this.domNode = null
      this.file = null
    }
  }

  operateFile(event, operate) {
    event.preventDefault()
    const fileId = this.file.dataset.id || ''
    const fileDownloadUrl = this.file.href
    if (fileId) {
      this.quill.emitter.emit('file-change', {
        operation: operate,
        data: { fileId, fileDownloadUrl },
      })
    }
    if(operate === 'download'){
      const a = document.createElement('a');
      a.href = fileDownloadUrl;
      a.target = '_blank';
      a.id='exppub';
      document.body.appendChild(a);
      const alink = document.getElementById('exppub');
      alink.click();
      alink.parentNode.removeChild(a);
    }
    this.destroy()
  }

  setPosition() {
    if (this.domNode && this.file) {
      const parent = this.quill.root.parentNode
      const child = this.file.querySelector('span')
      const containerRect = parent.getBoundingClientRect()
      const fileRect = child.getBoundingClientRect()
      this.css(this.domNode, {
        left: `${fileRect.left - containerRect.left}px`,
        top: `${fileRect.top - containerRect.top + 10}px`,
      })
    }
  }

  css(domNode, rules) {
    if (typeof rules === 'object') {
      for (const prop in rules) {
        if (prop) {
          if (Array.isArray(rules[prop])) {
            // 兼容IE11浏览器
            rules[prop].forEach((val) => {
              domNode.style[prop] = val
            })
          } else {
            domNode.style[prop] = rules[prop]
          }
        }
      }
    }
  }

  formatDate(timestamp) {
    const date = new Date(timestamp)
    const year = date.getFullYear()
    // TODO
    const month = unshiftString(`${date.getMonth() + 1}`, 2, '0');
    const day = unshiftString(`${date.getDate()}`, 2, '0');
    const hour = unshiftString(`${date.getHours()}`, 2, '0');
    const minute = unshiftString(`${date.getMinutes()}`, 2, '0');
    return isNaN(year) ? '--' : `${year}/${month}/${day} ${hour}:${minute}`
  }
}
