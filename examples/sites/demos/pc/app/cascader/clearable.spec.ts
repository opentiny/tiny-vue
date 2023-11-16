import { test, expect } from '@playwright/test'

test('可清空', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('cascader#clearable')
  const text = await page.getByRole('textbox', { name: '请选择' }).inputValue()
  await expect(text).toEqual('指南+安装+项目登记')
  await page.locator('.tiny-input__suffix-inner > .tiny-svg').click()
  const textClear = await page.getByRole('textbox', { name: '请选择' }).inputValue()
  await expect(textClear).toEqual('')
  const medium = page.locator('.tiny-cascader--medium')
  await expect(medium).toBeVisible()
})
