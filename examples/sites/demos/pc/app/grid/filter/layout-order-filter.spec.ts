import { test, expect } from '@playwright/test'

test('自定义筛选项顺序 - 城市列 layout enum,base', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-filter#filter-layout-order-filter')

  // 城市列：layout enum,base 仅显示枚举和清除
  await page.getByRole('cell', { name: '城市' }).getByRole('img').first().click()
  await page.getByTitle('福州').click()
  await page.getByRole('button', { name: '确定' }).click()

  // 筛选后应只显示福州的公司
  await expect(page.getByRole('cell', { name: '福州' })).toHaveCount(2)
  await expect(page.getByRole('cell', { name: '深圳' })).toHaveCount(0)
})

test('自定义筛选项顺序 - 员工数列 extends 快捷筛选', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-filter#filter-layout-order-filter')

  // 员工数列：layout extends,input,base 点击扩展项 大型企业(>500)
  await page.getByRole('cell', { name: '员工数' }).getByRole('img').first().click()
  await page.getByText('大型企业(>500)').click()

  // 筛选后应只显示员工数>500的行（800、1300）
  await expect(page.locator('.tiny-grid-body__row:visible')).toHaveCount(2)
})
