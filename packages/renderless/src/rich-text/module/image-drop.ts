const ImageDrop = function (quill) {
  this.quill = quill
  this.handleDrop = this.handleDrop.bind(this)
  this.handlePaste = this.handlePaste.bind(this)
  this.quill.root.addEventListener('drop', this.handleDrop, false)
  this.quill.root.addEventListener('paste', this.handlePaste, false)
}

ImageDrop.prototype.handleDrop = function (event) {
  event.preventDefault()
  if (event.dataTransfer && event.dataTransfer.files && event.dataTransfer.files.length) {
    if (document.caretRangeFromPoint) {
      const selection = document.getSelection()
      const range = document.caretRangeFromPoint(event.clientX, event.clientY)
      if (selection && range) {
        selection.setBaseAndExtent(range.startContainer, range.startOffset, range.startContainer, range.startOffset)
      }
    }
    this.readFiles(event.dataTransfer.files, this.insert.bind(this))
  }
}

ImageDrop.prototype.handlePaste = function (e) {
  if (e.clipboardData && e.clipboardData.items && e.clipboardData.items.length) {
    this.readFiles(
      e.clipboardData.items,
      function (dataUrl) {
        const selection = this.quill.getSelection()
        if (!selection) {
          setTimeout(
            function () {
              this.insert(dataUrl)
            }.bind(this),
            0
          )
        }
      }.bind(this)
    )
  }
}

ImageDrop.prototype.insert = function (dataUrl) {
  const index = (this.quill.getSelection() || {}).index || this.quill.getLength()
  this.quill.insertEmbed(index, 'image', dataUrl, 'user')
}

ImageDrop.prototype.readFiles = function (files, callback) {
  ;[].forEach.call(files, function (file) {
    if (!file.type.match(/^image\/(gif|jpe?g|a?png|svg|webp|bmp|vnd\.microsoft\.icon)/i)) {
      return
    }
    const reader = new FileReader()
    reader.onload = function (e) {
      callback(e.target.result)
    }
    const blob = file.getAsFile ? file.getAsFile() : file
    if (blob instanceof Blob) {
      reader.readAsDataURL(blob)
    }
  })
}

export default ImageDrop
