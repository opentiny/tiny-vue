import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('filter-panel#basic-usage')

  const panel = page.locator('.tiny-filter-panel')
  const button = panel.locator('.tiny-filter-box')
  const popPanel = page.getByRole('tooltip', { name: '大于 等于 小于' })
  const inputEl = page.locator('.tiny-filter-panel__popover').locator('.tiny-input__inner')
  const disabledBtn = panel.locator('.tiny-filter-box.disabled')
  const switchBtn = page.locator('.mb10 > .tiny-switch')

  await button.click()
  await popPanel.isVisible()
  await page.getByRole('radio', { name: '等于' }).click()
  await button.getByText('物品数量等于').isVisible()
  await inputEl.click()
  await inputEl.fill('10')
  await button.getByText('物品数量等于10').isVisible()

  // 禁用
  await switchBtn.click()
  await expect(disabledBtn).toHaveCount(1)
  await expect(disabledBtn).toHaveCSS('cursor', 'not-allowed')
  await button.click()
  await popPanel.isHidden()
})
