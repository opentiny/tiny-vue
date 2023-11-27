import { test, expect } from '@playwright/test'

test('事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#event')

  const demo = page.locator('#event')
  const messageModal = page.locator('.tiny-modal.type__message')
  const modal = page.locator('.tiny-modal.type__confirm.active')

  // 显示、关闭事件
  await demo.getByRole('button', { name: '显示、关闭事件' }).click()
  await expect(modal).toBeVisible()
  await expect(messageModal.getByText('show 事件触发了')).toBeVisible()
  await modal.getByRole('button', { name: '确认' }).click()
  await expect(modal).not.toBeVisible()
  await expect(messageModal.getByText('hide 事件触发了')).toBeVisible()

  // 确认、取消事件
  await demo.getByRole('button', { name: '确认、取消事件' }).click()
  await expect(modal).toBeVisible()
  await modal.getByRole('button', { name: '确认' }).click()
  await expect(modal).not.toBeVisible()
  await expect(messageModal.getByText('confirm 事件触发了')).toBeVisible()
  await demo.getByRole('button', { name: '确认、取消事件' }).click()
  await expect(modal).toBeVisible()
  await modal.getByRole('button', { name: '取消' }).click()
  await expect(modal).not.toBeVisible()
  await expect(messageModal.getByText('cancel 事件触发了')).toBeVisible()

  // 关闭点击事件
  await demo.getByRole('button', { name: '关闭点击事件' }).click()
  await modal.locator('.tiny-modal__close-btn').click()
  await expect(messageModal.getByText('close 事件触发了')).toBeVisible()
  await expect(modal).not.toBeVisible()

  // 缩放事件
  await demo.getByRole('button', { name: '缩放事件' }).click()
  await modal.locator('.tiny-modal__zoom-btn').click()
  await expect(messageModal.getByText('zoom 事件触发了')).toBeVisible()
})
