import { test, expect } from '@playwright/test'

test('窗口缩放事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#zoom-event')

  await page.getByRole('button', { name: '窗口缩放时触发事件' }).click()
  const modal = page.locator('.tiny-modal__box')

  // 获取弹窗位置
  const { x, y } = await modal.boundingBox()

  // 开始拖动
  await page.mouse.move(x, y)
  await page.mouse.down()
  await page.mouse.move(x, y - 50)
  await expect(page.locator('.tiny-modal.type__message')).toHaveText('窗口缩放时触发事件')
  await page.mouse.up()
})
