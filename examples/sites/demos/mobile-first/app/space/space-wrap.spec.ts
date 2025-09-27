import { test, expect } from '@playwright/test'

test('Space wrap 切换', async ({ page }) => {
  await page.goto('space#space-wrap-toggle')

  const space = page.locator('#space-wrap-toggle [data-tag="tiny-space"]')

  // 默认不换行
  await expect(space).toHaveAttribute('style', /flex-wrap:\s*nowrap/)

  // 点击“换行”
  await page.getByRole('button', { name: '换行' }).click()
  await expect(space).toHaveAttribute('style', /flex-wrap:\s*wrap/)

  // 点击“不换行”
  await page.getByRole('button', { name: '不换行' }).click()
  await expect(space).toHaveAttribute('style', /flex-wrap:\s*nowrap/)
})
