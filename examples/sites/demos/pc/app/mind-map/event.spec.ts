import { test, expect } from '@playwright/test'

test('测试创建事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('mind-map#event')
  await page.getByText('触发事件 create').isVisible()
})

test('测试 operation 事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('mind-map#event')
  await page.locator('me-tpc').filter({ hasText: '前端修仙指南' }).click()
  await page.locator('.map-canvas').press('Tab')
  await page.getByText('触发事件 operation').first().isVisible()
  // 新创建 node 时会触发 selectNewNode 事件
  // 这个触发是符合逻辑的，因为创建后的 node 的确是 new-node
  // 创建后会自动选择，自然触发 selectNewNode 是符合逻辑的
  await page.getByText('触发事件 selectNewNode').first().isVisible()
})
test('测试 select-node, select-nodes, select-new-node 事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('mind-map#event')
  await page.locator('me-tpc').filter({ hasText: '算法 第四版' }).click()
  await page.locator('.map-canvas').press('Tab')
  await page.locator('me-tpc').filter({ hasText: '大话数据结构' }).click()
  await page.locator('.map-canvas').press('Tab')
  await page.locator('me-tpc').filter({ hasText: 'Javascript 权威指南' }).click()
  await page
    .locator('me-tpc')
    .filter({ hasText: 'new node' })
    .nth(1)
    .click({
      modifiers: ['Control']
    })
  await page.getByText('触发事件 selectNode').first().isVisible()
  await page.getByAltText('触发事件 selectNodes').isVisible()
})
test('测试 unselect-node,unselect-nodes', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('mind-map#event')
  await page.locator('me-tpc').filter({ hasText: '算法 第四版' }).click()
  await page.locator('.map-canvas').press('Tab')
  await page.locator('me-tpc').filter({ hasText: '大话数据结构' }).click()
  await page.locator('.map-canvas').press('Tab')

  await page.locator('me-tpc').nth(2).click()
  await page
    .locator('me-tpc')
    .nth(1)

    .click({
      modifiers: ['Control']
    })
  await page.locator('.map-canvas').click()
})
