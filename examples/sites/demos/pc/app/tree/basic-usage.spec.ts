import { test, expect } from '@playwright/test'

test('tree组件基本使用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#basic-usage')

  const preview = page.locator('.pc-demo-container')
  const tree = preview.locator('.tiny-tree')
  const showLineBtn = preview.locator('.tiny-radio').nth(0)
  const miniBtn = preview.locator('.tiny-radio').nth(2)
  const offsetBtn = preview.locator('.tiny-radio').nth(6)
  const indentSpan = preview.locator('.tiny-tree-node__content-indent').nth(1)

  // 测试渲染出数据
  await expect(tree.getByText('数据 1-1-1')).toHaveCount(1)

  // 测试连接线  有连线时，show-line
  await showLineBtn.click()
  await page.waitForTimeout(20)
  expect(await tree.locator('.show-line').count()).toBeGreaterThan(1)

  // 测试字体
  await expect(tree.getByText('数据 1-1-1')).toHaveCSS('font-size', '14px')
  await miniBtn.click()
  await page.waitForTimeout(20)
  await expect(tree.getByText('数据 1-1-1')).toHaveCSS('font-size', '12px')

  // 测试偏移  18px + 8 padding
  await expect(indentSpan).toHaveCSS('width', '26px')
  await offsetBtn.click()
  await page.waitForTimeout(20)
  await expect(indentSpan).toHaveCSS('width', '46px')
})
