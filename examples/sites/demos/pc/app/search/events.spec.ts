import { expect, test } from '@playwright/test'

test('事件是否正常触发', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('search#search-events')

  const modal = page.locator('.tiny-modal')
  const input = page.locator('.tiny-search').getByRole('textbox')
  const modalText = modal.getByText('111')
  const button = page.locator('.tiny-search__input-btn > a')
  const empty = modal.getByText('undefined')

  await button.click()
  await expect(empty).toBeVisible()
  await input.fill('111')
  await button.click()
  await modalText.waitFor({ state: 'attached', timeout: 100 })

  // change事件
  await input.fill('111')
  await input.press('Enter')
  await modalText.waitFor({ state: 'attached', timeout: 100 })

  // select事件
  const search = page.locator('.tiny-search')
  const expand = search.locator('.icon-outer')
  const option = search.locator('.tiny-search__poplist-item').filter({ hasText: '找谁' })
  const text = search.locator('.tiny-search__text')
  const modalContent = page.locator('.tiny-modal').getByText('找谁')

  await expect(text).toHaveText('找人')
  await expand.click()
  await option.click() // 下拉选择
  await expect(text).toHaveText('找谁')
  await modalContent.waitFor({ state: 'attached', timeout: 100 })
})
