import { test, expect } from '@playwright/test'

test('点击遮罩层关闭窗口', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#mask-closable')

  await page.getByRole('button', { name: '点击遮罩层可以关闭' }).click()
  await expect(page.locator('.tiny-modal')).toBeVisible()
  await page.mouse.click(10, 10)
  await expect(page.locator('.tiny-modal')).not.toBeVisible()
})
