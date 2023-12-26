import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('color-select-panel#basic-usage')
  await page.getByRole('button', { name: 'Show Color select panel' }).click()
  await page.locator('.tiny-color-select-panel__inner__hue-select').click()
  await page.getByRole('button', { name: '选择' }).click()
})
