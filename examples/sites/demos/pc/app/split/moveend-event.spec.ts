import { test, expect } from '@playwright/test'

test('moveend 事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('split#moveend-event')
  const demo = page.locator('#moveend-event')
  const centerBtn = demo.locator('.tiny-split-trigger')
  const { x, y } = await centerBtn.boundingBox()
  // 鼠标按下
  await centerBtn.hover()
  await page.mouse.down()
  await page.mouse.move(20 + x, y)
  await page.mouse.up()
  //   向右移动之后判断是否出现提示
  const moveDiv = page.locator('.tiny-modal').getByText('拖拽结束')
  await expect(moveDiv).toBeVisible()
})
