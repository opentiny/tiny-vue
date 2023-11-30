import { test, expect } from '@playwright/test'

test('复选框按钮', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('checkbox#checkbox-button')

  const demo = page.locator('#checkbox-button')
  const checkboxButton = demo.locator('.tiny-checkbox-button .tiny-checkbox-button__inner')

  await expect(checkboxButton.first()).toHaveCSS('background-color', 'rgb(94, 124, 224)')
  await expect(checkboxButton.first()).toHaveCSS('border-bottom-color', 'rgb(94, 124, 224)')
  await expect(checkboxButton.nth(1)).toHaveCSS('background-color', 'rgb(233, 237, 250)')
  await expect(checkboxButton.nth(1)).toHaveCSS('border-bottom-color', 'rgb(233, 237, 250)')

  await checkboxButton.nth(1).click()
  await expect(checkboxButton.nth(1)).toHaveCSS('background-color', 'rgb(94, 124, 224)')
  await expect(checkboxButton.nth(1)).toHaveCSS('border-bottom-color', 'rgb(94, 124, 224)')
})
