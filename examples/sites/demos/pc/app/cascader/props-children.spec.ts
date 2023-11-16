import { test, expect } from '@playwright/test'

test('指定选项', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('cascader#props-children')
  const text = await page.getByRole('textbox', { name: '请选择' }).inputValue()
  await expect(text).toEqual('指南/安装/安装 CLI')
})
