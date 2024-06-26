import { test, expect } from '@playwright/test'

test('配置式工具栏插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-toolbar#toolbar-toolbar-op-config-slots')
  await expect(page.getByRole('button', { name: '配置式插槽' })).toBeVisible()
})
