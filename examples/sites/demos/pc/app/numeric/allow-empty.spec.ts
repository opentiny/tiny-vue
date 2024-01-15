import { test, expect } from '@playwright/test'

test('可清空特性', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('numeric#allow-empty')
  await page.getByRole('button').nth(1).click()
  await page.getByRole('spinbutton').click()
  await page.getByRole('spinbutton').press('ArrowRight')
  await page.getByRole('spinbutton').fill('')
  await page.getByRole('button').nth(2).click()
})
