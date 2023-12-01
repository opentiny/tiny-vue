import { test, expect } from '@playwright/test'

test('懒加载', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#lazy')

  const tree = page.locator('.pc-demo-container')
  await expect(tree.getByText('#数据 2')).toHaveCount(1)
})
