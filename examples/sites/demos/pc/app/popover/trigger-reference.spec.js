import { test, expect } from '@playwright/test'

test('触发源', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popover#trigger-reference')

  let button = page.getByRole('button', { name: '触发源' })
  let pop = page.getByRole('tooltip', { name: /这是一段内容/ })

  await button.hover()
  await expect(pop).toBeVisible()
})
