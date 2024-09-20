import { test, expect } from '@playwright/test'

test('列宽自适应撑开', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-size#size-adaptive-column-width')
  const th = page.getByRole('cell', { name: '公司简介' }).nth(0)
  const { width } = await th.boundingBox()
  await expect(width).toBeGreaterThan(72)

  const th1 = page.getByRole('cell', { name: '公司简介' }).nth(1)
  const { width: width1 } = await th1.boundingBox()
  await expect(width1).toBeLessThanOrEqual(72)
})
