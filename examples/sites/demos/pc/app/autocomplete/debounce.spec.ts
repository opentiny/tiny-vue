import { test, expect } from '@playwright/test'

test('debounce', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/autocomplete/debounce')
  await page.getByText('去抖延时').nth(3).click()
  await page.locator('.rel').click()
  await page.locator('#preview').getByPlaceholder('请输入内容').click()
  await page.getByRole('option', { name: 'WWWW科技YX公司' }).click()
  await expect(
    page.locator('.demo-autocomplete > .tiny-autocomplete > .tiny-input > .tiny-input-display-only > input')
  ).toHaveAttribute('debounce', '1000')
})
