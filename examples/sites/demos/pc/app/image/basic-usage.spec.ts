import { test, expect } from '@playwright/test'

test('基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('image#basic-usage')

  const preview = page.locator('.pc-demo-container')
  const imgs = preview.locator('.tiny-image > .tiny-image__inner')
  await expect(imgs).toHaveCount(5)

  await expect(imgs.nth(0)).toHaveCSS('object-fit', 'fill')
  await expect(imgs.nth(1)).toHaveCSS('object-fit', 'contain')
  await expect(imgs.nth(2)).toHaveCSS('object-fit', 'cover')
  await expect(imgs.nth(3)).toHaveCSS('object-fit', 'none')
  await expect(imgs.nth(4)).toHaveCSS('object-fit', 'scale-down')
})
