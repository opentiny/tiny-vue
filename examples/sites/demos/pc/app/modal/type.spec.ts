import { test, expect } from '@playwright/test'

test('窗口类型', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#type')

  const alert = page.locator('.tiny-modal').filter({ hasText: 'alert 弹框' })
  await page.getByRole('button', { name: 'alert 弹框' }).click()
  await expect(alert).toBeVisible()
  await expect(alert).toHaveClass(/type__alert/)
  await page.getByRole('button', { name: '确认', exact: true }).click()

  const message = page.locator('.tiny-modal').filter({ hasText: 'message 提示框' })
  await page.getByRole('button', { name: 'message 提示框' }).click()
  await expect(message).toBeVisible()
  await expect(message).toHaveClass(/type__message/)

  const confirm = page.locator('.tiny-modal').filter({ hasText: '确定框' })
  await page.getByRole('button', { name: 'confirm 确认提示框' }).click()
  await expect(confirm).toBeVisible()
  await expect(confirm).toHaveClass(/type__confirm/)
})
