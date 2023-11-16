import { test, expect } from '@playwright/test'

test('不同尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#size')

  const preview = page.locator('#preview')
  const dropDown = preview.locator('.tiny-dropdown')
  const defaultDropDown = dropDown.first()
  const mediumDropDown = dropDown.nth(1)
  const smallDropDown = dropDown.nth(2)
  const miniDropDown = dropDown.nth(3)

  await expect(defaultDropDown.locator('.tiny-button-group')).toHaveCSS('height', '28px')
  await expect(mediumDropDown.locator('.tiny-button-group')).toHaveCSS('height', '40px')
  await expect(smallDropDown.locator('.tiny-button-group')).toHaveCSS('height', '32px')
  await expect(miniDropDown.locator('.tiny-button-group')).toHaveCSS('height', '24px')
})
