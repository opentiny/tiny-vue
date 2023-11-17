import { test, expect } from '@playwright/test'

test('面板阈值', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('split#split-threshold')
  const split = page.locator('.tiny-split-wrapper')
  const centerBtn = split.locator('.tiny-split-trigger-con')
  //   获取整个面板高度
  const { height: splitHeight } = await split.boundingBox()
  const topDiv = page.locator('.tiny-split-pane').first()
  const { height: topHeight } = await topDiv.boundingBox()
  const bottomDiv = split.locator('.bottom-pane')
  const { height: bottomHeight } = await bottomDiv.boundingBox()
  const { x, y } = await centerBtn.boundingBox()
  // 向上滑动时判断下上面面板高度是否为50
  await centerBtn.hover()
  await page.mouse.down()
  await page.mouse.move(x, y - 100)
  await page.mouse.up()
  const { height: afterHeight } = await topDiv.boundingBox()
  await expect(50).toEqual(afterHeight)
  await page.waitForTimeout(300)
  //   向下滑动时判断下面面板高度是否为80
  await centerBtn.hover()
  await page.mouse.down()
  await page.mouse.move(x, y + 200)
  const { height: bottomMove } = await bottomDiv.boundingBox()
  await page.mouse.up()
  await expect(80).toEqual(bottomMove)
})
