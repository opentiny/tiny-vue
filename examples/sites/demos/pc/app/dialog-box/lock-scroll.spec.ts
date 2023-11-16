import { test, expect } from '@playwright/test'

test('弹出时禁用滚动', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-box#lock-scroll')

  const dialogBox = page.locator('.tiny-dialog-box')
  await page.getByRole('button', { name: '允许滚动背景' }).click()
  await expect(page.locator('body')).not.toHaveClass(/dialog-box__scroll-lock/)

  // 检查页面元素是否随鼠标滑轮滚动而移动
  const { y: initY } = await page.locator('#preview').boundingBox()
  await page.mouse.wheel(0, 100)
  await page.waitForTimeout(100)
  const { y: afterY } = await page.locator('#preview').boundingBox()
  expect(initY).toBeGreaterThan(afterY)

  await page.getByRole('button', { name: '确 定' }).click()
  await expect(dialogBox).not.toBeVisible()
})
