import { test, expect } from '@playwright/test'

test('禁用复选框', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('checkbox#disabled')
  const checkbox = page.locator('.tiny-checkbox').first()
  const inner = checkbox.locator('.tiny-checkbox__inner')

  await expect(checkbox).toHaveClass(/is-disabled/)
  await expect(checkbox).toHaveClass(/is-checked/)

  await expect(inner).toHaveCSS('background-color', 'rgb(245, 245, 245)')
  await expect(inner).toHaveCSS('border-color', 'rgb(223, 223, 223)')
  await checkbox.click()
  await expect(checkbox).toHaveClass(/is-checked/)
})
