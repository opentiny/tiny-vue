import { test, expect } from '@playwright/test'

test('按钮形式的复选框未选中时', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('checkbox#button-chek-box')
  const preview = page.locator('#preview')
  const buttonCheck = preview.locator('.tiny-checkbox-button')
  await buttonCheck.click()
  await expect(buttonCheck).toHaveClass(/is-checked/)
  await page.getByRole('button', { name: '获取文本' }).click()
  await expect(page.getByText(/真文本/)).toBeVisible()
})
