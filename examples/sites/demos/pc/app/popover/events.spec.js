import { test, expect } from '@playwright/test'

test('事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popover#popover-events')

  let button = page.getByRole('button', { name: '悬浮我触发' })
  let pop = page.getByRole('tooltip', { name: /这是一段内容/ })
  let notify1 = page.locator('.tiny-notify__content').filter({ hasText: /显示时触发/ })
  let notify2 = page.locator('.tiny-notify__content').filter({ hasText: /隐藏时触发/ })

  await button.hover()
  await expect(pop).toBeVisible()
  await expect(notify1).toBeVisible()
  await page.mouse.move(0, 0)
  await page.waitForTimeout(300)

  await expect(notify2.nth(1)).toBeVisible()
})
