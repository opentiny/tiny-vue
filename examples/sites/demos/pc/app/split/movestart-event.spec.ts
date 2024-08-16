import { test, expect } from '@playwright/test'

test('movestart 事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('split#movestart-event')
  const centerBtn = page.locator('.tiny-split-trigger')
  const { x, y } = (await centerBtn.boundingBox())!
  // 鼠标按下
  await centerBtn.hover()
  await page.mouse.down()
  await page.mouse.move(20 + x, y)
  await page.mouse.up()
  //   向右移动之后判断是否出现提示
  const moveDiv = page.getByText('拖拽开始').nth(0)
  await expect(moveDiv).toBeVisible()
})
