import { test, expect } from '@playwright/test'

test('Textpopup 分隔符', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('text-popup#separtor')

  const preview = page.locator('#preview')
  const small = preview.locator('input')
  const larger = preview.locator('textarea')

  await expect(small).not.toHaveValue(';')
  await small.click()
  await larger.fill('111')
  await larger.press('Enter')
  await larger.fill('111\n222')
  await larger.press('Enter')
  await larger.fill('111\n222\n333')
  await preview.click()
  await expect(small).toHaveValue('111;222;333')
})
