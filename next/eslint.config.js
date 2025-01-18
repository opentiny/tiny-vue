// 整个工程的代码格式校验，以 vueuse 的为模板
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    formatters: true,
    ignores: ['patches', 'playgrounds', '**/types', '**/cache', '**/dist', '**/.temp', '**/*.svg']
  },
  {
    rules: {
      'vue/no-deprecated-functional-template': 'off',
      'vue/one-component-per-file': 'off',
      'vue/no-template-shadow': 'off',
      'vue/require-prop-types': 'off',
      'spaced-comment': ['error', 'always', { exceptions: ['#__PURE__'] }],
      'ts/ban-types': 'off',
      'node/no-callback-literal': 'off',
      'import/namespace': 'off',
      'import/default': 'off',
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'node/prefer-global/process': 'off',
      'ts/unified-signatures': 'off',
      'ts/no-unsafe-function-type': 'off',
      'ts/no-dynamic-delete': 'off'
    }
  },
  {
    files: [
      '**/*.md',
      '**/*.md/*.[jt]s',
      '**/*.md/*.vue',
      '**/demo.vue',
      '**/demo.client.vue',
      '**/*.test.ts',
      'scripts/*.ts'
    ],
    rules: {
      'no-alert': 'off',
      'no-console': 'off',
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'no-restricted-imports': 'off',
      'vue/no-unused-vars': 'off',
      'vue/no-unused-refs': 'off',
      'vue/require-v-for-key': 'off',
      'ts/no-unused-vars': 'off',
      'ts/no-redeclare': 'off',
      'unused-imports/no-unused-vars': 'off'
    }
  }
)
