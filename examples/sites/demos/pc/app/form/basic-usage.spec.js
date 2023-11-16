import { test, expect } from '@playwright/test'

test('测试基本表单', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('form#frequently-used-form')

  const preview = page.locator('#preview')
  const numeric = preview.locator('.tiny-numeric')
  const numericInput = numeric.locator('.tiny-numeric__input-inner')
  const increaseIcon = numeric.locator('.tiny-numeric__increase')
  const decreaseIcon = numeric.locator('.tiny-numeric__decrease')

  // 测试数字输入
  await increaseIcon.click()
  await increaseIcon.click()
  await expect(numericInput).toHaveValue('2')
  await decreaseIcon.click()
  await decreaseIcon.click()
  await expect(numericInput).toHaveValue('0')

  // 日期选择器
  const datePicker = preview.getByRole('textbox').first()
  await datePicker.click()
  await page.getByRole('cell', { name: '15' }).getByText('15').click()
  await expect(datePicker).toHaveValue(/15/)

  // 時間选择器
  const timePicker = preview.getByRole('textbox').nth(1)
  await timePicker.click()
  await page.getByRole('listitem').filter({ hasText: '00:30' }).click()
  await expect(timePicker).toHaveValue('00:30')

  // 其他输入
  await preview.getByPlaceholder('click').hover()
  await expect(page.getByRole('tooltip', { name: 'TinyUI Form Demo' })).toBeVisible()
  await preview.getByPlaceholder('click').click()
  await preview.getByPlaceholder('click').fill('123')
  await preview.locator('textarea').click()
  await preview.locator('textarea').fill('456')

  // 提交按钮
  const dialog = page.getByText('消息提示提交确认')
  await preview.getByRole('button', { name: '提交' }).click()
  await expect(dialog).toBeVisible()
  await page.getByRole('button', { name: '确认' }).click()
  await expect(dialog).not.toBeVisible()
})
