import { expect, test } from '@playwright/test'

test('设置默认值搜索', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('search#default-value')

  const input = page.locator('.tiny-search__input')

  await expect(input).toHaveValue('搜索')
})
