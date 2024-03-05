import { test, expect } from '@playwright/test'

test('自定义服务数据', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dept#custom-service')
  const iconBox = page.locator('.tiny-input__suffix-inner svg')
  await iconBox.first().click()
  await page.getByPlaceholder('可输入部门编码或名称').first().click()
  await page.getByText('无线网络业务架构与设计部').click()
  await page
    .locator('div')
    .filter({ hasText: /^公司SZ技术SZ海洋网络天闻数媒贝托SZ鼎桥通信$/ })
    .getByRole('textbox')
    .click()
  await page.getByRole('listitem').filter({ hasText: 'SZ技术' }).click()
  await page
    .locator('div')
    .filter({ hasText: /^一级部门测试数据室XX中国XX测试数据部测试数据XX管理部$/ })
    .getByRole('textbox')
    .click()
  await page.getByRole('listitem').filter({ hasText: '测试数据室XX' }).click()
  await page
    .locator('div')
    .filter({ hasText: /^五级部门测试数据室XX中国XX测试数据部测试数据XX管理部$/ })
    .getByRole('textbox')
    .click()
  await page.getByRole('listitem').filter({ hasText: '测试数据室XX' }).click()
  await page.waitForTimeout(500)
  await page.getByRole('button', { name: '确定' }).click()
  //   await page.waitForTimeout(500)
  const inputBox = page.locator('.tiny-dept .tiny-input input').first()
  await expect(inputBox).toHaveValue(
    'SZ技术/测试数据室XX/中央XX测试数据部/XX应用交付部/XX应用实施部/测试数据室XX/中央XX测试数据部/XX应用交付部/XX应用实施部'
  )
})
