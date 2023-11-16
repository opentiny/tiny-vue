import { expect, test } from '@playwright/test'

test('搜索事件是否正常触发', async ({ page }) => {
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
})
