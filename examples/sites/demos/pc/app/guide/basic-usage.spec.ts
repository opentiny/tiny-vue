import { test, expect } from '@playwright/test'

test('基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('guide#basic-usage')

  const activeDom = await page.getByRole('button', { name: '基础新手引导开始' })
  const step1 = page.getByRole('heading', { name: '新手引导标题1' })
  const step2 = page.getByRole('heading', { name: '新手引导标题2' })
  const step3 = page.getByRole('dialog').locator('div').nth(2)
  const next = page.getByRole('button', { name: '下一步' })
  const complate = page.getByRole('button', { name: '完成' })
  const showBtn = page.getByRole('button', { name: '基础新手引导开始' })
  const closeBtn = page.getByRole('button', { name: 'Close Tour' })

  // 打开页面即显示guide
  await expect(step1).toBeVisible()

  // 点击下一步，引导
  await next.click()
  await expect(step2).toBeVisible()
  await next.click()
  await expect(step3).toBeVisible()
  await complate.click()
  await expect(step3).toBeHidden()

  // 引导显示后，点击关闭按钮可关闭
  await showBtn.click()
  await expect(step1).toBeVisible()
  await closeBtn.click()
  await expect(step3).toBeHidden()
})
