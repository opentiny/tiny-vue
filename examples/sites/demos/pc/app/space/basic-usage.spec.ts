import { test, expect } from '@playwright/test'

test('Space Basic Demo - direction & size (按钮版)', async ({ page }) => {
  await page.goto('space#space-basic-usage')

  const space = page.locator('#space-basic-usage .tiny-space')
  await space.waitFor({ state: 'visible', timeout: 5000 })

  const getGap = async () =>
    await space.evaluate((el) => {
      const style = getComputedStyle(el)
      return style.gap || '0px'
    })

  const getFlexDirection = async () => await space.evaluate((el) => getComputedStyle(el).flexDirection)

  // 初始状态检查
  expect(await getFlexDirection()).toBe('column')
  expect(await getGap()).toBe('10px')

  // 点击“行”按钮 -> flex-direction 应变成 row
  const rowButton = page.locator('#space-basic-usage .tiny-button', { hasText: '行' })
  await rowButton.click()
  expect(await getFlexDirection()).toBe('row')

  // 点击增加间距按钮 -> gap 应变成 15px
  const increaseGap = page.locator('#space-basic-usage .tiny-button', { hasText: '增加间距 +5' })
  await increaseGap.click()
  await page.waitForTimeout(50) // 等待 DOM 更新
  expect(await getGap()).toBe('15px')

  // 点击减少间距按钮 -> gap 应变回 10px
  const decreaseGap = page.locator('#space-basic-usage .tiny-button', { hasText: '减少间距 -5' })
  await decreaseGap.click()
  await page.waitForTimeout(50)
  expect(await getGap()).toBe('10px')
})
