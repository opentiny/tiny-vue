import { test, expect } from '@playwright/test'

test('多字段组合排序', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-sort#sort-combinations-sort')
  await page.getByRole('cell', { name: '员工数(员工数和名称组合排序)' }).getByRole('img').click()
  // 员工数第一优先级排序
  await expect(page.locator('.tiny-grid-body__row').first()).toContainText('1300')
  // 公司名称第二优先级排序
  await expect(page.locator('.tiny-grid-body__row').nth(1)).toContainText('YHN科技YX公司')
})
