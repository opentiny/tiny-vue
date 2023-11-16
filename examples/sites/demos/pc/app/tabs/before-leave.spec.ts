import { test, expect } from '@playwright/test'

test('离开前事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tabs#before-leave')

  const tabs = page.locator('.tiny-tabs')
  const tabItem = tabs.getByRole('tab', { name: '表单组件' })
  const activeItem = page.getByRole('tab', { name: '数据组件' })
  const notify = page.locator('.tiny-notify')

  await expect(activeItem).toHaveClass(/is-active/)
  await tabItem.click()
  await expect(activeItem).toHaveClass(/is-active/)
  await notify.waitFor({ state: 'attached', timeout: 100 })
})
