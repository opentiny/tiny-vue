import { test, expect } from '@playwright/test'

test('hide-loading', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/autocomplete/hide-loading')
  await page.getByPlaceholder('请输入内容').nth(1).click()
  await expect(
    page
      .locator('.demo-autocomplete > div > .tiny-autocomplete > .tiny-input > .tiny-input-display-only > input')
      .first()
  ).toHaveAttribute('hideloading', 'false')
  await page.getByPlaceholder('请输入内容').nth(2).click()
  await expect(
    page
      .locator('.demo-autocomplete > div > .tiny-autocomplete > .tiny-input > .tiny-input-display-only > input')
      .nth(1)
  ).toHaveAttribute('hideloading', 'true')
})
