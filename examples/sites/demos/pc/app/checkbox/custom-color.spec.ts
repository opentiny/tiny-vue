import { test, expect } from '@playwright/test'

test('自定义颜色', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('checkbox#custom-color')

  const demo = page.locator('#custom-color')
  const checkboxButton = demo.locator('.tiny-checkbox-group .tiny-checkbox-button__inner')

  await expect(checkboxButton.first()).toHaveCSS('background-color', 'rgb(250, 152, 65)')
  await expect(checkboxButton.first()).toHaveCSS('border-bottom-color', 'rgb(250, 152, 65)')
  await expect(checkboxButton.first()).toHaveCSS('color', 'rgb(238, 238, 238)')
})
