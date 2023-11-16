import { expect, test } from '@playwright/test'

test('清空输入值', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('search#clearable')

  const input = page.locator('.tiny-search__input')
  const close = page.locator('.tiny-search__input-btn a').first()

  await input.fill('123')
  await expect(input).toHaveValue('123')
  await close.click()
  await expect(input).toHaveValue('')
})
