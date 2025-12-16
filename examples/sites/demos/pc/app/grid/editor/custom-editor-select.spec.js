import { test, expect } from '@playwright/test'

test('引入组件作为编辑器', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-editor#editor-custom-editor-select')
  const demo = page.locator('#editor-custom-editor-select')
  await demo.getByText('华中区').first().click()
  await demo.locator('.tiny-input__inner').click()
  await page.locator('.tiny-option-label').filter({ hasText: '西南区' }).click()
  await demo.locator('.tiny-grid__body thead').click()
  await expect(page.locator('.tiny-grid-body__row').first()).toContainText('西南区')
})
