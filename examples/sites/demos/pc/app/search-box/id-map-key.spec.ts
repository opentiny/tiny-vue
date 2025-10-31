import { test, expect } from '@playwright/test'

test('指定筛选项的ID键取值', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('search-box#id-map-key')

  page.on('console', (msg) => {
    if (msg.type() === 'log') {
      expect(msg.text()).toEqual(
        'changeEvent: [{"label":"名称","field":"testName","value":"evs-2","nameId":4}] Proxy(Array)'
      )
    }
  })

  await page.getByRole('textbox', { name: '选择属性筛选，或输入关键字搜索' }).click()
  await page.locator('li').filter({ hasText: '名称' }).locator('div').nth(1).click()
  await page.locator('div').filter({ hasText: 'evs-2' }).nth(3).click()
})
