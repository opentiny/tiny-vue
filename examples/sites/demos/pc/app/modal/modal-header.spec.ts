import { test, expect } from '@playwright/test'

test('自定义弹窗标题', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#modal-header')
  const demo = page.locator('#modal-header')
  const header = page.locator('.tiny-modal.is__visible')

  // 自定义弹窗标题
  await demo.getByRole('button', { name: '自定义弹窗标题' }).first().click()
  await expect(header).toHaveText(/自定义弹窗标题/)
  await page.getByRole('button', { name: '确定' }).click()
})
