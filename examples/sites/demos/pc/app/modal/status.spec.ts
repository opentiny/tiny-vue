import { test, expect } from '@playwright/test'

test('状态和图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#status')
  const modal = page.locator('.tiny-modal__status-wrapper svg').first()
  const message = page.locator('.type__message')

  // 信息提示图标
  await page.getByRole('button', { name: '信息提示图标' }).first().click()
  await expect(modal).toHaveClass(/tiny-modal-svg__info/)
  await page.getByRole('button', { name: '确定' }).click()
  // ----消息状态示例----
  await page.getByRole('button', { name: '信息提示图标' }).nth(1).click()
  await expect(message).toHaveClass(/status__info/)

  // 成功提示图标
  await page.getByRole('button', { name: '成功提示图标' }).first().click()
  await expect(modal).toHaveClass(/tiny-modal-svg__success/)
  await page.getByRole('button', { name: '确定' }).click()
  // ----消息状态示例----
  await page.getByRole('button', { name: '成功提示图标' }).nth(1).click()
  await expect(message).toHaveClass(/status__success/)

  // 警告提示图标
  await page.getByRole('button', { name: '警告提示图标' }).first().click()
  await expect(modal).toHaveClass(/tiny-modal-svg__warning/)
  await page.getByRole('button', { name: '确定' }).click()
  // ----消息状态示例----
  await page.getByRole('button', { name: '警告提示图标' }).nth(1).click()
  await expect(message).toHaveClass(/status__warning/)

  // 错误提示图标
  await page.getByRole('button', { name: '错误提示图标' }).first().click()
  await expect(modal).toHaveClass(/tiny-svg tiny-modal-svg__error/)
  await page.getByRole('button', { name: '确定' }).click()
  // ----消息状态示例----
  await page.getByRole('button', { name: '错误提示图标' }).nth(1).click()
  await expect(message).toHaveClass(/status__error/)

  // 加载提示图标
  await page.getByRole('button', { name: '加载提示图标' }).first().click()
  await expect(modal).toHaveClass(/tiny-modal-svg__refresh/)
  await page.getByRole('button', { name: '确定' }).click()
  // ----消息状态示例----
  await page.getByRole('button', { name: '加载提示图标' }).nth(1).click()
  await expect(message).toHaveClass(/status__loading/)
})
