import { test, expect } from '@playwright/test'

test('配置防抖', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('notify#debounceDelay')
  await page.getByRole('button', { name: 'Debounce' }).click()
  const db = page.locator('.tiny-notify').filter({
    hasText:'通知消息的标题通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文'
  })
  await expect(db).not.toBeVisible()
  await page.waitForTimeout(3000)
  await expect(db).toBeVisible
})
