# TinyVue 测试编写指南

## 适用场景

- 为新组件编写测试
- 为现有组件补充测试用例
- 修复 Bug 时添加回归测试
- 重构代码后验证功能

## 核心原则

### 1. 测试金字塔

```
       /\
      /  \     E2E 测试（少量，覆盖关键流程）
     /----\
    /      \   集成测试（适量，测试组件交互）
   /--------\
  /          \ 单元测试（大量，测试单个函数/组件）
 /------------\
```

- **单元测试**：Vitest，测试 renderless 层的纯函数
- **E2E 测试**：Playwright，测试完整用户流程
- **比例建议**：70% 单元 + 30% E2E

### 2. 测试命名规范

```typescript
// 格式：should + 预期行为 + when + 条件
it('should emit change event when value is updated', () => {})
it('should not submit form when validation fails', () => {})
it('should display error message when input is invalid', () => {})
```

### 3. AAA 模式

每个测试用例遵循 **Arrange-Act-Assert**：

```typescript
it('should calculate total price correctly', () => {
  // Arrange - 准备数据
  const items = [
    { price: 100, quantity: 2 },
    { price: 50, quantity: 1 }
  ]

  // Act - 执行操作
  const total = calculateTotal(items)

  // Assert - 验证结果
  expect(total).toBe(250)
})
```

## 标准流程

### 单元测试（Vitest）

#### 步骤 1：创建测试文件

```typescript
// packages/renderless/src/my-component/__tests__/index.spec.ts

import { describe, it, expect, vi } from 'vitest'
import { api, renderless } from '../index'

describe('MyComponent Renderless', () => {
  // 测试用例
})
```

#### 步骤 2：编写基础测试

```typescript
describe('api', () => {
  it('should return correct methods', () => {
    const state = { value: '' }
    const props = { disabled: false }
    const emit = vi.fn()

    const result = api({ state, props, emit })

    expect(result).toHaveProperty('handleClick')
    expect(result).toHaveProperty('updateValue')
  })

  it('should emit click event with current value', () => {
    const state = { value: 'test' }
    const props = { disabled: false }
    const emit = vi.fn()

    const { handleClick } = api({ state, props, emit })
    handleClick()

    expect(emit).toHaveBeenCalledWith('click', 'test')
  })
})
```

#### 步骤 3：边界情况测试

```typescript
describe('edge cases', () => {
  it('should not emit when disabled', () => {
    const state = { value: 'test' }
    const props = { disabled: true }
    const emit = vi.fn()

    const { handleClick } = api({ state, props, emit })
    handleClick()

    expect(emit).not.toHaveBeenCalled()
  })

  it('should handle empty value', () => {
    const state = { value: '' }
    const props = { disabled: false }
    const emit = vi.fn()

    const { updateValue } = api({ state, props, emit })
    updateValue('')

    expect(state.value).toBe('')
  })
})
```

### E2E 测试（Playwright）

#### 步骤 1：创建测试文件

```typescript
// examples/sites/demos/my-component/test/my-component.spec.ts

import { test, expect } from '@playwright/test'

test.describe('MyComponent E2E', () => {
  // 测试用例
})
```

#### 步骤 2：编写交互测试

```typescript
test('should click button and show result', async ({ page }) => {
  // 导航到示例页面
  await page.goto('/my-component/basic')

  // 找到按钮并点击
  const button = page.getByRole('button', { name: '点击我' })
  await button.click()

  // 验证结果显示
  const result = page.getByText('操作成功')
  await expect(result).toBeVisible()
})
```

#### 步骤 3：视觉回归测试

```typescript
test('should render correctly', async ({ page }) => {
  await page.goto('/my-component/basic')

  // 截取整个页面
  await expect(page).toHaveScreenshot('my-component-basic.png', {
    maxDiffPixels: 100
  })
})
```

## 代码示例

### Vitest 完整示例

