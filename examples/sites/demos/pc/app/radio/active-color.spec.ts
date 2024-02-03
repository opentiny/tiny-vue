import { test, expect } from '@playwright/test'

test('自定义颜色', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('radio#active-color')

  const demo = page.locator('#active-color')
  const radio = demo.locator('.is-active > .tiny-radio-button__inner')

  await expect(radio).toHaveCSS('background-color', 'rgb(250, 152, 65)')
  await expect(radio).toHaveCSS('border-color', 'rgb(250, 152, 65)')
  await expect(radio).toHaveCSS('box-shadow', 'rgb(250, 152, 65) -1px 0px 0px 0px')
})
