import { test, expect } from '@playwright/test'

test('列筛选规则', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-filter#filter-custom-filter')
  await page.getByRole('cell', { name: '名称' }).getByRole('img').click()
  await page.locator('.tiny-grid__filter-wrapper.filter__active input').click()
  await page.locator('.tiny-grid__filter-wrapper.filter__active input').press('CapsLock')
  await page.locator('.tiny-grid__filter-wrapper.filter__active input').fill('WWW')
  await page.getByRole('button', { name: '确定' }).click()
  await expect(page.getByRole('cell', { name: 'WWW 科技 YX 公司' })).toBeVisible()
})
