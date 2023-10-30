import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('icon#show-title')
  await page.getByText('显示 Title').nth(1).click()
  await page.getByTitle('复制').locator('svg').click()
  await expect(page.locator('//*[@id="preview"]/div[2]/div[2]')).toHaveAttribute('title', '复制')
})
