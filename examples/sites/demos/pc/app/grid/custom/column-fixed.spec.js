import { test, expect } from '@playwright/test'

test('列冻结', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-custom#custom-column-fixed')
  await page.locator('.tiny-grid-custom__setting-btn').click()
  await page.getByRole('row', { name: '员工数 显示 未冻结' }).getByTitle('未冻结').getByRole('img').click()
  await page.getByRole('row', { name: '员工数 显示 左冻结' }).getByTitle('左冻结').getByRole('img').click()
  await page.getByRole('button', { name: '确定' }).click()
  await expect(page.getByRole('cell', { name: '员工数' })).toHaveCSS('right', '0px')
})
