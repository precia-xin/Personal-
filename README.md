# 🌟 现代个人作品集网站

[English](#english) | [简体中文](#简体中文)

这是一个基于 Next.js 14 构建的现代个人作品集网站，支持博客、项目展示、技能展示等功能。具有优雅的设计、完整的功能和出色的性能。

## ✨ 特色功能

- 🎨 **现代设计** - 基于 TailwindCSS 和 Shadcn/UI 的优雅界面
- 📝 **博客系统** - 完整的 Markdown/MDX 支持
- 💼 **项目展示** - 展示你的作品和技能
- 🌙 **主题切换** - 明暗主题无缝切换
- 📱 **响应式设计** - 完美适配各种设备
- ⚡ **性能优化** - 基于 Next.js 14 的极致性能
- 🔍 **SEO 友好** - 完整的元数据和结构化数据

## 🚀 快速开始

> 只需 5 分钟，让你的个人网站上线！

### 环境要求
- Node.js 18+
- pnpm (推荐) 或 npm
- Git

### 安装步骤

1. **克隆项目**
```bash
git clone <your-repo-url>
cd Personal-
```

2. **安装依赖**
```bash
pnpm install
# 或 npm install
```

3. **启动开发服务器**
```bash
pnpm dev
# 或 npm run dev
```

4. **访问网站**
打开 [http://localhost:3000](http://localhost:3000) 🎉

### 个性化配置

**修改个人信息**（`src/config/infoConfig.ts`）：
```typescript
export const name = '你的姓名'
export const headline = '你的职业描述'
export const email = 'your.email@example.com'
```

**添加博客文章**（`src/content/blog/`）：
```markdown
---
title: '我的第一篇博客'
description: '博客描述'
author: '作者'
date: '2024-10-07'
---

# 标题
你的内容...
```

### 部署上线

**使用 Vercel（推荐）**
1. 访问 [vercel.com](https://vercel.com)
2. 连接 GitHub 仓库
3. 一键部署 ✨

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 🛠️ 技术栈

- **前端框架**: Next.js 14 (App Router)
- **样式系统**: TailwindCSS + Shadcn/UI
- **内容管理**: MDX + Markdown
- **图标库**: Phosphor Icons
- **主题系统**: next-themes
- **类型检查**: TypeScript
- **包管理器**: pnpm

## 📁 项目结构

```
Personal-/
├── docs/                   # 📚 项目文档
├── src/
│   ├── app/               # 🛣️ Next.js App Router
│   ├── components/        # 🧩 React 组件
│   ├── config/           # ⚙️ 配置文件
│   ├── content/blog/     # 📝 博客文章（MDX）
│   ├── lib/              # 🔧 工具函数
│   └── styles/           # 🎨 样式文件
├── public/               # 🌐 静态资源
└── QUICK_START.md        # 🚀 快速开始指南
```

## 📖 文档

- 📋 **[快速开始指南](QUICK_START.md)** - 5分钟上手
- 📖 **[完整项目指南](docs/PROJECT_GUIDE.md)** - 详细使用说明
- ✍️ **[博客写作指南](docs/BLOG_WRITING_GUIDE.md)** - 如何写博客
- 📚 **[文档中心](docs/README.md)** - 所有文档索引

## 🎯 主要功能

### 📝 博客系统
- ✅ 完整的 Markdown/MDX 支持
- ✅ 语法高亮和代码块
- ✅ 自动生成文章列表
- ✅ 响应式阅读体验

### 💼 项目展示
- ✅ 项目卡片展示
- ✅ 技术栈标签
- ✅ 项目链接管理
- ✅ 项目详情页面

### 🎨 设计系统
- ✅ 统一的设计主题变量
- ✅ 明暗主题切换
- ✅ 响应式布局
- ✅ 无障碍访问支持

### ⚡ 性能优化
- ✅ 静态生成 (SSG)
- ✅ 图片优化
- ✅ 代码分割
- ✅ SEO 优化

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

本项目基于 MIT 许可证开源。详见 [LICENSE](LICENSE) 文件。

---

# 🌟 Modern Personal Portfolio Website {#english}

[English](#english) | [简体中文](#简体中文)

A modern personal portfolio website built with Next.js 14, featuring blog, project showcase, skills display, and more. With elegant design, complete functionality, and excellent performance.

## ✨ Key Features

- 🎨 **Modern Design** - Elegant UI based on TailwindCSS and Shadcn/UI
- 📝 **Blog System** - Complete Markdown/MDX support
- 💼 **Project Showcase** - Display your works and skills
- 🌙 **Theme Toggle** - Seamless light/dark theme switching
- 📱 **Responsive Design** - Perfect adaptation to all devices
- ⚡ **Performance Optimized** - Ultimate performance based on Next.js 14
- 🔍 **SEO Friendly** - Complete metadata and structured data

## 🚀 Quick Start

> Get your personal website online in just 5 minutes!

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm
- Git

### Installation Steps

1. **Clone the project**
```bash
git clone <your-repo-url>
cd Personal-
```

2. **Install dependencies**
```bash
pnpm install
# or npm install
```

3. **Start development server**
```bash
pnpm dev
# or npm run dev
```

4. **Visit the website**
Open [http://localhost:3000](http://localhost:3000) 🎉

### Personalization

**Modify personal information** (`src/config/infoConfig.ts`):
```typescript
export const name = 'Your Name'
export const headline = 'Your Professional Title'
export const email = 'your.email@example.com'
```

**Add blog articles** (`src/content/blog/`):
```markdown
---
title: 'My First Blog Post'
description: 'Blog description'
author: 'Author'
date: '2024-10-07'
---

# Title
Your content...
```

### Deployment

**Using Vercel (Recommended)**
1. Visit [vercel.com](https://vercel.com)
2. Connect GitHub repository
3. One-click deployment ✨

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS + Shadcn/UI
- **Content Management**: MDX + Markdown
- **Icons**: Phosphor Icons
- **Theme System**: next-themes
- **Type Checking**: TypeScript
- **Package Manager**: pnpm

## 📁 Project Structure

```
Personal-/
├── docs/                   # 📚 Project documentation
├── src/
│   ├── app/               # 🛣️ Next.js App Router
│   ├── components/        # 🧩 React components
│   ├── config/           # ⚙️ Configuration files
│   ├── content/blog/     # 📝 Blog articles (MDX)
│   ├── lib/              # 🔧 Utility functions
│   └── styles/           # 🎨 Style files
├── public/               # 🌐 Static assets
└── QUICK_START.md        # 🚀 Quick start guide
```

## 📖 Documentation

- 📋 **[Quick Start Guide](QUICK_START.md)** - Get started in 5 minutes
- 📖 **[Complete Project Guide](docs/PROJECT_GUIDE.md)** - Detailed usage instructions
- ✍️ **[Blog Writing Guide](docs/BLOG_WRITING_GUIDE.md)** - How to write blogs
- 📚 **[Documentation Center](docs/README.md)** - All documentation index

## 🎯 Main Features

### 📝 Blog System
- ✅ Complete Markdown/MDX support
- ✅ Syntax highlighting and code blocks
- ✅ Automatic article list generation
- ✅ Responsive reading experience

### 💼 Project Showcase
- ✅ Project card display
- ✅ Technology stack tags
- ✅ Project link management
- ✅ Project detail pages

### 🎨 Design System
- ✅ Unified design theme variables
- ✅ Light/dark theme switching
- ✅ Responsive layout
- ✅ Accessibility support

### ⚡ Performance Optimization
- ✅ Static generation (SSG)
- ✅ Image optimization
- ✅ Code splitting
- ✅ SEO optimization

## 🤝 Contributing

Welcome to submit Issues and Pull Requests!

## 📄 License

This project is open source under the MIT License. See [LICENSE](LICENSE) file for details.