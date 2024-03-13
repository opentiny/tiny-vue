import { test, expect } from '@playwright/test'

test('自定义服务', async ({ page }) => {
  await page.goto('hrapprover#custom-service')
  await page.locator('#custom-service').getByRole('img').click()
  await page.waitForTimeout(200)
  await expect(page.getByRole('cell', { name: 'test1' })).toBeVisible()
  await expect(page.getByRole('cell', { name: 'test2' })).toBeVisible()
  await expect(page.getByRole('cell', { name: 'test3' })).toBeVisible()
})
