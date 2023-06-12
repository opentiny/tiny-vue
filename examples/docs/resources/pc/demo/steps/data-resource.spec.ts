import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/steps/data-resource')

  const steps = page.locator('#preview .tiny-steps')
  const nodes = steps.locator('li')

  await expect(nodes.first()).toHaveText('name属性内容1')
  await expect(nodes.first()).toHaveClass(/done/)
  await expect(nodes.first().locator('.dot')).toHaveClass(/done/)
  await expect(nodes.nth(1)).toHaveClass(/doing/)
  await expect(nodes.nth(1).locator('.count')).toHaveText('9')
  await expect(nodes.nth(1).locator('.dot')).toHaveClass(/doing/)

  // 点击节点
  await page.getByTitle('name属性内容3').click()
  await expect(nodes.nth(2)).toHaveClass(/current/)
  await expect(nodes.nth(2)).toHaveClass(/doing/)
  await expect(nodes.nth(3)).toHaveClass(/undo/)
})