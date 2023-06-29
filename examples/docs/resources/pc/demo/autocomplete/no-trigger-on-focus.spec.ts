import { test, expect } from '@playwright/test'

test('no-trigger-on-focus', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/autocomplete/no-trigger-on-focus')
  await page.locator('#preview').getByPlaceholder('请输入内容').click()
  await expect(page.locator('.tiny-autocomplete-suggestion')).not.toBeVisible()
  await page.locator('#preview').getByPlaceholder('请输入内容').fill('gfd')
  await expect(page.locator('.tiny-autocomplete-suggestion')).toBeVisible()
})
