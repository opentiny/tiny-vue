import { test, expect } from '@playwright/test'

test('事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('filter-panel#event')

  const panel = page.locator('.tiny-filter-panel')
  const button = panel.locator('.tiny-filter-box')
  const popPanel = page.getByRole('tooltip', { name: '大于 等于 小于' })
  const modal = page.locator('.tiny-modal')
  const clear = panel.locator('.filter-icon-close')

  // handle-clear事件
  await button.click()
  await popPanel.isVisible()
  await page.getByRole('radio', { name: '等于' }).click()
  await expect(button).toHaveText('物品数量等于')
  await clear.click()
  await expect(button).toHaveText('物品数量')
  await button.click()

  // visible-change事件
  await button.click()
  await expect(modal.nth(1)).toHaveText('true visibleChange')
  await button.click()
  await popPanel.isHidden()
  await expect(modal.nth(2)).toHaveText('false visibleChange')
})
