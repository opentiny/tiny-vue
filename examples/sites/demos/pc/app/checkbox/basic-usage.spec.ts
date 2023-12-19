import { test, expect } from '@playwright/test'

test('基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('checkbox#basic-usage')
  const demo = page.locator('#basic-usage')
  const checkbox = demo.locator('.tiny-checkbox')
  await expect(checkbox).toHaveClass(/is-checked/)
  await expect(checkbox.locator('.tiny-checkbox__inner')).toHaveCSS('background-color', 'rgb(94, 124, 224)')
  await expect(checkbox.locator('.tiny-checkbox__inner')).toHaveCSS('border-left-color', 'rgb(94, 124, 224)')
  await checkbox.click()
  await expect(checkbox).not.toHaveClass(/is-checked/)
})
