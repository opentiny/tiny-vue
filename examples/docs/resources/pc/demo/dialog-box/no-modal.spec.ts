import { test, expect } from '@playwright/test'

test('不启用遮罩层', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/dialog-box/no-modal')

  await page.getByRole('button', { name: '无遮罩' }).click()
  await expect(page.locator('.v-modal')).not.toBeVisible()
})