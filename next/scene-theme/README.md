# SceneCss ---- 场景化CSS库

该库 `SceneCss` 为公共场景样式库,它包含以下公共场景的css:

- common-css变量 ：公共的颜色、尺寸、圆角等`css vars` ，方便统一切换。
- common-场景类名 ：公共的场景类名，类名可以组合，规范场景的样式，方便统一切换。
- common-工具类名 ：公共的类名，可以加在任何其它场景之上。

## 动机

该库抽象不同组件的公共场景，是启发自 `@opentiny/vue` 组件库的一次场景化主题整改。在那次整改中，出发点是`站在一个组件的层面，去分析该组件有多少场景状态`，针对每种场景状态去编写独立的场景css， 这样每个场景互相解耦，让组件样式更稳定，更利于维护。

但在多个组件梳理时，会发现有诸多公共的界面的情况，比如：Modal, Dialog-box,都有 `header,body,footer` 等部分，都类似窗口容器。TabItem, Collapse-item 也是类似的面板场景。 Menu, Dropdown-item, Action-menu的元素项，都有列表场景，具有鼠标响应与分隔线等等。

又比如一些公共的工具样式，比如`省略号场景`， `拖动/resize时，光标的场景`, `tooltip窗口的小三角场景` 等等，它们可能在许多组件中都用得到。

如果每个组件独立维护场景，必然有许多重复的地方，也会有许多重复的css 积累在组件库里。受此启发，我们就跳出组件的范畴去编写每个组件的css， 而是站在组件的上一层去统筹所有的场景，将在开发一套完整组件库时，会遇到的`所有场景`都实现，它就是`SceneCss` 了。

## 定位

- `TailwindCss` 是一个原子类样式库，原子化css属性，太过离散而不便于使用。
- `BootstrapCss` 是一款老牌的组件样式库。每个组件是功能独立的，有各自的组件类名规范。
- `SceneCss` 的设计目标是介于它们之间，即 `原子化场景 + 抽象组件公共样式` 。可以称 `SceneCss` 是一种`分子类样式框架` 。

简便可记忆为： TailwindCss(原子类) < SceneCss(分子类) < BootstrapCss(细胞)

# 惯例约定

`SceneCss` 中主要包含 `cssVar` 名称，场景名称和场景的状态名称，名称前缀做以下约定：

- `cssVar名称` : `--sc-`btn-text-color
- `场景名称`: `.sc-`btn
- `场景的状态名称`: `.s-`active `.s-`dk `.s-`sm

名称中尽量使用缩写，以减少类名长度：

light: lt
dark: dk

xl: xl
large: lg
medium: md ----默认尺寸
small: sm
xs:xs

primary: pri
success: succ
warning: warn
error: err
information: info

head: hd
body: bd
foot: ft

prefix: pre
suffix: suf
