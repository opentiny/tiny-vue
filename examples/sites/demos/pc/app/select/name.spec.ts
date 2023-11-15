import { test, expect } from '@playwright/test'

test('name', async ({ page }) => {
  await page.goto('select#name')

  const input = page.locator('#preview .tiny-input__inner')
  await expect(input).toHaveAttribute('name', 'inputName')
})
