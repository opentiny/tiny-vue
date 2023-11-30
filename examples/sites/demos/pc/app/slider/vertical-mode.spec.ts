import { test, expect } from '@playwright/test'

test('竖向滑块', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('slider#vertical-mode')
  const slider = page.locator('.tiny-slider-container .tiny-slider')

  await expect(slider).toHaveClass(/tiny-slider__vertical/)
})
