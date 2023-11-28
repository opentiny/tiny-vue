import { test, expect } from '@playwright/test'

test('禁用和尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('pager#disabled-and-size')

  const demo = page.locator('#disabled-and-size')
  const pager = demo.locator('.tiny-pager').first()
  const sizeChange = pager.locator('.tiny-pager__page-size')
  const pageItem = pager.locator('.tiny-pager__pages li')
  const prev = pager.locator('.tiny-pager__btn-prev')
  const next = pager.locator('.tiny-pager__btn-next')

  await demo.locator('.tiny-switch').click()
  await expect(sizeChange).toHaveCSS('color', 'rgb(138, 142, 153)')
  await expect(sizeChange).toHaveCSS('border-top-color', 'rgb(223, 225, 230)')
  await expect(prev).toBeDisabled()
  await expect(next).toBeDisabled()
  await expect(pageItem.first()).toHaveCSS('cursor', 'not-allowed')
  await expect(pageItem.last()).toHaveCSS('cursor', 'not-allowed')
})
