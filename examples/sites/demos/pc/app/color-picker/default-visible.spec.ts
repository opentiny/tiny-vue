import { test, expect } from '@playwright/test'

test('默认显示色盘', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('color-picker#default-visible')
  await page.locator('.tiny-color-select-panel__inner__hue-select').click()
  await page.getByRole('button', { name: '选择' }).click()
})
