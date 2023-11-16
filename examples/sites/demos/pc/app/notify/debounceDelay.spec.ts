import { test, expect } from '@playwright/test'

test('配置防抖', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('notify#debounceDelay')
  await page.getByRole('button', { name: 'Debounce' }).click()
  await page.waitForTimeout(3000)
  const db = page
    .locator('div')
    .filter({
      hasText:
        '通知消息的标题通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文'
    })
    .first()
  await expect(db).toBeVisible
})
