import { expect, test } from '@playwright/test'

test('close 事件触发弹窗并移除元素', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('http://localhost:7130/pc/tag/tag-event-close')

  const first = page.locator('.tiny-tag').filter({ hasText: '标签一' })
  const close = first.locator('.tiny-tag__close')
  const modal = page.locator('.tiny-modal__box')

  await close.click()
  await modal.waitFor({ state: 'attached', timeout: 100 })
  await expect(first).not.toBeVisible()
})
