import { test, expect } from '@playwright/test'

test('本地存储列宽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-custom#custom-column-width')
  const draggerDom = page.getByRole('cell', { name: '员工数' }).locator('.tiny-grid-resizable')
  const thDom = page.getByRole('cell', { name: '员工数' })
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
  // 刷新页面
  await page.reload()
  const thDom2 = page.getByRole('cell', { name: '员工数' })
  const { width: thWidth2 } = await thDom2.boundingBox()
  // 检测列宽有没有保存在localstorage
  expect(thWidth2).toEqual(lastThWidth)
})
