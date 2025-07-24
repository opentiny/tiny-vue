import { expect, test } from '@playwright/test'

test('插槽是否正常显示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('search#slot-prefix-suffix')

  const prefixSlotSearch = page.locator('.tiny-search').first()
  const prefixLocator = prefixSlotSearch.locator('.tiny-search__prefix > svg')

  await expect(prefixLocator).toBeVisible()
  await expect(prefixLocator).toHaveCSS('font-size', '16px')

  const suffixSlotSearch = page.locator('.tiny-search').nth(1)
  const suffixLocator = suffixSlotSearch.locator('svg.tiny-search__suffix')

  await expect(suffixLocator).toBeVisible()
  await expect(suffixLocator).toHaveCSS('font-size', '14px')
})

test('disabled', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('search#slot-prefix-suffix')

  await page.locator('.tiny-button').last().click()

  const searchLocators = await page.locator('.tiny-search').all()
  for (const search of searchLocators) {
    const input = search.locator('input')
    await expect(input).toBeDisabled()
  }
})
