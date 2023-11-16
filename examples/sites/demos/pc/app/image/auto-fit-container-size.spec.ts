import { test, expect } from '@playwright/test'

test('自适应容器尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('image#auto-fit-container-size')
  const fill = page.locator('.tiny-image__inner').first()
  await expect(fill).toHaveCSS('object-fit', 'fill')
  const contain = page.locator('.tiny-image__inner').nth(1)
  await expect(contain).toHaveCSS('object-fit', 'contain')
  const cover = page.locator('.tiny-image__inner').nth(2)
  await expect(cover).toHaveCSS('object-fit', 'cover')
  const none = page.locator('.tiny-image__inner').nth(3)
  await expect(none).toHaveCSS('object-fit', 'none')
  const scaleDown = page.locator('.tiny-image__inner').nth(4)
  await expect(scaleDown).toHaveCSS('object-fit', 'scale-down')
})
