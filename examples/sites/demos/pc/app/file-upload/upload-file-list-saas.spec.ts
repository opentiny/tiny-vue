import { test, expect } from '@playwright/test'

test('SaaS 风格文件列表', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#upload-file-list-saas')

  const upload = page.getByRole('button', { name: '文件上传' })
  const lists = page.locator('div').filter({ hasText: /^test2\.doc删除16\.84M$/ })

  await upload.isVisible()
  await expect(lists).toHaveCount(2)
  await page
    .locator('div')
    .filter({ hasText: /^test3\.png删除60K\/200K$/ })
    .first()
    .isVisible()
  await page
    .locator('div')
    .filter({ hasText: /^test4\.doc删除上传失败$/ })
    .first()
    .isVisible()
  await page
    .locator('div')
    .filter({
      hasText:
        /^test5超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长\.doc删除16\.84M$/
    })
    .first()
    .isVisible()
  await page
    .locator('div')
    .filter({ hasText: /^没有文件大小\.doc删除$/ })
    .first()
    .isVisible()
})
