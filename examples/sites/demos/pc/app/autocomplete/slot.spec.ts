import { test, expect } from '@playwright/test'

test('slot', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('autocomplete#slot')

  await expect(page.locator('.demo-autocomplete > .tiny-autocomplete.pend-slot').getByText('前置内容', { exact: true })).toBeVisible()
  await expect(page.locator('.demo-autocomplete > .tiny-autocomplete.pend-slot').getByText('后置内容', { exact: true })).toBeVisible()

  const prefix = page.locator('.demo-autocomplete > .tiny-autocomplete.fix-slot > .tiny-input > .tiny-input__prefix')
  const suffix = page.locator('.demo-autocomplete > .tiny-autocomplete.fix-slot > .tiny-input > div > .tiny-input__suffix')
  await expect(prefix).toBeVisible()
  await expect(suffix).toBeVisible()

  await page.locator('.demo-autocomplete > .tiny-autocomplete.default-slot').click()
  await expect(page.getByRole('option', { name: 'GFD科技YX公司 福州' })).toBeVisible()
})
