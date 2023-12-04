import { expect, test } from '@playwright/test'

test('事件是否正常触发', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('search#events')

  const modal = page.locator('.tiny-modal')
  const input = page.locator('.tiny-search').getByRole('textbox')
  const modalText = modal.getByText('111')
  const button = page.locator('.tiny-search__input-btn > a').first()
  // const empty = modal.getByText('')

  await button.click()
  await expect(modal).toHaveCount(1)
  await input.first().fill('111')
  await button.click()
  await modalText.isVisible()

  // change事件
  await input.nth(1).fill('111')
  await input.nth(1).press('Enter')
  await modalText.nth(1).isVisible()

  // select事件
  const search = page.locator('.tiny-search').nth(2)
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
