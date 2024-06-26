import * as Quill from 'quill';
import * as hljs from 'highlight.js';

const Syntax = Quill.imports['modules/syntax'];

// @dynamic
class CustomSyntax extends Syntax {
  static DEFAULTS: { hljs: any; interval: number; languages: { key: string; label: string }[] };
  initListener() {
    // fix: initListener方法写了代码块高亮下拉框的逻辑，重写该方法，屏蔽代码块高亮
  }
}

CustomSyntax.DEFAULTS = {
  hljs,
  interval: 1000,
  languages: [
    { key: 'plain', label: 'Plain' },
    { key: 'bash', label: 'Bash' },
    { key: 'cpp', label: 'C++' },
    { key: 'cs', label: 'C#' },
    { key: 'css', label: 'CSS' },
    { key: 'diff', label: 'Diff' },
    { key: 'xml', label: 'HTML/XML' },
    { key: 'java', label: 'Java' },
    { key: 'javascript', label: 'Javascript' },
    { key: 'markdown', label: 'Markdown' },
    { key: 'php', label: 'PHP' },
    { key: 'python', label: 'Python' },
    { key: 'ruby', label: 'Ruby' },
    { key: 'sql', label: 'SQL' },
  ],
};

export default CustomSyntax;
