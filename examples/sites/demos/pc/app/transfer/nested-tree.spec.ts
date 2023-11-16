import { test, expect } from '@playwright/test'

test('判断是否可以将左侧数据交换至右侧面板', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('transfer#nested-tree')
  const preview = page.locator('#preview')
  await preview.getByRole('treeitem', { name: '一级 1' }).locator('svg').first().click()
  await preview.getByRole('treeitem', { name: '一级 1' }).getByText('二级 1-1').click()
  await preview.getByRole('treeitem', { name: '三级 1-1-1' }).locator('span').nth(2).click()
  await preview.getByRole('button').first().click()
  const transferPanels = preview.locator('.tiny-transfer-panel')
  const rightPanel = transferPanels.nth(1)
  await expect(
    rightPanel.locator(
      'div:nth-child(3) > div:nth-child(4) > .tiny-tree-node > .tiny-tree-node__content > span.tiny-tree-node__label'
    )
  ).toHaveText('三级 1-1-1')
})

test('置顶和置底功能', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('transfer#nested-tree')
  const preview = page.locator('#preview')
  const buttons = await preview.getByRole('paragraph').filter({ hasText: '列表 2 1 / 3' }).locator('div')
  await buttons.nth(1).click()
  const transferPanels = preview.locator('.tiny-transfer-panel')
  const rightPanel = transferPanels.nth(1)
  await expect(
    rightPanel.locator(
      'div:nth-child(3) > div:nth-child(1) > .tiny-tree-node > .tiny-tree-node__content > span.tiny-tree-node__label'
    )
  ).toHaveText('二级 2-1')
  await buttons.nth(2).click()
  await expect(
    rightPanel.locator(
      'div:nth-child(3) > div:nth-child(3) > .tiny-tree-node > .tiny-tree-node__content > span.tiny-tree-node__label'
    )
  ).toHaveText('二级 2-1')
})
