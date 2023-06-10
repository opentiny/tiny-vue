import { test, expect } from '@playwright/test'

test('测试 tabindex 配置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/tooltip/tabindex')

  const button = page.getByRole('button', { name: 'Tooltip 组件的 tabindex 为1' })
  await expect(button).toHaveAttribute('tabindex', '1')
})
