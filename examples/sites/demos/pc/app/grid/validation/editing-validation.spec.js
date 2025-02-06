import { test, expect } from '@playwright/test'

test('表格校验', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  const demo = page.locator('#validation-editing-validation')
  await page.goto('grid-validation#validation-editing-validation')
  await page.getByText('GFD 科技 YX 公司').first().click()
  await demo.locator('.tiny-grid-default-input').fill('')

  await expect(page.getByRole('tooltip', { name: '名称必填' })).toBeVisible()
})
