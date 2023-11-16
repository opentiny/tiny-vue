import { test, expect } from '@playwright/test'

test('重新计算表格', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-width-height#recalculate')
  const { width } = await page.getByRole('cell', { name: '布尔值' }).boundingBox()
  await page.getByRole('button', { name: '修改表格父容器宽度' }).click()
  await page.getByRole('button', { name: '重新计算表格' }).click()
  const { width: width1 } = await page.getByRole('cell', { name: '布尔值' }).boundingBox()
  await expect(width).toBeLessThan(width1)
})
