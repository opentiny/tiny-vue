import { test, expect } from '@playwright/test'

test('纵向时间线', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-line#vertical-step')

  const timeline = page.locator('#preview .tiny-steps')
  await expect(timeline).not.toHaveClass(/is-horizontal/)
  await expect(timeline.locator('div').first()).toHaveClass('tiny-steps-timeline')
})
