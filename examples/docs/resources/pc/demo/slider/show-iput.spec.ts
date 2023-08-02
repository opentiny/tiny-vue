import { test, expect } from '@playwright/test'

test('输入框模式', async ({ page }) => {
  await page.goto('http://localhost:7130/pc/slider/show-iput')
  await page.locator('#preview').getByRole('textbox').click()
  await page.locator('#preview').getByRole('textbox').fill('40')
  await page.waitForTimeout(300)
})
