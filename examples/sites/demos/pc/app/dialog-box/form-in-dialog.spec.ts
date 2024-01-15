import { test, expect } from '@playwright/test'

test('弹窗表单', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-box#form-in-dialog')
  const dialogBox = page.locator('.tiny-dialog-box')
  await page.getByRole('button', { name: '弹出表单' }).click()
  await expect(dialogBox.locator('.tiny-form')).toBeVisible()
  await page.locator('#form-in-dialog').getByRole('textbox').first().click()
  await page.locator('#form-in-dialog').getByRole('textbox').first().fill('123456')
  await page.locator('label').filter({ hasText: '全部' }).locator('span').nth(1).click()
  await page.locator('label').filter({ hasText: '架构' }).locator('span').nth(1).click()
  await page.getByRole('button', { name: '确定' }).click()
  await page.getByRole('button', { name: '弹出表单' }).click()
  await expect(dialogBox.locator('.tiny-form')).toBeVisible()

  // 验证下拉选择校验提示不会异常
  await page.locator('#form-in-dialog').locator('.tiny-select__tags-group').click()
  await page.locator('#form-in-dialog').locator('.tiny-svg.tiny-dialog-box__close').first().click()
  await page.waitForTimeout(200)
  await expect(page.locator('.tiny-form__valid.tiny-tooltip')).not.toBeVisible()
})
