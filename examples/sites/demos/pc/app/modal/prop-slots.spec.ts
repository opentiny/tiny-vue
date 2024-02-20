import { test, expect } from '@playwright/test'

test('调整窗口后显示的最小宽度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#prop-slots')
  await page.getByRole('button', { name: '打开提示框' }).click()
  await page.getByRole('button', { name: '点我确定' }).click()
  await page.getByRole('button', { name: '打开提示框' }).click()
  await page.getByRole('button', { name: '点我取消' }).click()
})
