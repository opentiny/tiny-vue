import { test, expect } from '@playwright/test'

test('数据关联校验', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  const demo = page.locator('#validation-row-data-valid')
  await page.goto('grid-validation#validation-row-data-valid')
  await page.getByText('70').first().click()
  await demo.locator('.tiny-grid-default-input').fill('700')

  await expect(page.getByRole('tooltip', { name: '数值不能大于 100' })).toBeVisible()
})
