import { test, expect } from '@playwright/test'

test('通过添加多个类名实现用户引导', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('guide#title-steps')

  const showBtn = page.getByRole('button', { name: '多步骤新手引导开始' })
  const step1 = page.getByRole('heading', { name: '新手引导标题1' })
  const step2 = page.getByRole('heading', { name: '新手引导标题2' })
  const step3 = page.getByRole('dialog').locator('div').nth(2)
  const next = page.getByRole('button', { name: '下一步' })
  const complate = page.getByRole('button', { name: '完成' })
  const closeBtn = page.getByRole('button', { name: 'Close Tour' })

  await showBtn.click()
  await expect(step1).toBeVisible()
  await next.click()
  await expect(step2).toBeVisible()
  await next.click()
  await expect(step3).toBeVisible()
  await complate.click()
  await expect(step3).toBeHidden()
})
