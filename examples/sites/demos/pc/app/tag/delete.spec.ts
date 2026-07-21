import { expect, test } from '@playwright/test'

test('是否能阻止删除或正常删除标签', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())

  await page.goto('tag#delete')
  await page.waitForLoadState('networkidle')

  // 修正：用 #delete 限定当前 demo 范围，避免匹配到其他 demo 的"标签一"
  const tag1 = page.locator('#delete .tiny-tag').filter({ hasText: '标签一' })
  const closeBtn = tag1.locator('.tiny-tag__close')

  // 第一次点击关闭：触发 before-delete 确认对话框
  await closeBtn.click()

  const confirmModal = page.locator('.tiny-modal__box').filter({ hasText: '确认删除？' })
  await expect(confirmModal).toBeVisible()

  // 点击取消，标签应保留
  await confirmModal.getByRole('button', { name: '取消' }).click()
  await expect(tag1).toBeVisible()

  // 第二次点击关闭，再次弹出确认
  await closeBtn.click()
  await expect(confirmModal).toBeVisible()

  // 点击确定，标签应被删除
  await confirmModal.getByRole('button', { name: '确定' }).click()
  await expect(tag1).not.toBeVisible()
})
