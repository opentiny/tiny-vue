import { test, expect } from '@playwright/test'

test('禁用状态', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('fluent-editor#disabled')
  const demo = page.locator('#disabled')
  const cls = demo.locator('.ql-disabled')
  await expect(cls).toHaveId('editor')
})
