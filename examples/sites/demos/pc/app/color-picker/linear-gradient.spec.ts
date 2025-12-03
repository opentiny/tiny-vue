import { test, expect } from '@playwright/test'

test('渐变', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('color-picker#color-mode')
  await page.locator('.tiny-color-picker > .tiny-color-picker__inner').click()
  await page.getByRole('button', { name: '确定' }).click()
  await expect(page.locator('body')).toContainText('linear-gradient(90deg, #66ADFF 21%,#00FEF1 100%)')
  await page.locator('.tiny-notify__icon-close > .tiny-svg').click()
})
