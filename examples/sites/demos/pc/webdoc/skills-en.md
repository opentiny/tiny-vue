# TinyVue Agent Skills Usage Guide

TinyVue Agent Skills is a comprehensive toolkit designed for AI coding assistants. It enables these assistants to gain deep understanding of TinyVue component library usage, APIs, and best practices, thereby helping developers build applications more efficiently with TinyVue.

## What is TinyVue Skills?

The `tiny-vue-skill` is an official Agent Skill developed by OpenTiny that contains comprehensive TinyVue component documentation, practical examples, and detailed usage specifications. Once installed, your AI coding assistant (including Cursor, GitHub Copilot, Claude Code, and others) will be capable of:

- Accurately understand the APIs and properties of each TinyVue component
- Provide code examples that conform to TinyVue standards
- Intelligently recommend appropriate components for your business needs
- Help quickly build pages and features based on TinyVue

## Installation Methods

### Method 1: Install via Claude Code Plugin Marketplace (Recommended for Claude Code Users)

This method is ideal for Claude Code users and provides convenient one-click update functionality:

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

> **Marketplace Advantage**: Skills can be easily updated using the `claude plugin update` command.

### Method 2: Install via the `skills` Tool (Most Versatile Approach)

This method works with various AI coding tools and leverages npm for automated installation:

```bash
# List all available skills
npx skills add opentiny/agent-skills --list

# Install tiny-vue-skill globally (for Cursor)
npx skills add opentiny/agent-skills -g --skill tiny-vue-skill --agent cursor

# Install tiny-vue-skill at project level (for Cursor)
npx skills add opentiny/agent-skills --skill tiny-vue-skill --agent cursor
```

**`--agent` Parameter Mapping for Different AI Tools:**

| AI Tool        | `--agent` Parameter |
| -------------- | ------------------- |
| Cursor         | `cursor`            |
| Claude Code    | `claude-code`       |
| GitHub Copilot | `github-copilot`    |
| Windsurf       | `windsurf`          |
| Gemini CLI     | `gemini-cli`        |

### Method 3: Manual Installation via Git Clone

**Step 1:** Clone the repository to your local machine:

```bash
git clone https://github.com/opentiny/agent-skills.git
```

**Step 2:** Copy the `skills/tiny-vue-skill` folder to your tool's Skills directory:

| AI Tool        | Project-level Path  | Global Path                   |
| -------------- | ------------------- | ----------------------------- |
| Cursor         | `.cursor/skills/`   | `~/.cursor/skills/`           |
| Claude Code    | `.claude/skills/`   | `~/.claude/skills/`           |
| GitHub Copilot | `.github/skills/`   | `~/.copilot/skills/`          |
| Windsurf       | `.windsurf/skills/` | `~/.codeium/windsurf/skills/` |

## Enabling Skills in Cursor IDE

To enable Skills in Cursor IDE, press `Ctrl + ,` to open Settings, search for `useagentskills`, locate the experimental feature labeled **Use Agent Skills**, and enable it by checking the corresponding box.

## Usage Examples

Once you've installed and enabled the Skills, you can simply describe your requirements to the AI assistant. It will automatically reference TinyVue documentation to generate standardized code implementations:

**Example 1: Building a Data Grid Component**

> "Create a new Vue project and implement TinyVue's Grid component to build a Chinese provincial information query table. Include columns for serial number, province name, population, area, and GDP. Enable sorting functionality, freeze the province name column on the left side, and add a filter input field at the top of the table."

**Example 2: Implementing Dark Mode Support**

> "Add dark mode switching capability to the current TinyVue project, allowing users to toggle between light and dark themes seamlessly."

**Example 3: Creating a Registration Form**

> "Implement a user registration form using TinyVue's Form component with name, email, and password fields. Include comprehensive form validation to ensure data integrity and improve user experience."

## Keeping Skills Up to Date

Since the TinyVue component library is continuously evolving, we strongly recommend regular Skills updates to ensure you have access to the latest component documentation and features:

- **Claude Code Users**: Execute the `claude plugin update` command
- **Skills Tool Users**: Re-execute the installation command to overwrite and update existing installations
- **Manual Installation Users**: Pull the latest changes from the repository and copy the updated `tiny-vue-skill` folder

## Related Resources

- **GitHub Repository**: [opentiny/agent-skills](https://github.com/opentiny/agent-skills)
