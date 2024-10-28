import { test, expect } from '@playwright/test'

test('拖拽控制', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-drag#drag-row-drag-ctrl')
  const diabledDragDom = page.getByRole('cell', { name: '拖拽触发源1' })
  await page.setViewportSize({
    width: 1600,
    height: 1200
  })
  // 获取拖拽元素位置
  const { x, y } = await diabledDragDom.boundingBox()
  // 验证不可拖拽
  await diabledDragDom.hover()
  await page.mouse.down()
  await page.waitForTimeout(200)
  await page.mouse.move(x, y + 160)
  await page.waitForTimeout(200)
  await page.mouse.up()
  await page.waitForTimeout(200)
  await expect(page.locator('.tiny-grid-body__row').nth(0)).toContainText('GFD科技YX公司')

  const draggerDom = page.locator('#drag-row-drag-ctrl tbody').getByText('拖拽触发源6')
  // 获取拖拽元素位置
  const { x: left, y: top } = await draggerDom.boundingBox()
  // 验证可拖拽
  await draggerDom.hover()
  await page.mouse.down()
  await page.waitForTimeout(200)
  await page.mouse.move(left, top - 240)
  await page.waitForTimeout(200)
  await page.mouse.up()
  await page.waitForTimeout(200)
  await expect(page.locator('.tiny-grid-body__row').nth(0)).toContainText('WSX科技YX公司')
})
