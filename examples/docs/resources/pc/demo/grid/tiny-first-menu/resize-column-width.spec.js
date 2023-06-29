import { test, expect } from '@playwright/test'

test('开启列宽拖拽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-width-height/tiny-first-menu-resize-column-width')
  const draggerDom = page.getByRole('cell', { name: '名称' }).locator('.tiny-grid-resizable')
  const thDom = page.getByRole('cell', { name: '名称' })
  // 获取初始列宽
  const { width: thWidth } = await thDom.boundingBox()
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
  // 拖拽完毕再次检测列宽
  const { width: lastThWidth } = await thDom.boundingBox()
  expect(thWidth).toBeLessThan(lastThWidth)
})
