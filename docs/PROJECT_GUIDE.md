# 个人作品集项目使用指南

这是一个基于 Next.js 的现代个人作品集网站项目，支持博客、项目展示、技能展示等功能。本指南将帮助你快速上手并自定义你的个人网站。

## 📋 目录

- [项目概述](#项目概述)
- [快速开始](#快速开始)
- [项目结构](#项目结构)
- [功能配置](#功能配置)
- [内容管理](#内容管理)
- [样式定制](#样式定制)
- [部署指南](#部署指南)
- [常见问题](#常见问题)
- [进阶使用](#进阶使用)

## 🎯 项目概述

### 主要功能
- 🏠 **个人主页** - 展示个人信息、技能和最新动态
- 📝 **博客系统** - 支持 Markdown/MDX 格式的文章
- 💼 **项目展示** - 展示个人项目和作品
- 👤 **关于页面** - 详细的个人介绍
- 🌙 **主题切换** - 支持明暗主题模式
- 📱 **响应式设计** - 适配各种设备屏幕

### 技术栈
- **前端框架**: Next.js 14
- **样式框架**: TailwindCSS
- **UI组件**: Shadcn/UI
- **图标库**: Phosphor Icons
- **内容管理**: MDX
- **类型检查**: TypeScript

## 🚀 快速开始

### 环境要求
- Node.js 18+ 
- pnpm (推荐) 或 npm/yarn
- Git

### 安装步骤

1. **克隆项目**
```bash
git clone <your-repo-url>
cd Personal-
```

2. **安装依赖**
```bash
# 使用 pnpm (推荐)
pnpm install

# 或使用 npm
npm install
```

3. **启动开发服务器**
```bash
pnpm dev
# 或
npm run dev
```

4. **访问网站**
打开浏览器访问 [http://localhost:3000](http://localhost:3000)

### 首次配置

1. **复制环境变量文件**
```bash
cp .env.example .env.local
```

2. **编辑个人信息**
修改 `src/config/infoConfig.ts` 中的个人信息

3. **保存并查看效果**
开发服务器会自动重载显示更改

## 📁 项目结构

```
Personal-/
├── public/                 # 静态资源
│   ├── images/            # 图片资源
│   └── icons/             # 图标文件
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── (routes)/      # 路由页面
│   │   ├── layout.tsx     # 根布局
│   │   └── page.tsx       # 首页
│   ├── components/        # React 组件
│   │   ├── ui/           # 基础 UI 组件
│   │   ├── shared/       # 共享组件
│   │   ├── layout/       # 布局组件
│   │   └── home/         # 首页专用组件
│   ├── config/           # 配置文件
│   │   ├── siteConfig.ts  # 网站配置
│   │   ├── infoConfig.ts  # 个人信息配置
│   │   └── projects.ts    # 项目配置
│   ├── content/          # 内容文件
│   │   └── blog/         # 博客文章 (.mdx)
│   ├── lib/              # 工具库
│   │   ├── utils.ts      # 通用工具函数
│   │   ├── markdown.ts   # Markdown 处理
│   │   └── blogs.ts      # 博客相关函数
│   └── styles/           # 样式文件
│       └── tailwind.css  # Tailwind CSS
├── .env.local            # 环境变量 (需创建)
├── package.json          # 项目依赖
├── tailwind.config.ts    # Tailwind 配置
└── next.config.mjs       # Next.js 配置
```

## ⚙️ 功能配置

### 1. 个人信息配置

编辑 `src/config/infoConfig.ts`：

```typescript
// 基本信息
export const name = '你的姓名'
export const headline = '你的职业描述'
export const introduction = '你的个人介绍'
export const email = 'your.email@example.com'
export const githubUsername = 'your-github-username'

// 技能图标
export const techIcons = [
  'javascript',
  'typescript',
  'react',
  'nextdotjs',
  // 更多图标...
]

// 社交链接
export const socialLinks = [
  {
    name: 'GitHub',
    icon: 'github',
    href: 'https://github.com/yourusername',
  },
  // 更多链接...
]
```

### 2. 项目展示配置

编辑 `src/config/projects.ts`：

```typescript
export const projects = [
  {
    name: '项目名称',
    description: '项目描述',
    link: { href: 'https://project-url.com', label: '项目链接' },
    technologies: ['React', 'TypeScript', 'Node.js'],
    logo: '/images/project-logo.png', // 可选
  },
  // 更多项目...
]
```

### 3. 教育经历配置

编辑 `src/config/education.ts`：

```typescript
export const education = [
  {
    school: '学校名称',
    degree: '学位',
    field: '专业',
    start: '2020',
    end: '2024',
    description: '教育经历描述',
  },
  // 更多教育经历...
]
```

### 4. 工作经历配置

编辑 `src/config/career.ts`：

```typescript
export const career = [
  {
    company: '公司名称',
    title: '职位',
    start: '2022',
    end: '现在', // 或具体结束时间
    description: '工作内容描述',
  },
  // 更多工作经历...
]
```

## 📝 内容管理

### 博客文章

1. **创建新文章**
在 `src/content/blog/` 目录下创建 `.mdx` 文件：

```bash
touch src/content/blog/my-new-post.mdx
```

2. **文章格式**
```markdown
---
title: '文章标题'
description: '文章描述'
author: '作者姓名'
date: '2024-10-07'
---

# 文章标题

你的文章内容...

## 章节标题

更多内容...
```

3. **支持的 Markdown 功能**
- 基础语法（标题、段落、列表等）
- 代码块和语法高亮
- 表格
- 链接和图片
- 引用块
- 任务列表

4. **代码块示例**
```markdown
```javascript
function hello() {
  console.log('Hello, World!');
}
```
```

### 图片管理

1. **添加图片**
将图片放入 `public/images/` 目录

2. **在文章中使用**
```markdown
![图片描述](/images/your-image.jpg)
```

3. **图片优化建议**
- 使用 WebP 格式（更小的文件大小）
- 提供适当的 alt 文本
- 控制图片尺寸避免过大

## 🎨 样式定制

### 主题色彩

编辑 `tailwind.config.ts` 修改颜色主题：

```typescript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
        // 更多自定义颜色...
      },
    },
  },
}
```

### 字体设置

1. **添加自定义字体**
在 `src/app/layout.tsx` 中导入字体：

```typescript
import { Inter, Noto_Sans_SC } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const notoSansSC = Noto_Sans_SC({ subsets: ['chinese'] })
```

2. **应用字体**
```typescript
<body className={`${inter.className} ${notoSansSC.className}`}>
```

### 组件样式

使用 Tailwind CSS 类名定制组件样式：

```tsx
<div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
    标题
  </h2>
</div>
```

## 🚀 部署指南

### Vercel 部署（推荐）

1. **连接 GitHub**
- 访问 [Vercel](https://vercel.com)
- 使用 GitHub 账号登录
- 导入你的项目仓库

2. **配置环境变量**
在 Vercel 面板中添加必要的环境变量

3. **自动部署**
每次推送到主分支时会自动部署

### Netlify 部署

1. **连接仓库**
- 访问 [Netlify](https://netlify.com)
- 选择 "New site from Git"
- 连接你的 GitHub 仓库

2. **构建设置**
```
Build command: npm run build
Publish directory: out
```

### 自主服务器部署

1. **构建项目**
```bash
npm run build
```

2. **启动服务**
```bash
npm start
```

3. **使用 PM2（推荐）**
```bash
npm install -g pm2
pm2 start npm --name "portfolio" -- start
```

## ❓ 常见问题

### 开发问题

**Q: 启动时出现端口被占用错误？**
A: 更改端口或杀死占用进程：
```bash
# 更改端口
npm run dev -- -p 3001

# 或杀死进程 (macOS/Linux)
lsof -ti:3000 | xargs kill

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**Q: 博客文章不显示？**
A: 检查：
- 文件名是否为 `.mdx` 格式
- frontmatter 格式是否正确
- 日期格式是否为 'YYYY-MM-DD'

**Q: 图片不显示？**
A: 确保：
- 图片放在 `public/` 目录下
- 路径以 `/` 开头（如 `/images/photo.jpg`）
- 图片格式被支持（jpg, png, gif, webp）

### 样式问题

**Q: 自定义样式不生效？**
A: 检查：
- Tailwind 类名是否正确
- 是否需要重启开发服务器
- 自定义 CSS 是否正确导入

**Q: 主题切换不工作？**
A: 确保：
- `next-themes` 已正确配置
- 组件使用了 `dark:` 前缀的类名

### 部署问题

**Q: Vercel 部署失败？**
A: 常见原因：
- TypeScript 类型错误
- 环境变量未设置
- 构建超时（检查依赖大小）

**Q: 页面加载缓慢？**
A: 优化建议：
- 压缩图片
- 使用 Next.js Image 组件
- 启用增量静态生成

## 🎓 进阶使用

### 添加新页面

1. **创建页面文件**
```bash
mkdir src/app/contact
touch src/app/contact/page.tsx
```

2. **编写页面组件**
```tsx
// src/app/contact/page.tsx
export default function Contact() {
  return (
    <div>
      <h1>联系我</h1>
      <p>这是联系页面</p>
    </div>
  )
}
```

3. **添加导航链接**
在 `src/config/siteConfig.ts` 中添加导航项

### 集成第三方服务

**Google Analytics**
```typescript
// src/app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout() {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="GA_MEASUREMENT_ID" />
      </body>
    </html>
  )
}
```

**评论系统**
可以集成 Giscus 或 Disqus 等评论系统

### 性能优化

1. **图片优化**
```tsx
import Image from 'next/image'

<Image
  src="/images/photo.jpg"
  alt="描述"
  width={800}
  height={600}
  priority // 首屏图片使用
/>
```

2. **字体优化**
```typescript
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // 字体加载优化
})
```

3. **代码分割**
```typescript
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>
})
```

### SEO 优化

**页面元数据**
```typescript
// src/app/page.tsx
export const metadata = {
  title: '个人作品集 - 你的姓名',
  description: '这是我的个人作品集网站',
  keywords: ['前端开发', 'React', 'Next.js'],
  openGraph: {
    title: '个人作品集',
    description: '这是我的个人作品集网站',
    images: ['/images/og-image.jpg'],
  },
}
```

**结构化数据**
添加 JSON-LD 结构化数据提升 SEO

### 国际化支持

如需支持多语言，可以使用 Next.js 国际化功能：

```typescript
// next.config.mjs
module.exports = {
  i18n: {
    locales: ['zh', 'en'],
    defaultLocale: 'zh',
  },
}
```

## 📞 获取帮助

- 📖 **官方文档**: [Next.js](https://nextjs.org/docs)
- 🎨 **UI 组件**: [Shadcn/UI](https://ui.shadcn.com)
- 🎯 **样式框架**: [TailwindCSS](https://tailwindcss.com)
- 💬 **社区支持**: [GitHub Issues](https://github.com/your-repo/issues)

## 📄 许可证

本项目基于 MIT 许可证开源。详见 [LICENSE](LICENSE) 文件。

---

**祝你使用愉快！如果遇到问题，欢迎提交 Issue 或 PR。**