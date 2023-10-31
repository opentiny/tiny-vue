import { test, expect } from '@playwright/test'

test('展开节点发生变化', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('cascader-panel#expand-change')
  await page.getByRole('menuitem', { name: '组件' }).click()
  await expect(page.getByText('节点变化值：zujian')).toBeVisible()
})
