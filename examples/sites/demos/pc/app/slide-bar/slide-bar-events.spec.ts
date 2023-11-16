import { test, expect } from '@playwright/test'

test('滚动块事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('slide-bar#slide-bar-events')
  const preview = page.locator('#preview')
  const slideBarContainer = preview.locator('.tiny-slide-bar__content')
  const slideBarList = slideBarContainer.locator('.tiny-slide-bar__list')
  await slideBarList.locator('li').first().click()
  await expect(page.locator('.tiny-modal').filter({ hasText: 'before-click 事件' })).toBeVisible()
  await expect(page.locator('.tiny-modal').filter({ hasText: 'click 事件，回调参数：' })).toBeVisible()
})
