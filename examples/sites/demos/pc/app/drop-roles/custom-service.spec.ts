import { test, expect } from '@playwright/test'

test('自定义服务', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('drop-roles#custom-service')

  const input = page.getByPlaceholder('选择角色')
  const listItems = page.getByRole('listitem')
  const url = await page.evaluate(() => window.location.href)
  const notify1 = page.locator('.tiny-notify').filter({
    hasText: `切换后的角色是：001，根据角色发送请求的 URL 如下：${url}`
  })
  const notify2 = page.locator('.tiny-notify').filter({
    hasText: `切换后的角色是：002，根据角色发送请求的 URL 如下：${url}`
  })

  await expect(input).toHaveValue('Developer')
  await input.click() // 展开下拉
  await listItems.filter({ hasText: 'Administrator' }).click()
  await expect(notify1).toHaveCount(1)
  await expect(input).toHaveValue('Administrator')
  await input.click() // 展开下拉
  await listItems.filter({ hasText: 'Developer' }).click()
  await expect(notify2).toHaveCount(1)
  await expect(input).toHaveValue('Developer')
})
