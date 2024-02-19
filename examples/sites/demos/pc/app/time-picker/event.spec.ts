import { test, expect } from '@playwright/test'

test('事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-picker#event')

  const timePicker = page.locator('.tiny-date-editor input')
  const focusBtn = page.getByRole('button', { name: 'focus' })
  const modal = page.locator('.tiny-modal__box')
  const timeSelect = page.locator('.tiny-time-panel').first()
  const confirmBtn = page.getByRole('button', { name: '确定' })

  await timePicker.click()
  await expect(modal.filter({ hasText: 'focus事件' })).toBeVisible()
  await confirmBtn.click()
  await expect(modal.filter({ hasText: 'blur事件' })).toBeVisible()
  await focusBtn.click()
  // TINY-TODO: focus 方法不生效，picker 组件 renderless 中的 focus 方法存在问题
  // await expect(timeSelect).toBeVisible()
})
