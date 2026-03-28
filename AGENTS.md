# AGENTS.md

> 面向 AI 编码代理（Copilot、Cursor、Aider、Claude Code 等）的项目指南。
> 这是一份机器可读的文档，帮助 AI 助手理解本仓库的结构、规范和约束。

## 项目概述

**TinyVue** 是 OpenTiny 开源生态的核心组件库，具备以下特征：

- 同时支持 **Vue 2.6 / Vue 2.7 / Vue 3**（通过分包发布，一套源码跨框架复用）
- 支持 **PC 端**与**移动端**两种终端形态
- 采用 **Renderless（无渲染层）** 与 **视图层**分离架构：业务逻辑写在 `packages/renderless`，视图写在 `packages/vue`
- 支持主题切换：Aurora / SAAS 主题，样式代码在 `packages/theme` 与 `packages/theme-saas`
- Monorepo 结构，使用 **pnpm Workspaces** 管理

## 关键目录结构

```text
tiny-vue/
├── packages/
│   ├── vue/              # Vue 组件视图层（.vue 文件）
│   ├── renderless/       # 无渲染逻辑层（纯 JS/TS，框架无关）
│   ├── vue-common/       # 跨框架公共适配层
│   ├── vue-hooks/        # 自定义 Vue Hooks
│   ├── vue-locale/       # 国际化
│   ├── vue-icon/         # 图标组件
│   ├── utils/            # 通用工具函数
│   ├── theme/            # Aurora 主题（Less）
│   └── theme-saas/       # SAAS 主题（Less）
├── examples/
│   ├── vue3/             # Vue 3 开发示例与单元/E2E 测试
│   ├── vue2/             # Vue 2 开发示例
│   └── sites/            # 官方文档站点
├── internals/
│   └── cli/              # 构建脚本与 CLI 工具
└── .github/              # CI/CD 工作流配置
```

## 环境要求

| 工具 | 版本要求                                 |
|------|------------------------------------------|
| Node | `>= 18`                                  |
| pnpm | `>= 9.5`（必须，禁止使用 npm 或 yarn）   |

## 核心命令

```bash
# 安装依赖（只能用 pnpm）
pnpm i

# 启动 Vue 3 开发示例（默认）
pnpm dev          # → http://127.0.0.1:7130/

# 启动 Vue 2 开发示例
pnpm dev2

# 运行单元测试
pnpm test:unit    # Vue 3
pnpm test:unit2   # Vue 2

# 运行 E2E 测试
pnpm test:e2e     # Vue 3（Chromium）
pnpm test:e2e2    # Vue 2（Chromium）

# 格式化代码
pnpm format

# ESLint 检查与修复
pnpm lint

# 构建组件库
pnpm build:ui
```

## 架构约定

### Renderless 模式（重要）

TinyVue 使用 **Renderless 无渲染架构**。修改或新增组件时，必须遵守：

- **业务逻辑** → 写在 `packages/renderless/<component-name>/index.ts`，不依赖任何 UI 框架
- **视图模板** → 写在 `packages/vue/<component-name>/index.vue`，通过 `setup` 调用 renderless 层
- 不得在 `.vue` 文件中直接写业务逻辑（data 处理、状态计算等）

### 跨版本兼容

- 一份 renderless 逻辑同时服务 Vue 2 和 Vue 3
- 若需判断框架版本，使用 `packages/vue-common` 中的适配工具，不要直接写 `if (vue3)`
- 不得在 renderless 层导入任何 Vue 特定 API（`ref`、`reactive` 等）

## 代码规范

### 格式化

使用项目内置的 Prettier 配置（`.prettierrc`），主要规则：

```json
{
  "semi": false,
  "singleQuote": true,
  "printWidth": 120,
  "trailingComma": "none",
  "tabWidth": 2
}
```

- 禁止提交未格式化的代码
- 代码提交前会经过 `lint-staged` 自动检查

### TypeScript

- 优先使用 TypeScript 编写新代码
- 禁止使用 `any`，需要类型逃逸时应加注释说明原因
- 类型定义放在 `packages/vue-common/src/types.ts` 或组件自身目录下

