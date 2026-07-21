import { test, expect } from '@playwright/test'

test('配置式标签', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('tag#basic-usage')

  const tag = page.locator('span').filter({ hasText: '配置式标签' }).first()

  await expect(tag).toHaveCount(1)
})
