import { test, expect } from '@playwright/test'

test('弹窗表单', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-box#form-in-dialog')
  const demo = page.locator('#form-in-dialog')
  const dialogBox = demo.locator('.tiny-dialog-box')
  await page.getByRole('button', { name: '弹出表单' }).click()
  await expect(dialogBox.locator('.tiny-form')).toBeVisible()
  await demo.getByRole('textbox').first().click()
  await demo.getByRole('textbox').first().fill('123456')
  await demo.locator('label').filter({ hasText: '全部' }).locator('span').nth(1).click()
  await demo.locator('label').filter({ hasText: '架构' }).locator('span').nth(1).click()
  await demo.getByRole('button', { name: '确定' }).click()
  await demo.getByRole('button', { name: '弹出表单' }).click()
  await expect(dialogBox.locator('.tiny-form')).toBeVisible()

  // 验证下拉选择校验提示不会异常
  await demo.locator('.tiny-select__tags-group').click()
  await expect(page.locator('.tiny-form__valid.tiny-tooltip')).not.toBeVisible()
})
