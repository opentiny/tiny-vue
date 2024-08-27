import { test, expect } from '@playwright/test'

test('设置所有列宽度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-size#size-column-width')

  const { width: width1 } = await page.getByRole('cell', { name: '所属区域' }).boundingBox()
  await expect(width1).toEqual(250)
  const { width: width2 } = await page.getByRole('cell', { name: '地址' }).boundingBox()
  await expect(width2).toEqual(250)
  const { width: width3 } = await page.getByRole('cell', { name: '公司简介' }).boundingBox()
  await expect(width3).toEqual(250)
})
