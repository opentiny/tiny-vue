import { test, expect } from '@playwright/test'

test('插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  page.goto('input#type-select')

  const input = page.locator('.demo-input .tiny-mobile-input')
  const selectIcon = input.locator('.tiny-mobile-input__select-icon')
  const menu = page.locator('.tiny-mobile-action-sheet__menu').nth(1)
  const menuItem = page.getByText('选项2')

  await expect(input.locator('.tiny-mobile-input__select')).toBeVisible()
  await expect(selectIcon).toBeVisible()

  await selectIcon.click()
  await expect(menu).toBeVisible()
  await menuItem.click()
  await expect(menu).not.toBeVisible()
  await expect(input.locator('input')).toHaveValue('选项2')
})
