import { test, expect } from '@playwright/test'

test('聚焦和失焦事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/time-picker/event-blur')

  const preview = page.locator('#preview')
  const timePicker = preview.locator('.tiny-date-editor > input')
  const focusBtn = preview.getByRole('button', { name: 'focus' })
  const modal = page.locator('.tiny-modal__box')
  const timeSelect = page.locator('.tiny-time-panel')
  const confirmBtn = timeSelect.getByRole('button', { name: '确定' })

  await timePicker.click()
  await expect(modal.filter({ hasText: 'focus事件' })).toBeVisible()
  await confirmBtn.click()
  await expect(modal.filter({ hasText: 'blur事件' })).toBeVisible()
  await focusBtn.click()
  await expect(timeSelect).toBeVisible()
})
