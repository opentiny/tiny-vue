import { test, expect } from '@playwright/test'

test('Textpopup 清空value值', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('text-popup#clear-value')

  const preview = page.locator('#preview')
  const button = preview.getByRole('button', { name: '点击清除' })
  const small = preview.locator('input')
  const larger = preview.locator('textarea')

  // 输入框输入文字后，点击清楚按钮清空文字
  await small.click()
  await larger.fill('111')
  await preview.click()
  await expect(small).toHaveValue('111')
  await button.click()
  await expect(small).not.toHaveValue('111')
})
