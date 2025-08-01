import { test, expect } from '@playwright/test'

test('dialogSelect 设置多选状态', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-select#set-selection')
  await page.locator('#set-selection').getByRole('button', { name: '打开窗口' }).click()
  await page.getByRole('button', { name: 'Close' }).click()
  await page.getByRole('button', { name: '切换第二行选中状态' }).click()
  await page.locator('#set-selection').getByRole('button', { name: '打开窗口' }).click()

  const trs = await page.locator('.tiny-grid table tbody tr').all()
  for (let i = 0; i < trs.length; i++) {
    const classes = await trs[i].getAttribute('class')
    if (i === 1) {
      expect(classes?.includes('row__selected')).toBeTruthy()
    } else {
      expect(classes?.includes('row__selected')).toBeFalsy()
    }
  }
})
