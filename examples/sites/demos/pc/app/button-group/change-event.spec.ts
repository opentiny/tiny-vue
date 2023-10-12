import { test, expect } from '@playwright/test'

test('按钮组change事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/button-group/change-event')

  const preview = page.locator('#preview')
  const btn = preview.locator('.tiny-button-group button')
  const notify = page.locator('.tiny-notify')

  await btn.nth(1).click()
  await expect(notify.filter({ hasText: '触发change事件，当前选中的值为Button2' })).toBeVisible()
  await btn.nth(2).click()
  await expect(notify.filter({ hasText: '触发change事件，当前选中的值为Button3' })).toBeVisible()
})
