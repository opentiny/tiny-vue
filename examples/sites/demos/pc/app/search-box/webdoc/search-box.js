export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基础用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': ' 通过 items 配置搜索数据项。 ',
        'en-US': ' Configure search data items through  items . '
      },
      codeFiles: ['basic-usage.vue', 'data-source.ts']
    },
    {
      demoId: 'panel-max-height',
      name: {
        'zh-CN': '面板最大高度',
        'en-US': 'Maximum panel height'
      },
      desc: {
        'zh-CN': ' 通过 panel-max-height 配置下拉面板最大高度。 ',
        'en-US': ' Set  panel-max-height  to configure the maximum height of the drop-down list box. '
      },
      codeFiles: ['panel-max-height.vue', 'data-source.ts']
    },
    {
      demoId: 'split-input-value',
      name: {
        'zh-CN': '切分输入值',
        'en-US': 'Segmentation Input Value'
      },
      desc: {
        'zh-CN': ` 通过 split-input-value='|' 将输入值按字符 | 分成多个关键字，一次性输入生成多个标签，默认 , 分隔。 `,
        'en-US': ` Use  split-input-value='|'  to split the input value into multiple keywords by  | . Multiple tags are generated for one input. By default,  ,  is used to separate multiple keywords. `
      },
      codeFiles: ['split-input-value.vue', 'data-source.ts']
    },
    {
      demoId: 'default-field',
      name: {
        'zh-CN': '自定义默认搜索项',
        'en-US': 'Customizing Default Search Terms'
      },
      desc: {
        'zh-CN': ' 通过  default-field  配置按照可用地区进行搜索。 ',
        'en-US': ' Set  default-field  to search by available region. '
      },
      codeFiles: ['default-field.vue', 'data-source.ts']
    },
    {
      demoId: 'v-model',
      name: {
        'zh-CN': '默认包含筛选项',
        'en-US': 'Filter Items Are Included By Default'
      },
      desc: {
        'zh-CN': ' 通过 model-value 配置默认选中标签项。 ',
        'en-US': ' Use  model-value  to configure the default selected label item. '
      },
      codeFiles: ['v-model.vue', 'data-source.ts']
    },
    {
      demoId: 'empty-placeholder',
      name: {
        'zh-CN': '没有筛选项时的占位文本',
        'en-US': 'Placeholder Text When There Are No Filters.'
      },
      desc: {
        'zh-CN': ' 通过 empty-placeholder 配置筛选项为空时占位文本。 ',
        'en-US': ' Use  empty-placeholder  to configure the placeholder text when the filter item is empty. '
      },
      codeFiles: ['empty-placeholder.vue', 'data-source.ts']
    },
    {
      demoId: 'id-map-key',
      name: {
        'zh-CN': '指定筛选项的ID键取值',
        'en-US': 'Specifies the ID key value of a filtering item'
      },
      desc: {
        'zh-CN': ` 通过 id-map-key 配置用来识别筛选项的 id 键取值来源，默认取自 items 的 id 键，
                一般用于接口返回的 items 数据字段不匹配，但是又需要其中一个键值来识别筛选项的情况。 `,
        'en-US': ` Use  id-map-key  to configure the value source of the  id  key used to identify screening items. The default value is the  id  key of  items . 
                Generally, the  items  data field returned by the interface does not match, but a key value is required to identify the filtering item. `
      },
      codeFiles: ['id-map-key.vue']
    },
    {
      demoId: 'potential-options',
      name: {
        'zh-CN': '潜在匹配项',
        'en-US': 'Potential Match'
      },
      desc: {
        'zh-CN': ' 通过 potential-options 配置潜在匹配项。 ',
        'en-US': ' Use  potential-options  to configure potential matches. '
      },
      codeFiles: ['potential-match.vue', 'data-source.ts']
    },
    {
      demoId: 'group-key',
      name: {
        'zh-CN': '自定义属性分组',
        'en-US': 'User-defined attribute group'
      },
      desc: {
        'zh-CN': ' 通过  item.groupKey   自定义一级下拉框属性分组。 ',
        'en-US': '  '
      },
      codeFiles: ['group-key.vue', 'group-key-data.ts']
    },
    {
      demoId: 'help',
      name: {
        'zh-CN': 'help 提示场景',
        'en-US': 'Help Prompt Scenario'
      },
      desc: {
        'zh-CN': ' 通过 show-help 控制帮助图标显隐，使用 help 事件回调自定义弹窗提示内容。 ',
        'en-US':
          ' Use  show-help  to show or hide the help icon, and use the  help  event callback to customize the pop-up window content. '
      },
      codeFiles: ['help.vue', 'data-source.ts']
    },
    {
      demoId: 'editable',
      name: {
        'zh-CN': '可编辑',
        'en-US': 'Editable'
      },
      desc: {
        'zh-CN': ' 标签支持可编辑功能，通过  editable   打开编辑功能，（注：map 类型不支持编辑）。 ',
        'en-US': ' Tags can be edited. To edit a tag, enter  editable  . Tags of the map type cannot be edited. '
      },
      codeFiles: ['editable.vue', 'editable-data.ts']
    },
    {
      demoId: 'item-placeholder',
      name: {
        'zh-CN': '数据项占位文本',
        'en-US': 'Data Item Placeholder Text'
      },
      desc: {
        'zh-CN': ' 通过   item.placeholder  设置占位文本，  item.editAttrDisabled  设置编辑状态下此属性类型不可切换。 ',
        'en-US':
          ' Set the placeholder text through   item.placeholder  ,   item.editAttrDisabled   This attribute type cannot be switched in the editing state. '
      },
      codeFiles: ['item-placeholder.vue', 'data-source.ts']
    },
    {
      demoId: 'auto-match',
      name: {
        'zh-CN': '自动匹配',
        'en-US': 'Automatic Matching'
      },
      desc: {
        'zh-CN':
          ' 内置自动匹配功能，通过 :show-no-data-tip="false" 隐藏面板的无数据提示，通过 search 监听搜索事件， change 监听搜索值变化事件。 ',
        'en-US':
          ' Built-in auto-matching function. No Data Prompt for Hiding Panels via  :show-no-data-tip="false" . Use  search  to listen to search events and  change  to listen to search value change events. '
      },
      codeFiles: ['auto-match.vue', 'data-source.ts']
    },
    {
      demoId: 'merge-tag',
      name: {
        'zh-CN': '合并多选标签',
        'en-US': 'Merge Multiple Selection Labels'
      },
      desc: {
        'zh-CN': ' 通过  mergeTag   合并多选标签，（注：仅多选标签支持合并功能）。 ',
        'en-US': ' Use   mergeTag   to merge multiple tags. (Note: Only multiple tags can be merged.) '
      },
      codeFiles: ['merge-tag.vue']
    },
    {
      demoId: 'max-length',
      name: {
        'zh-CN': '输入长度限制',
        'en-US': 'Input Length Limit'
      },
      desc: {
        'zh-CN': ' 通过  maxlength   原生属性限制输入不超过8个字符长度，配合  exceed  监听输入超出限定长度的事件。 ',
        'en-US':
          ' The   maxlength   native attribute is used to restrict the input to a maximum of eight characters. This attribute is used together with   exceed   to listen to the event that the input exceeds the specified length. '
      },
      codeFiles: ['max-length.vue']
    },
    {
      demoId: 'max-time-length',
      name: {
        'zh-CN': '时间长度限制',
        'en-US': 'Time Length Limit'
      },
      desc: {
        'zh-CN':
          ' 通过  maxTimeLength   传入某段时间的值（毫秒数），来限制可选择的时间跨度，常用于防止请求时间跨度过大的情形。 ',
        'en-US':
          ' Use   maxTimeLength   to pass in the value (in milliseconds) of a time period to limit the time span that can be selected. This is often used to prevent the request time span from being too large. '
      },
      codeFiles: ['max-time-length.vue']
    },
    {
      demoId: 'custom-panel',
      name: {
        'zh-CN': '自定义二级下拉面板',
        'en-US': 'Customizing the Level-2 Drop-down Panel'
      },
      desc: {
        'zh-CN':
          " 通过  item.type = 'custom'   开启自定义二级下拉面板功能，并在 item.slotName  自定义对应的二级面板插槽名，对应的编辑态自定义面板插槽名为 `${item.slotName}-edit` 。 ",
        'en-US':
          " Use  item.type = 'custom'  to enable the function of customizing the level-2 drop-down panel and customize the slot name of the level-2 panel in  item.slotName . The slot name of the corresponding customized panel in editing state is  `${item.slotName}-edit` . "
      },
      codeFiles: ['custom-panel.vue']
    },
    {
      demoId: 'events',
      name: {
        'zh-CN': '事件',
        'en-US': 'Events'
      },
      desc: {
        'zh-CN': ' 通过  first-level-select   监听第一层级选择事件。 ',
        'en-US': ' Listen to the first-level selection event through   first-level-select  . '
      },
      codeFiles: ['events.vue']
    }
  ]
}
