import { test, expect } from '@playwright/test'

test('测试表单标签文本插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('form#slot-label')

  const preview = page.locator('#preview')
  const form = preview.locator('.tiny-form')
  const formItem = form.locator('.tiny-form-item')

  await expect(formItem.first().locator('.tiny-form-item__label')).toHaveText('必填')
  await expect(formItem.nth(1).locator('.tiny-form-item__label')).toHaveText('日期')
  await expect(formItem.nth(2).locator('.tiny-form-item__label')).toHaveText('URL')
  await expect(formItem.nth(3).locator('.tiny-form-item__label')).toHaveText('等级')
})
