import { test, expect } from '@playwright/test'

test('删除事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tabs#tabs-events-close')

  const tabs = page.locator('.tiny-tabs')
  const tabItem = tabs.getByRole('tab', { name: '表单组件' })
  const close = tabItem.locator('.tiny-tabs__icon-close')
  const modal = page.locator('.tiny-modal').first()

  await expect(tabItem).toBeVisible()
  await close.click()
  await expect(tabItem).not.toBeVisible()
  await modal.isVisible()
})
