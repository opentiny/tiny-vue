/** 文档显示风格设置 */
const getStyleSettings = (i18nByKey) => {
  const styleSettings = [
    {
      // 语言选择
      name: 'localeMode',
      defaultValue: 'zhCN',
      title: i18nByKey('localeType'),
      options: [
        {
          value: 'zhCN',
          text: i18nByKey('zh-cn')
        },
        {
          value: 'enUS',
          text: i18nByKey('en-us')
        }
      ]
    },
    {
      // 示例代码风格
      name: 'apiMode',
      defaultValue: 'Options',
      title: i18nByKey('apiType'),
      options: [
        {
          value: 'Options',
          text: i18nByKey('apiStyleOptions')
        },
        {
          value: 'Composition',
          text: i18nByKey('apiStyleComposition')
        }
      ]
    },
    {
      // 多/单示例
      name: 'demoMode',
      defaultValue: 'default',
      title: i18nByKey('demoMode'),
      options: [
        {
          // 多选（默认）
          value: 'default',
          text: i18nByKey('demoModeMultiple')
        },
        {
          value: 'single',
          text: i18nByKey('demoModeSingle')
        }
      ]
    }
  ]

  return styleSettings
}

export default function useStyleSettings() {
  return {
    getStyleSettings
  }
}
