import { test, expect } from '@playwright/test'

test('隐藏必填星号', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-validation#validation-asterisk-method')
  await expect(
    page.locator('#validation-asterisk-method').getByRole('cell', { name: '名称' }).locator('.tiny-grid-required-icon')
  ).toHaveCount(0)
})
