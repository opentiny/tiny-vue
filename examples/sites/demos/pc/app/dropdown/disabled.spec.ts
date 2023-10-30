import { test, expect } from '@playwright/test'

test('禁用下拉菜单', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#disabled')

  const preview = page.locator('#preview')
  const disabledDropDown = preview.locator('.tiny-dropdown').nth(1)
  const dropDownMenu = page.locator('body > .tiny-dropdown-menu')

  await expect(disabledDropDown.locator('.tiny-dropdown__trigger')).toHaveAttribute('disabled', 'true')
  await expect(disabledDropDown.locator('.tiny-dropdown__trigger')).toHaveCSS('cursor', 'not-allowed')
  await expect(disabledDropDown.locator('.tiny-dropdown__title')).toHaveCSS('color', 'rgb(173, 176, 184)')
  await expect(disabledDropDown.locator('svg')).toHaveCSS('fill', 'rgb(173, 176, 184)')
  await disabledDropDown.hover()
  await expect(dropDownMenu).not.toBeVisible()
})
