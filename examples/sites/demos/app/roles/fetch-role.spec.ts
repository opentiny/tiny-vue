import { test, expect } from '@playwright/test'

test('fetch-role', async ({ page }) => {
  await page.goto('http://localhost:7130/pc/roles/fetch-role')
  const reference = page.locator('.tiny-roles .tiny-popover__reference')
  const list = page.locator('.tiny-roles__selector')

  await expect(list).toBeHidden()
  await reference.hover()
  await page.waitForTimeout(500)
  await expect(list).toBeVisible()
  await page.getByRole('listitem').filter({ hasText: 'Guest' }).click()
  await page.waitForTimeout(500)
  await expect(page.getByText('当前选中的角色id是1003')).toBeVisible()
})
