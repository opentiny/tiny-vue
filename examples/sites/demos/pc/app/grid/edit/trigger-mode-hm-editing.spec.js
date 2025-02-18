import { test, expect } from '@playwright/test'

test('手动触发编辑', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  const demo = page.locator('#edit-trigger-mode-hm-editing')
  await page.goto('grid-edit#edit-trigger-mode-hm-editing')
  await page.getByText('GFD 科技 YX 公司').first().click()
  await expect(page.getByText('GFD 科技 YX 公司').first()).toBeVisible()
  await demo.locator('.tiny-grid-body__row').first().getByRole('button', { name: '编辑' }).click()
  await expect(page.locator('.tiny-grid-default-input')).toBeVisible()

  await page.getByRole('row', { name: '3 RFV' }).getByRole('button').click()
  await expect(page.getByRole('combobox')).toBeVisible()
})
