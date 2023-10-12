import { test, expect } from '@playwright/test'

test('表尾统计', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-footer/footer-footer-summation')
  await expect(page.getByRole('cell', { name: '5310' })).toBeVisible()
})
