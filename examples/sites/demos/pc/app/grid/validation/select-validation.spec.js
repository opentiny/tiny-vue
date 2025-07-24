import { test, expect } from '@playwright/test'

test('选中时校验', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())

  const demo = page.locator('#validation-select-validation')
  await page.goto('grid-validation#validation-select-validation')
  await page.getByText('GFD 科技 YX 公司').first().click()
  await demo.locator('.tiny-grid-default-input').fill('')
  await page.waitForTimeout(200)
  await demo.locator('.tiny-grid-body__row .tiny-grid-checkbox__icon').first().click()
  await page.getByRole('button', { name: '校验选中数据' }).click()

  await expect(page.getByText('校验不通过', { exact: true })).toBeVisible()
})
