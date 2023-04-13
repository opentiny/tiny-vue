# Contributing

We are glad that you are willing to contribute to the TinyVue open source project. There are many forms of contribution, and you can choose one or more of them according to your strengths and interests:

- Report [new defect](https://github.com/opentiny/tiny-vue/issues/new?template=bug-report.yml)
- Provide more detailed information for [existing defects](https://github.com/opentiny/tiny-vue/labels/bug), such as supplementary screenshots, more detailed reproduction steps, minimum reproducible demo links, etc.
- Submit Pull requests to fix typos in the document or make the document clearer and better
- Add the official assistant WeChat `opentiny-official` and join the technical exchange group to participate in the discussion.

When you personally use the TinyVue component library and participate in many of the above contributions, as you become familiar with TinyVue, you can try to do something more challenging, such as:

- Fix defects, you can start with [Good-first issue](https://github.com/opentiny/tiny-vue/labels/good%20first%20issue).
- Implement new features.
- Improve unit testing.
- Translate the document.
- Participate in code review.

## Bug Reports

If you encounter problems in the process of using TinyVue components, you are welcome to submit Issue to us. Before submitting Issue, please read the relevant [official documentation](https://opentiny.design) carefully to confirm whether this is a defect or an unimplemented function.

If it is a defect, select [Bug report](https://github.com/opentiny/tiny-vue/issues/new?template=bug-report.yml) template when creating a new Issue. The title follows the format of `[componentName] defect description`. For example: `[select] filtering function, the selected option cannot be selected again after it has been deleted`.

Issue that reports defects mainly needs to fill in the following information:
- Version numbers of `@opentiny/vue` and `vue`.
- The performance of the defect can be illustrated by screenshot, and if there is an error, the error message can be posted.
- Defect reproduction step, preferably with a minimum reproducible demo link.

If it is a new feature, select [Feature request](https://github.com/opentiny/tiny-vue/issues/new?template=feature-request.yml) template. The title follows the format of `[componentName] new feature description`. For example: `[select] selection box is too long to display, hope to support the configuration of tips prompt`.

The following information is required for the Issue of the new feature:
- What problems does this feature mainly solve for users?
- What is the api of this feature?

## Pull Requests

Before submitting pull request, please make sure that your submission is in line with the overall plan of TinyVue. Generally, issues that marked as [bug](https://github.com/opentiny/tiny-vue/labels/bug) are encouraged to submit pull requests. If you are not sure, you can create a [Discussion](https://github.com/opentiny/tiny-vue/discussions) for discussion.

Local startup steps:

- Click the Fork button in the upper right corner of the [TinyVue](https://github.com/opentiny/tiny-vue) code repository to Fork the upstream repository to the personal repository.
- Clone personal repository to local.
- Associated with the upstream repository to facilitate the synchronization of the latest code of the upstream repository.
- Run `pnpm i` under the TinyVue root directory to install node dependencies.
- Run `pnpm dev` to launch the component library website.
- Open the browser to visit: [http://127.0.0.1:6175/](http://127.0.0.1:6175/)

```shell
# You need to replace username with your own user name
git clone git@github.com:username/tiny-vue.git
cd tiny-vue

# Associate upstream repository
git remote add upstream git@github.com:opentiny/tiny-vue.git

# Installation
pnpm i

# Launch Vue.js 3
pnpm dev

# Launch Vue.js 2
pnpm dev:vue2
```

To submit a PR:

- Make sure that you have completed the steps in local startup and can visit [http://127.0.0.1:6175/](http://127.0.0.1:6175/) normally.
- Synchronize upstream repository dev branch latest code: `git pull upstream dev`.
- Create a new branch `git checkout-b username/feature1 upstream/ dev` from the upstream repository dev branch. The name of the branch should be `username/feat- xxx` / `username/fix- xxx`.
- Local coding.
- Submit according to [Commit Message Format](https://www.conventionalcommits.org/zh-hans/v1.0.0/) specification. PR that do not conform to the submission specification will not be merged.
- Submit to remote repository: `git push origin branchName`.
- Open the [Pull requests](https://github.com/opentiny/tiny-vue/pulls) link of the TinyVue code repository and click the New pull request button to submit the PR.
- Project Committer conducts Code Review and makes comments.
- The PR author adjusts the code according to the opinion. Please note that when a branch initiates PR, the subsequent commit will be synchronized automatically, and there is no need to resubmit the PR.
- Project administrator merges PR.

The contribution process is over, thank you for your contribution!

## Join OpenTiny community

If you are interested in our open source project, you are welcome to join our open source community in the following ways.

- Add official assistant WeChat: opentiny-official to join our technical exchange group.
- Add to the mailing list: opentiny@googlegroups.com
