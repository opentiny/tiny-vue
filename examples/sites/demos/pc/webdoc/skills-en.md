# TinyVue Agent Skills Usage Guide

TinyVue Agent Skills is a set of skill tools for AI coding assistants, enabling them to deeply understand TinyVue component library usage, APIs, and best practices, helping you develop applications more efficiently with TinyVue.

## What is TinyVue Skills?

`tiny-vue-skill` is an official Agent Skill provided by OpenTiny, containing TinyVue component documentation, examples, and usage specifications. Once installed, your AI coding assistant (such as Cursor, GitHub Copilot, Claude Code, etc.) will be able to:

- Accurately understand the APIs and properties of each TinyVue component
- Provide code examples that conform to TinyVue standards
- Intelligently recommend appropriate components for your business needs
- Help quickly build pages and features based on TinyVue

## Installation Methods

### Method 1: Install via Claude Code Plugin Marketplace (Claude Code is recommended)

For Claude Code users, with support for one-click updates:

```bash
# Add marketplace and install plugin after launching Claude Code
/plugin marketplace add https://github.com/opentiny/agent-skills
/plugin install tiny-vue-skill@opentiny-skills
```

Or run the following commands before launching:

```bash
claude plugin marketplace add https://github.com/opentiny/agent-skills
claude plugin install tiny-vue-skill@opentiny-skills
```

> Advantage of marketplace installation: You can easily update skills using the `claude plugin update` command.

### Method 2: Install via the `skills` Tool (Recommended)

Suitable for various AI coding tools, using npm for automatic installation:

```bash
# List all available skills
npx skills add opentiny/agent-skills --list

# Install tiny-vue-skill globally (for Cursor)
npx skills add opentiny/agent-skills -g --skill tiny-vue-skill --agent cursor

# Install tiny-vue-skill at project level (for Cursor)
npx skills add opentiny/agent-skills --skill tiny-vue-skill --agent cursor
```

The `--agent` parameter for other AI tools:

| AI Tool        | `--agent` Parameter |
| -------------- | ------------------- |
| Cursor         | `cursor`            |
| Claude Code    | `claude-code`       |
| GitHub Copilot | `github-copilot`    |
| Windsurf       | `windsurf`          |
| Gemini CLI     | `gemini-cli`        |

### Method 3: Manual Clone and Copy

1. Clone the repository locally:

```bash
git clone https://github.com/opentiny/agent-skills.git
```

1. Copy the `skills/tiny-vue-skill` folder to the Skills directory of your tool:

| AI Tool        | Project-level Path  | Global Path                   |
| -------------- | ------------------- | ----------------------------- |
| Cursor         | `.cursor/skills/`   | `~/.cursor/skills/`           |
| Claude Code    | `.claude/skills/`   | `~/.claude/skills/`           |
| GitHub Copilot | `.github/skills/`   | `~/.copilot/skills/`          |
| Windsurf       | `.windsurf/skills/` | `~/.codeium/windsurf/skills/` |

## Enabling Skills in Cursor

Press `Ctrl + ,` to open settings, search for `useagentskills`, find the experimental feature **Use Agent Skills**, and check the box to enable it.

## Usage Examples

After installing and enabling Skills, you can directly describe your requirements to the AI assistant, and it will automatically reference TinyVue documentation to generate standard code implementations:

**Example 1: Create a Data Grid**

> Create a new Vue project, use TinyVue's Grid component to build a Chinese provincial information query table with columns for number, province name, population, area, and GDP. Support sorting, freeze the province name column on the left, and add a filter input at the top of the table.

**Example 2: Enable Dark Mode**

> Add dark mode switching capability to the current TinyVue project.

**Example 3: Use Form Components**

> Use TinyVue's Form component to create a user registration form with name, email, and password fields, and add form validation.

## Keeping Skills Up to Date

TinyVue component library is continuously updated. It is recommended to update Skills regularly to get the latest component documentation:

- **Claude Code users**: Run the `claude plugin update` command
- **`skills` tool users**: Re-run the installation command to overwrite and update
- **Manual installation users**: Re-pull the repository and copy the latest `tiny-vue-skill` folder

## Related Resources

- [opentiny/agent-skills GitHub Repository](https://github.com/opentiny/agent-skills)
