import { test, expect } from '@playwright/test'

test('hide-loading', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('autocomplete#hide-loading')
  await page.getByPlaceholder('请输入内容', { exact: true }).nth(1).click()
  await expect(page.getByRole('listitem').locator('.tiny-svg')).toBeVisible()
  await page.getByPlaceholder('请输入内容', { exact: true }).nth(1).blur()

  await page.getByPlaceholder('请输入内容', { exact: true }).nth(2).click()
  await expect(page.getByRole('listitem').locator('.tiny-svg')).not.toBeVisible()
})
