import { test, expect } from '@playwright/test'

test('宽度拖拽功能', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('drawer#dragable')

  const drawer = page.locator('.tiny-drawer__main')
  await page.getByRole('button', { name: '宽度拖拽' }).click()

  // 获取拖拽元素的位置
  const { x, y } = await drawer.boundingBox()

  // 开始拖拽
  await page.mouse.move(x + 2, y + 2)
  await page.mouse.down()
  await page.mouse.move(x - 300, y)
  await page.mouse.up()

  // 判断宽度是否变大
  const { width } = await drawer.boundingBox()
  expect(width).toBeGreaterThan(500)
})