```typescript
// packages/renderless/src/input/__tests__/index.spec.ts

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { api, renderless } from '../index'

describe('Input Renderless', () => {
  let mockState: any
  let mockProps: any
  let mockEmit: any

  beforeEach(() => {
    mockState = {
      value: '',
      hovering: false,
      focused: false
    }

    mockProps = {
      modelValue: '',
      disabled: false,
      readonly: false,
      placeholder: '请输入'
    }

    mockEmit = vi.fn()
  })

  describe('handleInput', () => {
    it('should update state value', () => {
      const { handleInput } = api({
        state: mockState,
        props: mockProps,
        emit: mockEmit
      })

      handleInput('new value')

      expect(mockState.value).toBe('new value')
    })

    it('should emit update:modelValue event', () => {
      const { handleInput } = api({
        state: mockState,
        props: mockProps,
        emit: mockEmit
      })

      handleInput('test')

      expect(mockEmit).toHaveBeenCalledWith('update:modelValue', 'test')
    })

    it('should not emit when value unchanged', () => {
      mockState.value = 'existing'
      mockProps.modelValue = 'existing'

      const { handleInput } = api({
        state: mockState,
        props: mockProps,
        emit: mockEmit
      })

      handleInput('existing')

      expect(mockEmit).not.toHaveBeenCalled()
    })
  })

  describe('handleFocus', () => {
    it('should set focused to true', () => {
      const { handleFocus } = api({
        state: mockState,
        props: mockProps,
        emit: mockEmit
      })

      handleFocus()

      expect(mockState.focused).toBe(true)
    })

    it('should emit focus event', () => {
      const { handleFocus } = api({
        state: mockState,
        props: mockProps,
        emit: mockEmit
      })

      handleFocus()

      expect(mockEmit).toHaveBeenCalledWith('focus')
    })
  })

  describe('clear', () => {
    it('should clear value and emit events', () => {
      mockState.value = 'some text'

      const { clear } = api({
        state: mockState,
        props: mockProps,
        emit: mockEmit
      })

      clear()

      expect(mockState.value).toBe('')
      expect(mockEmit).toHaveBeenCalledWith('update:modelValue', '')
      expect(mockEmit).toHaveBeenCalledWith('clear')
    })

    it('should not clear when disabled', () => {
      mockProps.disabled = true
      mockState.value = 'some text'

      const { clear } = api({
        state: mockState,
        props: mockProps,
        emit: mockEmit
      })

      clear()

      expect(mockState.value).toBe('some text')
    })
  })
})
```

### Playwright 完整示例

```typescript
// examples/sites/demos/input/test/input.spec.ts

import { test, expect } from '@playwright/test'

test.describe('Input Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/input/basic')
  })

  test('should render input correctly', async ({ page }) => {
    const input = page.getByRole('textbox')
    await expect(input).toBeVisible()
    await expect(input).toHaveAttribute('placeholder', '请输入')
  })

  test('should handle user input', async ({ page }) => {
    const input = page.getByRole('textbox')
    await input.fill('Hello World')

    await expect(input).toHaveValue('Hello World')
  })

  test('should clear input when clear button clicked', async ({ page }) => {
    const input = page.getByRole('textbox')
    await input.fill('Test')

    const clearButton = page.getByRole('button', { name: 'clear' })
    await clearButton.click()

    await expect(input).toHaveValue('')
  })

  test('should not accept input when disabled', async ({ page }) => {
    await page.goto('/input/disabled')

    const input = page.getByRole('textbox')
    await expect(input).toBeDisabled()

    await input.fill('Should not work')
    await expect(input).toHaveValue('')
  })

  test('should show word limit', async ({ page }) => {
    await page.goto('/input/word-limit')

    const input = page.getByRole('textbox')
    await input.fill('12345')

    const wordLimit = page.getByText('5/10')
    await expect(wordLimit).toBeVisible()
  })

  test('should validate required field', async ({ page }) => {
    await page.goto('/input/validation')

    const submitButton = page.getByRole('button', { name: '提交' })
    await submitButton.click()

    const errorMsg = page.getByText('此字段为必填项')
    await expect(errorMsg).toBeVisible()
  })
})
```

