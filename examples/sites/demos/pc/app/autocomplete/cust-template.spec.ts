import { test, expect } from '@playwright/test'

test('cust-template', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/autocomplete/cust-template')
  await page.locator('#preview').getByPlaceholder('请输入内容').click()
  await expect(page.getByText('WWWW科技YX公司')).toBeVisible()
})
