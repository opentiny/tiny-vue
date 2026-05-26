# @opentiny/utils 开发规范

## 适用场景

- 在 renderless 层或 vue-hooks 中编写与框架无关的纯逻辑
- 复用日期、字符串、DOM、校验等通用能力
- 新增跨组件工具函数

## 核心原则

### 1. 包定位

`packages/utils` 发布为 `@opentiny/utils`，**不依赖 Vue**，可被以下模块引用：

- `packages/renderless`（无渲染逻辑层，主要消费方）
- `packages/vue-hooks`
- `packages/vue-directive`
- `packages/vue-common`（适配层少量使用）

renderless 层约定：**除 `@opentiny/utils` 与 `@opentiny/vue-hooks` 外，不得依赖其它第三方包**。

### 2. 目录结构

```text
packages/utils/src/
├── index.ts          # 统一导出入口
├── array/            # 数组操作
├── bigInt/           # 大数/精度计算
├── calendar/         # 日历相关
├── crypt/            # sha256 等
├── date/             # 日期格式化、时区
├── date-util/        # 日期工具（与 date 部分能力重叠，待整理）
├── debounce/         # 防抖
├── throttle/         # 节流
├── dom/              # DOM 操作、样式、滚动
├── decimal/          # 小数精度
├── event/            # 事件派发
├── form/             # 表单常量（待迁移至组件内部）
├── function/         # noop、callInterceptor
├── globalConfig/     # isServer、browserInfo、globalConfig
├── logger/           # 日志
├── nanoid/           # 唯一 ID
├── object/           # 对象拷贝、合并、相等
├── string/           # 字符串格式化、驼峰/连字符
├── type/             # 类型判断
├── validate/         # 校验器 Validator
├── xss/              # XSS 过滤
├── tree-model/       # 树形数据结构
├── popper/           # Popper 定位
├── popup-manager/    # 弹层层级管理
└── ...               # 其它模块见 src/index.ts
```

新增工具时：在对应子目录实现，并在 `src/index.ts` 中导出。

### 3. 模块编写规范

1. **纯函数**：不持有组件状态，不 import Vue API
2. **SSR 安全**：涉及 `window`/`document` 时，使用 `isServer`（来自 `globalConfig`）做守卫
3. **单职责**：一个文件聚焦一类能力，避免在 utils 中写组件专属常量（`common/`、`form/` 中部分常量标注为「待移除」，新代码勿再扩展）
4. **测试**：在模块目录下补充 `__tests__` 或 `__test__`，在 `packages/utils` 目录执行 `pnpm test`，或在仓库根目录执行 `pnpm --filter @opentiny/utils test`

### 4. 常用 API 分类

| 分类      | 代表导出                                                                                            | 典型用途                               |
| --------- | --------------------------------------------------------------------------------------------------- | -------------------------------------- |
| 类型判断  | `isObject`, `isFunction`, `isDate`, `typeOf`                                                        | 参数校验                               |
| 字符串    | `camelize`, `hyphenate`, `formatString`, `guid`                                                     | 命名转换、展示格式化                   |
| 日期      | `formatDate`, `toDateStr`, `limitTimeRange`；`calendar` 的 `parseDate`；`date-util` 的 `parseDate1` | 日期/时间组件（注意两套 parse 勿混用） |
| 对象/数组 | `extend`, `merge`, `isEqual`, `find`, `unique`                                                      | 数据处理                               |
| DOM       | `on`, `off`, `addClass`, `getScrollParent`                                                          | 事件与布局                             |
| 性能      | `debounce`, `throttle`, `fastdom`                                                                   | 高频回调、布局批处理                   |
| 安全      | `xss`, `sha256`                                                                                     | 内容过滤、摘要                         |
| ID        | `nanoid`（`nanoid.api.nanoid(size)`）                                                               | 无障碍 id、唯一 key                    |

### 5. 在 renderless 中的引用方式

```typescript
// ✅ 正确：从 @opentiny/utils 按需导入
import { debounce } from '@opentiny/utils'
import { nanoid } from '@opentiny/utils'

// 使用 nanoid
const id = `tiny-alert-title-${nanoid.api.nanoid(8)}`

// ❌ 错误：在 renderless 中 import 'vue'
// ❌ 错误：在 utils 中 import '@opentiny/vue-common'
```

### 6. nanoid 使用说明

`nanoid` 以命名空间导出，推荐通过 `nanoid.api` 访问：

```typescript
import { nanoid } from '@opentiny/utils'

nanoid.api.nanoid(8) // 默认长度
nanoid.api.customAlphabet('abc', 10) // 自定义字母表
nanoid.random() // 0~1 随机数（SSR 下返回 0）
```

### 7. 禁止事项

- ❌ 不得在 utils 中引入 Vue、`@opentiny/vue-common`、`@opentiny/vue-hooks`
- ❌ 不得将仅某一组件使用的常量长期放在 `common/`、`form/`（应下沉到对应 renderless 或组件）
- ❌ 不得重复造轮子：新增前先检索 `src/index.ts` 是否已有同类方法
- ❌ 注意 `date` 与 `date-util` 存在部分重名导出（如 `toDate` / `toDate1`），优先使用语义清晰的现有 API，避免再增加别名

## 构建与发布

```bash
# 在 packages/utils 目录
pnpm build    # vite 构建
pnpm test     # vitest
pnpm pub      # 发布（维护者）
```

## 参考资源

- [统一导出](../../packages/utils/src/index.ts)
- [debounce 示例](../../packages/utils/src/debounce/index.ts)
- [renderless 中的引用](../../packages/renderless/src/alert/vue.ts)
