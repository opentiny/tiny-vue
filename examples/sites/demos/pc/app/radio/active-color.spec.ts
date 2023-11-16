import { test, expect } from '@playwright/test'

test('颜色设置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('radio#active-color')
  const radio = page.locator('.is-active > .tiny-radio-button__inner')
  await expect(radio).toHaveCSS('background-color', 'rgb(142, 240, 227)')
  await expect(radio).toHaveCSS('border-color', 'rgb(142, 240, 227)')
  await expect(radio).toHaveCSS('box-shadow', 'rgb(142, 240, 227) -1px 0px 0px 0px')
})
