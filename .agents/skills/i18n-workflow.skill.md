# TinyVue 国际化工作流

## 适用场景

- 为新组件添加多语言支持
- 翻译现有组件的文案
- 新增支持的语言包
- 统一术语翻译

## 核心原则

### 1. 语言文件结构

TinyVue 使用基于 key-value 的多语言系统：

```
packages/vue-locale/src/lang/
├── zh-CN.ts          # 简体中文
├── en-US.ts          # 英文（美国）
├── ja-JP.ts          # 日文
└── ...
```

每个语言文件结构：

```typescript
// packages/vue-locale/src/lang/zh-CN.ts

export default {
  ui: {
    // 组件名称小写
    button: {
      confirm: '确定',
      cancel: '取消'
    },
    input: {
      placeholder: '请输入',
      clear: '清空',
      more: '更多',
      detail: '详情',
      close: '关闭'
    }
  }
}
```

### 2. 命名规范

**Key 命名规则：**

- 使用 `camelCase`
- 按组件分组：`ui.<component>.<key>`
- 保持语义清晰，避免缩写

**示例：**

```typescript
// ✅ 正确
ui.datePicker.confirm
ui.grid.selectAll
ui.input.clear

// ❌ 错误
ui.dp.ok
ui.g.sel_all
ui.input.clr
```

### 3. 翻译一致性

同一概念在不同组件中使用相同翻译：

| 中文     | 英文      | 使用场景         |
| -------- | --------- | ---------------- |
| 确定     | Confirm   | 对话框、确认操作 |
| 取消     | Cancel    | 对话框、取消操作 |
| 保存     | Save      | 表单提交         |
| 删除     | Delete    | 删除操作         |
| 编辑     | Edit      | 编辑操作         |
| 搜索     | Search    | 搜索功能         |
| 重置     | Reset     | 重置表单         |
| 加载更多 | Load More | 分页加载         |

## 标准流程

### 步骤 1：在组件中使用国际化

#### Renderless 层

```typescript
// packages/renderless/src/my-component/index.ts

import { t } from '@opentiny/vue-locale'

export const api = ({ state, props }) => {
  return {
    getPlaceholder: () => {
      return props.placeholder || t('ui.myComponent.placeholder')
    }
  }
}
```

#### Vue 视图层

```vue
<!-- packages/vue/src/my-component/src/mobile-first.vue -->

<script lang="ts">
import { useLocale } from '@opentiny/vue-locale'

export default defineComponent({
  setup() {
    const { t } = useLocale()

    return {
      t
    }
  }
})
</script>

<template>
  <input :placeholder="t('ui.myComponent.placeholder')" />
  <button>{{ t('ui.myComponent.confirm') }}</button>
</template>
```

### 步骤 2：添加语言包条目

#### 中文（zh-CN.ts）

```typescript
// packages/vue-locale/src/lang/zh-CN.ts

export default {
  ui: {
    myComponent: {
      placeholder: '请输入内容',
      confirm: '确定',
      cancel: '取消',
      clear: '清空',
      noData: '暂无数据',
      loading: '加载中...',
      error: '加载失败，请重试'
    }
  }
}
```

#### 英文（en-US.ts）

```typescript
// packages/vue-locale/src/lang/en-US.ts

export default {
  ui: {
    myComponent: {
      placeholder: 'Please enter content',
      confirm: 'Confirm',
      cancel: 'Cancel',
      clear: 'Clear',
      noData: 'No data available',
      loading: 'Loading...',
      error: 'Failed to load, please try again'
    }
  }
}
```

### 步骤 3：验证翻译完整性

确保所有语言包包含相同的 key：

```bash
# 运行检查脚本（如果有的话）
pnpm check:i18n

# 或手动对比
diff packages/vue-locale/src/lang/zh-CN.ts packages/vue-locale/src/lang/en-US.ts
```

## 代码示例

### 动态文本插值

```typescript
// 带参数的翻译
t('ui.pagination.total', { total: 100 })

// 语言文件中定义
pagination: {
  total: '共 {total} 条' // zh-CN
  total: 'Total {total} items' // en-US
}
```

### 条件翻译

```vue
<template>
  <span>{{
    state.count === 0 ? t('ui.myComponent.noItems') : t('ui.myComponent.itemsCount', { count: state.count })
  }}</span>
</template>
```

### 完整组件示例

```typescript
// packages/renderless/src/pagination/index.ts

import { t } from '@opentiny/vue-locale'

export const api = ({ state, props }) => {
  return {
    getTotalText: () => {
      return t('ui.pagination.total', { total: state.total })
    },

    getJumpText: () => {
      return t('ui.pagination.jumpTo')
    },

    getPageText: (page: number) => {
      return t('ui.pagination.page', { page })
    }
  }
}
```

```vue
<!-- packages/vue/src/pagination/src/mobile-first.vue -->

<template>
  <div class="tiny-pagination">
    <span>{{ getTotalText() }}</span>
    <button @click="prev">{{ t('ui.pagination.prev') }}</button>
    <button @click="next">{{ t('ui.pagination.next') }}</button>
    <span>{{ getJumpText() }} <input v-model="jumpPage" /></span>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/pagination/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { useLocale } from '@opentiny/vue-locale'

export default defineComponent({
  name: 'TinyPagination',
  props: [...props, 'total', 'pageSize'],
  emits: ['update:currentPage', 'change'],
  setup(props, context) {
    const { t } = useLocale()
    const renderlessResult = setup({ props, context, renderless, api })

    return {
      ...renderlessResult,
      t
    }
  }
})
</script>
```

## 常见陷阱

### ❌ 错误做法

