# 项目目录结构文档

此文档描述了Longfor Design System项目的完整目录结构，最后更新时间：2024年

## 项目根目录

```
Longfor-Design-System/
├── .dockerignore
├── .env.example
├── .eslintrc.js
├── .gitignore
├── .npmrc
├── .nvmrc
├── .prettierrc.json
├── .trae/
│   └── rules/
│       └── project_rules.md
├── .vscode/
│   └── settings.json
├── .github/
│   ├── FUNDING.yml
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   ├── config.yml
│   │   ├── deployment-error.md
│   │   └── feature_request.md
│   ├── pull_request_template.md
│   ├── stale.yml
│   └── workflows/
│       ├── codeql-analysis.yml
│       ├── docker-ghcr.yaml
│       ├── pushUrl.yml
│       └── sync.yaml
├── Dockerfile
├── File Tree Documentation.md
├── LICENSE
├── README.md
├── SECURITY.md
├── basic.md
├── blog.config.js
├── package.json
├── yarn.lock
├── next-env.d.ts
├── next-sitemap.config.js
├── next.config.js
├── tsconfig.json
├── tsconfig.eslint.json
├── vercel.json
├── postcss.config.js
├── tailwind.config.js
├── temp.md
├── pushUrl.py
├── starter_backup/
│   └── ...
```

## 主要目录结构

### 📁 components/
组件目录，包含所有React组件

```
components/
├── AISummary.js
├── AISummary.module.css
├── AOSAnimation.js
├── Ackee.js
├── AdBlockDetect.js
├── AlgoliaSearchModal.js
├── AnalyticsBusuanzi.js
├── Artalk.js
├── ArticleExpirationNotice.js
├── Badge.js
├── BeiAnGongAn.js
├── BeiAnSite.js
├── Busuanzi.js
├── ChatBase.js
├── Collapse.js
├── Comment.js
├── CopyRightDate.js
├── Coze.js
├── CursorDot.js
├── CusdisComponent.js
├── CustomContextMenu.js
├── DarkModeButton.js
├── DebugPanel.js
├── DifyChatbot.js
├── DisableCopy.js
├── Draggable.js
├── Equation.js
├── ExternalPlugins.js
├── ExternalScript.js
├── FacebookMessenger.js
├── FacebookPage.js
├── Fireworks.js
├── FlipCard.js
├── FlutteringRibbon.js
├── FullScreenButton.js
├── Giscus.js
├── Gitalk.js
├── GlobalStyle.js
├── GoogleAdsense.js
├── Gtag.js
├── HeroIcons.js
├── IconFont.js
├── KatexReact.js
├── LA51.js
├── LazyImage.js
├── Lenis.js
├── Live2D.js
├── Loading.js
├── LoadingCover.js
├── LoadingProgress.js
├── Mark.js
├── MouseFollow.js
├── Nest.js
├── NotByAI.js
├── Notification.js
├── NotionIcon.js
├── NotionPage.js
├── OpenWrite.js
├── PWA.js
├── Pdf.js
├── Player.js
├── PoweredBy.js
├── PrismMac.js
├── QrCode.js
├── Ribbon.js
├── SEO.js
├── Sakura.js
├── Select.js
├── ShareBar.js
├── ShareButtons.js
├── SideBarDrawer.js
├── StarrySky.js
├── Tabs.js
├── ThemeSwitch.js
├── TianliGPT.js
├── Twikoo.js
├── TwikooCommentCount.js
├── TwikooCommentCounter.js
├── TwikooRecentComments.js
├── Utterances.js
├── VConsole.js
├── ValineComponent.js
├── Vercel.js
├── WWAds.js
├── WalineComponent.js
├── WebMention.js
├── Webwhiz.js
├── WordCount.js
└── ui/
    └── dashboard/
```

### 📁 conf/
配置文件目录

```
conf/
├── ad.config.js
├── ai.confg.js
├── analytics.config.js
├── animation.config.js
├── code.config.js
├── comment.config.js
├── contact.config.js
├── dev.config.js
├── font.config.js
├── image.config.js
├── layout-map.config.js
├── notion.config.js
├── plugin.config.js
├── post.config.js
├── right-click-menu.js
└── widget.config.js
```

