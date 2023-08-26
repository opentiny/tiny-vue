export const handleChange = (editor) => {
  return (event) => {
    const file = event.target.files[0]
    if (!file.type.match("image.*")) {
      console.log("请选择图片文件！")
      return
    }
    const reader = new FileReader()
    reader.onload = function (e) {
      editor.value.chain().focus().setImage({ src: e.target?.result }).run()
    }
    reader.readAsDataURL(file)
  }
}
export const setLink = (editor) => {
  return () => {
    const previousUrl = editor.value.getAttributes('link').href
    const url = window.prompt('URL', previousUrl)
    if (url === null) {
      return
    }
    if (url === '') {
      editor.value
        .chain()
        .focus()
        .extendMarkRange('link')
        .unsetLink()
        .run()
      return
    }
    editor.value
      .chain()
      .focus()
      .extendMarkRange('link')
      .setLink({ href: url })
      .run()
  }
}
// table 处理逻辑
export const handleMove = (state, box) => {
  return (e) => {
    let { x, y } = box.value.getBoundingClientRect()
    state.flagX = Math.ceil((e.x - x) / 30) // 后期改变30就可以
    state.flagY = Math.ceil((e.y - y) / 30)
  }
}
export const handleClickOutside = (state, box) => {
  return (e) => {
    if (!box.value?.contains(e.target)) {
      state.isShow = false
      removeClickOutside(state, box)()
    }
  }

}
export const removeClickOutside = (state, box) => {
  return () => {
    window.removeEventListener('click', handleClickOutside(state, box))
  }
}
export const handleClick = (state, box) => {
  return (e) => {
    e.stopPropagation();
    if (state.isShow) {
      if (state.flagX && state.flagY) {
        state.editor.chain().focus().insertTable({ rows: state.flagX, cols: state.flagY, withHeaderRow: true }).run()
      }
      state.flagX = 0
      state.flagY = 0
      removeClickOutside(state, box)()
    } else {
      window.addEventListener('click', handleClickOutside(state, box))
    }
    state.isShow = !state.isShow
  }
}
// bubble菜单
export const shouldShow = ({ editor, view, state, oldState, from, to }) => {
  // 仅在无序列表选中的时候才显示 气泡菜单
  return editor.isActive("table");
};
// font-size 设置
export const handleFontSize = (fontSize) => {
  return (value) => {
    console.log('123', value);

    fontSize.value = value + "px";
  }
}