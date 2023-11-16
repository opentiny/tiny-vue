import { test, expect } from '@playwright/test'

test('不可拖拽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('split#basic-usage1')
  const split = page.locator('#preview div').filter({ hasText: '左面板右面板' }).nth(2)
  const centerBtn = page.locator('.tiny-split-trigger')
  //  获取左边面板宽度
  const leftDiv = page.locator('.tiny-split-pane').first()
  const { width: leftWidth } = await leftDiv.boundingBox()
  const { x, y } = await centerBtn.boundingBox()
  // 鼠标按下
  await centerBtn.hover()
  await page.mouse.down()
  //   将分割线向右移动100，获取移动后的左边面板的宽度，如果等于移动之前宽度，则证明不可移动
  await page.mouse.move(100 + x, y)
  await page.mouse.up()
  const { width: afterWidth } = await leftDiv.boundingBox()
  await expect(leftWidth).toEqual(afterWidth)
})
