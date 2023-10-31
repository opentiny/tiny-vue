import { test, expect } from '@playwright/test'

test('横向时间线', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-line#horizontal-step')

  const timeline = page.locator('#preview .tiny-steps')
  await expect(timeline).toHaveClass(/is-horizontal/)
  await expect(timeline.locator('div').first()).toHaveClass(/tiny-steps-normal/)
})
