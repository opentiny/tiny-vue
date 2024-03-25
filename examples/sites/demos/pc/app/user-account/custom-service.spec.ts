import { test, expect } from '@playwright/test'

test('user-account-custom-service', async ({ page }) => {
  await page.goto('user-account#custom-service')
  const userImage = page.locator('.tiny-user-head__portrait')
  const userName = page.locator('.tiny-user-contact__role-name')
  const dropdown = page.locator('.tiny-popover.tiny-user-account')
  const content = page.locator('.custom-content')
  const loginButton = page.locator('.tiny-logout')

  await expect(userImage).toHaveCSS('background-image', /\/images\/dog1.png/)
  await expect(userName).toHaveText('test1')
  await expect(dropdown).toBeHidden()
  await userName.hover()
  await expect(dropdown).toBeVisible()
  await expect(content).toHaveText('默认插槽自定义内容')
  await expect(loginButton).toHaveText('登录')
  await loginButton.click()
  await page.getByRole('button', { name: '确定' }).click()
  await page.waitForTimeout(1000)
  await userName.hover()
  await page.waitForTimeout(1000)
  await expect(loginButton).toHaveText('注销')
})
