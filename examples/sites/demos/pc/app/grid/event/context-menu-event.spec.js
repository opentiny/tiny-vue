import { test, expect } from '@playwright/test'

test('右键相关事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-event#event-context-menu-event')
  await page.getByText('总计人数').click({
    button: 'right'
  })

  await expect(page.getByText('触发表尾右键点击事件').first()).toBeVisible()

  await page.getByText('创建时间').click({
    button: 'right'
  })

  await expect(page.getByText('触发表头右键点击事件').first()).toBeVisible()
})
