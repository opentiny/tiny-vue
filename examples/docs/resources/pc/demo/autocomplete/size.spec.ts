import { test, expect } from '@playwright/test'

test('size', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/autocomplete/size')
  await page.getByText('输入框大小').nth(1).click()
  await page.locator('#preview').getByPlaceholder('请输入内容').click()
  await page.getByRole('option', { name: 'WWWW科技YX公司' }).click()
  await expect(page.locator('//div[@class="tiny-input tiny-input-medium"]')).toHaveClass(/tiny-input-medium/)
})
