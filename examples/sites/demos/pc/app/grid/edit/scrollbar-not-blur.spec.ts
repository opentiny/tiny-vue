import { test, expect } from '@playwright/test'

test('行编辑滚动不失焦', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())

  await page.goto('grid-edit#scrollbar-not-blur')
  page.setViewportSize({
    width: 1400,
    height: 1200
  })

  const demo = page.locator('#scrollbar-not-blur')
  // 单元格编辑
  await demo.getByRole('cell', { name: 'GFD 科技 YX 公司' }).first().click()
  await expect(demo.locator('.tiny-grid-default-input').first()).toBeVisible()

  // 点击滚动条
  const bodyWrapper = demo.locator('.tiny-grid__body-wrapper')
  const { x, y, height } = await bodyWrapper.boundingBox()
  await page.mouse.move(x + 10, y + height - 3)
  await page.waitForTimeout(200)
  await page.mouse.down()
  await page.waitForTimeout(200)
  await page.mouse.move(x + 200, y + height - 3)
  await page.waitForTimeout(200)
  await page.mouse.up()
  await expect(demo.locator('.tiny-grid-default-input').first()).toBeVisible()
})
