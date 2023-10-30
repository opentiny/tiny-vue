import { test, expect } from '@playwright/test'

test('表尾class类名', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-footer#footer-footer-class-name')
  await expect(page.getByRole('cell', { name: '平均' })).toHaveCSS('background-color', 'rgb(255, 192, 203)')
})
