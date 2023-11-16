import { test, expect } from '@playwright/test'

test('触发方式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#trigger')

  const preview = page.locator('#preview')
  const dropDown = preview.locator('.tiny-dropdown')
  const dropDownMenu = page.locator('body > .tiny-dropdown-menu')
  const hoverTrigger = dropDown.first()
  const clickTrigger = dropDown.nth(1)

  await hoverTrigger.hover()
  await expect(dropDownMenu.first()).toBeVisible()
  await clickTrigger.hover()
  await expect(dropDownMenu.nth(1)).not.toBeVisible()
  await clickTrigger.click()
  await expect(dropDownMenu.nth(1)).toBeVisible()
})
