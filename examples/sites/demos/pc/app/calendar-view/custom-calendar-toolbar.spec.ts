import { test, expect } from '@playwright/test'

test('自定义工具栏', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('calendar-view#custom-calendar-toolbar')
  const toolDom = page.getByRole('paragraph').filter({ hasText: '此处为自定义工具栏插槽' })
  await expect(toolDom).toBeVisible()
})
