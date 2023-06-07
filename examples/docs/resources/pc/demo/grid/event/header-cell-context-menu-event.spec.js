import { test, expect } from '@playwright/test'

test('表头右键点击事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-event/event-header-cell-context-menu-event')
  await page.getByText('名称').click({
    button: 'right'
  })

  await expect(page.getByText('触发表头右键点击事件').first()).toBeVisible()
})
