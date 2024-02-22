/* eslint-env node */

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@antfu', 'plugin:prettier/recommended'],
  rules: {
    'vue/component-tags-order': [
      'error',
      {
        order: [['script', 'template'], 'style']
      }
    ],
    'vue/order-in-components': 'off',
    'vue/component-name-in-template-casing': 'off',
    'vue/custom-event-name-casing': 'off',
    'vue/quote-props': 'off',
    'vue/attributes-order': 'off',
    'vue/prop-name-casing': 'off',
    'vue/html-self-closing': 'off',
    'vue/prefer-separate-static-class': 'off',
    'vue/comma-dangle': 'off',
    'vue/prefer-template': 'off',
    'vue/no-unused-refs': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'curly': 'off',
    'sort-imports': 'off',
    'prefer-template': 'off',
    'arrow-parens': 'off',
    'operator-linebreak': 'off',
    'antfu/if-newline': 'off',
    'antfu/top-level-function': 'off',
    'import/order': 'off',
    'import/no-duplicates': 'off',
    'quote-props': 'off',
    'prefer-const': 'off',
    'multiline-ternary': 'off',
    'vue/no-deprecated-v-on-native-modifier': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/brace-style': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-invalid-this': 'off'
  }
}
