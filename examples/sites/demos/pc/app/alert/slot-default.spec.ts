import { test, expect } from '@playwright/test'

test('测试 Alert 自定义交互操作', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('alert#slot-default')

  // 第1个：slot 自定义内容（有 opration，但里面是 span 文本）
  const alert1 = page.locator('.tiny-alert').filter({ hasText: 'slot 自定义内容' })
  await expect(alert1.locator('.tiny-alert__opration')).toHaveCount(1)
  await expect(alert1.locator('.tiny-alert__opration')).toHaveText('自定义内容')

  // 第2个：slot 自定义交互操作（有 opration，里面是链接）
  const alert2 = page.locator('.tiny-alert').filter({ hasText: 'slot 自定义交互操作' })
  const opration = alert2.locator('.tiny-alert__opration')
  await expect(opration).toHaveCount(1)
  await expect(opration.locator('a')).toHaveCount(2)
  await expect(opration.locator('a').nth(0)).toHaveText('确定')
  await expect(opration.locator('a').nth(1)).toHaveText('取消')

  // 第3个：成功（有 opration + 描述）
  const alert3 = page.locator('.tiny-alert').filter({ hasText: '成功' })
  await expect(alert3.locator('.tiny-alert__opration')).toHaveCount(1)

  // 第4个：错误（有 opration 但为空）
  const alert4 = page.locator('.tiny-alert').filter({ hasText: '错误' })
  await expect(alert4.locator('.tiny-alert__opration')).toHaveCount(1)

  // 第5个：警告（有 opration）
  const alert5 = page.locator('.tiny-alert').filter({ hasText: '警告' })
  await expect(alert5.locator('.tiny-alert__opration')).toHaveCount(1)
})
