import { test, expect } from '@playwright/test'

test('简化版列设置测试', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-customized#custom-column-simple')
  await page.locator('.tiny-select > div').click()
  await page.getByRole('listitem').filter({ hasText: '员工数' }).click()
  const thHeader = page.locator('th.tiny-grid-header__column').nth(1)
  await expect(thHeader).toContainText('名称')
  await page.getByRole('listitem').filter({ hasText: '名称' }).locator('span').nth(2).click()
  const thHeader2 = page.locator('th.tiny-grid-header__column').nth(1)

  await expect(thHeader2).toContainText('员工数')
})
