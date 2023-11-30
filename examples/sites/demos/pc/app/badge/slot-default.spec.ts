import { test, expect } from '@playwright/test'

test('自定义标记目标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('badge#slot-default')

  const demo = page.locator('#slot-default')
  const badgeWarpper = demo.locator('.tiny-badge__wrapper')

  await expect(badgeWarpper).toContainText('自定义默认插槽')
  await expect(badgeWarpper.getByText('自定义默认插槽').first()).toHaveCSS('color', 'rgb(250, 152, 65)')
})
