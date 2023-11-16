import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('split#basic-usage')
  const split = page.locator('#preview div').filter({ hasText: '左面板右面板' }).nth(2)
  const centerBtn = page.locator('.tiny-split-trigger')
  //   获取整个面板宽度
  const { width: centerWidth } = await centerBtn.boundingBox()
  const { width: splitWidth } = await split.boundingBox()
  const leftDiv = page.locator('.tiny-split-pane').first()
  const { width: leftWidth } = await leftDiv.boundingBox()
  const rightDiv = page.locator('.tiny-split-horizontal > div:nth-child(3)')
  const { width: rightWidth } = await rightDiv.boundingBox()
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
})
