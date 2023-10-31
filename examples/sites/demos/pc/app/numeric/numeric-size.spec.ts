import { test, expect } from '@playwright/test'

test('尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('numeric#numeric-size')

  // large尺寸
  const largeNumeric = page.locator('#preview .tiny-numeric').first()
  await expect(largeNumeric).toHaveClass(/tiny-numeric--medium/)
  await largeNumeric.getByRole('spinbutton').fill('123')
  await largeNumeric.locator('.tiny-numeric__decrease').click()
  await largeNumeric.locator('.tiny-numeric__increase').click()

  // small尺寸
  const smallNumeric = page.locator('#preview .tiny-numeric').nth(1)
  await expect(smallNumeric).toHaveClass(/tiny-numeric--small/)
  await smallNumeric.getByRole('spinbutton').fill('111')
  await smallNumeric.locator('.tiny-numeric__decrease').click()
  await smallNumeric.locator('.tiny-numeric__increase').click()

  // mini尺寸
  const miniNumeric = page.locator('#preview .tiny-numeric').nth(2)
  await expect(miniNumeric).toHaveClass(/tiny-numeric--mini/)
  await miniNumeric.getByRole('spinbutton').fill('100')
  await miniNumeric.locator('.tiny-numeric__decrease').click()
  await miniNumeric.locator('.tiny-numeric__increase').click()
})
