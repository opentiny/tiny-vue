import { test, expect } from '@playwright/test'

test('输入框前置与后置图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  page.goto('input#prefix-suffix-icon')

  const input1 = page.locator('.demo-input-icons .tiny-mobile-input').first()
  const input2 = page.locator('.demo-input-icons .tiny-mobile-input').nth(1)

  await expect(input1.locator('.tiny-mobile-input__prefix svg')).toBeVisible()
  await expect(input2.locator('.tiny-mobile-input__suffix svg')).toBeVisible()
})
