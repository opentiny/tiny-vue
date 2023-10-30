import { test, expect } from '@playwright/test'

test('edit事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tabs#tabs-events-edit')

  const tabs = page.locator('.tiny-tabs')
  const tabItem = tabs.getByRole('tab', { name: '表单组件' })
  const close = tabItem.locator('.tiny-tabs__icon-close')
  const add = tabs.locator('.tiny-tabs__new-tab')
  const modal = page.locator('.tiny-modal')

  await close.click()
  await modal.waitFor({ state: 'attached', timeout: 100 })
  await add.click()
  await expect(modal).toHaveCount(2)
})
