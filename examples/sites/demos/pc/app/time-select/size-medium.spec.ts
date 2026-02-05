import { test, expect } from '@playwright/test'

test('medium 尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-select#size-medium')
  const mediumBox = page.locator('#size-medium').locator('.tiny-input__inner').nth(0)
  const smallBox = page.locator('#size-medium').locator('.tiny-input__inner').nth(1)
  const miniBox = page.locator('#size-medium').locator('.tiny-input__inner').nth(2)
  await expect(mediumBox).toHaveCSS('height', '40px')
  await expect(smallBox).toHaveCSS('height', '28px')
  await expect(miniBox).toHaveCSS('height', '24px')
})
