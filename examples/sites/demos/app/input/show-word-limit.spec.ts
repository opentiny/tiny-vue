import { test, expect } from '@playwright/test'

test('输入字数统计', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/input/show-word-limit')
  const inputCount = page.getByText('/10')
  const textAreaCount = page.getByText('/20')
  await expect(inputCount).toBeVisible()
  await expect(textAreaCount).toBeVisible()
})
