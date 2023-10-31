import { expect, test } from '@playwright/test'

test('自定义搜索并且展示的字段', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('search#show-selected-types')

  const search = page.locator('.tiny-search')
  const expand = search.locator('.icon-outer')
  const option = search.locator('.tiny-search__poplist-item').filter({ hasText: '找谁' })
  const text = search.locator('.tiny-search__present > b')

  await expect(text).toHaveText('找人')
  await expand.click()
  await option.click() // 下拉选择
  await expect(text).toHaveText('找谁')
})
