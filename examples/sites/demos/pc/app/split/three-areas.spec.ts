import { test, expect } from '@playwright/test'

test('支持配置3个区块', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('split#three-areas')
  await expect(page.getByText('内容A区')).toBeVisible()
  await expect(page.getByText('内容B区')).toBeVisible()
  await expect(page.getByText('内容C区')).toBeVisible()
})
