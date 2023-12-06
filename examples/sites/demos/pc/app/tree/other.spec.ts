import { test, expect } from '@playwright/test'

test('其它', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#other')

  const tree = page.locator('.pc-demo-container')
  await expect(tree.getByText('数据 1')).toHaveCount(1)
  await expect(tree.getByText('同时勾选下级')).toHaveCount(1)
})
