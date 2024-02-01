import { expect, test } from '@playwright/test'

test('事件是否正常触发', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('search#events')

  const modal = page.locator('.tiny-modal')
  const input = page.locator('.tiny-search').getByRole('textbox')
  const button = page.locator('.tiny-search__input-btn > a').first()

  await button.click()
  await expect(modal).toHaveCount(1)
  await input.first().fill('111')
  await button.click()
  await modal.getByText('111').isVisible()

  // change事件
  await input.nth(1).fill('111')
  await input.nth(1).press('Enter')
  await modal.getByText('change: 111').isVisible()

  // clear 事件
  await input.nth(2).fill('111')
  await page.locator('#events a').nth(2).click()
  await modal.getByText('clear').isVisible()

  // select事件
  const search = page.locator('.tiny-search').nth(3)
  const expand = search.locator('.icon-outer')
  const option = search.locator('.tiny-search__poplist-item').filter({ hasText: '找谁' })
  const text = search.locator('.tiny-search__text')
  const modalContent = modal.getByText('找谁')

  await expect(text).toHaveText('找人')
  await expand.click()
  await option.click() // 下拉选择
  await expect(text).toHaveText('找谁')
  await modalContent.waitFor({ state: 'attached', timeout: 100 })
})
