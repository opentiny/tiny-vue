import { test, expect } from '@playwright/test'

test('设置总体列宽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-width-height#tiny-first-menu-column-min-width')
  const { width } = await page.getByRole('cell', { name: '所属区域' }).first().boundingBox()
  await expect(width).toBeGreaterThanOrEqual(100)
  const { width: width1 } = await page.getByRole('cell', { name: '地址' }).first().boundingBox()
  await expect(width1).toBeGreaterThanOrEqual(100)
  const { width: width2 } = await page.getByRole('cell', { name: '名称' }).first().boundingBox()
  await expect(width2).toBeGreaterThanOrEqual(100)
})
