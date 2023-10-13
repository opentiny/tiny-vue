import { test, expect } from '@playwright/test'

test('自定义按钮文案', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/transfer/custom-button-texts')
  const preview = page.locator('#preview')
  const buttons = preview.getByRole('button')
  await expect(buttons.first().locator('span')).not.toBeEmpty()
  await expect(buttons.nth(1).locator('span')).not.toBeEmpty()
})
