import { test, expect } from '@playwright/test'

test('自定义编辑规则', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-edit#edit-custom-editing')
  await page.getByText('GFD 科技 YX 公司').first().click()
  await expect(page.getByText('GFD 科技 YX 公司').first()).toBeVisible()
  await page.getByText('WWWW 科技 YX 公司').first().click()
  await expect(page.locator('.tiny-grid-default-input')).toBeVisible()
})
