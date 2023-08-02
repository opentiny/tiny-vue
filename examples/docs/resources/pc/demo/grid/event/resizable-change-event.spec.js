import { test, expect } from '@playwright/test'

test('列宽改变事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-event/event-resizable-change-event')
  const draggerDom = page.getByRole('cell', { name: '名称' }).locator('.tiny-grid-resizable')
  // 获取拖拽元素位置
  const { x, y } = await draggerDom.boundingBox()
  // 开始拖拽
  await page.mouse.move(x + 2, y + 3)
  await page.waitForTimeout(200)
  await page.mouse.down()
  await page.waitForTimeout(200)
  await page.mouse.move(x + 15, y + 6)
  await page.waitForTimeout(200)
  await page.mouse.up()
  await page.waitForTimeout(200)

  await expect(page.getByText('列宽发生了变化')).toBeVisible()
})
