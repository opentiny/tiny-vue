import { test, expect } from '@playwright/test'

test('选中列是否开启高亮', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-highlight#highlight-highlight-current-column')
  await page.getByText('员工数').first().click()
  await expect(page.locator('.col__current')).toHaveCount(9)
  await page.getByRole('button', { name: '手动取消当前高亮列' }).click()
  await expect(page.locator('.col__current')).toHaveCount(0)
})
