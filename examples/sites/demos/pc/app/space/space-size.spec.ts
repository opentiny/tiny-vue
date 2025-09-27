import { test, expect } from '@playwright/test'

test('Space size 动态调整', async ({ page }) => {
  await page.goto('space#space-size-dynamic')

  const space = page.locator('#space-size-dynamic [data-tag="tiny-space"]')

  // 初始值 gap: 10px 10px
  await expect(space).toHaveAttribute('style', /gap:\s*10px 10px/)

  // 调整 slider (横向间距变 20)
  const rowSlider = page.locator('#space-size-dynamic .tiny-slider').first()
  await rowSlider.click({ position: { x: 150, y: 2 } }) // 模拟点击滑动条
  await expect(space).toHaveAttribute('style', /gap:\s*10px 20px/)

  // 调整 slider (纵向间距变 30)
  const colSlider = page.locator('#space-size-dynamic .tiny-slider').nth(1)
  await colSlider.click({ position: { x: 200, y: 2 } })
  await expect(space).toHaveAttribute('style', /gap:\s*30px 20px/)
})
