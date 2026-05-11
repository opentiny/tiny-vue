---
name: tinyvue-develop-spec
description: tinyvue组件库开发规范
---

## 使用时机

在当前仓库进行组件的开发，主题开发，国际化开发，测试脚本开发时，必须遵守以下规范。

## 适用场景

- 新增 UI 组件
- 修改现有组件逻辑
- 重构组件架构
- 理解 Renderless 模式

### 重要术语

1. 跨端模板： tiny vue组件库中，同一个组件可以有2种组件模板， 其中`pc.vue` 面向家用PC浏览器的场景， `mobile-first.vue`是移动优先的浏览器场景（可以兼容用户使用手机或PC浏览器）。

2. 无渲染逻辑层: tiny vue组件库遵从模板和逻辑分离的原则进行开发。模板层只负责绑定变量和函数，所有的业务逻辑（data 处理、状态计算等）都要放在无渲染逻辑层 `packages/renderless` 目录

## 组件库的架构

| 模块名称        | 代码目录                                                                      | 参考规范                | 说明                                 |
| --------------- | ----------------------------------------------------------------------------- | ----------------------- | ------------------------------------ |
| 模板层          | `packages/vue`                                                                | `./vue.skill.md`        | 每个组件的模板，必须在相应的组件目录 |
| 无渲染逻辑层    | `packages/renderless`                                                         | `./renderless.skill.md` | 每个组件的逻辑，必须在相应的组件目录 |
| 样式层          | `packages/theme`                                                              | `./theme.skill.md`      | 每个组件的样式，必须在相应的组件目录 |
| 适配Vue2/Vue3层 | `packages/vue-common`                                                         | -                       | 禁止修改适配层的代码                 |
| 图标库          | `packages/vue-icon`                                                           | `./icon.skill.md`       | 图标库                               |
| 国际化层        | `packages/vue-locale`                                                         | `./locale.skill.md`     | 组件的国际化                         |
| 公用hooks       | `packages/vue-hooks`                                                          | `./hooks.skill.md`      | 跨组件可以复用的hooks函数            |
| 公用指令        | `packages/vue-directive`                                                      | `./directive.skill.md`  | 跨组件可以复用的指令                 |
| utils           | `packages/utils`                                                              | `./utils.skill.md`      | 公用函数                             |
| 组件测试        | `examples\sites\demos\pc\app\**\*.spec.ts` 或 `packages\vue\src\**\__tests__` | `./test.skill.md`       | e2e测试和单元测试                    |
| 文档开发        | `examples\sites\demos\pc\app\**`                                              | `./docs.skill.md`       | 每一个组件的api和demo的开发          |
