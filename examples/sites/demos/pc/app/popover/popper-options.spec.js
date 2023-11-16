import { test, expect } from '@playwright/test'

test('弹出框选项', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popover#popper-options')

  let button = page.getByRole('button', { name: '提示' })
  let pop = page.getByRole('tooltip', { name: /这是一段内容/ })

  await button.hover()
  await expect(pop).toBeVisible()
})
