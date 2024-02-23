import { test, expect } from '@playwright/test'

test('默认排序', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-sort#sort-default-sort')
  await page
    .getByRole('cell', { name: '员工数排序点击表头排序，可以通过配置 trigger 设置触发源' })
    .getByRole('img')
    .click()
  await expect(page.locator('.tiny-grid-body__row').first()).toContainText('300')
})
