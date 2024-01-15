import { test, expect } from '@playwright/test'

test('测试自定义图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#icons')

  const preview = page.locator('.pc-demo-container')
  const tree1 = preview.locator('.tiny-tree').nth(0)
  const tree2 = preview.locator('.tiny-tree').nth(1)

  const icon1 = tree1.locator('svg path').nth(0)
  const icon2 = tree2.locator('svg path').nth(0)

  // 测试tree1
  await expect(tree1.getByText('数据 2')).toHaveCount(1)
  await expect(icon1).toHaveAttribute('d', 'm6 2 13 10L6 22V2zm2 4v12l8-6.1L8 6z')

  // 测试tree2
  await expect(tree2.getByText('数据 2')).toHaveCount(1)
  await expect(icon2).toHaveAttribute(
    'd',
    'M13 11h4c.6 0 1 .4 1 1s-.4 1-1 1h-4v4c0 .6-.4 1-1 1s-1-.4-1-1v-4H7c-.6 0-1-.4-1-1s.4-1 1-1h4V7c0-.6.4-1 1-1s1 .4 1 1v4zM3 1h18c.9 0 2 1.1 2 2v18c0 .9-1 2-2 2H3c-.9 0-2-1.1-2-2V3c0-.9 1.1-2 2-2zm0 2v18h18V3H3z'
  )
  await expect(icon2).toHaveCSS('fill', 'rgb(255, 0, 0)')
})
