import { test, expect } from '@playwright/test'

test('状态和图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#status')
  const modal = page.locator(
    '.tiny-modal__wrapper.is__visible > .tiny-modal__box > .tiny-modal__header > .tiny-modal__status-wrapper > svg'
  )
  const message = page.locator('.type__message.is__visible')

  // 信息提示图标
  await page.getByRole('button', { name: '信息提示图标' }).first().click()
  await expect(modal).toHaveClass(/tiny-modal-svg__info/)
  await page.getByRole('button', { name: '确定' }).click()

  // 成功提示图标
  await page.getByRole('button', { name: '成功提示图标' }).first().click()
  await expect(modal).toHaveClass(/tiny-modal-svg__success/)
  await page.getByRole('button', { name: '确定' }).click()

  // 警告提示图标
  await page.getByRole('button', { name: '警告提示图标' }).first().click()
  await expect(modal).toHaveClass(/tiny-modal-svg__warning/)
  await page.getByRole('button', { name: '确定' }).click()

  // 错误提示图标
  await page.getByRole('button', { name: '错误提示图标' }).first().click()
  await expect(modal).toHaveClass(/tiny-svg tiny-modal-svg__error/)
  await page.getByRole('button', { name: '确定' }).click()

  // 加载提示图标
  await page.getByRole('button', { name: '加载提示图标' }).first().click()
  await expect(modal).toHaveClass(/tiny-modal-svg__refresh/)
  await page.getByRole('button', { name: '确定' }).click()

  // ----消息状态示例----
  await page.getByRole('button', { name: '信息提示图标' }).nth(1).click()
  await expect(message).toHaveClass(/status__info/)

  // ----消息状态示例----
  await page.getByRole('button', { name: '成功提示图标' }).nth(1).click()
  await expect(message.nth(1)).toHaveClass(/status__success/)

  // ----消息状态示例----
  await page.getByRole('button', { name: '警告提示图标' }).nth(1).click()
  await expect(message.nth(2)).toHaveClass(/status__warning/)

  // ----消息状态示例----
  await page.getByRole('button', { name: '错误提示图标' }).nth(1).click()
  await expect(message.nth(3)).toHaveClass(/status__error/)

  // ----消息状态示例----
  await page.getByRole('button', { name: '加载提示图标' }).nth(1).click()
  await expect(message.nth(4)).toHaveClass(/status__loading/)
})
