import { test, expect } from '@playwright/test'

test('鼠标悬停时文本停止滚动', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('scroll-text#hover-stop')
  await page.locator('.tiny-scroll-text__content').dispatchEvent('mouseenter')
  await expect(page.locator('.tiny-scroll-text__content')).toHaveCSS('animation-play-state', 'paused')
})
