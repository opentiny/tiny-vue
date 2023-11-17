import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#base')

  // 基本提示框
  const modal = page.locator('.tiny-modal.type__alert')
  await page.getByRole('button', { name: '基本提示框' }).click()
  await expect(modal).toBeVisible()
  await expect(modal).toHaveClass(/is__mask/)
  await page.getByRole('button', { name: '确认', exact: true }).click()
  await expect(modal).not.toBeVisible()
  await page.getByRole('button', { name: '基本提示框' }).click()
  await page.locator('.tiny-modal__close-btn').click()
  await expect(modal).not.toBeVisible()

  // 成功提示框
  await page.getByRole('button', { name: '成功提示框' }).click()
  await expect(modal).toHaveClass(/status__success/)
  await expect(modal.locator('.tiny-modal__status-wrapper svg')).toHaveClass(/tiny-modal-svg__success/)
  await page.getByRole('button', { name: '确认', exact: true }).click()
  await expect(page.locator('.tiny-modal.type__alert.status__success')).not.toBeVisible()

  // 失败提示框
  await page.getByRole('button', { name: '失败提示框' }).click()
  await expect(page.locator('.tiny-modal.type__alert')).toHaveClass(/status__error/)
  await expect(modal.locator('.tiny-modal__status-wrapper svg')).toHaveClass(/tiny-modal-svg__error/)
  await page.getByRole('button', { name: '确认', exact: true }).click()
  await expect(page.locator('.tiny-modal.type__alert.status__error')).not.toBeVisible()

  // 确认提示框
  await page.getByRole('button', { name: '确认提示框' }).click()
  await expect(page.locator('.tiny-modal')).toHaveClass(/type__confirm/)
  await page.getByRole('button', { name: '确认', exact: true }).click()
  await expect(page.locator('.tiny-modal.type__confirm')).not.toBeVisible()
  await page.getByRole('button', { name: '确认提示框' }).click()
  await page.getByRole('button', { name: '取消' }).click()
  await expect(page.locator('.tiny-modal.type__confirm')).not.toBeVisible()
  await page.getByRole('button', { name: '确认提示框' }).click()
  await page.locator('.tiny-modal__close-btn').click()
  await expect(page.locator('.tiny-modal.type__confirm')).not.toBeVisible()
})
