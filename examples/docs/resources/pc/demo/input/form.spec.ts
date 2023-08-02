import { test, expect } from '@playwright/test'

test('form', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/input/form')
  const form = page.locator('.demo-input > .tiny-input > .tiny-input-display-only > input')
  await expect(form).toBeVisible()
})
