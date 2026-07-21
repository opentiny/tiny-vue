# TinyVue Agent Skills 使用指南

TinyVue Agent Skills 是一套面向 AI 编码助手的技能工具集，让 AI 助手深度理解 TinyVue 组件库的用法、API 和最佳实践，从而帮助您更高效地使用 TinyVue 开发应用。

## 什么是 TinyVue Skills？

`tiny-vue-skill` 是 OpenTiny 官方提供的 Agent Skill，包含了 TinyVue 组件的文档、示例和使用规范。安装后，您所使用的 AI 编码助手（如 Cursor、GitHub Copilot、Claude Code 等）将能够：

- 精准理解 TinyVue 各组件的 API 和属性
- 提供符合 TinyVue 规范的代码示例
- 智能推荐合适的组件解决业务需求
- 帮助快速搭建基于 TinyVue 的页面和功能

## 安装方式

### 方式一：通过 Claude Code 插件市场安装（Claude Code用户推荐）

适用于使用 Claude Code 的用户，支持后续一键更新：

```bash
# 启动 Claude Code 后添加市场及插件
/plugin marketplace add https://github.com/opentiny/agent-skills
/plugin install tiny-vue-skill@opentiny-skills
```

或在未启动状态下执行：

```bash
claude plugin marketplace add https://github.com/opentiny/agent-skills
claude plugin install tiny-vue-skill@opentiny-skills
```

> 通过市场安装的优势：可使用 `claude plugin update` 命令轻松更新技能。

### 方式二：通过 `skills` 工具安装（推荐）

适用于多种 AI 编码工具，使用 npm 工具自动安装：

```bash
# 列出所有可用技能
npx skills add opentiny/agent-skills --list

# 全局安装 tiny-vue-skill（适用于 Cursor）
npx skills add opentiny/agent-skills -g --skill tiny-vue-skill --agent cursor

# 项目级安装 tiny-vue-skill（适用于 Cursor）
npx skills add opentiny/agent-skills --skill tiny-vue-skill --agent cursor
```

其他 AI 工具对应的 `--agent` 参数：

| AI 工具        | `--agent` 参数   |
| -------------- | ---------------- |
| Cursor         | `cursor`         |
| Claude Code    | `claude-code`    |
| GitHub Copilot | `github-copilot` |
| Windsurf       | `windsurf`       |
| Gemini CLI     | `gemini-cli`     |

### 方式三：手动克隆复制安装

1. 克隆仓库到本地：

```bash
git clone https://github.com/opentiny/agent-skills.git
```

2. 将 `skills/tiny-vue-skill` 文件夹复制到对应工具的 Skills 目录：

| AI 工具        | 项目内路径          | 全局路径                      |
| -------------- | ------------------- | ----------------------------- |
| Cursor         | `.cursor/skills/`   | `~/.cursor/skills/`           |
| Claude Code    | `.claude/skills/`   | `~/.claude/skills/`           |
| GitHub Copilot | `.github/skills/`   | `~/.copilot/skills/`          |
| Windsurf       | `.windsurf/skills/` | `~/.codeium/windsurf/skills/` |

## 在 Cursor 中启用 Skills

按快捷键 `Ctrl + ,` 打开设置界面，搜索 `useagentskills`，找到实验性功能 **Use Agent Skills**，勾选启用即可。

## 使用示例

安装并启用 Skills 后，您可以直接向 AI 助手描述需求，AI 将自动参考 TinyVue 文档生成标准的代码实现：

**示例 1：创建数据表格**

> 新建一个 Vue 工程，使用 TinyVue 的 Grid 组件开发一个中国省级信息查询表格，包含序号、省名、人口、面积、GDP 等列，支持排序，省名列固定在最左边，表格顶部有按省名过滤的功能。

**示例 2：开启深色模式**

> 为当前 TinyVue 工程增加深色模式切换能力。

**示例 3：使用表单组件**

> 使用 TinyVue 的 Form 组件创建一个用户注册表单，包含姓名、邮箱、密码字段，并添加表单校验。

## 保持 Skills 更新

TinyVue 组件库持续迭代，建议定期更新 Skills 以获取最新的组件文档：

- **Claude Code 用户**：执行 `claude plugin update` 命令
- **`skills` 工具用户**：重新执行安装命令覆盖更新
- **手动安装用户**：重新拉取仓库并复制最新的 `tiny-vue-skill` 文件夹

## 相关资源

- [opentiny/agent-skills GitHub 仓库](https://github.com/opentiny/agent-skills)
