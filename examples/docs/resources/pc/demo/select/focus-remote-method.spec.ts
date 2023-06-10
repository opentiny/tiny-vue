import { test, expect } from '@playwright/test'

test('remote-method', async ({ page }) => {
  await page.goto('http://localhost:7130/pc/select/focus-remote-method')
  const input = page.locator('#preview .tiny-input__inner')

  await input.click()
  const listitems = await page.locator('.tiny-select-dropdown').getByRole('listitem')
  await expect(listitems).toHaveCount(0)
  await page.waitForTimeout(1000)
  await expect(listitems).toHaveCount(50)
})