### 组件命名

- 组件文件夹：`kebab-case`（如 `action-menu`）
- Vue 组件名：`PascalCase`（如 `TinyActionMenu`）
- 组件 Props：`camelCase`
- CSS 类名：`BEM` 命名，前缀 `tiny-`（如 `tiny-button__icon`）

## Commit 规范

严格遵循 [Conventional Commits](https://www.conventionalcommits.org/zh-hans/v1.0.0/) 规范：

```text
<type>(<scope>): <description>
```

**允许的 type：**

| type        | 用途                     |
|-------------|--------------------------|
| `feat`      | 新功能                   |
| `fix`       | 缺陷修复                 |
| `docs`      | 文档变更                 |
| `style`     | 代码格式（不影响逻辑）   |
| `refactor`  | 重构（无新功能/修复）    |
| `perf`      | 性能优化                 |
| `test`      | 测试用例                 |
| `chore`     | 构建/工具链变更          |
| `ci`        | CI/CD 配置               |
| `revert`    | 回滚提交                 |

**scope 规范：**

- 包名：`vue-renderless`、`theme`、`utils` 等
- 组件名（小写中划线）：`button`、`action-menu`、`select` 等
- 目录名：`internals/cli`、`examples/sites` 等

**示例：**

```text
feat(vue/button): 新增 loading 动画插槽支持
fix(vue-renderless/select): 修复过滤后重复选中问题
docs(alert): 补充无障碍使用说明
test(button): 新增 E2E 测试用例
```

## 禁止事项（Do NOT）

- ❌ 不得使用 `npm` 或 `yarn`，只能用 `pnpm`
- ❌ 不得在 renderless 层引入 Vue 框架相关 API
- ❌ 不得在 `.vue` 文件中写业务逻辑，应下沉到 renderless 层
- ❌ 不得硬编码颜色值，必须使用 CSS 变量（`packages/theme` 中的 Less 变量）
- ❌ 不得修改 `pnpm-lock.yaml`（除非有意更新依赖版本）
- ❌ 不得跳过 ESLint / Prettier 检查（`--no-verify`）
- ❌ 不得修改 `packages/dist2/**` 和 `packages/dist3/**` 下的文件（构建产物，由 CI 生成）
- ❌ commit message 不符合 Conventional Commits 规范的 PR 不会被合并

## 测试要求

- 修复 Bug 时：必须同步补充能复现该 Bug 的测试用例
- 新增 Feature 时：需补充对应的单元测试，优先考虑同步 E2E 测试
- 单元测试位置：`examples/vue3/src/**/__tests__/`
- E2E 测试位置：`examples/sites/demos/<component-name>/`
- 测试框架：Vitest（单元）+ Playwright（E2E）

## E2E 测试触发

在 PR 标题中添加 `[componentName1, componentName2]` 可手动触发对应组件的 E2E 测试：

```text
fix(vue-renderless/select): [select, cascader] 修复级联过滤问题
```

## Pull Request 检查清单

PR 提交前，请确认以下各项：

- [ ] commit message 符合 Conventional Commits 规范
- [ ] 新增或修改的代码已格式化（`pnpm format`）
- [ ] ESLint 无报错（`pnpm lint`）
- [ ] 单元测试已补充并通过（`pnpm test:unit`）
- [ ] 视图变更已在 Vue 2 / Vue 3 两个环境验证
- [ ] 无破坏性变更；若有，已在 PR 描述中说明

## 参考文档

- 官方文档：[https://opentiny.design/tiny-vue](https://opentiny.design/tiny-vue)
- 贡献指南：[CONTRIBUTING.md](./CONTRIBUTING.md)
- 贡献指南（中文）：[CONTRIBUTING.zh-CN.md](./CONTRIBUTING.zh-CN.md)
- GitHub Issues：[https://github.com/opentiny/tiny-vue/issues](https://github.com/opentiny/tiny-vue/issues)
- GitHub Discussions：[https://github.com/opentiny/tiny-vue/discussions](https://github.com/opentiny/tiny-vue/discussions)
