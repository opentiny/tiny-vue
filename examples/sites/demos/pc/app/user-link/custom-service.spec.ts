import { test, expect } from '@playwright/test'

test('user-link-custom-service', async ({ page }) => {
  await page.goto('user-link#custom-service')
  const card = page.locator('.tiny-popper.tiny-user-card')
  const reference = page.locator('#preview .tiny-userlink .tiny-popover__reference')
  const img = card.locator('.card-top-img img')

  await expect(reference).toHaveText('test3')
  await expect(card).toBeHidden()
  await reference.click()
  await page.waitForTimeout(1000)
  await expect(card).toBeVisible()
  await expect(img).toHaveAttribute('src', '/static/images/dog1.png')

  const text = card.locator('.card-top-text')
  await expect(text).toContainText(['公共技术测试数据部门(测试数据部)'])

  await page.getByText('展开').click()
  await page.getByText('收起').click()
})
