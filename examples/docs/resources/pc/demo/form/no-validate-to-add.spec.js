import { test, expect } from '@playwright/test'

test('测试无校验的组件添加校验的方法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/form/no-validate-to-add')

  const preview = page.locator('#preview')
  const form = preview.locator('.tiny-form')
  const tooltip = page.locator('.tiny-tooltip')
  const errorModal = page.locator('.tiny-modal__box')

  await form.getByRole('button', { name: '立即创建' }).click()
  await expect(tooltip.getByText('请选择活动区域')).toBeVisible()
  await expect(tooltip.getByText('请选择日期')).toBeVisible()
  await expect(tooltip.getByText('请选择时间')).toBeVisible()
  await expect(tooltip.getByText('请至少选择一个活动性质')).toBeVisible()
  await expect(tooltip.getByText('请选择活动资源')).toBeVisible()
  await expect(tooltip.getByText('请填写活动形式')).toBeVisible()
  await expect(errorModal.getByText('error')).toBeVisible()
  await errorModal.getByRole('button', { name: '确认' }).click()
  await form.getByRole('button', { name: '重置' }).click()
  await expect(tooltip.getByText('请选择活动区域')).not.toBeVisible()
  await expect(tooltip.getByText('请选择日期')).not.toBeVisible()
  await expect(tooltip.getByText('请选择时间')).not.toBeVisible()
  await expect(tooltip.getByText('请至少选择一个活动性质')).not.toBeVisible()
  await expect(tooltip.getByText('请选择活动资源')).not.toBeVisible()
  await expect(tooltip.getByText('请填写活动形式')).not.toBeVisible()
})
