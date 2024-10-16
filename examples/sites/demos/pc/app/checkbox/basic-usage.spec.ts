import { test, expect } from '@playwright/test'

test('基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('checkbox#basic-usage')
  const demo = page.locator('#basic-usage')
  const checkbox = demo.locator('.tiny-checkbox')
  await expect(checkbox).toHaveClass(/is-checked/)
  await expect(checkbox.locator('.tiny-checkbox__inner svg')).toHaveCSS('fill', 'rgb(20, 118, 255)')
  await checkbox.click()
  await expect(checkbox).not.toHaveClass(/is-checked/)
})
