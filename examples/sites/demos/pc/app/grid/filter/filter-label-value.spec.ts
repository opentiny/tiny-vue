import { test, expect } from '@playwright/test'

test('label/value 字段映射 - 状态列筛选', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-filter#filter-label-value-filter')

  // 状态列使用 label:name value:code，选项显示 已启用/已停用/待审核
  await page.getByRole('cell', { name: '状态' }).getByRole('img').first().click()
  await page.getByTitle('已启用').click()
  await page.getByRole('button', { name: '确定' }).click()

  // 筛选 status=active 的行，应显示 2 条
  await expect(page.locator('.tiny-grid-body__row:visible')).toHaveCount(2)
})

test('label/value 字段映射 - 区域列筛选', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-filter#filter-label-value-filter')

  // 区域列使用 label:regionName value:regionCode
  await page.getByRole('cell', { name: '区域' }).getByRole('img').first().click()
  await page.getByTitle('华东区').click()
  await page.getByRole('button', { name: '确定' }).click()

  // 筛选 region=east 的行，应显示 2 条
  await expect(page.locator('.tiny-grid-body__row:visible')).toHaveCount(2)
})
