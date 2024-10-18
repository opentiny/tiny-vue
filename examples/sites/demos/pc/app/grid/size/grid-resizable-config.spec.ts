import { test, expect } from '@playwright/test'
import type { Page, Locator } from '@playwright/test'

async function drag(page: Page, el: Locator, distance: number) {
  const boundingBox = (await el.boundingBox())!
  const startX = boundingBox.x + Math.floor((boundingBox.width - 1) / 2)
  const startY = boundingBox.y + Math.floor((boundingBox.height - 1) / 2)

  // 向右拖拽 distance 像素
  await page.mouse.move(startX, startY)
  await page.mouse.down()
  await page.mouse.move(startX + distance, startY, { steps: 10 })
  await page.mouse.up()
}

test('resizable limit', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-size#size-resizable-config')
  const demo = page.locator('#size-resizable-config')
  const nameDragLineEl = demo.locator('.tiny-grid-resizable.is__line').first()
  const nameHeaderColumnEl = demo.locator('.tiny-grid-header__column').nth(1)

  // 向左拖拽 100 px，期望宽度等于最小值 60 px
  await drag(page, nameDragLineEl, -100)
  const { width: nameDragLeftWidth } = (await nameHeaderColumnEl.boundingBox())!
  await expect(nameDragLeftWidth).toEqual(60)

  // 向右拖拽 100 px，期望宽度等于最大值 60 px
  await drag(page, nameDragLineEl, 100)
  const { width: nameDragRightWidth } = (await nameHeaderColumnEl.boundingBox())!
  await expect(nameDragRightWidth).toEqual(60)

  const areaDragLineEl = demo.locator('.tiny-grid-resizable.is__line').nth(1)
  const areaHeaderColumnEl = demo.locator('.tiny-grid-header__column').nth(2)

  // 向左拖拽 100 px，期望宽度等于最小值 50 px
  await drag(page, areaDragLineEl, -100)
  const { width: areaDragLeftWidth } = (await areaHeaderColumnEl.boundingBox())!
  await expect(areaDragLeftWidth).toEqual(50)

  // 向右拖拽 500 px，期望宽度等于最大值 300 px
  await drag(page, areaDragLineEl, 500)
  const { width: areaDragRightWidth } = (await areaHeaderColumnEl.boundingBox())!
  await expect(areaDragRightWidth).toEqual(300)
})
