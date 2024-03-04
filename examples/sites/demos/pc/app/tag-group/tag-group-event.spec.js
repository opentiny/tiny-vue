import { test, expect } from '@playwright/test'

test('TagGroup 事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tag-group#tag-group-event')

  const tag3 = page.locator('.tiny-tag ').filter({ hasText: '标签三' })
  await tag3.click()

  await expect(page.locator('.tiny-modal__box').filter({ hasText: '当前点击的是第3个标签' })).toBeVisible()
})
