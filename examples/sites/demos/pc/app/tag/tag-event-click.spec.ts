import { expect, test } from '@playwright/test'

test('click事件是否触发弹窗', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('tag#tag-event-click')

  const first = page.locator('.tiny-tag').first()
  const modal = page.locator('.tiny-modal__box')

  await first.click()
  await modal.waitFor({ state: 'attached', timeout: 100 })
})
