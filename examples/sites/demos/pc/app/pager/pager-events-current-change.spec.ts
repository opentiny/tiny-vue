import { test, expect } from '@playwright/test'

test('页码发生变化时触发事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('pager#pager-events-current-change')

  const preview = page.locator('#preview')
  const pager = preview.locator('.tiny-pager')
  const pageItem = pager.locator('.tiny-pager__pages li')
  const modalBox = page.locator('.tiny-modal__box')

  await pageItem.last().click()
  await expect(modalBox.filter({ hasText: 'current-change 事件，当前页: 10' })).toBeVisible()
  await pageItem.first().click()
  // 需匹配以1结尾
  await expect(modalBox.filter({ hasText: /current-change 事件，当前页: 1$/ })).toBeVisible()
})
