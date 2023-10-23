module.exports = {
  printWidth: 160, // 一行120字符数，如果超过会进行换行
  tabWidth: 2, // tab等2个空格
  useTabs: false, // 用空格缩进行
  semi: true, // 行尾使用分号
  singleQuote: true, // 字符串使用单引号
  quoteProps: 'as-needed', // 仅在需要时在对象属性添加引号
  jsxSingleQuote: false, // 在JSX中使用双引号
  trailingComma: 'es5', // 使用尾逗号(对象、数组等)
  bracketSpacing: true, // 对象的括号间增加空格
  jsxBracketSameLine: false, // 将多行JSX元素的>放在最后一行的末尾
  arrowParens: 'avoid', // 在唯一的arrow函数参数周围省略括号
  vueIndentScriptAndStyle: false, // 不缩进Vue文件中的<script>和<style>标记内的代码
  endOfLine: 'lf', // 仅限换行（\n）
};
