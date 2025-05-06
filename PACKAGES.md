# TinyVue 仓库结构说明

## packages/

### 1. 核心组件与运行时

├── vue/ # Vue核心组件库  
│ └── src/ # 源码目录  
│ ├── alert/ # alert组件源码目录
│ ├── button/ # button组件源码目录
│ └── ... # 其他组件  
│
├── vue-runtime/ # Vue运行时支持  
│
├── vue-common/ # Vue2/Vue3通用基础组件库  
│ └── src/  
│ ├── adapter/ # Vue2/Vue3适配层  
│ │ ├── vue2/ # Vue2版本适配器  
│ │ └── vue3/ # Vue3版本适配器  
│
├── renderless/ # 无渲染组件逻辑  
│ └── src/  
│ ├── alert/ # Alert组件逻辑层  
│ ├── button/ # Button组件逻辑层
│ └── ... # 其他组件逻辑层  
│
├── vue-hooks/ # Vue Hooks集合  
│ └── src/ # Hooks源码

### 2. 主题与样式

├── theme/ # 主题系统  
│ └── src/  
│ ├── alert/ # Alert组件样式  
│ ├── button/ # Button组件样式  
│ └── ... # 其他组件样式  
│
├── theme-saas/ # SaaS主题包  
│ └── src/
│ ├── alert/ # Alert组件样式  
│ ├── button/ # Button组件样式  
│ └── ... # 其他组件样式

### 3. 图标相关

├── vue-icon/ # Vue图标组件库  
│ └── src/ # 源码目录  
│
├── vue-icon-saas/ # SaaS图标组件  
│ └── src/ # 源码目录  
│
├── vue-icon-multicolor/ # 多色图标支持  
│ └── src/ # 源码目录

### 5. 工具与指令

├── utils/ # 工具函数库  
│ └── src/  
│ ├── dom/ # DOM相关工具函数  
│ ├── is/ # 类型判断工具函数  
│ └── ... # 其他工具函数  
│
├── vue-directive/ # Vue指令集合  
│ └── src/ # 指令源码

### 6. 国际化

├── vue-locale/ # 国际化支持  
│ └── src/  
│ ├── vue2/ # Vue2版本国际化适配器  
│ ├── vue3/ # Vue3版本国际化适配器  
│ └── lang/ # 语言包资源

### 7. 设计规范

├── design/ # 设计规范和资源  
 ├── aurora/ # Aurora设计规范
├── saas/ # SaaS设计规范  
 └── smb/ # SMB设计规范

---

## examples/ # 示例代码

├── sites/ # 本地官网  
├── vue3/ # Vue3本地开发工程
├── vue2/ # Vue2本地开发工程
├── docs/ # 本地开发模板包含 pc 和 mobile-first 模式
└── public/ # 公共资源

---

## internals/ # 内部工具和配置

├── cli/ # 构建脚本  
├── automate/ # 内部自动化相关脚本  
├── playwright-config/ # playwright测试配置  
├── unplugin-virtual-template/ # vite插件解析虚拟模块  
└── vue-test-utils/ # vitest测试工具，提供 mountPcMode 和 mountMobilefirstMode

---

### 主要目录说明

1. **packages/**: 核心源码包，分为组件、主题、图标、SaaS、工具、国际化等子模块，便于维护和按需引入。
2. **examples/**: 示例代码，包含多版本Vue的示例、文档和演示站点，用于测试和展示。
3. **internals/**: 内部工具，包含构建工具、配置和内部开发支持。

---
