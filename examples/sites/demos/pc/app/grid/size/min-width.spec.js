import { test, expect } from '@playwright/test'

test('本列最小宽度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-size#size-min-width')
  const { width } = await page.getByRole('cell', { name: '名称最小宽度' }).boundingBox()
  await expect(width).toBeGreaterThanOrEqual(200)
})
