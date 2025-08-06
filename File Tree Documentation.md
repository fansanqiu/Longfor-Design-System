# 项目文件树文档

> 这是一个自动生成的文件树文档，用于快速了解项目结构。
> 最后更新时间：2024年

## 项目根目录

```
Longfor-Design-System/
├── 📄 .dockerignore              # Docker 构建忽略文件
├── 📄 .env.example               # 环境变量示例
├── 📄 .eslintrc.js               # ESLint 代码规范配置
├── 📄 .gitignore                 # Git 忽略文件
├── 📄 .npmrc                     # NPM 配置文件
├── 📄 .nvmrc                     # Node.js 版本管理
├── 📄 .prettierrc.json           # Prettier 代码格式化配置
├── 📄 .trae\                    # Trae IDE 配置
│   └── 📁 rules\                # 项目规则目录
│       └── 📄 project_rules.md # 项目规则文件
├── 📄 Dockerfile                 # Docker 容器配置
├── 📄 File Tree Documentation.md # 项目文件树文档
├── 📄 LICENSE                    # 项目许可证
├── 📄 README.md                  # 项目说明文档
├── 📄 SECURITY.md                # 安全策略文档
├── 📄 basic.md                   # 基础文档
├── 📄 blog.config.js             # 博客配置文件
├── 📄 jsconfig.json              # JavaScript 配置
├── 📄 middleware.ts              # Next.js 中间件
├── 📄 next-env.d.ts              # Next.js 类型声明
├── 📄 next-sitemap.config.js     # 站点地图配置
├── 📄 next.config.js             # Next.js 配置
├── 📄 package.json               # 项目依赖配置
├── 📄 postcss.config.js          # PostCSS 配置
├── 📄 pushUrl.py                 # URL 推送脚本
├── 📄 tailwind.config.js         # Tailwind CSS 配置
├── 📄 temp.md                    # 临时文档
├── 📄 tsconfig.eslint.json       # TypeScript ESLint 配置
├── 📄 tsconfig.json              # TypeScript 配置
├── 📄 vercel.json                # Vercel 部署配置
├── 📄 yarn.lock                  # Yarn 锁文件
│
├── 📁 components/                # React 组件库
│   ├── 📄 AOSAnimation.js        # AOS 滚动动画组件
│   ├── 📄 Collapse.js            # 折叠内容组件
│   ├── 📄 ExternalScript.js      # 外部脚本加载器
│   ├── 📄 GlobalStyle.js         # 全局 CSS 样式组件
│   ├── 📄 LazyImage.js           # 懒加载图片组件
│   ├── 📄 Loading.js             # 加载指示器组件
│   ├── 📄 NotionIcon.js          # Notion 风格图标
│   ├── 📄 NotionPage.js          # Notion 页面渲染器
│   ├── 📄 PWA.js                 # 渐进式 Web 应用组件
│   ├── 📄 SEO.js                 # SEO 元标签组件
│   ├── 📄 Tabs.js                # 标签页导航组件
│   └── 📁 ui/                    # UI 组件库 (空目录)
│
├── 📁 conf/                      # 配置文件目录
│   ├── 📄 animation.config.js    # 动画设置
│   ├── 📄 code.config.js         # 代码高亮配置
│   ├── 📄 dev.config.js          # 开发环境配置
│   ├── 📄 font.config.js         # 字体配置
│   ├── 📄 image.config.js        # 图片处理配置
│   ├── 📄 layout-map.config.js   # 布局映射配置
│   ├── 📄 notion.config.js       # Notion 集成配置
│   ├── 📄 plugin.config.js       # 插件配置
│   ├── 📄 post.config.js         # 文章设置配置
│   └── 📄 widget.config.js       # 小部件配置
│
├── 📁 hooks/                     # React 自定义钩子
│   ├── 📄 useAdjustStyle.js      # 样式调整钩子
│   └── 📄 useWindowSize.ts       # 窗口尺寸跟踪钩子
│
├── 📁 lib/                       # 核心库函数
│   ├── 📄 config.js              # 主配置加载器
│   ├── 📄 font.js                # 字体加载工具
│   ├── 📄 global.js              # 全局工具和常量
│   ├── 📄 redirect.js            # URL 重定向工具
│   ├── 📄 robots.txt.js          # Robots.txt 生成
│   ├── 📄 sitemap.xml.js         # 站点地图生成
│   │
│   ├── 📁 cache/                 # 缓存工具和存储
│   │   ├── 📄 cache_manager.js   # 缓存管理器
│   │   ├── 📄 local_file_cache.js # 本地文件缓存
│   │   ├── 📄 memory_cache.js    # 内存缓存
│   │   └── 📄 redis_cache.js     # Redis 缓存
│   │
│   ├── 📁 db/                    # 数据库工具和连接
│   │   └── 📄 getSiteData.js     # 获取站点数据
│   │
│   ├── 📁 notion/                # Notion API 集成工具
│   │   ├── 📄 CustomNotionApi.ts # 自定义 Notion API
│   │   ├── 📄 convertInnerUrl.js # 内部 URL 转换
│   │   ├── 📄 getAllCategories.js # 获取所有分类
│   │   ├── 📄 getAllPageIds.js   # 获取所有页面 ID
│   │   ├── 📄 getAllTags.js      # 获取所有标签
│   │   ├── 📄 getMetadata.js     # 获取元数据
│   │   ├── 📄 getNotionAPI.js    # Notion API 获取器
│   │   ├── 📄 getNotionConfig.js # Notion 配置获取器
│   │   ├── 📄 getNotionPost.js   # 获取 Notion 文章
│   │   ├── 📄 getPageProperties.js # 获取页面属性
│   │   ├── 📄 getPageTableOfContents.js # 获取页面目录
│   │   ├── 📄 getPostBlocks.js   # 获取文章块
│   │   └── 📄 mapImage.js        # 图片映射
│   │
│   └── 📁 utils/                 # 通用工具函数
│       ├── 📄 formatDate.js      # 日期格式化工具
│       ├── 📄 index.js           # 工具函数入口
│       ├── 📄 pageId.js          # 页面 ID 工具
│       └── 📄 post.js            # 文章处理工具
│
├── 📁 pages/                     # Next.js 页面和 API 路由
│   ├── 📄 404.js                 # 自定义 404 错误页面
│   ├── 📄 _app.js                # Next.js 应用包装器
│   ├── 📄 _document.js           # 自定义 HTML 文档
│   ├── 📄 index.js               # 首页
│   ├── 📄 resource.js            # 资源页面
│   ├── 📄 sitemap.xml.js         # 动态站点地图生成
│   │
│   ├── 📁 [prefix]/              # 动态路由页面
│   │   ├── 📄 index.js           # 前缀首页
│   │   └── 📁 [slug]/            # 动态内容页面
│   │       ├── 📄 [...suffix].js # 动态后缀路由
│   │       └── 📄 index.js       # 内容详情页
│   │
│   ├── 📁 api/                   # API 路由和端点
│   │   ├── 📄 cache.js           # 缓存 API 端点
│   │   ├── 📄 user.ts            # 用户 API 端点
│   │   └── 📁 auth/              # 认证 API 路由
│   │       └── 📁 callback/      # 认证回调
│   │           └── 📄 notion.ts  # Notion 认证回调
│   │
│   ├── 📁 archive/               # 归档页面
│   │   └── 📄 index.js           # 归档首页
│   │
│   ├── 📁 auth/                  # 认证页面
│   │   ├── 📄 index.js           # 认证首页
│   │   └── 📄 result.js          # 认证结果页
│   │
│   ├── 📁 category/              # 分类列表页面
│   │   ├── 📄 index.js           # 分类首页
│   │   └── 📁 [category]/        # 动态分类页面
│   │       ├── 📄 index.js       # 分类详情页
│   │       └── 📁 page/          # 分类分页
│   │           └── 📁 [page].js  # 分页路由
│   │
│   ├── 📁 components/            # 组件展示页面
│   │   └── 📄 index.js           # 组件首页
│   │
│   ├── 📁 dashboard/             # 仪表板和管理页面
│   │   └── 📄 [[...index]].js    # 动态仪表板路由
│   │
│   ├── 📁 design/                # 设计展示页面
│   │   └── 📄 index.js           # 设计首页
│   │
│   ├── 📁 page/                  # 分页内容页面
│   │   └── 📁 [page]/            # 动态分页路由
│   │       └── 📄 index.js       # 分页内容页
│   │
│   ├── 📁 search/                # 搜索功能页面
│   │   ├── 📄 index.js           # 搜索首页
│   │   └── 📁 [keyword]/         # 动态搜索关键词页面
│   │       ├── 📄 index.js       # 搜索结果页
│   │       └── 📁 page/          # 搜索分页
│   │           └── 📁 [page].js  # 分页路由
│   │
│   └── 📁 tag/                   # 标签列表页面
│       ├── 📄 index.js           # 标签首页
│       └── 📁 [tag]/             # 动态标签页面
│           ├── 📄 index.js       # 标签详情页
│           └── 📁 page/          # 标签分页
│               └── 📁 [page].js  # 分页路由
│
├── 📁 public/                    # 静态资源目录
│   ├── 📄 avatar.png             # 默认头像图片
│   ├── 📄 avatar.svg             # SVG 头像图片
│   ├── 📄 bg_image.jpg           # 背景图片
│   ├── 📄 dplayer.htm            # DPlayer 视频播放器页面
│   ├── 📄 favicon.ico            # 网站图标
│   ├── 📄 favicon.svg            # SVG 网站图标
│   ├── 📄 favicon_backup.ico     # 网站图标备份
│   ├── 📄 lfdesignlogo.svg       # LF Design 标志
│   ├── 📄 robots.txt             # 搜索引擎爬虫文件
│   ├── 📄 sitemap.xml            # 静态站点地图
│   │
│   ├── 📁 css/                   # 静态 CSS 文件
│   │   ├── 📄 all.min.css        # 压缩的全部 CSS
│   │   ├── 📄 aos.css            # AOS 动画样式
│   │   ├── 📄 custom.css         # 自定义样式
│   │   ├── 📄 img-shadow.css     # 图片阴影样式
│   │   ├── 📄 prism-mac-style.css # Mac 风格代码高亮
│   │   └── 📄 spoiler-text.css   # 剧透文本样式
│   │   └── 📁 wow/               # WOW 动画样式
│   │
│   ├── 📁 images/                # 静态图片
│   │   ├── 📄 feature-1.webp     # 功能图片 1
│   │   ├── 📄 feature-2.webp     # 功能图片 2
│   │   ├── 📄 feature-3.webp     # 功能图片 3
│   │   ├── 📄 features-bg.png    # 功能背景图
│   │   ├── 📄 features-element.png # 功能元素图
│   │   ├── 📄 gongan.png         # 公安备案图标
│   │   ├── 📄 hero-image.png     # 英雄区域图片
│   │   ├── 📄 home.png           # 首页图片
│   │   ├── 📄 testimonial.jpg    # 推荐图片
│   │   ├── 📁 heo/               # Heo 主题图片资源
│   │   ├── 📁 home/              # 首页图片资源
│   │   ├── 📁 starter/           # Starter 主题图片资源
│   │   └── 📁 themes-preview/    # 主题预览图片
│   │
│   ├── 📁 js/                    # 静态 JavaScript 文件
│   │   ├── 📄 aos.js             # AOS 动画脚本
│   │   ├── 📄 busuanzi.js        # 不蒜子统计脚本
│   │   ├── 📄 cusdis.es.js       # Cusdis 评论脚本
│   │   ├── 📄 custom.js          # 自定义脚本
│   │   ├── 📄 flutteringRibbon.js # 飘带效果脚本
│   │   ├── 📄 fullscreen.js      # 全屏功能脚本
│   │   ├── 📄 giscus.js          # Giscus 评论脚本
│   │   ├── 📄 lenis.js           # Lenis 平滑滚动脚本
│   │   ├── 📄 mouse-follow.js    # 鼠标跟随脚本
│   │   ├── 📄 nest.js            # Nest 脚本
│   │   ├── 📄 ribbon.js          # 丝带效果脚本
│   │   ├── 📄 sakura.js          # 樱花效果脚本
│   │   └── 📄 spoilerText.js     # 剧透文本脚本
│   │
│   ├── 📁 rss/                   # RSS 订阅文件
│   ├── 📁 svg/                   # SVG 图标和图形
│   │   ├── 📁 not-by-ai/         # Not by AI 图标
│   │   ├── 📄 xiaohongshu.svg    # 小红书图标
│   │   └── 📄 zhishixingqiu.svg   # 知识星球图标
│   │
│   ├── 📁 videos/                # 视频文件
│   │   └── 📄 video.mp4          # 示例视频
│   │
│   └── 📁 webfonts/              # Web 字体文件
│
├── 📁 styles/                    # 样式文件目录
│   ├── 📄 globals.css            # 全局样式
│   ├── 📄 notion.css             # Notion 样式覆盖
│   └── 📄 prism-theme.css        # 代码高亮主题
│
├── 📁 themes/                    # 主题系统
│   ├── 📄 theme.js               # 主题配置入口
│   │
│   └── 📁 gitbook/               # GitBook 主题
│       ├── 📄 config.js          # 主题配置
│       ├── 📄 index.js             # 主题入口
│       ├── 📄 style.js             # 主题样式
│       └── 📁 components/          # 主题组件
│           ├── 📄 ArticleLock.js   # 文章锁定组件
│           ├── 📄 ArticleRecommend.js # 文章推荐
│           ├── 📄 BlogListPage.js  # 博客列表页
│           ├── 📄 BlogPostCard.js  # 博客文章卡片
│           ├── 📄 BlogPostList.js  # 博客文章列表
│           ├── 📄 Catalog.js       # 目录组件
│           ├── 📄 CategoryBar.js   # 分类栏
│           ├── 📄 ContactForm.js   # 联系表单
│           ├── 📄 Footer.js        # 页脚组件
│           ├── 📄 Header.js        # 页头组件
│           ├── 📄 InfoCard.js      # 信息卡片
│           ├── 📄 JumpToTopButton.js # 回到顶部按钮
│           ├── 📄 LatestPostsGroup.js # 最新文章组
│           ├── 📄 LeftFloatButton.js # 左侧浮动按钮
│           ├── 📄 Live2D.js        # Live2D 模型
│           ├── 📄 LoadingCover.js  # 加载封面
│           ├── 📄 Logo.js          # Logo 组件
│           ├── 📄 MenuBarMobile.js # 移动端菜单栏
│           ├── 📄 NavPostItem.js   # 导航文章项
│           ├── 📄 NavPostList.js   # 导航文章列表
│           ├── 📄 NavPostListEmpty.js # 空文章列表
│           ├── 📄 Pagination.js    # 分页组件
│           ├── 📄 PostHeader.js    # 文章头部
│           ├── 📄 PostLock.js      # 文章锁定
│           ├── 📄 RecommendPosts.js # 推荐文章
│           ├── 📄 RightFloatButton.js # 右侧浮动按钮
│           ├── 📄 SearchInput.js   # 搜索输入框
│           ├── 📄 ShareBar.js      # 分享栏
│           ├── 📄 SideBar.js       # 侧边栏
│           ├── 📄 SocialButton.js  # 社交按钮
│           ├── 📄 TagGroups.js     # 标签组
│           ├── 📄 TagItemMini.js   # 迷你标签项
│           ├── 📄 TagList.js       # 标签列表
│           ├── 📄 Title.js         # 标题组件
│           ├── 📄 TopNav.js        # 顶部导航
│           ├── 📄 TouchMeCard.js   # 联系我卡片
│           ├── 📄 Twikoo.js        # Twikoo 评论组件
│           ├── 📄 Waline.js        # Waline 评论组件
│           └── 📄 WordCount.js     # 字数统计
│
├── 📁 .trae/                     # Trae IDE 配置
│   └── 📁 rules/
│       └── 📄 project_rules.md   # 项目规则文件
│
└── 📁 .vscode/                   # VS Code 配置目录
    └── 📄 settings.json          # VS Code 设置文件
```