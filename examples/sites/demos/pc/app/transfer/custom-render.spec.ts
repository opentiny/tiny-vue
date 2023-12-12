import { test, expect } from '@playwright/test'

test('判断是否可以选中自定义数据项', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('transfer#custom-render')

  const preview = page.locator('.pc-demo-container')
  const jsxNode = preview.getByText('备选项 2 - by jsx')
  const slotNode = preview.getByText('备选项 2 - by slot')

  await expect(jsxNode).toHaveCount(1)
  await expect(slotNode).toHaveCount(1)
})
