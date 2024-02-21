import { test, expect } from '@playwright/test'

test('节点宽度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('steps#node-width')

  // 测试 space 属性，指定宽度
  const steps = page.locator('.pc-demo .tiny-steps')
  const node = steps.locator('li').first()
  const { width } = await node.boundingBox()
  expect(Math.round(width)).toEqual(200)

  // 测试 space 属性，指定宽度
  const advancedSteps = page.locator('.pc-demo .tiny-steps-advanced')
  const parentEle = page.locator('.pc-demo .tiny-steps-demo-space')
  const { width: stepsWidth } = await advancedSteps.boundingBox()
  const { width: parentWidth } = await parentEle.boundingBox()
  expect(stepsWidth).toEqual(parentWidth)
})
