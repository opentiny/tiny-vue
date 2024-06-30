import { test, expect } from '@playwright/test'

test('自定义图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())

  await page.goto('time-line#custom-icon')

  const timeline = page.locator('#custom-icon .tiny-timeline')
  const timelineItems = await timeline.locator('.tiny-timeline-item').all()

  for (const node of timelineItems) {
    await expect(node.locator('.icon-custom .fixicons')).toBeVisible()
  }
})
