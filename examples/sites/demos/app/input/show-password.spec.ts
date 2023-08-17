import { test, expect } from '@playwright/test'

test('密码显示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/input/show-password')
  const svg = page.locator('g:nth-child(3) > path')
  await expect(svg).toBeVisible()
  await page.locator('input[type="password"]').fill('123123123')
  const value = await page.locator('input[type="password"]').inputValue()
  await expect(value).toBe('123123123')
  await expect(svg).toHaveAttribute('d', 'M16.8 5.097 5.096 16.8-6.608 5.097 5.096-6.608z')
  await page.locator('g:nth-child(3) > path').click()
  await expect(svg).not.toBeVisible()
})
