import { test, expect } from '@playwright/test'

test('复选框组和垂直复选框组', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('checkbox#checkbox-group')
  const preview = page.locator('#preview')
  const group = preview.locator('.tiny-checkbox-group')
  await group.first().getByText('复选框1').first().click()
  await group.first().getByText('复选框2').first().click()
  await expect(group.nth(1).locator('label').nth(1)).toHaveClass(/is-checked/)
})
