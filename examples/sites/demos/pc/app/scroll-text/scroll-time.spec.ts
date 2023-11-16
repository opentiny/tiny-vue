import { test, expect } from '@playwright/test'

test('滚动时间间隔', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('scroll-text#scroll-time')
  await expect(page.locator('.tiny-scroll-text__content')).toHaveCSS('animation-duration', '10s')
})
