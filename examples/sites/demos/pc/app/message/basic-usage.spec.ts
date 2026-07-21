import { test, expect } from '@playwright/test'

test('状态和图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('message#basic-usage')
  const message = page.locator('.type__message.is__visible')

  // ----消息状态示例----
  await page.getByRole('button', { name: '信息提示图标' }).click()
  await expect(message).toHaveClass(/status__info/)

  // ----消息状态示例----
  await page.getByRole('button', { name: '成功提示图标' }).click()
  await expect(message.nth(1)).toHaveClass(/status__success/)

  // ----消息状态示例----
  await page.getByRole('button', { name: '警告提示图标' }).click()
  await expect(message.nth(2)).toHaveClass(/status__warning/)

  // ----消息状态示例----
  await page.getByRole('button', { name: '错误提示图标' }).click()
  await expect(message.nth(3)).toHaveClass(/status__error/)

  // ----消息状态示例----
  await page.getByRole('button', { name: '加载提示图标' }).click()
  await expect(message.nth(4)).toHaveClass(/status__loading/)
})
