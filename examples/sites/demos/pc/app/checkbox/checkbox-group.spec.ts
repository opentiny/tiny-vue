import { test, expect } from '@playwright/test'

test('复选框组', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('checkbox#checkbox-group')

  const demo = page.locator('#checkbox-group')
  const group = demo.locator('.tiny-checkbox-group')
  await group.first().getByText('复选框1').first().click()
  await expect(group.locator('label').first()).not.toHaveClass(/is-checked/)
  await expect(group.locator('label').nth(1)).toHaveClass(/is-checked/)
})
