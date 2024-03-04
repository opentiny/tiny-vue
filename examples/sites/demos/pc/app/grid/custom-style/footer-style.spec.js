import { test, expect } from '@playwright/test'

test('自定义表尾行样式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-custom-style#custom-style-footer-style')
  await expect(page.locator('.footer__row--red')).toHaveCSS('background-color', 'rgb(219, 112, 147)')
  await expect(page.locator('.footer__cell--red').first()).toHaveCSS('background-color', 'rgb(219, 112, 147)')
  await expect(page.locator('.footer__row--green')).toHaveCSS('background-color', 'rgb(0, 128, 0)')
  await expect(page.locator('.footer__cell--blue')).toHaveCSS('background-color', 'rgb(45, 183, 245)')
})
