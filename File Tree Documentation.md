# 项目文件树结构文档

## 项目结构

```
./
├── 📄 .dockerignore              # Docker 忽略模式配置
├── 📄 .env.example               # 环境变量模板文件
├── 📄 .eslintrc.js               # ESLint 代码检查配置
├── 📄 .gitignore                 # Git 忽略文件配置
├── 📄 .npmrc                     # NPM 配置文件
├── 📄 .nvmrc                     # Node 版本指定文件
├── 📄 .prettierrc.json           # Prettier 代码格式化规则
├── 📄 basic.md                   # 基础文档说明
├── 📄 blog.config.js             # 博客配置设置
├── 📄 CONTRIBUTING.md            # 贡献指南文档
├── 📄 Dockerfile                 # Docker 容器配置
├── 📄 File Tree Documentation.md # 文件树结构文档
├── 📄 jsconfig.json              # JavaScript 项目配置
├── 📄 LICENSE                    # 项目许可证
├── 📄 middleware.ts              # Next.js 中间件
├── 📄 next-env.d.ts              # Next.js TypeScript 声明
├── 📄 next-sitemap.config.js     # 站点地图生成配置
├── 📄 next.config.js             # Next.js 框架配置
├── 📄 package-lock.json          # NPM 依赖锁定文件
├── 📄 package.json               # NPM 包配置文件
├── 📄 postcss.config.js          # PostCSS 配置
├── 📄 pushUrl.py                 # URL 推送工具脚本
├── 📄 README.md                  # 项目说明文档
├── 📄 README_EN.md               # 英文项目说明文档
├── 📄 SECURITY.md                # 安全策略文档
├── 📄 sitemap.xml                # 网站地图文件
├── 📄 tailwind.config.js         # Tailwind CSS 配置
├── 📄 temp.md                    # 临时笔记文件
├── 📄 tsconfig.eslint.json       # TypeScript ESLint 配置
├── 📄 tsconfig.json              # TypeScript 配置
├── 📄 vercel.json                # Vercel 部署配置
├── 📄 yarn.lock                  # Yarn 依赖锁定文件
│
├── 📁 .git/                      # Git 版本控制数据
├── 📁 .github/                   # GitHub 工作流和模板
├── 📁 .kiro/                     # Kiro IDE 配置和设置
├── 📁 .next/                     # Next.js 构建输出和缓存
├── 📁 .trae/                     # Trae 配置目录
│   └── 📁 rules/                 # Trae 规则配置
├── 📁 .vscode/                   # VS Code 工作区设置
│
├── 📁 components/                # React 组件库
│   ├── 📄 Ackee.js               # Ackee 分析组件
│   ├── 📄 AdBlockDetect.js       # 广告拦截检测组件
│   ├── 📄 AISummary.js           # AI 内容摘要组件
│   ├── 📄 AISummary.module.css   # AI 摘要组件样式
│   ├── 📄 AlgoliaSearchModal.js  # Algolia 搜索模态框
│   ├── 📄 AnalyticsBusuanzi.js   # 不蒜子分析组件
│   ├── 📄 AOSAnimation.js        # 滚动动画组件
│   ├── 📄 Artalk.js              # Artalk 评论系统
│   ├── 📄 ArticleExpirationNotice.js # 文章过期提醒组件
│   ├── 📄 Badge.js               # 徽章组件
│   ├── 📄 BeiAnGongAn.js         # 公安备案组件
│   ├── 📄 BeiAnSite.js           # 网站备案组件
│   ├── 📄 Busuanzi.js            # 不蒜子访客计数器
│   ├── 📄 ChatBase.js            # 聊天基础组件
│   ├── 📄 Collapse.js            # 折叠内容组件
│   ├── 📄 Comment.js             # 评论系统组件
│   ├── 📄 CopyRightDate.js       # 版权日期组件
│   ├── 📄 Coze.js                # Coze 集成组件
│   ├── 📄 CursorDot.js           # 自定义光标点效果
│   ├── 📄 CusdisComponent.js     # Cusdis 评论系统
│   ├── 📄 CustomContextMenu.js   # 自定义右键菜单
│   ├── 📄 DarkModeButton.js      # 深色模式切换按钮
│   ├── 📄 DebugPanel.js          # 开发调试面板
│   ├── 📄 DifyChatbot.js         # Dify 聊天机器人集成
│   ├── 📄 DisableCopy.js         # 复制保护组件
│   ├── 📄 Draggable.js           # 可拖拽元素组件
│   ├── 📄 Equation.js            # 数学公式渲染器
│   ├── 📄 ExternalPlugins.js     # 外部插件加载器
│   ├── 📄 ExternalScript.js      # 外部脚本加载器
│   ├── 📄 FacebookMessenger.js   # Facebook Messenger 集成
│   ├── 📄 FacebookPage.js        # Facebook 页面插件
│   ├── 📄 Fireworks.js           # 烟花动画效果
│   ├── 📄 FlipCard.js            # 卡片翻转动画组件
│   ├── 📄 FlutteringRibbon.js    # 飘动丝带效果
│   ├── 📄 FullScreenButton.js    # 全屏切换按钮
│   ├── 📄 Giscus.js              # Giscus 评论系统
│   ├── 📄 Gitalk.js              # Gitalk 评论系统
│   ├── 📄 GlobalStyle.js         # 全局 CSS 样式组件
│   ├── 📄 GoogleAdsense.js       # Google AdSense 集成
│   ├── 📄 Gtag.js                # Google Analytics 跟踪
│   ├── 📄 HeroIcons.js           # Hero Icons 图标库
│   ├── 📄 IconFont.js            # 图标字体加载器
│   ├── 📄 KatexReact.js          # KaTeX 数学渲染
│   ├── 📄 LA51.js                # LA51 分析组件
│   ├── 📄 LazyImage.js           # 懒加载图片组件
│   ├── 📄 Lenis.js               # Lenis 平滑滚动
│   ├── 📄 Live2D.js              # Live2D 角色集成
│   ├── 📄 Loading.js             # 加载指示器组件
│   ├── 📄 LoadingCover.js        # 全屏加载遮罩
│   ├── 📄 LoadingProgress.js     # 进度条组件
│   ├── 📄 Mark.js                # 文本高亮组件
│   ├── 📄 MouseFollow.js         # 鼠标跟随效果
│   ├── 📄 Nest.js                # Nest 组件包装器
│   ├── 📄 NotByAI.js             # "非 AI 生成"徽章组件
│   ├── 📄 Notification.js        # 通知系统
│   ├── 📄 NotionIcon.js          # Notion 风格图标
│   ├── 📄 NotionPage.js          # Notion 页面渲染器
│   ├── 📄 OpenWrite.js           # OpenWrite 集成
│   ├── 📄 Pdf.js                 # PDF 查看器组件
│   ├── 📄 Player.js              # 媒体播放器组件
│   ├── 📄 PoweredBy.js           # "技术支持"页脚组件
│   ├── 📄 PrismMac.js            # Mac 风格代码块
│   ├── 📄 PWA.js                 # 渐进式 Web 应用组件
│   ├── 📄 QrCode.js              # 二维码生成器
│   ├── 📄 Ribbon.js              # 装饰丝带组件
│   ├── 📄 Sakura.js              # 樱花飘落动画
│   ├── 📄 Select.js              # 自定义选择下拉框
│   ├── 📄 SEO.js                 # SEO 元标签组件
│   ├── 📄 ShareBar.js            # 社交分享栏
│   ├── 📄 ShareButtons.js        # 社交分享按钮
│   ├── 📄 SideBarDrawer.js       # 侧边栏抽屉组件
│   ├── 📄 StarrySky.js           # 星空背景效果
│   ├── 📄 Tabs.js                # 标签页导航组件
│   ├── 📄 ThemeSwitch.js         # 主题切换组件
│   ├── 📄 TianliGPT.js           # 天理 GPT 集成
│   ├── 📄 Twikoo.js              # Twikoo 评论系统
│   ├── 📄 TwikooCommentCount.js  # Twikoo 评论计数器
│   ├── 📄 TwikooCommentCounter.js # Twikoo 评论计数器备选
│   ├── 📄 TwikooRecentComments.js # Twikoo 最新评论
│   ├── 📄 Utterances.js          # Utterances 评论系统
│   ├── 📄 ValineComponent.js     # Valine 评论系统
│   ├── 📄 VConsole.js            # 移动端调试控制台
│   ├── 📄 Vercel.js              # Vercel 集成组件
│   ├── 📄 WalineComponent.js     # Waline 评论系统
│   ├── 📄 WebMention.js          # WebMention 集成
│   ├── 📄 Webwhiz.js             # Webwhiz 聊天机器人集成
│   ├── 📄 WordCount.js           # 字数统计显示组件
│   ├── 📄 WWAds.js               # WWAds 广告组件
│   │
│   └── 📁 ui/                    # UI 组件库
│
├── 📁 conf/                      # 配置文件目录
│   ├── 📄 ad.config.js           # 广告配置
│   ├── 📄 ai.confg.js            # AI 功能配置
│   ├── 📄 analytics.config.js    # 分析统计配置
│   ├── 📄 animation.config.js    # 动画设置
│   ├── 📄 code.config.js         # 代码高亮配置
│   ├── 📄 comment.config.js      # 评论系统配置
│   ├── 📄 contact.config.js      # 联系信息配置
│   ├── 📄 dev.config.js          # 开发环境配置
│   ├── 📄 font.config.js         # 字体配置
│   ├── 📄 image.config.js        # 图片处理配置
│   ├── 📄 layout-map.config.js   # 布局映射配置
│   ├── 📄 notion.config.js       # Notion 集成配置
│   ├── 📄 plugin.config.js       # 插件配置
│   ├── 📄 post.config.js         # 文章设置配置
│   ├── 📄 right-click-menu.js    # 右键菜单配置
│   └── 📄 widget.config.js       # 小部件配置
│
├── � docs/   e                   # 文档资源目录
│   ├── 📄 theme-fukasawa.png     # Fukasawa 主题预览图
│   ├── 📄 theme-hexo.png         # Hexo 主题预览图
│   ├── 📄 theme-medium.png       # Medium 主题预览图
│   └── 📄 theme-next.png         # Next 主题预览图
│
├── � hoo ks/                     # React 自定义钩子
│   ├── 📄 useAdjustStyle.js      # 样式调整钩子
│   └── 📄 useWindowSize.ts       # 窗口尺寸跟踪钩子
│
├── 📁 lib/                       # 核心库函数
│   ├── 📄 config.js              # 主配置加载器
│   ├── 📄 font.js                # 字体加载工具
│   ├── 📄 global.js              # 全局工具和常量
│   ├── 📄 lang.js                # 语言/本地化工具
│   ├── 📄 password.js            # 密码保护工具
│   ├── 📄 redirect.js            # URL 重定向工具
│   ├── 📄 robots.txt.js          # Robots.txt 生成
│   ├── 📄 rss.js                 # RSS 订阅生成
│   ├── 📄 sitemap.xml.js         # 站点地图生成
│   │
│   ├── 📁 cache/                 # 缓存工具和存储
│   ├── 📁 db/                    # 数据库工具和连接
│   ├── 📁 lang/                  # 语言文件和翻译
│   ├── 📁 notion/                # Notion API 集成工具
│   ├── 📁 plugins/               # 插件系统和扩展
│   └── 📁 utils/                 # 通用工具函数
│
├── 📁 node_modules/              # NPM 依赖包
│
├── 📁 pages/                     # Next.js 页面和 API 路由
│   ├── 📄 404.js                 # 自定义 404 错误页面
│   ├── 📄 index.js               # 首页
│   ├── 📄 sitemap.xml.js         # 动态站点地图生成
│   ├── 📄 _app.js                # Next.js 应用包装器
│   ├── 📄 _document.js           # 自定义 HTML 文档
│   │
│   ├── 📁 api/                   # API 路由和端点
│   ├── 📁 archive/               # 归档页面
│   ├── 📁 auth/                  # 认证页面
│   ├── 📁 category/              # 分类列表页面
│   ├── 📁 dashboard/             # 仪表板和管理页面
│   ├── 📁 design/                # 设计展示页面
│   ├── 📁 page/                  # 分页内容页面
│   ├── 📁 search/                # 搜索功能页面
│   ├── 📁 sign-in/               # 登录页面
│   ├── 📁 sign-up/               # 注册页面
│   ├── 📁 tag/                   # 标签列表页面
│   └── 📁 [prefix]/              # 动态路由页面
│
├── 📁 public/                    # 静态资源目录
│   ├── 📄 ads.txt                # 广告商验证文件
│   ├── 📄 avatar.png             # 默认头像图片
│   ├── 📄 avatar.svg             # SVG 头像图片
│   ├── 📄 bg_image.jpg           # 背景图片
│   ├── 📄 dplayer.htm            # DPlayer 视频播放器页面
│   ├── 📄 favicon.ico            # 网站图标
│   ├── 📄 favicon.svg            # SVG 网站图标
│   ├── 📄 favicon_backup.ico     # 备用网站图标
│   ├── 📄 lfdesignlogo.svg       # LF Design 标志
│   ├── 📄 qrcode.png             # 二维码图片
│   ├── 📄 reward_code_alipay.png # 支付宝打赏二维码
│   ├── 📄 reward_code_wechat.png # 微信打赏二维码
│   ├── 📄 robots.txt             # 搜索引擎爬虫文件
│   ├── 📄 sitemap.xml            # 静态站点地图
│   │
│   ├── 📁 css/                   # 静态 CSS 文件
│   ├── 📁 games-external/        # 外部游戏资源
│   ├── 📁 images/                # 静态图片
│   ├── 📁 js/                    # 静态 JavaScript 文件
│   ├── 📁 rss/                   # RSS 订阅文件
│   ├── 📁 svg/                   # SVG 图标文件
│   ├── 📁 videos/                # 视频文件
│   └── 📁 webfonts/              # Web 字体文件
│
├── 📁 styles/                    # 全局样式表
│   ├── 📄 globals.css            # 全局 CSS 样式
│   ├── 📄 notion.css             # Notion 特定样式
│   ├── 📄 prism-theme.css        # 代码语法高亮主题
│   └── 📄 utility-patterns.css   # CSS 工具模式
│
└── 📁 themes/                    # 主题系统
    ├── 📄 theme.js               # 主题加载器和管理器
    │
    ├── 📁 commerce/              # 电商主题
    ├── 📁 example/               # 示例主题模板
    ├── 📁 fukasawa/              # Fukasawa 主题
    ├── 📁 game/                  # 游戏主题
    ├── 📁 gitbook/               # GitBook 风格主题
    ├── 📁 heo/                   # Heo 主题
    ├── 📁 hexo/                  # Hexo 风格主题
    ├── 📁 landing/               # 着陆页主题
    ├── 📁 magzine/               # 杂志风格主题
    ├── 📁 matery/                # Matery 主题
    ├── 📁 medium/                # Medium 风格主题
    ├── 📁 movie/                 # 电影/娱乐主题
    ├── 📁 nav/                   # 导航主题
    ├── 📁 next/                  # Next.js 风格主题
    ├── 📁 nobelium/              # Nobelium 主题
    ├── 📁 photo/                 # 摄影主题
    ├── 📁 plog/                  # 个人博客主题
    ├── 📁 proxio/                # Proxio 主题
    ├── 📁 simple/                # 简约主题
    ├── 📁 starter/               # 启动主题模板
    └── 📁 typography/            # 排版主题
```

## 使用说明

### 核心文件
- **配置文件**: 环境设置、构建配置和项目设置
- **文档**: 项目指南、贡献指南和安全策略
- **包管理**: NPM/Yarn 的依赖管理和锁定文件

### 主要目录
- **components/**: 可重用的 React 组件，用于 UI 元素、集成和功能
- **conf/**: 应用程序不同方面的模块化配置文件
- **lib/**: 核心业务逻辑、工具和 API 集成
- **pages/**: Next.js 路由结构，包含页面和 API 端点
- **public/**: 由 Web 服务器直接提供的静态资源
- **styles/**: 全局 CSS 和样式配置
- **themes/**: 不同用例的多种主题实现

### 开发工具
- **hooks/**: 用于共享组件逻辑的自定义 React 钩子
- **docs/**: 可视化文档和主题预览
- **.kiro/**: IDE 特定的配置和设置