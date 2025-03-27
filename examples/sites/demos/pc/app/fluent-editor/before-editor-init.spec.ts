import { test, expect } from '@playwright/test'

test('初始化前的钩子', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('fluent-editor#before-editor-init')
  const demo = page.locator('#before-editor-init')
  await page.locator('#before-editor-init').getByText('Hello FluentEditor!').click()
  await page
    .locator('#before-editor-init #editor div')
    .filter({ hasText: 'Hello FluentEditor!' })
    .press('ControlOrMeta+a')
  await demo.getByLabel('good').click()
  const cls = demo.locator('.ql-editor strong')
  await expect(cls).toHaveCSS('color', 'rgb(92, 179, 0)')
  await page
    .locator('#before-editor-init #editor div')
    .filter({ hasText: 'Hello FluentEditor!' })
    .press('ControlOrMeta+a')
  await demo.getByLabel('bad').click()
  await expect(cls).toHaveCSS('color', 'rgb(242, 48, 48)')
})
