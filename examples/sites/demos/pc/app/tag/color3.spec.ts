import { test, expect } from '@playwright/test'

test('边框和自定义背景色', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('tag#color3')

  const tags = page.locator('.tiny-tag')
  const first = tags.nth(0)

  await expect(tags).toHaveClass([
    /tiny-tag/,
    /tiny-tag--success/,
    /tiny-tag--info/,
    /tiny-tag--warning/,
    /tiny-tag--danger/
  ])
  await expect(tags).toHaveClass([/is-hit/, /is-hit/, /is-hit/, /is-hit/, /is-hit/])
  await expect(first).toHaveCSS('background-color', 'rgba(82, 196, 26, 0.8)')
  await expect(first).toHaveCSS('border-color', 'rgb(87, 93, 108)')
})
