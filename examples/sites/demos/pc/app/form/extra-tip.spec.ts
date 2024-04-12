import { test, expect } from '@playwright/test'

test('错误提示插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('form#extra-tip')

  const demo = page.locator('#extra-tip')
  const validBtn = demo.getByRole('button', { name: '提交' }).first()

  await expect(demo.getByText('需要填写真实姓名')).toBeVisible()
  await expect(demo.getByText('需要填写真实年龄')).toBeVisible()
  await validBtn.click()
  await expect(demo.getByText('需要填写真实姓名')).toBeVisible()
  await expect(demo.getByText('需要填写真实年龄')).toBeVisible()
})
