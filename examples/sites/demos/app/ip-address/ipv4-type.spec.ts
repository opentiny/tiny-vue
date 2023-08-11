import { test, expect } from '@playwright/test'

test('ipAddress IPv4 类型', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/ip-address/ipv4-type')

  const preview = page.locator('#preview')
  const input = preview.getByRole('textbox')

  await expect(input).toHaveCount(4)
})
