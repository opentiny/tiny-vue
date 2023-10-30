import { test, expect } from '@playwright/test'

test('开启选中行高亮', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-highlight#highlight-highlight-current-row')
  await page.getByText('300', { exact: true }).first().click()
  await expect(page.locator('.row__current')).toBeVisible()
  await page.getByRole('button', { name: '手动取消当前高亮行' }).click()
  await expect(page.locator('.row__current')).toHaveCount(0)
})
