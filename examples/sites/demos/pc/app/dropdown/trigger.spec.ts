import { test, expect } from '@playwright/test'

test('触发方式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#trigger')

  const wrap = page.locator('#trigger')
  const dropDown = wrap.locator('.tiny-dropdown')
  const dropDownMenu = page.locator('body > .tiny-dropdown-menu')
  const hoverTrigger = dropDown.first()
  const clickTrigger = dropDown.nth(1)

  // hover
  await page.waitForTimeout(1200)
  await hoverTrigger.hover()
  await expect(dropDownMenu.first()).toBeVisible()
  // click
  await page.waitForTimeout(1200)
  await clickTrigger.hover()
  await expect(dropDownMenu.nth(1)).not.toBeVisible()
  await clickTrigger.click()
  await expect(dropDownMenu.nth(1)).toBeVisible()
})
