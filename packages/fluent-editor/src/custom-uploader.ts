import Quill from 'quill'

import {
  FILE_UPLOADER_MIME_TYPES,
  IMAGE_UPLOADER_MIME_TYPES,
} from './config/editor.config'

const Uploader = Quill.imports['modules/uploader']

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
}

Uploader.DEFAULTS = {
  file: FILE_UPLOADER_MIME_TYPES,
  image: IMAGE_UPLOADER_MIME_TYPES,
  enableMultiUpload: false,
  handler() {},
}

export default CustomUploader
