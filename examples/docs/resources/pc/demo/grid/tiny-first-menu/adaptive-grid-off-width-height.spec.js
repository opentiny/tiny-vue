import { test, expect } from '@playwright/test'

test('关闭响应式表格宽高', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-width-height/tiny-first-menu-adaptive-grid-off-width-height')
  const th = page.getByRole('cell', { name: '公司简介' })
  const { width } = await th.boundingBox()
  await page.getByRole('button', { name: '800*300' }).click()
  const { width: width1 } = await th.boundingBox()
  await expect(width).toEqual(width1)
})
