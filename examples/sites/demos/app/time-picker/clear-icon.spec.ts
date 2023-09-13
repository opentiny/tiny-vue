import { test, expect } from '@playwright/test'

test('自定义清除输入按钮', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/time-picker/clear-icon')

  const preview = page.locator('#preview')
  const timePicker = preview.locator('.tiny-date-editor > input')
  const timeSelect = page.locator('.tiny-time-panel')
  const closeIcon = preview.locator('.tiny-date-editor--time svg.baseClearicon')

  await expect(timePicker).toHaveValue('18:40:00')
  await timePicker.click()
  await expect(timeSelect).toBeVisible()
  await timePicker.fill('inValidInput')
  await timePicker.press('Enter')
  await expect(timePicker).toHaveValue('18:40:00')
  await timePicker.hover()
  await expect(closeIcon).toBeVisible()
  await preview.locator('.tiny-date-editor--time svg.baseClearicon').click()
  // 正则表达式去判断头尾特征
  const pathReg = /^m13\.4 12.+0-1\.4L13\.4 12z$/
  await expect(closeIcon.locator('path')).toHaveAttribute('d', pathReg)
})
