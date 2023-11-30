import { test, expect } from '@playwright/test'

test('PopEditor 多选且初始数据为数组', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popeditor#multi-value-array')

  const preview = page.locator('#multi-value-array')
  const textBox = preview.getByRole('textbox')

  // 多选后文本框里以“@”分割
  await expect(textBox).toHaveValue(/@/)
})
