import { test, expect } from '@playwright/test'

test('调整窗口大小', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#resize')

  await page.getByRole('button', { name: '可以拖动调整窗口大小' }).click()
  const modal = page.locator('.tiny-modal__box')

  // 获取弹窗位置
  const { x, y, width, height } = await modal.boundingBox()

  // 开始拖动放大
  await page.mouse.move(x, y)
  await page.mouse.down()
  await page.mouse.move(x, y - 50)
  await page.mouse.move(x - 50, y)
  await expect(modal).toHaveClass(/is__drag/)
  await page.mouse.up()

  // 判断窗口尺寸是否放大
  const { width: finalWidth, height: finalHeight } = await modal.boundingBox()
  expect(width).toBeLessThan(finalWidth)
  expect(height).toBeLessThan(finalHeight)
})
