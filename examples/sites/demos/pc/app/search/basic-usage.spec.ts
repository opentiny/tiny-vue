import { expect, test } from '@playwright/test'

test('是否正常渲染', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://127.0.0.1:7130/pc/search/basic-usage')

  const search = page.locator('#preview .tiny-search')
  const first = search.locator('.tiny-search__line')
  const selector = search.locator('.tiny-search__selector')
  const firstPresent = first.locator('.tiny-search__present')
  const firstInput = first.locator('.tiny-search__input')
  const icon = first.locator('a > svg')

  await expect(first).toBeVisible()
  await expect(icon).toBeVisible()
  await expect(selector).not.toBeVisible()
  await expect(firstPresent).not.toBeVisible()
  await expect(firstInput).toHaveValue('搜索')
  await firstInput.fill('123')
  await expect(firstInput).toHaveValue('123')
})
