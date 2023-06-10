import { test, expect } from '@playwright/test'

test('数据字段映射', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('http://127.0.0.1:7130/pc/milestone/data-field-mapping')

  const flags = page.locator('.tiny-milestone__flag-content')
  const nodeIcons = page.locator('.tiny-milestone__icon')
  const nodeTitles = page.locator('.tiny-milestone__description-name')
  const nodeDates = page.locator('.tiny-milestone__description-status')
  const count = 4
  const iconClasss = [/is-completed status-completed/, /is-completed status-completed/, /status-doing/, /status-cancel/, /status-back/]
  const flagcontents = [/第二阶段flag-content-field/, /第四阶段1flag-content-field/, /第四阶段2flag-content-field/, /第五阶段flag-content-field/]
  const titles = ['POR1', 'POR2', 'POR3', 'POR4', 'POR5']

  for (let i = 0; i < count; i++) {
    await expect(flags.nth(i)).toHaveText(flagcontents[i])
    await expect(nodeIcons.nth(i)).toHaveClass(iconClasss[i])
    await expect(nodeTitles.nth(i)).toHaveText(titles[i])
    await expect(nodeDates.nth(i)).toHaveText(/2018-9/)
  }
})
