# react-component-gen 设计文档

## 目标

TinyVue 在实现中将 UI 逻辑拆分为了 renderless 无渲染层和具体的 Vue 渲染层两部分，预期是通过最大程度复用 renderless 中的逻辑，更快开发出跨技术栈、行为一致的 React、Solid、openinula 组件库。

`react-component-gen` 的目标是提供一套将 TinyVue 移植到 React 技术栈中的工具集，实现：

- 更快的移植速度
- 更高的移植质量
- 更好的开发体验
- 足够的扩展性，可以支撑更多平台（目前是 PC，还需要 mobile 和 mobile-first），适用于更多技术栈。

## 设计思路概览

`react-component-gen` 核心设计思路包括“E2E 驱动”和“AI-gen 优先”两部分。

### E2E + 文档保障用户体验一致性

经过调研，TinyVue 中对 VUe 渲染层有一组详细的文档示例以及对应的 E2E 测试用例（存放在 `examples/sites` 中）。

在 TinyReact 中，同样有对应的 `examples/react-sites` 文档项目，虽然只有相对极少的文档示例且还没有 E2E 测试用例，但已经具备了基础的文档框架结构。

同样的，在将 TinyVue 移植到 React 等技术栈时，对于使用 TinyReact 等对应组件库的开发者来说，最核心的预期是“用户体验一致”，因此如果可以将 TinyVue 中的 E2E 测试在 TinyReact 中执行并全部通过，那么将非常贴合这一预期。并且在后续迭代过程中，可以通过不断追加 E2E 测试用例，持续加深多技术栈移植的质量保障能力。

另一方面，文档也是提升开发者体验的重要因素，TinyVue 中的 E2E 测试用例与文档示例一一对应，每一组文档示例就有一组对应的 E2E 测试用例，这也就意味着 E2E 如果能在 TinyReact 中通过，就代表 TinyVue 中的文档示例也全部被移植到了 TinyReact 中。

以此为目标，`react-component-gen` 开发了 `generate webdoc` 和 `generate example` 两个工具，前者用于将文档结构和描述对应的 webdoc 移植到 TinyReact 中，后者则将 TinyVue 中的文档示例代码移植到 TinyReact 中。由于 webdoc 是非常静态、结构化的数据，所以 `generate webdoc` 的逻辑较为常规，根据目录规则合并 webdoc 后在 TinyReact 中生成对应文件。而文档示例代码与技术栈强相关，且文档示例代码通常逻辑比较简单，所以 `generate example` 的方案是读取 Vue 中对应示例代码后，通过 LLM AI 转换为 React 示例代码。

对于较为简单的 Vue -> React 代码转换，使用了 LLM AI 而不是 AST transformer 等代码静态分析方案的原因将在下一个章节中讨论，但从实践结果来看，对于这个难度的任务简单的 prompt engineering 就能获得足够好的结果，开发时间低于开发维护一个 ad-hoc AST transformer。[查看](../react-component-gen/src/prompts/generate-example.system.md)对应 prompt。

在这两个命令的帮助下，我们就实现了 E2E 驱动的 TinyReact 迁移方案，在没有对应的 React 组件实现之前，就可以移植对应的 webdoc 和文档示例，在 React 组件开发过程中可以持续运行 E2E 测试确定开发效果。同样的，如果在 E2E 之外发现 TinyReact 组件移植时存在 bug，则可以补充 E2E 测试用例进行覆盖，使其可以保证后续的迭代正确且可以用于其他技术栈移植。

### AI-gen VS AST transformer

不论是文档示例代码移植还是组件代码移植，其核心都是 Vue -> React 的代码转换。在过去我们通常会使用 AST transformer 的思路来处理这类问题，将 Vue 代码解析为更加结构化、易操作的数据结构，再变形输出为对应的 React 代码。在 TinyReact 中，已经有 `react-common` 这一层抽象，用于在 React 中实现一些 Vue 专属的语义，使得变形输出的工作理论上会更加简单。

但是根据过往经验，开发一个 ad-hoc AST-transformer 通常可以快速覆盖 50% 以上的“整齐”场景，但如果代码本身的组织方式没有形成很固化的 pattern，那么异化部分的 AST transformer 适配工作就会产生更高的边界成本。另一方面，AST-transformer 自身的单元测试也需要投入较多精力，才能保证自身质量。

