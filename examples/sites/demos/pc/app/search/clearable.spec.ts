import { expect, test } from '@playwright/test'

test('可清空输入值', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('search#clearable')

  const input = page.locator('.tiny-search__input')
  const close = page.locator('#clearable a').first()

  await input.fill('123')
  await expect(input).toHaveValue('123')
  await close.click()
  await expect(input).toHaveValue('')
})
