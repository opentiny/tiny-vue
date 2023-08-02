import { test, expect } from '@playwright/test'

test('指定选项', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/cascader/props-children')
  const text = await page.locator('#preview').getByRole('textbox').inputValue()
  await expect(text).toEqual('指南/安装/安装 CLI')
})
