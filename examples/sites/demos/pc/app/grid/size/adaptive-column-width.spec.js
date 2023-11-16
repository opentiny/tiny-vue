import { test, expect } from '@playwright/test'

test('列宽自适应撑开', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-width-height#tiny-first-menu-adaptive-column-width')
  const th = page.getByRole('cell', { name: '公司简介' })
  const { width } = await th.boundingBox()
  await expect(width).toBeGreaterThan(42)
})
