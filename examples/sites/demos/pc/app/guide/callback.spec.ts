import { test, expect } from '@playwright/test'

test('窗口的事件回调', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('guide#callback')

  const start = page.getByRole('button', { name: '展示之前回调' })
  const showBtn = page.getByRole('button', { name: '展示之前', exact: true })
  const nextBtn = page.getByRole('button', { name: '下一步' })
  const cancelBtn = page.getByRole('button', { name: 'Close Tour' })
  const completeBtn = page.getByRole('button', { name: '完成', exact: true })
  const guide = page.getByRole('dialog')
  const text = page.locator('.callback-content')

  await start.click()
  await expect(guide).toBeVisible()
  await expect(guide).toHaveText(/新手引导标题1/)
  await expect(text).toHaveText(/beforeShow/)

  await showBtn.click()
  await expect(guide).toBeVisible()
  await expect(guide).toHaveText(/新手引导标题2/)
  await expect(text).toHaveText(/show/)

  await nextBtn.click()
  await expect(guide).toBeVisible()
  await expect(guide).toHaveText(/新手引导标题3/)
  await expect(text).toHaveText(/show/)

  await nextBtn.click()
  await expect(guide).toBeVisible()
  await expect(guide).toHaveText(/新手引导标题4/)
  await expect(text).toHaveText(/beforeHide/)

  await nextBtn.click()
  await expect(guide).toBeVisible()
  await expect(guide).toHaveText(/新手引导标题5/)
  await expect(text).toHaveText(/hide/)

  await cancelBtn.click()
  await expect(guide).toBeHidden()
  await expect(text).toHaveText(/cancel/)

  await start.click()
  await showBtn.click()
  await nextBtn.click()
  await nextBtn.click()
  await nextBtn.click()
  await nextBtn.click()
  await expect(guide).toBeVisible()
  await expect(guide).toHaveText(/新手引导标题6/)
  await expect(text).toHaveText(/hide/)
  await completeBtn.click()
  await expect(guide).toBeHidden()
  await expect(text).toHaveText(/destroy/)
})
