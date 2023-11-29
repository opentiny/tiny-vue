import { test, expect } from '@playwright/test'

test('默认插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('checkbox#checkbox-slot')

  const demo = page.locator('#checkbox-slot')
  const checkbox = demo.locator('.tiny-checkbox-group > label')
  await expect(checkbox.first().locator('.tiny-checkbox__label > span')).toHaveCSS('color', 'rgb(94, 124, 224)')
  await expect(checkbox.nth(1).locator('.tiny-checkbox__label > span')).toHaveCSS('color', 'rgb(250, 152, 65)')
})
