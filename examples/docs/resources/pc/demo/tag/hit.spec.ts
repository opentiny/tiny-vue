import { expect, test } from '@playwright/test'

test('是否存在边框', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('http://127.0.0.1:7130/pc/tag/hit')

  const tags = page.locator('.tiny-tag')
  const normal = tags.nth(0)

  await expect(tags).toHaveClass([
    /tiny-tag/,
    /tiny-tag--success/,
    /tiny-tag--info/,
    /tiny-tag--warning/,
    /tiny-tag--danger/
  ])
  await expect(tags).toHaveClass([/is-hit/, /is-hit/, /is-hit/, /is-hit/, /is-hit/])
  await expect(normal).toHaveCSS('border-color', 'rgb(87, 93, 108)')
})