### 📁 hooks/
自定义React Hooks

```
hooks/
├── useAdjustStyle.js
└── useWindowSize.ts
```

### 📁 lib/
库文件目录

```
lib/
├── cache/
│   ├── cache_manager.js
│   ├── local_file_cache.js
│   ├── memory_cache.js
│   └── redis_cache.js
├── config.js
├── db/
│   └── getSiteData.js
├── font.js
├── global.js
├── lang/
│   ├── en-US.js
│   ├── fr-FR.js
│   ├── ja-JP.js
│   ├── tr-TR.js
│   ├── zh-CN.js
│   ├── zh-HK.js
│   └── zh-TW.js
├── lang.js
├── notion/
│   ├── CustomNotionApi.ts
│   ├── convertInnerUrl.js
│   ├── getAllCategories.js
│   ├── getAllPageIds.js
│   ├── getAllTags.js
│   ├── getMetadata.js
│   ├── getNotionAPI.js
│   ├── getNotionConfig.js
│   ├── getNotionPost.js
│   ├── getPageProperties.js
│   ├── getPageTableOfContents.js
│   ├── getPostBlocks.js
│   └── mapImage.js
├── password.js
├── plugins/
│   ├── aiSummary.js
│   ├── algolia.js
│   ├── busuanzi.js
│   ├── gtag.js
│   ├── mailchimp.js
│   ├── mhchem.js
│   ├── wordCount.js
│   └── wow.js
├── redirect.js
├── robots.txt.js
├── rss.js
├── sitemap.xml.js
└── utils/
    ├── formatDate.js
    ├── index.js
    ├── pageId.js
    └── post.js
```

### 📁 pages/
页面路由目录

```
pages/
├── 404.js
├── [prefix]/
│   ├── [slug]/
│   └── index.js
├── _app.js
├── _document.js
├── api/
│   ├── auth/
│   ├── cache.js
│   ├── subscribe.js
│   └── user.ts
├── archive/
│   └── index.js
├── auth/
│   ├── index.js
│   └── result.js
├── category/
│   └── index.js
├── component.js
├── components/
├── dashboard/
├── design/
│   └── index.js
├── experience.js
├── index.js
├── page/
│   └── [page].js
├── resource.js
├── search/
│   ├── [keyword]/
│   └── index.js
├── sign-in/
├── sign-up/
├── sitemap.xml.js
└── tag/
    ├── [tag]/
    └── index.js
```

### 📁 public/
静态资源目录

```
public/
├── ads.txt
├── avatar.png
├── avatar.svg
├── bg_image.jpg
├── css/
│   ├── all.min.css
│   ├── aos.css
│   ├── custom.css
│   └── wow/
├── dplayer.htm
├── favicon.ico
├── favicon.svg
├── images/
│   ├── heo/
│   ├── home/
│   └── home.png
├── js/
│   ├── aos.js
│   ├── cusdis.es.js
│   ├── custom.js
│   ├── fireworks.js
│   ├── giscus.js
│   ├── lenis.js
│   ├── nest.js
│   ├── ribbon.js
│   ├── sakura.js
│   ├── starrySky.js
│   └── typed.min.js
├── rss/
├── svg/
│   └── not-by-ai/
├── videos/
└── webfonts/
```

### 📁 styles/
样式文件目录

```
styles/
├── globals.css
├── notion.css
└── prism-theme.css
```

### 📁 themes/
主题目录

```
themes/
├── gitbook/
└── theme.js
```

## 说明

- **版本状态**: 已恢复到提交 `6bbe3df6567b9c79b152eb71f3055bfa4b3b13dd`
- **最后更新**: 2024年
- **项目类型**: Next.js博客系统，基于Notion API
- **主要功能**: 设计系统展示、博客文章、组件文档、资源管理
- **新增功能**: 该版本添加了导航功能，包括资源、体验和组件页面

此文档将随着项目的发展而持续更新。