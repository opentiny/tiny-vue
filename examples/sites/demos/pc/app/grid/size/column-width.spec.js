import { test, expect } from '@playwright/test'

test('设置所有列宽度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-width-height#tiny-first-menu-column-width')
  const { width } = await page.getByRole('cell', { name: '名称' }).boundingBox()
  await expect(width).toEqual(200)
  const { width: width1 } = await page.getByRole('cell', { name: '所属区域' }).boundingBox()
  await expect(width1).toEqual(200)
  const { width: width2 } = await page.getByRole('cell', { name: '地址' }).boundingBox()
  await expect(width2).toEqual(200)
  const { width: width3 } = await page.getByRole('cell', { name: '公司简介' }).boundingBox()
  await expect(width3).toEqual(200)
})
