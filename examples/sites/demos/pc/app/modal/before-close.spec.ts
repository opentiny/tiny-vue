import { test, expect } from '@playwright/test'

test('关闭前的回调', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#before-close')

  // 场景1：标签式弹窗关闭 -> 标签式拦截弹窗确认 -> 原弹窗关闭
  await test.step('标签式弹窗：关闭按钮触发 beforeClose，拦截弹窗确认后关闭原弹窗', async () => {
    await page.getByRole('button', { name: '标签式弹窗' }).click()

    const modal1 = page.locator('.tiny-modal__box').filter({ hasText: 'Num.1标签式弹窗' })
    await expect(modal1).toBeVisible()

    // 点击右上角关闭按钮
    await modal1.locator('.tiny-modal__close-btn').click()

    // 标签式拦截弹窗出现（confirmVisible）
    const modal2 = page.locator('.tiny-modal__box').filter({ hasText: 'Num.2弹窗关闭前确认' })
    await expect(modal2).toBeVisible()

    // 原弹窗保留
    await expect(modal1).toBeVisible()

    // 拦截弹窗点击"确定" -> 调用 done() -> 关闭原弹窗
    await modal2.getByRole('button', { name: '确定' }).click()
    await expect(modal2).not.toBeVisible()
    await expect(modal1).not.toBeVisible()
  })

  // 场景2：标签式弹窗关闭 -> 标签式拦截弹窗取消 -> 原弹窗保留
  await test.step('标签式弹窗：拦截弹窗取消后保留原弹窗，默认footer取消按钮直接关闭', async () => {
    await page.getByRole('button', { name: '标签式弹窗' }).click()

    const modal1 = page.locator('.tiny-modal__box').filter({ hasText: 'Num.1标签式弹窗' })
    await expect(modal1).toBeVisible()

    await modal1.locator('.tiny-modal__close-btn').click()

    const modal2 = page.locator('.tiny-modal__box').filter({ hasText: 'Num.2弹窗关闭前确认' })
    await expect(modal2).toBeVisible()

    // 拦截弹窗点击"取消" → 不调用 done() → 保留原弹窗
    await modal2.locator('.tiny-modal__close-btn').click()
    await expect(modal2).not.toBeVisible()
    await expect(modal1).toBeVisible()

    // 点击默认 footer 的"取消"按钮 → cancel 事件 → 直接关闭（不触发 beforeClose）
    await modal1.getByRole('button', { name: '确定' }).click()
    await expect(modal1).not.toBeVisible()
  })

  // 场景3：标签式+函数式弹窗关闭 -> 函数式拦截弹窗确认 -> 关闭
  await test.step('标签式加函数式弹窗：关闭按钮触发 beforeClose，函数式拦截弹窗确认后关闭', async () => {
    await page.getByRole('button', { name: '标签式 + 函数式弹窗' }).click()

    const modal1 = page.locator('.tiny-modal__box').filter({ hasText: 'Num.1标签式加函数弹窗' })
    await expect(modal1).toBeVisible()

    await modal1.locator('.tiny-modal__close-btn').click()

    // 函数式拦截弹窗出现（Modal.confirm）
    const modal2 = page.locator('.tiny-modal__box').filter({ hasText: '关闭前确认Num.2' })
    await expect(modal2).toBeVisible()

    // 原弹窗保留
    await expect(modal1).toBeVisible()

    // 拦截弹窗确认 → 关闭所有
    await modal2.getByRole('button', { name: '确定' }).click()
    await expect(modal2).not.toBeVisible()
    await expect(modal1).not.toBeVisible()
  })

  //  场景4：标签式+函数式弹窗关闭 -> 函数式拦截弹窗取消 -> 保留
  await test.step('标签式加函数式弹窗：拦截弹窗取消后保留原弹窗，默认footer取消按钮直接关闭', async () => {
    await page.getByRole('button', { name: '标签式 + 函数式弹窗' }).click()

    const modal1 = page.locator('.tiny-modal__box').filter({ hasText: 'Num.1标签式加函数弹窗' })
    await expect(modal1).toBeVisible()

    await modal1.locator('.tiny-modal__close-btn').click()

    const modal2 = page.locator('.tiny-modal__box').filter({ hasText: '关闭前确认Num.2' })
    await expect(modal2).toBeVisible()

    // 拦截弹窗取消 → 保留原弹窗
    await modal2.getByRole('button', { name: '取消' }).click()
    await expect(modal2).not.toBeVisible()
    await expect(modal1).toBeVisible()

    // 默认 footer 取消按钮直接关闭
    await modal1.getByRole('button', { name: '确定' }).click()
    await expect(modal1).not.toBeVisible()
  })

  //  场景5：自定义footer弹窗 -> 右上角X -> 函数式拦截弹窗确认 -> 关闭
  await test.step('自定义footer弹窗：右上角X触发 beforeClose，拦截弹窗确认后关闭', async () => {
    await page.getByRole('button', { name: '其他' }).click()

    const modal1 = page.locator('.tiny-modal__box').filter({ hasText: 'Num.1确认按钮加拦截弹窗' })
    await expect(modal1).toBeVisible()

    // 右上角关闭按钮触发 beforeClose1
    await modal1.locator('.tiny-modal__close-btn').click()

    const modal2 = page.locator('.tiny-modal__box').filter({ hasText: '关闭前确认Num.2' })
    await expect(modal2).toBeVisible()

    await expect(modal1).toBeVisible()

    await modal2.getByRole('button', { name: '确定' }).click()
    await expect(modal2).not.toBeVisible()
    await expect(modal1).not.toBeVisible()
  })

  //  场景6：自定义footer弹窗 -> 点"确定" -> 函数式拦截弹窗确认 -> 关闭
  await test.step('自定义footer弹窗：点击确定触发 beforeClose，拦截弹窗确认后关闭', async () => {
    await page.getByRole('button', { name: '其他' }).click()

    const modal1 = page.locator('.tiny-modal__box').filter({ hasText: 'Num.1确认按钮加拦截弹窗' })
    await expect(modal1).toBeVisible()

    // 点击自定义 footer 的"确定"按钮 -> 触发 beforeClose1
    await modal1.getByRole('button', { name: '确定' }).click()

    const modal2 = page.locator('.tiny-modal__box').filter({ hasText: '关闭前确认Num.2' })
    await expect(modal2).toBeVisible()

    await expect(modal1).toBeVisible()

    // 拦截弹窗确认 -> 关闭所有
    await modal2.getByRole('button', { name: '确定' }).click()
    await expect(modal2).not.toBeVisible()
    await expect(modal1).not.toBeVisible()
  })

  //  场景7：函数式弹窗关闭 -> 函数式拦截弹窗确认 -> 全部关闭
  await test.step('函数式弹窗：关闭触发 beforeClose，拦截弹窗确认后全部关闭', async () => {
    await page.getByRole('button', { name: '函数式弹窗1' }).click()

    const modal1 = page.locator('.tiny-modal__box').filter({ hasText: '函数式弹窗Num.1' })
    await expect(modal1).toBeVisible()

    await modal1.locator('.tiny-modal__close-btn').click()

    const modal2 = page.locator('.tiny-modal__box').filter({ hasText: '关闭前确认Num.2' })
    await expect(modal2).toBeVisible()

    await expect(modal1).toBeVisible()

    await modal2.getByRole('button', { name: '确定' }).click()
    await expect(modal2).not.toBeVisible()
    await expect(modal1).not.toBeVisible()
  })
})
