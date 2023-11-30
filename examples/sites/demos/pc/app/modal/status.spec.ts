import { test, expect } from '@playwright/test'

test('消息状态', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#status')

  const messageInfo = page.locator('.tiny-modal').filter({ hasText: '基本提示图标' })
  await page.getByRole('button', { name: '基本提示图标' }).click()
  await expect(messageInfo).toHaveClass(/type__message/)
  await expect(messageInfo).toHaveClass(/status__info/)
  await expect(messageInfo.locator('.tiny-modal__status-wrapper .tiny-svg')).toHaveClass(/tiny-modal-svg__info/)

  const messageSucc = page.locator('.tiny-modal').filter({ hasText: '成功提示图标' })
  await page.getByRole('button', { name: '成功提示图标' }).click()
  await expect(messageSucc).toHaveClass(/status__success/)
  await expect(messageSucc.locator('.tiny-modal__status-wrapper .tiny-svg')).toHaveClass(/tiny-modal-svg__success/)

  const messageWarn = page.locator('.tiny-modal').filter({ hasText: '警告提示图标' })
  await page.getByRole('button', { name: '警告提示图标' }).click()
  await expect(messageWarn).toHaveClass(/status__warning/)
  await expect(messageWarn.locator('.tiny-modal__status-wrapper .tiny-svg')).toHaveClass(/tiny-modal-svg__warning/)

  const messageError = page.locator('.tiny-modal').filter({ hasText: '错误提示图标' })
  await page.getByRole('button', { name: '错误提示图标' }).click()
  await expect(messageError).toHaveClass(/status__error/)
  await expect(messageError.locator('.tiny-modal__status-wrapper .tiny-svg')).toHaveClass(/tiny-modal-svg__error/)

  const messageHasLoadingBtn = page.locator('.tiny-modal').filter({ hasText: '加载提示图标' })
  const loadingBtn = messageHasLoadingBtn.locator('.tiny-modal-svg__refresh')
  await page.getByRole('button', { name: '加载提示图标' }).click()
  await expect(loadingBtn).toBeVisible()
})
