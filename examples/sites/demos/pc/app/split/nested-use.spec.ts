import { test, expect } from '@playwright/test'

test('嵌套使用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('split#nested-use')
  const split = page.locator('#preview div').filter({ hasText: '上面板下面板右面板' }).nth(2)
  const centerBtn = page.locator('.tiny-split-horizontal > div:nth-child(2)')
  //   测试左右面板
  const { width: centerWidth } = await centerBtn.boundingBox()
  const leftDiv = page.locator('.tiny-split-pane').first()
  const { width: leftWidth } = await leftDiv.boundingBox()
  const { x, y } = await centerBtn.boundingBox()
  // 鼠标按下
  await centerBtn.hover()
  await page.mouse.down()
  await page.mouse.move(50 + x, y)
  await page.mouse.up()
  //   移动之后的宽度为:移动之前的宽度+50-分割线宽度的一半
  const afterMove = leftWidth + 50 - centerWidth / 2
  const { width: afterWidth } = await leftDiv.boundingBox()
  await expect(afterMove).toEqual(afterWidth)

  // 测试左面板中的上下面板
  const centerBtn1 = page.locator('.tiny-split-trigger-con').first()
  const { x: centerBtnX1, y: centerBtnY1 } = await centerBtn1.boundingBox()
  const topDiv = page.locator('.tiny-split-vertical > div').first()
  const { height: topHeight } = await topDiv.boundingBox()
  const { height: verticalHeight } = await centerBtn1.boundingBox()
  await centerBtn1.hover()
  await page.mouse.down()
  await page.mouse.move(centerBtnX1, centerBtnY1 - 30)
  await page.mouse.up()
  const { height: afterHeight } = await topDiv.boundingBox()
  const topMove = topHeight - 30 - verticalHeight / 2
  await expect(topMove).toEqual(afterHeight)
  await page.waitForTimeout(300)
})
