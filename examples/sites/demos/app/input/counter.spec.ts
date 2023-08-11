import { test, expect } from '@playwright/test'

test('计数器', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/input/counter')
  await page.locator('#preview').getByRole('textbox').click()
  await page.locator('#preview').getByRole('textbox').fill('123')
  const num = page.locator('.tiny-input__count-upper-limit')
  await expect(num).toHaveText('3')
})
