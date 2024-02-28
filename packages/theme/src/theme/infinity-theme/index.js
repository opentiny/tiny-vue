/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */

// 基础变量
export const tinyBaseInfinityTheme = {
  'ti-base-color-transparent': 'transparent', // 透明色

  // 品牌主色
  'ti-base-color-brand-6': '#5e7ce0', // 主色蓝
  'ti-base-color-brand-2': '#e9edfa', // 品牌色-2

  /* 1.4 功能色 */
  'ti-base-color-error-3': '#f66f6a', // 错误-3
  'ti-base-color-error-1': '#ffd5d4', // 错误-1

  'ti-base-color-success-3': '#50d4ab', // 成功-3
  'ti-base-color-success-1': '#cffcee', // 成功-1

  // 告警色
  'ti-base-color-warn-4': '#fa9841', // 告警-4
  'ti-base-color-warn-1': '#ffe1c7', // 告警-1

  'ti-common-border-radius-normal': 'var(--ti-common-border-radius-1)',
  'ti-common-font-size-base': 'var(--ti-common-font-size-1)',
  'ti-common-color-line-dividing': '#f2f2f3',
  'ti-common-color-warning-normal': '#fac20a',
  'ti-common-color-warning-hover': '#ffd138',
  'ti-common-color-warning-active': '#ffd138',
  'ti-common-color-danger-normal': '#c7000b',
  'ti-common-color-danger-hover': '#d64a52',
  'ti-common-color-danger-active': '#d64a52',
  'ti-common-color-success-normal': '#50d4ab',
  'ti-common-color-success-hover': '#6ddebb',
  'ti-common-color-success-active': '#6ddebb',
  'ti-common-color-info-normal': '#252b3a',
  'ti-common-color-info-hover': '#575d5c',
  'ti-common-color-info-active': '#575d5c',
  'ti-common-color-border': '#d7d8da',
  'ti-base-color-brand-5': '#526ecc',
  'ti-common-size-height-normal': '32px',
  'ti-common-shadow-2-down': '0 4px 8px 0 rgba(37,43,58,.2)',
  'ti-common-color-hover-background': '#f2f2f3',
  'ti-common-color-selected-background': '#f2f5fc',
  'ti-common-dropdown-gap': '8px',
  'ti-common-color-bg-disabled': '#f5f5f5',

  /**
   * 12.28 尺寸
   **/
  'ti-common-size-base': '4px', // 基础尺寸
  'ti-common-size-2x': 'calc(var(--ti-common-size-base) * 2)', // 尺寸-2
  'ti-common-size-3x': 'calc(var(--ti-common-size-base) * 3)', // 尺寸-3
  'ti-common-size-4x': 'calc(var(--ti-common-size-base) * 4)', // 尺寸-4
  'ti-common-size-5x': 'calc(var(--ti-common-size-base) * 5)', // 尺寸-5
  'ti-common-size-6x': 'calc(var(--ti-common-size-base) * 6)', // 尺寸-6
  'ti-common-size-7x': 'calc(var(--ti-common-size-base) * 7)', // 尺寸-7
  'ti-common-size-8x': 'calc(var(--ti-common-size-base) * 8)', // 尺寸-8
  'ti-common-size-9x': 'calc(var(--ti-common-size-base) * 9)', // 尺寸-9
  'ti-common-size-10x': 'calc(var(--ti-common-size-base) * 10)', // 尺寸-10
  'ti-common-size-11x': 'calc(var(--ti-common-size-base) * 11)', // 尺寸-11
  'ti-common-size-12x': 'calc(var(--ti-common-size-base) * 12)', // 尺寸-12
  'ti-common-size-13x': 'calc(var(--ti-common-size-base) * 13)', // 尺寸-13
  'ti-common-size-14x': 'calc(var(--ti-common-size-base) * 14)', // 尺寸-14
  'ti-common-size-15x': 'calc(var(--ti-common-size-base) * 15)', // 尺寸-15
  'ti-common-size-16x': 'calc(var(--ti-common-size-base) * 16)', // 尺寸-16
  'ti-common-size-17x': 'calc(var(--ti-common-size-base) * 17)', // 尺寸-17
  'ti-common-size-18x': 'calc(var(--ti-common-size-base) * 18)', // 尺寸-18
  'ti-common-size-19x': 'calc(var(--ti-common-size-base) * 19)', // 尺寸-19
  'ti-common-size-20x': 'calc(var(--ti-common-size-base) * 20)', // 尺寸-20
  'ti-common-size-21x': 'calc(var(--ti-common-size-base) * 21)', // 尺寸-21
  'ti-common-size-22x': 'calc(var(--ti-common-size-base) * 22)', // 尺寸-22
  'ti-common-size-23x': 'calc(var(--ti-common-size-base) * 23)', // 尺寸-23
  'ti-common-size-24x': 'calc(var(--ti-common-size-base) * 24)', // 尺寸-24
  'ti-common-size-25x': 'calc(var(--ti-common-size-base) * 25)', // 尺寸-25
  'ti-common-size-26x': 'calc(var(--ti-common-size-base) * 26)', // 尺寸-26
  'ti-common-size-27x': 'calc(var(--ti-common-size-base) * 27)', // 尺寸-27
  'ti-common-size-28x': 'calc(var(--ti-common-size-base) * 28)', // 尺寸-28
  'ti-common-size-29x': 'calc(var(--ti-common-size-base) * 29)', // 尺寸-29
  'ti-common-size-30x': 'calc(var(--ti-common-size-base) * 30)', // 尺寸-30
  'ti-common-size-31x': 'calc(var(--ti-common-size-base) * 31)', // 尺寸-31
  'ti-common-size-32x': 'calc(var(--ti-common-size-base) * 32)', // 尺寸-32
  'ti-common-size-33x': 'calc(var(--ti-common-size-base) * 33)', // 尺寸-33
  'ti-common-size-34x': 'calc(var(--ti-common-size-base) * 34)', // 尺寸-34
  'ti-common-size-35x': 'calc(var(--ti-common-size-base) * 35)', // 尺寸-35
  'ti-common-size-36x': 'calc(var(--ti-common-size-base) * 36)', // 尺寸-36
  'ti-common-size-37x': 'calc(var(--ti-common-size-base) * 37)', // 尺寸-37
  'ti-common-size-38x': 'calc(var(--ti-common-size-base) * 38)', // 尺寸-38
  'ti-common-size-39x': 'calc(var(--ti-common-size-base) * 39)', // 尺寸-39
  'ti-common-size-40x': 'calc(var(--ti-common-size-base) * 40)', // 尺寸-40
  'ti-common-size-41x': 'calc(var(--ti-common-size-base) * 41)', // 尺寸-41
  'ti-common-size-42x': 'calc(var(--ti-common-size-base) * 42)', // 尺寸-42
  'ti-common-size-43x': 'calc(var(--ti-common-size-base) * 43)', // 尺寸-43
  'ti-common-size-44x': 'calc(var(--ti-common-size-base) * 44)', // 尺寸-44
  'ti-common-size-45x': 'calc(var(--ti-common-size-base) * 45)', // 尺寸-45
  'ti-common-size-46x': 'calc(var(--ti-common-size-base) * 46)', // 尺寸-46
  'ti-common-size-47x': 'calc(var(--ti-common-size-base) * 47)', // 尺寸-47
  'ti-common-size-48x': 'calc(var(--ti-common-size-base) * 48)', // 尺寸-48
  'ti-common-size-49x': 'calc(var(--ti-common-size-base) * 49)', // 尺寸-49
  'ti-common-size-50x': 'calc(var(--ti-common-size-base) * 50)', // 尺寸-50

  /*  其他尺寸 */
  'ti-common-size-0': '0px', // 其他尺寸-1
  'ti-common-size-auto': 'auto', // 其他尺寸-2
  'ti-common-size-3': '3px', // 基础尺寸

  /**
   * 2.12 字号
   **/
  'ti-common-font-size-1': '14px', // NewCssVar 标题-小
  'ti-common-font-size-2': '16px', // NewCssVar 标题-中
  'ti-common-font-size-3': '18px', // NewCssVar 标题-大
  'ti-common-font-size-4': '20px', // NewCssVar 字号-4
  'ti-common-font-size-5': '24px', // NewCssVar 字号-5
  'ti-common-font-size-6': '32px', // NewCssVar 字号-6
  'ti-common-font-size-7': '36px', // NewCssVar 字号-7

  // 行高
  'ti-common-line-height-4': '22px', // NewCssVar

  /**
   * 2.1 基础色
   **/
  'ti-common-color-transparent': 'var(--ti-base-color-transparent)',

  /* 浅底背景状态色 */
  'ti-common-color-bg-light-normal': 'var(--ti-base-color-brand-2)',

  /**
   * 2.3 交互类型颜色
   **/
  'ti-common-color-primary-normal': 'var(--ti-base-color-brand-6)', // NewCssVar

  /**
   * 2.2 提示类型颜色
   * 用于 alert组件、Modal（message）组件、Tag 标签组件、Notify 通知组件涉及功能提示的背景、文字、图标等的颜色使用
   **/
  'ti-common-color-error': 'var(--ti-base-color-error-3)', // 错误-图标色/状态图标-危险、错误、失败/深色Tip中的价格文本
  'ti-common-color-error-bg': 'var(--ti-base-color-error-1)', // 错误-背景色/校验背景色

  'ti-common-color-success': 'var(--ti-base-color-success-3)', // 成功-图标色/状态图标-成功
  'ti-common-color-success-bg': 'var(--ti-base-color-success-1)', // 成功-背景色

  'ti-common-color-warn': 'var(--ti-base-color-warn-4)', // 告警-图标色/状态图标-警告
  'ti-common-color-warn-bg': 'var(--ti-base-color-warn-1)' // 告警-背景色
}

export * from './component-vars.js'
