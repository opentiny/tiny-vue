import { test, expect } from '@playwright/test'

test('键盘导航测试', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-mouse-keyboard#mouse-keyboard-keyboard-navigation')
  await page.getByText('GFD科技YX公司').click()
  await page.locator('body').press('ArrowDown')
  await page.waitForTimeout(300)
  await page.locator('body').press('F2')
  await page.waitForTimeout(300)
  await page
    .getByRole('row', {
      name: '2 华南区 深圳福田区 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .getByRole('textbox')
    .fill('WWWW科收缩技YX公司')

  await page
    .getByText(
      '按键说明 Arrow Up ↑：移动到当前活动单元格上面的单元格 Arrow Down ↓：移动到当前活动单元格下面的单元格 Arrow Left ←：移动到当'
    )
    .click()

  await expect(page.getByRole('cell', { name: 'WWWW科收缩技YX公司' })).toBeVisible()
})
