import { test, expect } from '@playwright/test'

test('自适应容器尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/image/auto-fit-container-size')
  const fill = page.getByRole('img').first()
  await expect(fill).toHaveCSS('object-fit', 'fill')
  const contain = page.getByRole('img').nth(1)
  await expect(contain).toHaveCSS('object-fit', 'contain')
  const cover = page.getByRole('img').nth(2)
  await expect(cover).toHaveCSS('object-fit', 'cover')
  const none = page.getByRole('img').nth(3)
  await expect(none).toHaveCSS('object-fit', 'none')
  const scaleDown = page.getByRole('img').nth(4)
  await expect(scaleDown).toHaveCSS('object-fit', 'scale-down')
})
