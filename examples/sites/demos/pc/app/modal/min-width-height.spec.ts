import { test, expect } from '@playwright/test'

test('调整窗口后显示的最小宽高度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#min-width-height')

  await page.getByRole('button', { name: /最小宽高度/ }).click()
  const modal = page.locator('.tiny-modal.active .tiny-modal__box')
  // 获取弹窗位置
  const { x, y } = await modal.boundingBox()
  // 开始横线拖动
  await page.mouse.move(x, y)
  await page.mouse.down()
  await page.mouse.move(x + 100, y)
  await page.mouse.move(x + 300, y)
  await page.mouse.up()

  // 判断窗口宽度是否小于限定最小宽度
  const { width } = await modal.boundingBox()
  expect(Math.round(width)).not.toBeLessThan(700)
})
