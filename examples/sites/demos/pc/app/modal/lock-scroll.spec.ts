import { test, expect } from '@playwright/test'

test('锁住滚动条', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#lock-scroll')

  const modal = page.locator('.tiny-modal')
  await page.getByRole('button', { name: '不锁住滚动条不要遮罩层' }).click()
  await expect(modal).not.toHaveClass(/lock__scroll/)

  // 上下滑动模态框内容
  const { y: initY } = await modal.locator('.tiny-modal__box').boundingBox()
  await page.mouse.wheel(0, 100)
  await page.waitForTimeout(100)
  const { y: afterY } = await modal.locator('.tiny-modal__box').boundingBox()
  expect(afterY).toBeLessThan(initY)
})
