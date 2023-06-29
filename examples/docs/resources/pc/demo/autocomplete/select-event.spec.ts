import { test, expect } from '@playwright/test'

test('select-event', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/autocomplete/select-event')
  await page.getByPlaceholder('请输入内容', { exact: true }).click()
  await page.getByRole('option', { name: 'WWWW科技YX公司' }).click()
  await expect(page.getByText('当前选择：{"value":"WWWW科技YX公司","address":"深圳福田区"}')).toBeVisible()
})
