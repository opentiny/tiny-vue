import { test, expect } from '@playwright/test'

test('PopEditor 拖动窗口', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/pop-editor/draggable')

  const textBox = page.getByRole('textbox').nth(1)
  const dialogBox = page.locator('.tiny-dialog-box').nth(1)

  await textBox.click()
  await expect(dialogBox).toBeVisible()

  // 获取拖拽元素的位置
  const { x, y } = await dialogBox.boundingBox()

  // 开始拖拽
  await page.mouse.move(x + 2, y + 2)
  await page.mouse.down()
  await page.mouse.move(x + 300, y + 300)
  await page.mouse.up()

  const { x:x1, y:y1 } = await dialogBox.boundingBox()
  await expect(x).not.toEqual(x1)
  await expect(y).not.toEqual(y1)

})
