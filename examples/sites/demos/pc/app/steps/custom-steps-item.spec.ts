import { test, expect } from '@playwright/test'

test('自定义数据项', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('steps#custom-steps-item')

  const advancedSteps = page.locator('#preview .tiny-steps')
  const nodes = advancedSteps.locator('li')

  await expect(nodes.first()).toContainText('name属性内容1')
  await expect(nodes.first().locator('.dot')).toHaveClass(/done/)
  await expect(nodes.first().locator('.count')).not.toBeVisible()
  await expect(nodes.nth(1)).toContainText('name属性内容2')
  await expect(nodes.nth(1).locator('.dot')).toHaveClass(/done/)
  await expect(nodes.nth(1).locator('.count')).toHaveText('9')
  await expect(nodes.nth(2).locator('.dot')).toHaveClass(/doing/)
})
