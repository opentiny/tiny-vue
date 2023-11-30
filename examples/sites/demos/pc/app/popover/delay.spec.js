import { test, expect } from '@playwright/test'

test('延迟显示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popover#open-delay')

  let button = page.getByRole('button', { name: '鼠标悬浮我两秒' })
  let pop = page.getByRole('tooltip', { name: /这是一段内容/ })

  await button.hover()
  await expect(pop).toBeHidden()

  await page.waitForTimeout(2100)
  await expect(pop).toBeVisible()
})
