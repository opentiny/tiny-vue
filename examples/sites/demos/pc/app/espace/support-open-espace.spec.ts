import { test, expect } from '@playwright/test'

test('用户联系人使用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('espace#support-open-espace')

  const espace = page.locator('.tiny-card-template .tiny-espace')
  await page.getByRole('link', { name: '小红' }).hover()
  await expect(espace).toBeVisible()
  await page.getByRole('link', { name: 'im:test1' }).click()
})
