# FluentEditor 富文本编辑器

FluentEditor 是一个基于 Quill 2.0 的富文本编辑器，在 Quill 基础上扩展了表格、图片、超链接、复制粘贴、插入表情、文件上传、@提醒、斜杆菜单等丰富的模块和格式，框架无关、兼容 Quill API、兼容 Quill 模块生态。

## 项目优势

FluentEditor 主要有以下特点和优势：

* 包含30多种丰富的模块和格式，除了 Quill 内置的21种格式之外，还扩展和增强了表格、图片、超链接、字数统计、表情、文件上传、复制粘贴、@提醒、斜杆快捷菜单、截图等15种模块和格式
* 强大的表格功能，支持在工具栏插入指定行列的表格、表格行高/列宽拖拽、插入行/列、删除行/列、合并/拆分单元格等丰富的表格操作
* 与框架无关，可以在 Vue、React、Angular 等多种框架中使用
* 兼容 Quill 所有 API，兼容 Quill 生态模块和格式

## 快速入门

安装 FluentEditor：

```shell
npm i @opentiny/fluent-editor
```

编写html：

```html
<div id="editor">
  <p>Hello FluentEditor!</p>
</div>
```

引入样式：

```css
@import '@opentiny/fluent-editor/dist/style.css'
```

初始化 FluentEditor 编辑器：

```javascript
import FluentEditor from '@opentiny/fluent-editor'

const editor = new FluentEditor('#editor', {
  theme: 'snow'
})
```

## ❤️ 致谢

感谢：

- [quill](https://github.com/slab/quill) 项目，它是一款API驱动的富文本编辑器，采用模块化架构，可扩展性好，易于使用，支持跨平台，FluentEditor 基于 Quill 扩展和增强了表格、图片、超链接等大量模块和格式。
- [quill-better-table](https://github.com/soccerloway/quill-better-table) 项目，它增强了 Quill 内置表格模块，增加了丰富的功能，FluentEditor 的表格操作功能基于 quill-better-table。
- [quill-emoji](https://github.com/contentco/quill-emoji) 项目，它是一个用于表情符号的 Quill 模块，FluentEditor 的插入表情功能基于 quill-emoji。
- [quill-blot-formatter](https://github.com/Fandom-OSS/quill-blot-formatter) 项目，它是一个用于调整图像和视频大小的 Quill 模块，FluentEditor 的图片缩放功能基于 quill-blot-formatter。
