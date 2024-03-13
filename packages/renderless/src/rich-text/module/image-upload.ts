import { xss } from '../../common/xss'

const ImageUpload = function (quill, options) {
  this.quill = quill
  this.options = options || {}
  this.quill.getModule('toolbar').addHandler('image', this.selectLocalImage.bind(this))
}

ImageUpload.prototype.selectLocalImage = function () {
  const input = document.createElement('input')
  input.setAttribute('type', 'file')
  input.click()
  input.onchange = function () {
    const file = input.files[0]
    if (/^image\//.test(file.type)) {
      const checkBeforeSend = this.options.checkBeforeSend || this.checkBeforeSend.bind(this)
      checkBeforeSend(file, this.sendToServer.bind(this))
    } else {
      throw new Error('You could only upload images.')
    }
  }.bind(this)
}

ImageUpload.prototype.checkBeforeSend = function (file, next) {
  next(file)
}

ImageUpload.prototype.sendToServer = function (file) {
  if (this.options.customUploader) {
    this.options.customUploader(
      file,
      function (dataUrl) {
        this.insert(dataUrl)
      }.bind(this)
    )
  } else {
    const url = xss.filterUrl(this.options.url)
    const method = this.options.method || 'POST'
    const name = this.options.name || 'image'
    const headers = this.options.headers || {}
    const callbackOK = this.options.success || this.uploadImageCallbackOK.bind(this)
    const callbackKO = this.options.fail || this.uploadImageCallbackKO.bind(this)

    if (url) {
      const fd = new FormData()

      fd.append(name, file)

      if (this.options.csrf) {
        fd.append(this.options.csrf.token, this.options.csrf.hash)
      }

      const xmlHttpRequest = new XMLHttpRequest()
      xmlHttpRequest.open(method, url, true)
      for (let index in headers) {
        xmlHttpRequest.setRequestHeader(index, headers[index])
      }

      xmlHttpRequest.onload = function () {
        if (xmlHttpRequest.status === 200 || xmlHttpRequest.status === 201) {
          callbackOK(JSON.parse(xmlHttpRequest.responseText), this.insert.bind(this))
        } else {
          callbackKO({
            code: xmlHttpRequest.status,
            type: xmlHttpRequest.statusText,
            body: xmlHttpRequest.responseText
          })
        }
      }.bind(this)

      if (this.options.withCredentials) {
        xmlHttpRequest.withCredentials = true
      }

      xmlHttpRequest.send(fd)
    } else {
      const reader = new FileReader()

      reader.onload = function (event) {
        callbackOK(event.target.result, this.insert.bind(this))
      }.bind(this)
      reader.readAsDataURL(file)
    }
  }
}

ImageUpload.prototype.insert = function (dataUrl) {
  const index = (this.quill.getSelection() || {}).index || this.quill.getLength()
  this.quill.insertEmbed(index, 'image', dataUrl, 'user')
  this.quill.setSelection(index + 1)
}

ImageUpload.prototype.uploadImageCallbackOK = function (response, next) {
  next(response)
}

ImageUpload.prototype.uploadImageCallbackKO = function (error) {
  throw new Error(error)
}

export default ImageUpload
