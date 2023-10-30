import { test, expect } from '@playwright/test'

test('开启响应式表格宽高', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-width-height#news-auto-height')
  await page.getByRole('button', { name: '修改400px' }).click()
  const grid = page.locator('.tiny-grid__wrapper')
  const { height } = await grid.boundingBox()
  await expect(400 - height).toBeLessThan(0.8)
})
