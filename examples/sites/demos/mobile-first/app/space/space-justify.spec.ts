import { test, expect } from '@playwright/test'

test('Space justify 属性', async ({ page }) => {
  await page.goto('space#space-justify')

  const space = page.locator('#space-justify .tiny-space')

  // 初始值为 start
  await expect(space).toHaveAttribute('style', /justify-content:\s*(flex-start|start)/)

  // 切换到 space-between
  await page.getByRole('button', { name: 'space-between' }).click()
  await expect(space).toHaveAttribute('style', /justify-content:\s*space-between/)

  // 再切换到 center
  await page.getByRole('button', { name: 'center' }).click()
  await expect(space).toHaveAttribute('style', /justify-content:\s*center/)
})
