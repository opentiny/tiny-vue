import { test, expect } from '@playwright/test'

test('测试创建事件', async ({ page }) => {
  await page.goto('mind-map#event')
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.getByText('触发事件create').isVisible()
})

test('测试operation事件', async ({ page }) => {
  await page.goto('mind-map#event')
  await page.locator('me-tpc').click()
  await page.locator('.map-canvas').press('Tab')
  await page.getByText('触发事件operation').first().isVisible()
  // 新创建node时会触发selectNewNode事件
  // 这个触发是符合逻辑的, 因为创建后的node的确是new-node
  // 创建后会自动选择, 自然触发selectNewNode是符合逻辑的
  await page.getByText('触发事件selectNewNode').first().isVisible()
})
test('测试select-node, select-nodes, select-new-node事件', async ({ page }) => {
  await page.goto('mind-map#event')
  await page.locator('me-tpc').filter({ hasText: 'root' }).click()
  await page.locator('.map-canvas').press('Tab')
  await page.locator('me-tpc').filter({ hasText: 'root' }).click()
  await page.locator('.map-canvas').press('Tab')
  await page.locator('me-tpc').filter({ hasText: 'root' }).click()
  await page
    .locator('me-tpc')
    .nth(1)
    .filter({ hasText: 'new node' })
    .click({
      modifiers: ['Control']
    })
  await page.getByText('触发事件selectNode').first().isVisible()
  await page.getByAltText('触发事件selectNodes').isVisible()
})
test('测试 unselect-node,unselect-nodes', async ({ page }) => {
  await page.goto('mind-map#event')
  await page.locator('me-tpc').filter({ hasText: 'root' }).click()
  await page.locator('.map-canvas').press('Tab')
  await page.locator('me-tpc').filter({ hasText: 'root' }).click()
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
