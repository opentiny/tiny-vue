import { test, expect } from '@playwright/test'

test('Textpopup 只读', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('text-popup#readonly')

  const preview = page.locator('#preview')
  const small = preview.locator('input')
  const larger = preview.locator('textarea')

  expect(await larger.evaluate((larger) => larger.hasAttribute('readonly'))).toBe(true)
})
