import { test, expect } from '@playwright/test'

test('右键点击表尾单元格事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-event#event-footer-cell-context-menu-event')
  await page.getByText('3570').click()
  await expect(page.getByText('触发表尾左键点击事件')).toBeVisible()
  await page.waitForTimeout(200)
  await page.getByText('总计人数').click({
    button: 'right'
  })
  await page.waitForTimeout(200)

  await expect(page.getByText('触发表尾右键点击事件').first()).toBeVisible()
})
