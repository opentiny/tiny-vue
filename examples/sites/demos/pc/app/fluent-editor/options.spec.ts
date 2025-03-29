import { test, expect } from '@playwright/test'

test('编辑器配置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('fluent-editor#options')
  const demo = page.locator('#options')
  const cls = demo.locator('.tiny-editor-wrapper .ql-toolbar.ql-snow .ql-formats > button')
  await expect(cls).toHaveCount(14)
})
