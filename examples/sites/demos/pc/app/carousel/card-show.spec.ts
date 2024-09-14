import { test, expect } from '@playwright/test'

test('轮播卡片', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('carousel#card-show')
  const preview = page.locator('#card-show')
  const btnRight = preview.getByRole('button').nth(1)
  await btnRight.click()
  await preview
    .locator('div')
    .filter({ hasText: /^2-11-1-content$/ })
    .first()
  expect(btnRight).toHaveCSS('fill', 'rgb(194, 194, 194)')
})
