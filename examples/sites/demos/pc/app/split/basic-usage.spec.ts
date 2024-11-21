import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('split#basic-usage')
  // 获取拖拽元素
  const triggerBtn = page.locator('.tiny-split-trigger')
  const leftPanel = page.locator('.left-pane')
  const { width: leftPanelWidth } = await leftPanel.boundingBox()
  const { x, y, width: triggerBtnWidth } = await triggerBtn.boundingBox()
  // 鼠标按下
  await triggerBtn.hover()
  await page.mouse.down()
  await page.mouse.move(100 + x, y)
  await page.mouse.up()
  // 移动之后的宽度为:移动之前的宽度+50-分割线宽度的一半
  const afterMove = leftPanelWidth + 100 - triggerBtnWidth / 2
  const { width: afterWidth } = await leftPanel.boundingBox()
  // 小数点后一位相同即可
  await expect(Math.ceil(afterMove)).toEqual(Math.ceil(afterWidth))
})
