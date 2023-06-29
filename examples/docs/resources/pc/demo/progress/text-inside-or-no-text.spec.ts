import { test, expect } from '@playwright/test'

test('显示或隐藏文字', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('http://127.0.0.1:7130/pc/progress/text-inside-or-no-text')

  const text = page.getByText('50%')

  await expect(text).toBeVisible()
  await page.getByRole('button', { name: '隐藏文字' }).click()
  await expect(text).not.toBeVisible()
  await page.getByRole('button', { name: '显示文字' }).click()
  await expect(text).toBeVisible()
})
