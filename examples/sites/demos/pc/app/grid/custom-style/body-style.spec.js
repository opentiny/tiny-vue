import { test, expect } from '@playwright/test'

test('自定义表体样式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-custom-style#custom-style-body-style')
  await expect(page.locator('.row__word--red').first()).toHaveCSS('color', 'rgb(219, 112, 147)')
  await expect(page.locator('.col-orange').first()).toHaveCSS('background-color', 'rgb(255, 192, 203)')
})
