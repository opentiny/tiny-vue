import { test, expect } from '@playwright/test'

test('Space size 动态调整（按钮版）', async ({ page }) => {
  await page.goto('space#space-size')

  const space = page.locator('#space-size .tiny-space')
  await space.waitFor({ state: 'visible', timeout: 5000 })

  const getGap = async () => {
    return await space.evaluate((el) => {
      const style = getComputedStyle(el)
      return {
        rowGap: style.rowGap || style.gap,
        columnGap: style.columnGap || style.gap
      }
    })
  }

  // 初始值检查
  const initialGap = await getGap()
  expect(initialGap.columnGap).toBe('10px')
  expect(initialGap.rowGap).toBe('10px')

  // 点击增加列间距按钮（第一个 slider）
  const colSlider = page.locator('.tiny-slider').first()
  await colSlider.click()

  await page.waitForTimeout(100)

  // 验证列间距增加（大于 10px）
  const afterColGap = await getGap()
  const colGapValue = parseInt(afterColGap.columnGap)
  expect(colGapValue).toBeGreaterThan(10)

  // 点击增加行间距按钮（第二个 slider）
  const rowSlider = page.locator('.tiny-slider').nth(1)
  await rowSlider.click()

  await page.waitForTimeout(100)

  // 验证列间距增加（大于 10px）
  const afterRowGap = await getGap()
  const rowGapValue = parseInt(afterRowGap.rowGap)
  expect(rowGapValue).toBeGreaterThan(10)
})
