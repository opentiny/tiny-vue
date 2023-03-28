import { describe, expect, it } from 'vitest'
import { transformVirtualTemplate, transformVirtualTemplateForBuild } from '../src/core/index'

describe('index', () => {
  describe('transformVirtualTemplate', () => {
    it('pc|mobile|mobile-first', () => {
      expect(transformVirtualTemplate('import template from \'virtual:template?pc|mobile|mobile-first\'')).toMatchSnapshot()
    })

    it('pc|mobile=pc|mobile-first', () => {
      expect(transformVirtualTemplate('import template from \'virtual:template?pc|mobile=pc|mobile-first\'')).toMatchSnapshot()
    })

    it('pc|mobile|mobile-first=pc', () => {
      expect(transformVirtualTemplate('import template from \'virtual:template?pc|mobile|mobile-first=pc\'')).toMatchSnapshot()
    })
  })

  describe('transformVirtualTemplateForBuild', () => {
    it('pc|mobile|mobile-first', () => {
      expect(transformVirtualTemplateForBuild('import template from \'virtual:template?pc|mobile|mobile-first\'')).toMatchSnapshot()
    })

    it('pc|mobile=pc|mobile-first', () => {
      expect(transformVirtualTemplateForBuild('import template from \'virtual:template?pc|mobile=pc|mobile-first\'')).toMatchSnapshot()
    })

    it('pc|mobile|mobile-first=pc', () => {
      expect(transformVirtualTemplateForBuild('import template from \'virtual:template?pc|mobile|mobile-first=pc\'')).toMatchSnapshot()
    })
  })
})
