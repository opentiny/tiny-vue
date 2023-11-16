import { expect, test } from '@playwright/test'

test('自定义下拉选择的内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('search#custom-search-types')

  const search = page.locator('.tiny-search')
  const expand = search.locator('.icon-outer')
  const option = search.locator('.tiny-search__poplist-item').filter({ hasText: '插槽3' })
  const text = search.locator('.tiny-search__text')

  await expect(text).toHaveText('插槽1')
  await expand.click()
  await option.click() // 下拉选择
  await expect(text).toHaveText('插槽3')
})
