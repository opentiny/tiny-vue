import { test, expect } from '@playwright/test'

test('列宽不自适应撑开', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-width-height/tiny-first-menu-adaptive-un-column-width')
  const th = page.getByRole('cell', { name: '公司简介' })
  const { width } = await th.boundingBox()
  await expect(width).toBeLessThanOrEqual(40)
})
