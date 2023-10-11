import { test, expect } from '@playwright/test'

test('[Input]method-addMemory', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/input/method-addMemory')
  const input = await page.locator('.demo-input input').nth(0)

  await input.click()
  await input.fill('1234')
  await input.blur()
  await page
    .locator('div')
    .filter({ hasText: /^1234$/ })
    .nth(2)
    .click()
  await input.click()
  await input.fill('')
  const box = page.locator('#preview').getByText('1234')
  await expect(box).toBeVisible()
})
