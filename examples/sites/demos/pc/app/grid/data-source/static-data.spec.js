import { test, expect } from '@playwright/test'

test('绑定静态数据', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-data-source#data-source-static-data')

  // push添加数据
  await page.getByRole('button', { name: '添加数据' }).click()
  await expect(page.getByRole('cell', { name: 'ZZZ科技YX公司' })).toBeVisible()

  // 减少数据
  await page.getByRole('button', { name: '减少数据' }).click()
  await expect(page.getByRole('cell', { name: 'ZZZ科技YX公司' })).toHaveCount(0)

  // 改变data数据引用地址
  await page.getByRole('button', { name: '改变 tableData 引用地址' }).click()
  await expect(page.locator('.tiny-grid-body__row')).toHaveCount(2)
})
