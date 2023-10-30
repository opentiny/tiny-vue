import { expect, test } from '@playwright/test'

test('选择事件是否正常触发', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('search#select-events')

  const search = page.locator('.tiny-search')
  const expand = search.locator('.icon-outer')
  const option = search.locator('.tiny-search__poplist-item').filter({ hasText: '找谁' })
  const text = search.locator('.tiny-search__text')
  const modalText = page.locator('.tiny-modal').getByText('找谁')

  await expect(text).toHaveText('找人')
  await expand.click()
  await option.click() // 下拉选择
  await expect(text).toHaveText('找谁')
  await modalText.waitFor({ state: 'attached', timeout: 100 })
})
