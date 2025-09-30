import { test, expect } from '@playwright/test'

test('Space size 动态调整（按钮版）', async ({ page }) => {
  await page.goto('space#space-size')

  const space = page.locator('#space-size .tiny-space')
  await space.waitFor({ state: 'visible', timeout: 5000 })

  const getGap = async () =>
    await space.evaluate((el) => {
      const style = getComputedStyle(el)
      return `${style.rowGap || style.gap} ${style.columnGap || style.gap}`
    })

  // 初始值检查
  expect(await getGap()).toBe('10px 10px')

  // 点击增加行间距按钮
  await page.locator('#increase-row').click()
  await page.waitForTimeout(50)
  expect(await getGap()).toBe('10px 15px') // 行间距对应 rowGap，列间距对应 columnGap

  // 点击增加列间距按钮
  await page.locator('#increase-column').click()
  await page.waitForTimeout(50)
  expect(await getGap()).toBe('15px 15px')

  // 点击减少行间距按钮
  await page.locator('#decrease-row').click()
  await page.waitForTimeout(50)
  expect(await getGap()).toBe('15px 10px')

  // 点击减少列间距按钮
  await page.locator('#decrease-column').click()
  await page.waitForTimeout(50)
  expect(await getGap()).toBe('10px 10px')
})
