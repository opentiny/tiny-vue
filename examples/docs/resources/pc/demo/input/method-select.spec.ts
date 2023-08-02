import { test, expect } from '@playwright/test'

test('选中输入框文本', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/input/method-select')
  await page.getByPlaceholder('请输入内容', { exact: true }).click()
  await page.getByPlaceholder('请输入内容', { exact: true }).fill('123')
  await page.getByRole('button', { name: '选中输入框内容' }).click()
  await page.keyboard.press('Backspace')
  const inputValue = await page.locator('#preview').getByRole('textbox').inputValue()
  await expect(inputValue).toEqual('')
})
