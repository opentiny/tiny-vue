# 使用文档

## 引入

```js
import TinyTiptap from '@opentiny/tiny-tiptap'
```

## 初始化实例

```js
new TinyTiptap(editorClass, options, viewMap, viewRender)
```

## 参数配置

### TinyTiptap

| 名称         | 类型   | 默认值 | 说明                                                                |
| ------------ | ------ | ------ | ------------------------------------------------------------------- |
| editorClass  | Editor | Editor | 根据使用环境传递的 Editor 类，默认值为 Tiptap 的 core 包中的 Editor |
| options      | Object | {}     | 参见 Tiptap 扩展说明                                                |
| viewOptions  | Object | {}     | viewMap 与 menuMap                                                  |
| otherOptions | Object | {}     | 包括其他的一些配置比如 placeholder 待后续补充                       |

#### viewMap

Map 类型，主要包括 key(扩展名) -> view(视图) 的映射

#### menuMap

| 名称      | 类型   | 默认值 | 说明                         |
| --------- | ------ | ------ | ---------------------------- |
| renderer  | Object | -      | 根据使用环境传递的视图渲染器 |
| slashView | View   | {}     | 定制化的斜杠菜单视图         |

## 使用示例

```js
import { VueNodeViewRenderer, VueRenderer } from '@tiptap/vue'
import ImageView from './components/image-view.vue'

// 设置扩展到视图的映射
const viewMap = new Map([['image', VueNodeViewRenderer(ImageView)]])
const menuMap = {
  renderer: VueRenderer,
  slashView
}

const viewOptions = {
  viewMap,
  menuMap
}

const otherOptions = {
  placeholder: '自定义占位符'
}

const editorInstance = new TinyTiptap(Editor, options, viewOptions, otherOptions)
```
