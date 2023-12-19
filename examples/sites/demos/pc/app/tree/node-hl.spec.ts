import { test, expect } from '@playwright/test'

test('节点选择与高亮', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#node-hl')

  const preview = page.locator('.pc-demo-container')
  const tree = preview.locator('.tiny-tree')
  const node = tree.getByText('数据 1-1-1')
  const currNode = tree.locator('.is-current')
  const button = preview.getByText('手动高亮节点')

  await expect(node).toHaveCount(1)

  // 测试点击后，打印事件
  const values = [] as string[]
  page.on('console', async (msg) => {
    for (const arg of msg.args()) {
      values.push(await arg.jsonValue())
    }
  })
  await node.click()
  await page.waitForTimeout(50)

  expect(values.length).toBe(2)
  expect(values[0].startsWith('当前高亮节点')).toBeTruthy()

  // 测试自动点击
  await button.click()
  await page.waitForTimeout(50)
  await expect(currNode.getByText('数据 2-1')).toHaveCount(1)
})
