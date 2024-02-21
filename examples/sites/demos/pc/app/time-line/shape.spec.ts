import { test, expect } from '@playwright/test'

test('圆点外观', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-line#shape')

  const timeline = page.locator('#shape .tiny-steps-timeline')
  await expect(timeline.locator('.dot').first()).toBeVisible()
  await expect(timeline.locator('.tiny-timeline-item__content .time').first()).toBeVisible()

  await page.getByRole('button', { name: '点击切换 shape 为 circle' }).click()
  await expect(timeline.locator('.dot').first()).not.toBeVisible()
  await expect(timeline.locator('.tiny-timeline-item__content .time').first()).not.toBeVisible()
})
