import { test, expect } from '@playwright/test'

test('PopEditor 多选且初始数据为数组', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popeditor#multi-value-array')

  const preview = page.locator('#preview')
  const textBox = preview.getByRole('textbox')
  const textBoxValue = page.locator('#preview div').filter({ hasText: 'value 值：[ 1, 2 ]' }).first()

  // 多选后文本框里以“@”分割
  await expect(textBox).toHaveValue(/@/)

  // 值以数组形式
  await expect(textBoxValue).toHaveText(/[ 1, 2 ]/)
})
