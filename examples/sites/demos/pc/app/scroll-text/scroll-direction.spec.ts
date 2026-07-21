import { test, expect } from '@playwright/test'

test('文字滚动方向', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('scroll-text#scroll-direction')
  await expect(page.locator('.tiny-scroll-text__content > div').nth(0)).toHaveCSS('animation-name', 'scroll-left')
  await expect(page.locator('.tiny-scroll-text__content > div').nth(1)).toHaveCSS('animation-name', 'scroll-right')
  await expect(page.locator('.tiny-scroll-text__content > div').nth(2)).toHaveCSS('animation-name', 'scroll-up')
  await expect(page.locator('.tiny-scroll-text__content > div').nth(3)).toHaveCSS('animation-name', 'scroll-down')
})
