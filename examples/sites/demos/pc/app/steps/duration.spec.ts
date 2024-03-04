import { test, expect } from '@playwright/test'

test('节点滚动时间', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('steps#duration')

  const steps = page.locator('.pc-demo .tiny-steps-senior')
  const firstNode = steps.locator('.tiny-steps-block').first()
  await expect(firstNode).toBeVisible()

  // 判断点击后1秒位置是否正确
  await page.locator('div:nth-child(3) > .more-button-con').click()
  await page.waitForTimeout(300) // 滑动动画默认时间
  const { x: mediumX } = await firstNode.boundingBox()
  await page.waitForTimeout(700)
  const { x } = await firstNode.boundingBox()
  expect(x).toBeLessThan(mediumX)
})
