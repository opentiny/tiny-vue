import { test, expect } from '@playwright/test'

test('各型号尺寸是否正常', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('tag#size')

  const normal = page.getByText('默认标签')
  const medium = page.getByText('中等标签')
  const small = page.getByText('小型标签')
  const mini = page.getByText('超小标签')

  await expect(normal).toHaveCSS('height', '24px')
  await expect(medium).toHaveCSS('height', '32px')
  await expect(small).toHaveCSS('height', '20px')
  await expect(mini).toHaveCSS('height', '17px')
})
