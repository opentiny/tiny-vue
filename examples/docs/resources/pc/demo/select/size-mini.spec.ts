import { test, expect } from '@playwright/test'

test('size-mini', async ({ page }) => {
  await page.goto('http://localhost:7130/pc/select/size-mini')

  const input = page.locator('#preview .tiny-input')
  await expect(input).toHaveClass(/tiny-input-mini/)
})