1. **硬编码文本**

```vue
<!-- ❌ 错误 -->
<button>确定</button>

<!-- ✅ 正确 -->
<button>{{ t('ui.button.confirm') }}</button>
```

2. **拼接翻译字符串**

```typescript
// ❌ 错误
const text = t('ui.msg.prefix') + ' ' + value + ' ' + t('ui.msg.suffix')

// ✅ 正确
const text = t('ui.msg.complete', { value })
// 语言文件：complete: '{value} 已成功处理'
```

3. **遗漏某些语言包**

```typescript
// ❌ 错误 - 只添加了中文
// zh-CN.ts
myComponent: {
  label: '标签'
}

// en-US.ts - 忘记添加
// myComponent: { label: 'Label' }  ← 缺失

// ✅ 正确 - 同时更新所有语言包
```

4. **翻译不一致**

```typescript
// ❌ 错误 - 不同组件用不同翻译
// button.ts: confirm: '确定'
// dialog.ts: ok: '确认'

// ✅ 正确 - 统一使用
// button.ts: confirm: '确定'
// dialog.ts: confirm: '确定'
```

### ✅ 最佳实践

1. **使用常量管理 Key**

```typescript
// packages/vue-locale/src/keys.ts

export const I18N_KEYS = {
  BUTTON_CONFIRM: 'ui.button.confirm',
  BUTTON_CANCEL: 'ui.button.cancel',
  INPUT_PLACEHOLDER: 'ui.input.placeholder'
} as const

// 使用时
t(I18N_KEYS.BUTTON_CONFIRM)
```

2. **提供默认值**

```typescript
// 如果翻译缺失，使用默认值
t('ui.myComponent.label', { default: 'Default Label' })
```

3. **懒加载语言包**

```typescript
// 按需加载，减小初始包体积
const loadLocale = async (lang: string) => {
  return import(`@/lang/${lang}.ts`)
}
```

4. **记录翻译上下文**

```typescript
// 添加注释说明使用场景
myComponent: {
  // 用于下拉框的空状态提示
  noData: '暂无数据',

  // 用于加载状态的简短提示
  loading: '加载中...'
}
```

## 翻译质量检查清单

添加新翻译时，确认：

### 准确性

- [ ] 翻译准确表达原意
- [ ] 符合目标语言的语法习惯
- [ ] 专业术语使用行业标准译法
- [ ] 没有机器翻译的生硬感

### 一致性

- [ ] 与现有翻译风格一致
- [ ] 相同概念使用相同译文
- [ ] 标点符号使用规范统一
- [ ] 大小写遵循目标语言规范

### 完整性

- [ ] 所有语言包都已更新
- [ ] 没有遗漏任何 key
- [ ] 参数占位符格式正确
- [ ] 特殊字符已转义

### 技术正确性

- [ ] Key 命名符合规范
- [ ] 没有硬编码文本
- [ ] 插值参数使用正确
- [ ] 类型定义已更新（如需要）

## 常用术语对照表

### 通用操作

| 中文 | 英文            | 备注       |
| ---- | --------------- | ---------- |
| 确定 | Confirm         | 确认操作   |
| 取消 | Cancel          | 取消操作   |
| 保存 | Save            | 保存数据   |
| 删除 | Delete          | 删除项目   |
| 编辑 | Edit            | 编辑内容   |
| 新建 | New / Create    | 创建新项目 |
| 修改 | Modify / Update | 更新现有项 |
| 查询 | Search / Query  | 搜索功能   |
| 重置 | Reset           | 恢复默认   |
| 提交 | Submit          | 提交表单   |

### 状态提示

| 中文   | 英文        | 备注     |
| ------ | ----------- | -------- |
| 成功   | Success     | 操作成功 |
| 失败   | Failed      | 操作失败 |
| 警告   | Warning     | 警告信息 |
| 错误   | Error       | 错误信息 |
| 加载中 | Loading     | 加载状态 |
| 已完成 | Completed   | 完成状态 |
| 进行中 | In Progress | 进行状态 |

### 数据相关

| 中文     | 英文          | 备注      |
| -------- | ------------- | --------- |
| 暂无数据 | No Data       | 空状态    |
| 加载更多 | Load More     | 分页加载  |
| 全部     | All           | 全选/全部 |
| 当前页   | Current Page  | 分页信息  |
| 共 X 条  | Total X Items | 总数统计  |
| 第 X 页  | Page X        | 页码显示  |

## 新增语言支持

如需添加新语言（如法语）：

### 步骤 1：创建语言文件

```typescript
// packages/vue-locale/src/lang/fr-FR.ts

export default {
  ui: {
    button: {
      confirm: 'Confirmer',
      cancel: 'Annuler'
    }
    // ... 复制其他组件的翻译
  }
}
```

### 步骤 2：注册语言

```typescript
// packages/vue-locale/src/index.ts

import frFR from './lang/fr-FR'

export const locales = {
  'zh-CN': zhCN,
  'en-US': enUS,
  'fr-FR': frFR // 新增
}
```

### 步骤 3：更新类型定义

```typescript
// packages/vue-locale/src/types.ts

export type Locale = 'zh-CN' | 'en-US' | 'fr-FR' // 添加新语言
```

## 参考资源

- [Vue I18n 官方文档](https://vue-i18n.intlify.dev/)
- [语言包目录](../../packages/vue-locale/src/lang/)
- [dialog-box 翻译示例](../../packages/vue-locale/src/lang/zh-CN.ts)
- [modal.js 翻译规范](../../AGENTS.md#代码注释规范)
- [API 文档翻译规范](../../CONTRIBUTING.md)
