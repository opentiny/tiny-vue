import { test, expect } from '@playwright/test'

test('debounce', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('autocomplete#debounce')
  await page.getByText('去抖延时').nth(3).click()
 
  await page.getByRole('textbox', { name: '请输入内容', exact: true }).click()
  await expect(page.getByRole('option', { name: 'WWWW科技YX公司' })).not.toBeVisible()
  await page.waitForTimeout(1000)
  await expect(page.getByRole('option', { name: 'WWWW科技YX公司' })).toBeVisible()
  await expect(
    page.locator('.demo-autocomplete > .tiny-autocomplete > .tiny-input > .tiny-input-display-only > input')
  ).toHaveAttribute('debounce', '1000')
})
