import { test, expect } from '@playwright/test'

test('表单校验', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('input#validate-event')

  const input = page.locator('.demo-input .tiny-mobile-input input')
  const label = page.locator('.demo-input .tiny-mobile-form-item__label')
  const errorTip = page.locator('.demo-input .tiny-mobile-input-form__error')

  await expect(errorTip).not.toBeVisible()
  await input.click()
  await label.click()
  await expect(errorTip).toBeVisible()
  await expect(errorTip).toContainText('请输入活动名称')

  await input.fill('123')
  await expect(errorTip).not.toBeVisible()

  await input.fill('123456789')
  await expect(errorTip).toContainText('长度在 3 到 5 个字符')
})
