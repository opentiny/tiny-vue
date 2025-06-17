import { test, expect } from '@playwright/test'

test('列冻结', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  const custom = page.locator('.tiny-grid-custom')
  const demo = page.locator('#custom-column-fixed')
  await page.goto('grid-custom#custom-column-fixed')
  await page.locator('.tiny-grid-custom__setting-btn').click()
  await custom.getByRole('row', { name: '员工数 ' }).getByTitle('未冻结').getByRole('img').click()
  await custom.getByRole('row', { name: '员工数' }).getByTitle('左冻结').getByRole('img').click()
  await page.getByRole('button', { name: '确定' }).click()
  await expect(demo.locator('.tiny-grid-header__row th').nth(3)).toHaveText(/员工数/)
})