因此，`react-component-gen` 中希望借助 LLM AI 强大的理解能力处理 pattern 异化多、弱结构化的 Vue 源代码，作为一个 `AI-gen VS AST transformer` 的实验。同时由于我们已经有 E2E 驱动的前置准备工作，所以即使 AI-gen 的输出代码质量略低，预期也可以通过 E2E 测试检查出来，再进行小范围的人工修正。

在实践结果章节中可以看到 AI-gen 方案在克服异化 pattern 方面的显著优势。

这部分 AI-gen 对应的工具 `generate component` 同样基于 prompt engineering 实现，在移植不同组件的过程中也持续迭代了 [prompt](../react-component-gen/src/prompts/generate-component.system.md)，事实证明对 prompt 的迭代成本（仅编辑少量提示词、补充 shot）远低于维护一个 AST transformer，且在复杂场景下，AST transformer 几乎没有可行性。

> 在赛题中提到希望使用 Vite 插件开发这部分代码转换工作，但在实际设计过程中我选择优先实现一个 core CLI，使得它可以在本地保持良好的开发体验，同时也很容易集成 CI 或者服务化。Vite plugin 的执行时机目前还看不到明显的好处。

### 杂项

为了实践上述两项设计，还完成了一些周边工作，包括：

- 调整 `examples/react-sites`，使它可以加载本地 workspace 中的 TinyReact 组件（而不是使用发布的 `@pe-3/react`）。
- 开发 `generate icon` 工具，对齐所有 Icon。
- 调整 `examples/react-sites` 文档站点代码，使其具备和 `examples/sites` 相同的能力，便于 E2E 无修改直接运行。

## 实践记录

由于在 tiny-vue 仓库中产生的修改较多，因此通过两个独立的 Github PR 展示 `react-component-gen` 移植的效果。本章节将节选部分关键 commit 对应的实践结果，完整内容可参考对应 PR commit message。

