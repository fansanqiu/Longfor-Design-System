## 实现以下功能
- 成功效果描述：当我点击starter主题下header的design button时，页面会跳转至design page
- design page的样式和gitbook主题的样式一样，同时拥有starter主题的header，也保留gitbook的sidebar
## Realization of the following functions
- Successful result description: When I click the design button in the header of the starter theme, the page will jump to the design page.
- The style of design page is the same as that of gitbook theme, and it also has the header of starter theme and the sidebar of gitbook.

## 修复问题
- 当我运行`yarn build`时，发现页面报错，修复该问题
- 告诉我为什么？
## Fix the issue
- When I run `yarn build`, I find an error on the page, fixing the problem
- Tell me why?

通过顶部导航进入设计页面，设计页面使用LayoutBase的布局、样式、功能


- 点击顶部的组件时跳转到组件页，组件页和设计页一样

- 点击 @themes/gitbook/components/Header.js 的资源、体验时分别跳转到资源页和体验页，页面内容为空

