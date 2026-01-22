import { test, expect } from '@playwright/test'

test('箭头偏移', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popover#offset')
  const demo = page.locator('#offset')
  await demo
    .locator('div')
    .filter({ hasText: /^箭头偏移：0%箭头偏移示例$/ })
    .getByRole('textbox')
    .fill('50')
  await expect(demo.getByRole('textbox').first()).toHaveValue('50')
  const slider = await demo.locator('.tiny-slider__range').first()
  await expect(slider).toHaveCSS('background-color', 'rgb(20, 118, 255)')

  await demo
    .locator('div')
    .filter({ hasText: /^面板偏移：0%面板偏移示例$/ })
    .getByRole('textbox')
    .fill('40')
  await expect(demo.getByRole('textbox').nth(1)).toHaveValue('40')
  const slider2 = page.locator('.popper__arrow').nth(1)
  await expect(slider2).toHaveCSS('left', '100px')
})
