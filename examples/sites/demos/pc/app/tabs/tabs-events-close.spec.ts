import { test, expect } from '@playwright/test'

test('close 标签关闭事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tabs#tabs-events-close')

  const tabs = page.locator('.tiny-tabs')
  const tabItem = tabs.getByRole('tab', { name: '表单组件' })
  const close = tabItem.locator('.tiny-tabs__icon-close')
  const modal = page.locator('.tiny-modal')

  await expect(tabItem).toBeVisible()
  await close.click()
  await expect(tabItem).not.toBeVisible()
  await modal.waitFor({ state: 'attached', timeout: 100 })
})
