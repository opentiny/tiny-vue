import { test, expect } from '@playwright/test'

test('基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('checkbox#basic-usage')
  const checkbox = await page.locator('.tiny-checkbox').first()
  await expect(checkbox).toHaveClass(/is-checked/)
  await expect(checkbox.locator('.tiny-checkbox__inner svg path').nth(0)).toHaveCSS('fill', 'rgb(20, 118, 255)')
  await checkbox.click()
  await expect(checkbox).not.toHaveClass(/is-checked/)
})
