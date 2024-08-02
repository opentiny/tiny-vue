import { test, expect } from '@playwright/test'

test('多选', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('cascader-panel#multiple')
  const multipleText1 = page.getByText(
    '选中值：[ [ "zhinan", "anzhuang", "xiangmudengji" ], [ "zhinan", "anzhuang", "huanjingzhunbei" ], [ "zhinan", "anzhuang", "anzhuangcli" ], [ "zhinan", "kaifa", "monishuju" ] ]'
  )
  await expect(multipleText1).toBeVisible()
  await page.getByRole('menuitem', { name: '创建项目' }).locator('span').nth(1).click()
  const multipleText2 = page.getByText(
    '选中值：[ [ "zhinan", "anzhuang", "xiangmudengji" ], [ "zhinan", "anzhuang", "huanjingzhunbei" ], [ "zhinan", "anzhuang", "anzhuangcli" ], [ "zhinan", "anzhuang", "chuangjianxiangmu" ], [ "zhinan", "kaifa", "monishuju" ] ]'
  )
  await expect(multipleText2).toBeVisible()
})
