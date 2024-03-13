import { test, expect } from '@playwright/test'

test('仅显示最后一级', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('cascader#show-all-levels')
  await page.getByRole('textbox', { name: '请选择' }).click()
  await page.getByText('项目登记').click()
  const text = await page.getByRole('textbox', { name: '请选择' }).inputValue()
  await expect(text).toEqual('项目登记')
})
