import { expect, test } from '@playwright/test'

test('下拉选择搜索类型', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('search#search-types')

  const search = page.locator('.tiny-search')
  const expand = search.locator('.icon-outer')
  const option = search.locator('.tiny-search__poplist-item').filter({ hasText: '找文档' })
  const text = search.locator('.tiny-search__text')

  await expect(text).toHaveText('找谁')
  await expand.click()
  await option.click() // 下拉选择
  await expect(text).toHaveText('找文档')
})
