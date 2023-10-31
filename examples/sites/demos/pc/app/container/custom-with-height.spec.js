import { test, expect } from '@playwright/test'

test('自定义宽度和高度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('container#custom-with-height')
  await page.locator('.f12 > div:nth-child(6)').click()
  await page.getByText('header-height：80').click()
  await expect(page.locator('.tiny-container > div').first()).toHaveAttribute('style', 'height: 80px;')
  await page.getByText('aside-width：200').click()
  await expect(page.locator('.tiny-container > div').nth(1)).toHaveAttribute('style', 'width: 200px; top: 80px;')
  await page.getByText('footer-height：80').click()
  await expect(page.locator('.tiny-container > div').nth(3)).toHaveAttribute('style', 'height: 80px; left: 200px;')
})
