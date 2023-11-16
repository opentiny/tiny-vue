import { test, expect } from '@playwright/test'

test('锁住页面', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#lock-view')

  const modal = page.locator('.tiny-modal')
  await page.getByRole('button', { name: '不锁界面不要遮罩层' }).click()
  await expect(modal).not.toHaveClass(/lock__view/)

  // 检查页面元素是否随鼠标滑轮滚动而移动
  const { y: initY } = await page.locator('#preview').boundingBox()
  await page.mouse.wheel(0, 100)
  await page.waitForTimeout(100)
  const { y: afterY } = await page.locator('#preview').boundingBox()
  expect(initY).toBeGreaterThan(afterY)
})

test('控制遮罩层显示', async ({ page }) => {
  await page.goto('modal#lock-view')

  const modal = page.locator('.tiny-modal')
  await page.getByRole('button', { name: '不锁界面不要遮罩层' }).click()
  await expect(modal).not.toHaveClass(/is__mask/)
  // 页面上元素可点击
  await page.getByText('显示遮罩层', { exact: true }).click()
})
