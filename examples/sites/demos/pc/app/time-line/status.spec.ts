import { test, expect } from '@playwright/test'

test('节点状态', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-line#status')

  const timeline = page.locator('#preview .tiny-steps-timeline')
  const timelineItems = timeline.locator('.tiny-timeline-item')
  await expect(timelineItems.first()).toHaveClass(/timeline-item--primary/)
  await expect(timelineItems.nth(1)).toHaveClass(/timeline-item--success/)
  await expect(timelineItems.nth(2)).toHaveClass(/timeline-item--warning/)
  await expect(timelineItems.nth(3)).toHaveClass(/timeline-item--danger/)
  await expect(timelineItems.nth(4)).toHaveClass(/timeline-item--info/)
})
