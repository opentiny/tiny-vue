import { test, expect } from '@playwright/test'

test('宽度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popover#popover-width')

  let button = page.getByRole('button', { name: '悬浮我看效果' })
  let pop = page.getByRole('tooltip', { name: /这是一段内容/ })

  await button.hover()
  await expect(pop).toHaveCSS('height', '300px')
})
