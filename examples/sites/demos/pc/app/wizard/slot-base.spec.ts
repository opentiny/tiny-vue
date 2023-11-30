import { test, expect } from '@playwright/test'

test('基本插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('wizard#slot-base')

  const stepItems = page.locator('.tiny-wizard__steps-item')
  const names = stepItems.locator('.tiny-wizard__name')
  const descs = ['出差信息填写', '项目信息填写', '主管审批', '权签人审批', '完成申请']

  for (let i = 0; i < 5; i++) {
    await expect(names.nth(i)).toHaveText(descs[i])
  }
})
