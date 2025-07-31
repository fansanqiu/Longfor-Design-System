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
├── 📄 Dockerfile                 # Docker 容器配置
├── 📄 File Tree Documentation.md # 文件树结构文档
├── 📄 jsconfig.json              # JavaScript 项目配置
├── 📄 LICENSE                    # 项目许可证
├── 📄 middleware.ts              # Next.js 中间件
├── 📄 next-env.d.ts              # Next.js TypeScript 声明
├── 📄 next-sitemap.config.js     # 站点地图生成配置
├── 📄 next.config.js             # Next.js 框架配置
├── 📄 package.json               # NPM 包配置文件
├── 📄 postcss.config.js          # PostCSS 配置
├── 📄 pushUrl.py                 # URL 推送工具脚本
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
│       └── 📄 project_rules.md   # 项目规则文档
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
│       └── 📁 dashboard/         # 仪表板 UI 组件
│           ├── 📄 DashboardBody.js # 仪表板主体组件
│           ├── 📄 DashboardButton.js # 仪表板按钮组件
│           ├── 📄 DashboardHeader.js # 仪表板头部组件
│           ├── 📄 DashboardItemAffliate.js # 联盟项目组件
│           ├── 📄 DashboardItemBalance.js # 余额项目组件
│           ├── 📄 DashboardItemHome.js # 首页项目组件
│           ├── 📄 DashboardItemMembership.js # 会员项目组件
│           ├── 📄 DashboardItemOrder.js # 订单项目组件
│           ├── 📄 DashboardMenuList.js # 仪表板菜单列表
│           ├── 📄 DashboardSignOutButton.js # 登出按钮组件
│           └── 📄 DashboardUser.js # 用户信息组件
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
├── 📁 hooks/                     # React 自定义钩子
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
│   │   ├── 📄 cache_manager.js   # 缓存管理器
│   │   ├── � lo cal_file_cache.js # 本地文件缓存
│   │   ├── 📄 memory_cache.js    # 内存缓存
│   │   └── 📄 redis_cache.js     # Redis 缓存
│   │
│   ├── 📁 db/                    # 数据库工具和连接
│   │   └── 📄 getSiteData.js     # 获取站点数据
│   │
│   ├── 📁 lang/                  # 语言文件和翻译
│   │   ├── 📄 en-US.js           # 英语翻译
│   │   ├── 📄 fr-FR.js           # 法语翻译
│   │   ├── 📄 ja-JP.js           # 日语翻译
│   │   ├── 📄 tr-TR.js           # 土耳其语翻译
│   │   ├── 📄 zh-CN.js           # 简体中文翻译
│   │   ├── 📄 zh-HK.js           # 香港繁体中文翻译
│   │   └── 📄 zh-TW.js           # 台湾繁体中文翻译
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
│   ├── 📁 plugins/               # 插件系统和扩展
│   │   ├── 📄 aiSummary.js       # AI 摘要插件
│   │   ├── 📄 algolia.js         # Algolia 搜索插件
│   │   ├── 📄 busuanzi.js        # 不蒜子统计插件
│   │   ├── 📄 gtag.js            # Google Analytics 插件
│   │   ├── 📄 mailchimp.js       # MailChimp 邮件插件
│   │   ├── 📄 mhchem.js          # 化学公式插件
│   │   ├── 📄 wordCount.js       # 字数统计插件
│   │   └── 📄 wow.js             # WOW 动画插件
│   │
│   └── 📁 utils/                 # 通用工具函数
│       ├── 📄 formatDate.js      # 日期格式化工具
│       ├── 📄 index.js           # 工具函数入口
│       ├── 📄 pageId.js          # 页面 ID 工具
│       └── 📄 post.js            # 文章处理工具
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
│   │   ├── 📄 cache.js           # 缓存 API 端点
│   │   ├── � sub scribe.js       # 订阅 API 端点
│   │   ├── � usrer.ts            # 用户 API 端点
│   │   │
│   │   └── 📁 auth/              # 认证 API 路由
│   │       └── 📁 callback/      # 认证回调处理
│   │
│   ├── 📁 archive/               # 归档页面
│   │   └── 📄 index.js           # 归档首页
│   │
│   ├── 📁 auth/                  # 认证页面
│   │   ├── 📄 index.js           # 认证首页
│   │   └── 📄 result.js          # 认证结果页面
│   │
│   ├── 📁 category/              # 分类列表页面
│   │   ├── 📄 index.js           # 分类首页
│   │   │
│   │   └── 📁 [category]/        # 动态分类页面
│   │       ├── 📄 index.js       # 分类详情页
│   │       │
│   │       └── 📁 page/          # 分类分页
│   │
│   ├── 📁 dashboard/             # 仪表板和管理页面
│   │   └── 📄 [[...index]].js    # 动态仪表板路由
│   │
│   ├── 📁 design/                # 设计展示页面
│   │   └── 📄 index.js           # 设计首页
│   │
│   ├── 📁 page/                  # 分页内容页面
│   │   └── 📄 [page].js          # 动态分页路由
│   │
│   ├── 📁 search/                # 搜索功能页面
│   │   ├── 📄 index.js           # 搜索首页
│   │   │
│   │   └── 📁 [keyword]/         # 动态搜索关键词页面
│   │       ├── 📄 index.js       # 搜索结果页
│   │       │
│   │       └── 📁 page/          # 搜索结果分页
│   │
│   ├── 📁 sign-in/               # 登录页面
│   │   └── 📄 [[...index]].js    # 动态登录路由
│   │
│   ├── 📁 sign-up/               # 注册页面
│   │   └── 📄 [[...index]].js    # 动态注册路由
│   │
│   ├── 📁 tag/                   # 标签列表页面
│   │   ├── 📄 index.js           # 标签首页
│   │   │
│   │   └── 📁 [tag]/             # 动态标签页面
│   │       ├── 📄 index.js       # 标签详情页
│   │       │
│   │       └── 📁 page/          # 标签分页
│   │
│   └── 📁 [prefix]/              # 动态路由页面
│       ├── 📄 index.js           # 前缀首页
│       │
│       └── 📁 [slug]/            # 动态内容页面
│           ├── 📄 index.js       # 内容详情页
│           └── 📄 [...suffix].js # 动态后缀路由
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
│   │   ├── �e all.min.css        # 压缩的全部 CSS
│   │   ├── �g aos.css            # AOS 动画样式
│   │   ├── 📄 custom.css         # 自定义样式
│   │   ├── 📄 img-shadow.css     # 图片阴影样式
│   │   ├── �  prism-mac-style.css # Mac 风格代码高亮
│   │   ├── 📄 spoiler-text.css   # 剧透文本样式
│   │   │
│   │   └── 📁 wow/               # WOW 动画样式
│   │       └── 📄 animate.css    # 动画效果样式
│   │
│   ├── 📁 games-external/        # 外部游戏资源
│   │   └── 📁 common/            # 通用游戏资源
│   │       └── 📄 index.htm      # 游戏入口页面
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
│   │   │
│   │   ├── 📁 heo/               # Heo 主题图片资源
│   │   ├── 📁 starter/           # Starter 主题图片资源
│   │   └── 📁 themes-preview/    # 主题预览图片
│   │
│   ├── 📁 js/                    # 静态 JavaScript 文件
│   │   ├── 📄 aos.js             # AOS 动画脚本
│   │   ├── 📄 cusdis.es.js       # Cusdis 评论脚本
│   │   ├── 📄 custom.js          # 自定义脚本
│   │   ├── 📄 fireworks.js       # 烟花效果脚本
│   │   ├── 📄 flutteringRibbon.js # 飘动丝带脚本
│   │   ├── 📄 fullscreen.js      # 全屏功能脚本
│   │   ├── 📄 giscus.js          # Giscus 评论脚本
│   │   ├── 📄 lenis.js           # Lenis 平滑滚动脚本
│   │   ├── 📄 mouse-follow.js    # 鼠标跟随脚本
│   │   ├── 📄 nest.js            # Nest 脚本
│   │   ├── 📄 ribbon.js          # 丝带效果脚本
│   │   ├── 📄 sakura.js          # 樱花效果脚本
│   │   ├── 📄 spoilerText.js     # 剧透文本脚本
│   │   ├── 📄 starrySky.js       # 星空效果脚本
│   │   └── 📄 typed.min.js       # 打字效果脚本
│   │
│   ├── 📁 rss/                   # RSS 订阅文件
│   │   ├── 📄 atom.xml           # Atom 格式订阅
│   │   ├── 📄 feed.json          # JSON 格式订阅
│   │   └── 📄 feed.xml           # XML 格式订阅
│   │
│   ├── 📁 svg/                   # SVG 图标文件
│   │   ├── 📄 xiaohongshu.svg    # 小红书图标
│   │   ├── 📄 zhishixingqiu-white.svg # 知识星球白色图标
│   │   ├── 📄 zhishixingqiu.svg  # 知识星球图标
│   │   │
│   │   └── 📁 not-by-ai/         # "非 AI 生成"徽章图标
│   │       ├── 📁 en/            # 英语版本
│   │       ├── 📁 fr/            # 法语版本
│   │       ├── 📁 ja/            # 日语版本
│   │       ├── 📁 tr/            # 土耳其语版本
│   │       ├── 📁 zh/            # 中文版本
│   │       ├── 📁 zh-HK/         # 香港繁体版本
│   │       └── 📁 zh-TW/         # 台湾繁体版本
│   │
│   ├── 📁 videos/                # 视频文件
│   │   └── 📄 video.mp4          # 示例视频文件
│   │
│   └── 📁 webfonts/              # Web 字体文件
│       ├── 📄 fa-brands-400.ttf  # Font Awesome 品牌字体 TTF
│       ├── 📄 fa-brands-400.woff2 # Font Awesome 品牌字体 WOFF2
│       ├── 📄 fa-regular-400.ttf # Font Awesome 常规字体 TTF
│       ├── 📄 fa-regular-400.woff2 # Font Awesome 常规字体 WOFF2
│       ├── 📄 fa-solid-900.ttf   # Font Awesome 实心字体 TTF
│       ├── 📄 fa-solid-900.woff2 # Font Awesome 实心字体 WOFF2
│       ├── 📄 fa-v4compatibility.ttf # Font Awesome v4 兼容字体 TTF
│       └── 📄 fa-v4compatibility.woff2 # Font Awesome v4 兼容字体 WOFF2
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
    ├── 📁 archive/               # 归档主题
    │
    ├── 📁 fukasawa/              # Fukasawa 主题
    │   ├── 📄 config.js          # Fukasawa 主题配置
    │   ├── 📄 index.js           # Fukasawa 主题入口
    │   ├── 📄 style.js           # Fukasawa 主题样式
    │   │
    │   └── 📁 components/        # Fukasawa 主题组件
    │       ├── 📄 Announcement.js # 公告组件
    │       ├── 📄 ArticleAround.js # 相关文章组件
    │       ├── 📄 ArticleDetail.js # 文章详情组件
    │       ├── 📄 ArticleLock.js # 文章锁定组件
    │       ├── 📄 AsideLeft.js   # 左侧边栏组件
    │       ├── 📄 BlogCard.js    # 博客卡片组件
    │       ├── 📄 BlogListEmpty.js # 空博客列表组件
    │       ├── 📄 BlogListPage.js # 博客列表分页组件
    │       ├── 📄 BlogListScroll.js # 博客列表滚动组件
    │       ├── 📄 BlogPostArchive.js # 博客文章归档组件
    │       ├── 📄 Card.js        # 卡片组件
    │       ├── 📄 Catalog.js     # 目录组件
    │       ├── 📄 GroupCategory.js # 分类组合组件
    │       ├── 📄 GroupTag.js    # 标签组合组件
    │       ├── 📄 Header.js      # 头部组件
    │       ├── 📄 LoadingCover.js # 加载遮罩组件
    │       ├── 📄 Logo.js        # 标志组件
    │       ├── 📄 MailChimpForm.js # MailChimp 表单组件
    │       ├── 📄 MenuItemCollapse.js # 折叠菜单项组件
    │       ├── 📄 MenuItemDrop.js # 下拉菜单项组件
    │       ├── 📄 MenuItemNormal.js # 普通菜单项组件
    │       ├── 📄 MenuList.js    # 菜单列表组件
    │       ├── 📄 PaginationSimple.js # 简单分页组件
    │       ├── 📄 SearchInput.js # 搜索输入组件
    │       ├── 📄 SiteInfo.js    # 站点信息组件
    │       ├── 📄 SocialButton.js # 社交按钮组件
    │       ├── 📄 TagItem.js     # 标签项组件
    │       └── 📄 TagItemMini.js # 迷你标签项组件
    │
    ├── 📁 gitbook/               # GitBook 风格主题
    │   ├── 📄 config.js          # GitBook 主题配置
    │   ├── 📄 index.js           # GitBook 主题入口
    │   ├── 📄 style.js           # GitBook 主题样式
    │   │
    │   └── 📁 components/        # GitBook 主题组件
    │       ├── 📄 Announcement.js # 公告组件
    │       ├── 📄 ArticleAround.js # 相关文章组件
    │       ├── 📄 ArticleInfo.js # 文章信息组件
    │       ├── 📄 ArticleLock.js # 文章锁定组件
    │       ├── 📄 BlogArchiveItem.js # 博客归档项组件
    │       ├── 📄 BlogPostCard.js # 博客文章卡片组件
    │       ├── 📄 BottomMenuBar.js # 底部菜单栏组件
    │       ├── 📄 Card.js        # 卡片组件
    │       ├── 📄 Catalog.js     # 目录组件
    │       ├── 📄 CatalogDrawerWrapper.js # 目录抽屉包装器组件
    │       ├── 📄 CategoryGroup.js # 分类组合组件
    │       ├── 📄 CategoryItem.js # 分类项组件
    │       ├── 📄 Footer.js      # 页脚组件
    │       ├── 📄 Header.js      # 头部组件
    │       ├── 📄 InfoCard.js    # 信息卡片组件
    │       ├── 📄 JumpToTopButton.js # 回到顶部按钮组件
    │       ├── 📄 LeftMenuBar.js # 左侧菜单栏组件
    │       ├── 📄 LogoBar.js     # 标志栏组件
    │       ├── 📄 MenuBarMobile.js # 移动端菜单栏组件
    │       ├── 📄 MenuItemCollapse.js # 折叠菜单项组件
    │       ├── 📄 MenuItemDrop.js # 下拉菜单项组件
    │       ├── 📄 MenuItemMobileNormal.js # 移动端普通菜单项组件
    │       ├── 📄 MenuItemPCNormal.js # PC 端普通菜单项组件
    │       ├── 📄 NavPostItem.js # 导航文章项组件
    │       ├── 📄 NavPostList.js # 导航文章列表组件
    │       ├── 📄 PageNavDrawer.js # 页面导航抽屉组件
    │       ├── 📄 PaginationSimple.js # 简单分页组件
    │       ├── 📄 Progress.js    # 进度条组件
    │       ├── 📄 RevolverMaps.js # RevolverMaps 组件
    │       ├── 📄 SearchInput.js # 搜索输入组件
    │       ├── 📄 SocialButton.js # 社交按钮组件
    │       ├── 📄 TagGroups.js   # 标签组合组件
    │       └── 📄 TagItemMini.js # 迷你标签项组件
    │
    ├── 📁 hexo/                  # Hexo 风格主题
    │   ├── 📄 config.js          # Hexo 主题配置
    │   ├── 📄 index.js           # Hexo 主题入口
    │   ├── 📄 style.js           # Hexo 主题样式
    │   │
    │   └── 📁 components/        # Hexo 主题组件
    │       ├── 📄 AnalyticsCard.js # 分析卡片组件
    │       ├── 📄 Announcement.js # 公告组件
    │       ├── 📄 ArticleAdjacent.js # 相邻文章组件
    │       ├── 📄 ArticleCopyright.js # 文章版权组件
    │       ├── 📄 ArticleLock.js # 文章锁定组件
    │       ├── 📄 ArticleRecommend.js # 文章推荐组件
    │       ├── 📄 BlogPostArchive.js # 博客文章归档组件
    │       ├── 📄 BlogPostCard.js # 博客文章卡片组件
    │       ├── 📄 BlogPostCardInfo.js # 博客文章卡片信息组件
    │       ├── 📄 BlogPostListEmpty.js # 空博客文章列表组件
    │       ├── 📄 BlogPostListPage.js # 博客文章列表分页组件
    │       ├── 📄 BlogPostListScroll.js # 博客文章列表滚动组件
    │       ├── 📄 ButtonFloatDarkMode.js # 浮动深色模式按钮组件
    │       ├── 📄 ButtonJumpToComment.js # 跳转到评论按钮组件
    │       ├── 📄 ButtonJumpToTop.js # 跳转到顶部按钮组件
    │       ├── 📄 ButtonRandomPost.js # 随机文章按钮组件
    │       ├── 📄 ButtonRandomPostMini.js # 迷你随机文章按钮组件
    │       ├── 📄 Card.js        # 卡片组件
    │       ├── 📄 Catalog.js     # 目录组件
    │       ├── 📄 CategoryGroup.js # 分类组合组件
    │       ├── 📄 Footer.js      # 页脚组件
    │       ├── 📄 Header.js      # 头部组件
    │       ├── 📄 Hero.js        # 英雄区域组件
    │       ├── 📄 HexoRecentComments.js # Hexo 最新评论组件
    │       ├── 📄 InfoCard.js    # 信息卡片组件
    │       ├── 📄 LatestPostsGroup.js # 最新文章组合组件
    │       ├── 📄 LoadingCover.js # 加载遮罩组件
    │       ├── 📄 Logo.js        # 标志组件
    │       ├── 📄 MenuGroupCard.js # 菜单组合卡片组件
    │       ├── 📄 MenuItemCollapse.js # 折叠菜单项组件
    │       ├── 📄 MenuItemDrop.js # 下拉菜单项组件
    │       ├── 📄 MenuListSide.js # 侧边菜单列表组件
    │       ├── 📄 MenuListTop.js # 顶部菜单列表组件
    │       ├── 📄 NavButtonGroup.js # 导航按钮组合组件
    │       ├── 📄 PaginationNumber.js # 数字分页组件
    │       ├── 📄 PostHero.js    # 文章英雄区域组件
    │       ├── 📄 Progress.js    # 进度条组件
    │       ├── 📄 RightFloatArea.js # 右侧浮动区域组件
    │       ├── 📄 SearchButton.js # 搜索按钮组件
    │       ├── 📄 SearchDrawer.js # 搜索抽屉组件
    │       ├── 📄 SearchInput.js # 搜索输入组件
    │       ├── 📄 SearchNav.js   # 搜索导航组件
    │       ├── 📄 SideBar.js     # 侧边栏组件
    │       ├── 📄 SideBarDrawer.js # 侧边栏抽屉组件
    │       ├── 📄 SideRight.js   # 右侧边栏组件
    │       ├── 📄 SlotBar.js     # 插槽栏组件
    │       ├── 📄 SocialButton.js # 社交按钮组件
    │       ├── 📄 TagGroups.js   # 标签组合组件
    │       ├── 📄 TagItemMini.js # 迷你标签项组件
    │       ├── 📄 TocDrawer.js   # 目录抽屉组件
    │       └── 📄 TocDrawerButton.js # 目录抽屉按钮组件
    │
    ├── 📁 nav/                   # 导航主题
    │   ├── 📄 config.js          # 导航主题配置
    │   ├── 📄 index.js           # 导航主题入口
    │   ├── 📄 style.js           # 导航主题样式
    │   │
    │   └── 📁 components/        # 导航主题组件
    │
    ├── 📁 nobelium/              # Nobelium 主题
    │   ├── 📄 config.js          # Nobelium 主题配置
    │   ├── 📄 index.js           # Nobelium 主题入口
    │   ├── 📄 style.js           # Nobelium 主题样式
    │   │
    │   └── 📁 components/        # Nobelium 主题组件
    │
    └── 📁 starter/               # 启动主题模板
        ├── 📄 config.js          # Starter 主题配置
        ├── 📄 index.js           # Starter 主题入口
        ├── 📄 style.js           # Starter 主题样式
        │
        ├── 📁 archive/           # Starter 归档页面
        │
        └── 📁 components/        # Starter 主题组件
```

## 使用说明

### 核心文件
- **配置文件**: 环境设置、构建配置和项目设置
- **文档**: 项目指南、安全策略和基础说明
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
- **.kiro/**: IDE 特定的配置和设置
- **.trae/**: Trae 工具配置和规则