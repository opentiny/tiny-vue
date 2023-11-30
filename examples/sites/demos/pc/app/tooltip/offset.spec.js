import { test, expect } from '@playwright/test'

test('测试偏移量', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tooltip#offset')

  const tip = page.getByRole('tooltip', { name: '出现位置的偏移量' })
  await expect(tip).toBeVisible()
})
