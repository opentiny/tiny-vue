import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#basic-usage')

  const modal = page.locator('.tiny-modal.type__alert').nth(1)
  const confirm = page.locator('.tiny-modal.type__confirm')
  // 基本提示框
  await page.getByRole('button', { name: /基本提示框/ }).click()
  await expect(modal).toBeVisible()
  await expect(modal).toHaveClass(/is__mask/)
  await page.getByRole('button', { name: /确定/, exact: true }).click()
  await expect(modal).not.toBeVisible()
  await page.getByRole('button', { name: /基本提示框/ }).click()
  await page.locator('.tiny-modal__close-btn').click()
  await expect(modal).not.toBeVisible()

  // 成功提示框
  await page.getByRole('button', { name: /成功提示框/ }).click()
  await expect(modal).toHaveClass(/status__success/)
  await expect(modal.locator('.tiny-modal__header svg').first()).toHaveClass(/tiny-modal-svg__success/)
  await page.getByRole('button', { name: /确定/, exact: true }).click()
  await expect(page.locator('.tiny-modal.type__alert.status__success')).not.toBeVisible()

  // 失败提示框
  await page.getByRole('button', { name: /失败提示框/ }).click()
  await expect(modal).toHaveClass(/status__error/)
  await expect(modal.locator('.tiny-modal__header svg').first()).toHaveClass(/tiny-icon-error/)
  await page.getByRole('button', { name: /确定/, exact: true }).click()
  await expect(page.locator('.tiny-modal.type__alert.status__error')).not.toBeVisible()

  // 确认提示框
  await page.getByRole('button', { name: /确认提示框/ }).click()
  await expect(confirm).toBeVisible()
  await page.getByRole('button', { name: /确定/, exact: true }).click()
  await expect(confirm).not.toBeVisible()
  await page.getByRole('button', { name: /确认提示框/ }).click()
  await page.getByRole('button', { name: /取消/ }).click()
  await expect(confirm).not.toBeVisible()
  await page.getByRole('button', { name: /支持传入 jsx 提示框/ }).click()
  await page.locator('.tiny-modal__close-btn').click()
  await expect(confirm).not.toBeVisible()
})
