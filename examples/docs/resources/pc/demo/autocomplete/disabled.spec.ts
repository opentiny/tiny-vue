import { test, expect } from '@playwright/test'

test('disabled', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/autocomplete/disabled1')
  await page.getByTitle('表单组件').click()
  await page.locator('.rel').click()
  await expect(page.locator('//div[@class="tiny-input is-disabled"]')).toHaveClass(/disabled/)
})
