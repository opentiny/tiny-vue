import { test, expect } from '@playwright/test'

test('调整窗口大小后窗口显示的最小高度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#min-height')

  await page.getByRole('button', { name: '提示框最小高度为300' }).click()
  const modal = page.locator('.tiny-modal__box')
  // 获取弹窗位置
  const { x, y, height } = await modal.boundingBox()

  // 开始横线拖动
  await page.mouse.move(x, y + height)
  await page.mouse.down()
  await page.mouse.move(x, y + height + 50)
  await page.mouse.up()

  // 判断窗口高度是否不小于限定最小高度
  const { height: finalHeight } = await modal.boundingBox()
  expect(Math.round(finalHeight)).toBeGreaterThanOrEqual(300)
})