- [基础 PR](https://github.com/Yuyz0112/tiny-vue/pull/1)，不包含组件移植，仅包含 TinyReact 文档可以加载本地 TinyReact 代码，以及第一个 TinyVue E2E 测试用例在 TinyReact 文档站点执行成功。
- [组件移植 PR](https://github.com/Yuyz0112/tiny-vue/pull/2)，剩余组件移植代码。

在 1 天的时间中，在 `react-component-gen` 的帮助下，以上两个 PR 总共完成了：

- 修正已有组件
  - button
  - alert
  - switch
- 移植新组件
  - layout
  - row
  - col
  - modal
- 完整移植文档示例和且对应 E2E 运行通过
  - button
  - alert
  - layout（含 row, col）
- 修正、实现 react-common 多处逻辑

### 时间线

在第一个移植 alert 组件 E2E basic-usage 用例的 [commit](https://github.com/Yuyz0112/tiny-vue/pull/1/commits/497c5f8f50776448e233c42ad787efbca980d220) 中就发现了 TinyReact alert 组件中一处 props 默认值实现不一致的 bug，这让我对 E2E 驱动这个思路更加有信心了。

在第一次使用 `generate webdoc` 的 [commit](https://github.com/Yuyz0112/tiny-vue/pull/2/commits/54a58dc728d6eb9a7c8e4690e8d93458b08fe163) 中，TinyReact 的文档就得到了显著的丰富，而且不再有额外的人工维护成本。

第一个使用 `generate example` AI-gen 迁移文档示例的 [commit](https://github.com/Yuyz0112/tiny-vue/pull/2/commits/69aad1ba2f85635dd22a4078fd82fecca387e620) 同样效果不错，绝大部分文档示例都完全符合预期。同时在 E2E 的运行下，发现 Notify 等组件还未迁移，暂时跳过相关测试。

继续运行移植的 E2E 测试用例时，在这个 [commit](https://github.com/Yuyz0112/tiny-vue/pull/2/commits/0970ac2c29deb5bb4f036b6adc011046d01e41de) 中修复了几处 bug：

- TinyReact 中的 SVG 插件缺少 SVGO 优化，E2E 用例帮助我们发现了这个差异。
- 修复了一个 react-common 中的运行时错误，对于非 TS 项目，这类错误还是比较隐蔽的。
- 修复两处 alert 组件 bug
  - 未实现 customClass props
  - 未实现 icon props

在修复之后，我们成功通过了 8 个 E2E 测试用例。

在这个 [commit](https://github.com/Yuyz0112/tiny-vue/pull/2/commits/13b96614af3acd401965468235f530626e5e18b4) 中我们通过人工查看文档示例找到并修复了一个 alert 组件中的 typo 错误，该错误导致 default slot 失效。需要注意的是 slot-default.spec.ts 中的 E2E 测试用例没有检查出这个错误，所以在后续的 [commit](https://github.com/Yuyz0112/tiny-vue/pull/2/commits/9cf79745fc4a19a1169540efcc6f98ab35b800bd) 中对 E2E 进行了补充，形成循环。

之后的一个 [commit](https://github.com/Yuyz0112/tiny-vue/pull/2/commits/292f8b8bba903e9d906bc91babbee7219414f85d) 再通过更多 E2E 测试用例的同时，也修复了两个 E2E 测试用例发现的 bug：

- `react-common` 中实现的 `<Component />` 组件没有正确传递 `props.children`。
- TinyReact 中虽然有 switch 组件的实现，但没有正确处理事件。在这个 commit 中，我们第一次在 TinyReact 中开始使用 $listeners 对接 renderless 中的事件机制。

至此，E2E 驱动的设计思路收益比较明显，AI-gen 的设计思路则主要在开发成本上有优势，在产出质量上按经验来看优势不明显。但在后续的两个 commit 中，则体现出了 AI-gen 方案的优势。

在这个 [commit](https://github.com/Yuyz0112/tiny-vue/pull/2/commits/8568c269f4b0790ec3a6a1dc5985414a01d66051) 中，我们开始移植 modal 组件，目标可以通过 button 组件的最后一组 E2E 测试用例。但实际上 TinyVue 中的 modal 实现相当复杂，在组件的基础上还封装了一套命令式 API，代码与之前迁移的组件 pattern 异化很大，且本身代码高度动态不易静态分析。如果选择 AST transformer 的路线，在这样的组件中可能会产生很高的边界成本，而 AI-gen 则受影响很小。

同时在目前的 TinyReact modal 实现中，也选择进行了一定程度的重写，优先保证 E2E 测试用例通过。预期后续更多 modal 相关 E2E 测试用例的移植可以完善 modal 的实现。

另一个 [commit](https://github.com/Yuyz0112/tiny-vue/pull/2/commits/5b64b8fa0a951fdfadba16f82d0686945e623a38) 则引发了对当前 renderless 方案的思考。该 commit 中对已经移植的 layout、row、col 组件进行了增强，在 renderless 中，实际上重度依赖了 Vue 提供的 provide + inject 语义，实现组件间的状态传递。而在 React 中，与之类似的能力是 context，但形式不完全相同，尤其是模拟同步 API 时非常复杂。因此在尝试了较长时间之后，这个 commit 以包含以下几个实验性修改告终：

- 实现 reactive parent
  - 由于在 TinyReact 中重度依赖 DOM -> fibre 的实现，因此执行时机与 Vue 很难保持一致
  - 通过增加一个 fibreMap cache 和将 $parent 实现为对象的 trick 完成了响应式，但从原理上分析很容易在 render 过程中产生异常
- 实现 inject
  - 同样是通过一个完全外部的 reactive map 实现相应逻辑，通过真实 DOM 的包含关系判断组件间的父子关系
  - 存在潜在 bug
  - 对 React 组件实现有侵入

在最后这个 commit 之后我们可以回顾一下目前 renderless 抽象对开发 TinyReact 产生的影响：

- inject、$listeners 等实现对于 React 生态开发者不友好，一个擅长 React 的开发者可能无法正确写出 TinyReact 组件。
- react-common 无法保证能够完整实现 renderless 中的所有语义，且与 Vue 中行为保持一致。
- 在具体代码中，react-common 看起来存在新旧两套实现，但是缺少设计文档描述当前状态。

当然从实际结果上看，renderless 确实能够在复用 UI 逻辑上起到很大的帮助，一个可行的思路可能是收缩 renderless 使用的 Vue API 语义，仅保留必要、可移植的语义，而不是允许使用全部的 Vue API，从而保证 renderless 是各技术栈能力的最小交集，而非 Vue 为基础的能力全集。

## 使用方式

```shell
cd react-component-gen
yarn
```

在目录下创建 `.env` 文件，放入 OPENAI_API_KEY，OPENAI_PROXY 按需配置

```env
OPENAI_API_KEY=...
# OPENAI_PROXY=...
```

执行以下 CLI 查看使用说明

```shell
./bin/dev.js generate --help
```
