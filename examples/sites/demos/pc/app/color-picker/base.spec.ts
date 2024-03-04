import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('color-picker#basic-usage')
  await page.locator('.tiny-color-picker__inner').click()
  await page.locator('.black').click()
  await page.getByRole('button', { name: '选择' }).click()
  await page.locator('.tiny-color-picker__inner').click()
  await page.locator('.tiny-color-select-panel__inner__color-select').click()
  await page.getByRole('button', { name: '选择' }).click()
})
