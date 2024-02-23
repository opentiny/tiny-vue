import { test, expect } from '@playwright/test'

test('自定义内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('floatbar#custom-floatbar-item')

  const floatbar = page.locator('#preview .tiny-float-bar')
  const item1 = floatbar.getByRole('listitem').first()
  const item2 = floatbar.getByRole('listitem').nth(1)
  const item3 = floatbar.getByRole('listitem').nth(2)
  await expect(item1).toHaveText('Custom-A')
  await expect(item2).toHaveText('B')
  await expect(item3).toHaveText('C')
})
