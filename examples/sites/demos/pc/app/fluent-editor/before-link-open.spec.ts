import { test, expect } from '@playwright/test'

test('超链接跳转拦截', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('fluent-editor#before-link-open')
  const demo = page.locator('#before-link-open')
  const confirmModal = page.locator('.tiny-modal').filter({ hasText: '是否允许跳转' })

  // 点击编辑器中的超链接，弹出确认框
  await demo.getByText('OpenTiny 官网').click()
  await expect(confirmModal).toBeVisible()

  // 点击取消，拦截跳转，确认框关闭
  await confirmModal.getByRole('button', { name: '取消' }).click()
  await expect(confirmModal).toBeHidden()

  // 再次点击链接，点击确定放行跳转
  await demo.getByText('OpenTiny 官网').click()
  await expect(confirmModal).toBeVisible()

  const popupPromise = page.waitForEvent('popup', { timeout: 5000 })
  await confirmModal.getByRole('button', { name: '确定' }).click()
  const popup = await popupPromise
  await expect(popup).toBeTruthy()
})
