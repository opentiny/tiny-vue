import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popover#basic-usage')

  let button = page.getByRole('button', { name: '悬浮我提示' })
  let pop = page.getByRole('tooltip', { name: /这是一段内容/ })

  await button.hover()
  await expect(pop).toBeVisible()
})
