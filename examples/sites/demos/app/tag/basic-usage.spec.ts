import { test, expect } from '@playwright/test'

test('progress 正常显示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('http://127.0.0.1:7130/pc/tag/basic-usage')

  const tag = page.locator('#preview').getByText('标签')

  await expect(tag).toBeVisible()
})
