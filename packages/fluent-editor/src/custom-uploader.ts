import Quill from 'quill'

import {
  FILE_UPLOADER_MIME_TYPES,
  IMAGE_UPLOADER_MIME_TYPES,
} from './config/editor.config'

const Uploader = Quill.imports['modules/uploader']
const Delta = Quill.imports['delta']

class CustomUploader extends Uploader {
  quill
  options

  upload(range, files, isFile?) {
    const uploads = []
    const fileFlags = []
    const rejectFlags = {
      file: false,
      image: false,
    }
    const uploadOption = this.quill.options.uploadOption
    const acceptObj =
      (uploadOption && {
        image: uploadOption.imageAccept,
        file: uploadOption.fileAccept,
      }) ||
      {}
    Array.from(files).forEach((file: any) => {
      if (file) {
        const fileFlag =
          typeof isFile === 'boolean'
            ? isFile
            : !/^image\/[-\w.]+$/.test(file.type)
        const fileType = fileFlag ? 'file' : 'image'
        const accept = acceptObj[fileType] || this.options[fileType]
        if (this.isAllowedFileType(accept, file)) {
          uploads.push(file)
          fileFlags.push(fileFlag)
        } else {
          rejectFlags[fileType] = true
        }
      }
    })
    this.options.handler.call(this, range, uploads, fileFlags, rejectFlags)
  }

  isAllowedFileType = (accept: Array<string> | string, file: File) => {
    if (accept) {
      const baseMimeType = file.type.replace(/\/.*$/, '')
      const acceptArr = typeof accept === 'string' ? accept.split(',') : accept
      return acceptArr.some((type: string) => {
        const validType = type.trim()
        //  suffix name (e.g. '.png,.xlsx')
        if (validType.startsWith('.')) {
          return (
            file.name
              .toLowerCase()
              .indexOf(
                validType.toLowerCase(),
                file.name.toLowerCase().length - validType.toLowerCase().length
              ) > -1
          )
          // mime type like 'image/*'
        } else if (/\/\*$/.test(validType)) {
          return baseMimeType === validType.replace(/\/.*$/, '')
        }
        //  mime type like 'text/plain,application/json'
        return file.type === validType
      })
    }
    return true
  }

  // 处理上传文件
  handleUploadFile(range, files, hasRejectedFile) {
    const fileEnableMultiUpload = this.enableMultiUpload === true || this.enableMultiUpload['file']
    const target = this.editorElem.parentElement.querySelector('.ql-file')

    this.fileChange.emit({
      operation: 'upload',
      data: fileEnableMultiUpload ? { files } : { file: files[0] },
      hasRejectedFile: hasRejectedFile,
      callback: (res) => {
        if (!res) {
          return
        }
        if (fileEnableMultiUpload && Array.isArray(res)) {
          res.forEach((value, index) => this.insertFileToEditor(range, files[index], value))
        } else {
          this.insertFileToEditor(range, files[0], res)
        }
      },
    })
  }

  // 处理上传图片
  handleUploadImage(range, { file, files }, hasRejectedImage) {
    if (this.imageUploadToServer) {
      const imageEnableMultiUpload = this.enableMultiUpload === true || this.enableMultiUpload['image']
      const target = this.editorElem.parentElement.querySelector('.ql-image')

      const result = {
        file,
        data: { files: [file] },
        hasRejectedImage: hasRejectedImage,
        callback: (res) => {
          if (!res) {
            return
          }
          if (imageEnableMultiUpload && Array.isArray(res)) {
            res.forEach((value) => this.insertImageToEditor(range, value))
          } else {
            this.insertImageToEditor(range, res)
          }
        },
      }
      if (imageEnableMultiUpload) {
        result['data'] = { files }
      }
      this.imageUpload.emit(result)
    } else {
      const promises = files.map((fileItem) => {
        return new Promise((resolve) => {
          const reader = new FileReader()
          reader.onload = (e: any) => {
            resolve(e.target.result)
          }
          reader.readAsDataURL(fileItem)
        })
      })
      Promise.all(promises).then((images) => {
        const update = images.reduce((delta: any, image) => {
          return delta.insert({ image })
        }, new Delta().retain(range.index).delete(range.length))

        this.quill.updateContents(update, Quill.sources.USER)
        this.quill.setSelection(range.index + images.length, Quill.sources.SILENT)
      })
    }
  }
}

CustomUploader.DEFAULTS = {
  file: FILE_UPLOADER_MIME_TYPES,
  image: IMAGE_UPLOADER_MIME_TYPES,
  enableMultiUpload: false,
  handler(range, files, fileFlags, rejectFlags) {
    const fileArr = []
    const imgArr = []
    files.forEach((file, index) => (fileFlags[index] ? fileArr.push(file) : imgArr.push(file)))
    if (this.quill.file && (fileArr.length || rejectFlags.file)) {
      this.handleUploadFile(range, fileArr, rejectFlags.file)
    }
    if (imgArr.length || rejectFlags.image) {
      this.handleUploadImage(range, { file: imgArr[0], files: imgArr }, rejectFlags.image)
    }
  },
}

export default CustomUploader
