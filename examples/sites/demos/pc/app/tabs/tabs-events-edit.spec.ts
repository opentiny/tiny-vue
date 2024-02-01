import { test, expect } from '@playwright/test'

test('编辑事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tabs#tabs-events-edit')

  const tabs = page.locator('.tiny-tabs')
  const tabItem = tabs.getByRole('tab', { name: '表单组件' })
  const close = tabItem.locator('.tiny-tabs__icon-close')
  const add = tabs.locator('.tiny-tabs__new-tab')
  const modal = page.locator('.tiny-modal')

  await close.click()
  await modal.first().isVisible()
  await add.click()
  await modal.nth(1).isVisible()
})
