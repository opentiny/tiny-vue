import { test, expect } from '@playwright/test'

test('[Input]method-addMemory', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('input#method-addMemory')
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
  const box = await page.locator('.tiny-modal__body').getByText('1234')
  await expect(box).toBeVisible()
})
