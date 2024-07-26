// 注意，删除了useFor属性
// title,label增加英文版，以应对将来的国际化功能
export const standaloneMenus = [
  {
    label: '组件总览',
    key: 'overview',
  },
];

export const docMenus = [
  {
    label: '使用指南',
    labelEn: 'Guide', //* **********
    key: 'doc_use',
    children: [
      {
        title: '背景简介',
        titleEn: 'Introduce',
        key: 'introduce',
      },
    ],
  },
];

// -------------------------------------------------------------------
export const cmpMenus = [
  {
    label: '表单选择',
    labelEn: 'Form Selection',
    key: 'cmp_formselect',
    children: [{ name: 'Button', nameCn: '按钮', key: 'button' }],
  },
  {
    label: '提示组件',
    labelEn: 'Tips Components',
    key: 'cmp_tips_components',
    children: [{ nameCn: '警告', name: 'Alert', key: 'alert' }],
  },
  {
    label: '框架风格',
    labelEn: 'Frame Style',
    key: 'cmp_frame_style',
    children: [{ nameCn: 'Layout 布局', name: 'Layout', key: 'layout' }],
  },
];
