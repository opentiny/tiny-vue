import { expect, test } from '@playwright/test'

test('是否正常禁用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('tag#disabled')

  const tags = page.locator('.tiny-tag')
  const close = tags.last().locator('.tiny-tag__close')

  await expect(tags).toHaveClass([/is-disabled/, /is-disabled/, /is-disabled/])
  await close.click()
  await expect(tags.last(), 'Disabling Errors').toBeVisible()
})
