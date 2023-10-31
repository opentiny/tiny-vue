import { test, expect } from '@playwright/test'

test('弹窗表单', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-box#form-in-dialog')

  const dialogBox = page.locator('.tiny-dialog-box')
  await page.getByRole('button', { name: '弹出表单' }).click()
  await expect(dialogBox.locator('.tiny-form')).toBeVisible()
  await page.locator('#preview').getByRole('textbox').click()
  await page.locator('#preview').getByRole('textbox').fill('name')
  await page.getByText('消息').click()
  await page.locator('label').filter({ hasText: '全部' }).locator('span').nth(1).click()
  await page.getByRole('button', { name: '确定' }).click()
})