## 常见陷阱

### ❌ 错误做法

1. **测试实现细节而非行为**

```typescript
// ❌ 错误 - 测试内部状态
it('should set state.hovering to true', () => {
  expect(state.hovering).toBe(true)
})

// ✅ 正确 - 测试可见行为
it('should show tooltip on hover', async () => {
  await element.hover()
  await expect(tooltip).toBeVisible()
})
```

2. **测试之间相互依赖**

```typescript
// ❌ 错误
it('step 1: login', () => {})
it('step 2: navigate', () => {}) // 依赖 step 1

// ✅ 正确 - 每个测试独立
it('should navigate after login', async () => {
  await login()
  await navigate()
  // 验证
})
```

3. **使用硬编码等待时间**

```typescript
// ❌ 错误
await page.waitForTimeout(5000)

// ✅ 正确
await expect(element).toBeVisible({ timeout: 5000 })
```

4. **忽略异步操作**

```typescript
// ❌ 错误
button.click()
expect(result).toBe('done')

// ✅ 正确
await button.click()
await expect(result).toHaveText('done')
```

### ✅ 最佳实践

1. **使用 beforeEach 重置状态**

```typescript
beforeEach(() => {
  mockState = { value: '' }
  mockEmit = vi.fn()
})
```

2. **测试失败时提供清晰信息**

```typescript
expect(result).toBe(expected)
// 失败时会显示：Expected "expected" but received "actual"
```

3. **Mock 外部依赖**

```typescript
vi.mock('@opentiny/utils', () => ({
  debounce: vi.fn((fn) => fn)
}))
```

4. **覆盖率目标**

- 行覆盖率：≥ 80%
- 分支覆盖率：≥ 75%
- 函数覆盖率：≥ 85%

## 检查清单

编写测试前，确认：

### 单元测试

- [ ] 测试了所有公共 API
- [ ] 覆盖了正常流程和异常流程
- [ ] 测试了边界值（空值、null、undefined）
- [ ] Mock 了所有外部依赖
- [ ] 每个测试用例独立运行
- [ ] 测试名称清晰描述预期行为

### E2E 测试

- [ ] 覆盖了主要用户操作流程
- [ ] 测试了不同浏览器尺寸（响应式）
- [ ] 验证了无障碍访问（键盘导航、屏幕阅读器）
- [ ] 包含了视觉回归测试（可选）
- [ ] 测试数据可重复使用
- [ ] 没有硬编码等待时间

### 通用

- [ ] 测试文件命名符合规范（\*.spec.ts）
- [ ] 使用了 AAA 模式组织代码
- [ ] 没有测试私有实现细节
- [ ] 添加了必要的注释说明复杂逻辑
- [ ] 运行 `pnpm test:unit` 全部通过
- [ ] 运行 `pnpm test:e2e` 全部通过

## 运行测试

```bash
# 运行所有单元测试
pnpm test:unit

# 运行 Vue 3 单元测试
pnpm test:unit3

# 运行 Vue 2 单元测试
pnpm test:unit2

# 运行所有 E2E 测试
pnpm test:e2e

# 运行特定组件的 E2E 测试
pnpm test:e2e --grep "input"

# 生成覆盖率报告
pnpm test:unit --coverage
```

## 参考资源

- [Vitest 官方文档](https://vitest.dev/)
- [Playwright 官方文档](https://playwright.dev/)
- [Input 组件单元测试](../../packages/renderless/src/input/__tests__/)
- [Input 组件 E2E 测试](../../examples/sites/demos/input/test/)
- [AGENTS.md 测试要求](../../AGENTS.md#测试要求)
