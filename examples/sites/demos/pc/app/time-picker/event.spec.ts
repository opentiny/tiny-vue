import { test, expect } from '@playwright/test'

test('事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-picker#event')

  const timePicker = page.locator('.tiny-date-editor input')
  const modal = page.locator('.tiny-modal__box')
  const confirmBtn = page.getByRole('button', { name: '确定' })

  await timePicker.click()
  await expect(modal.filter({ hasText: 'focus 事件' })).toBeVisible()
  await confirmBtn.click()
  await expect(modal.filter({ hasText: 'blur 事件' })).toBeVisible()
})
