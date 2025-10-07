# 快速上手指南 🚀

> 5分钟让你的个人作品集上线！

## 第一步：获取代码
```bash
git clone <your-repo-url>
cd Personal-
```

## 第二步：安装依赖
```bash
pnpm install
# 或 npm install
```

## 第三步：启动项目
```bash
pnpm dev
# 或 npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 🎉

## 第四步：个性化配置

### 修改个人信息
编辑 `src/config/infoConfig.ts`：
```typescript
export const name = '你的姓名'
export const headline = '你的职业'
export const email = 'your.email@example.com'
```

### 添加博客文章
在 `src/content/blog/` 创建 `.mdx` 文件：
```markdown
---
title: '我的第一篇博客'
description: '这是一个测试博客'
author: '你的姓名'
date: '2024-10-07'
---

# 我的第一篇博客

这是我的第一篇博客内容...
```

### 添加项目展示
编辑 `src/config/projects.ts`：
```typescript
export const projects = [
  {
    name: '我的项目',
    description: '项目描述',
    link: { href: 'https://github.com/you/project', label: 'GitHub' },
    technologies: ['React', 'TypeScript'],
  }
]
```

## 第五步：部署上线

### 使用 Vercel（推荐）
1. 访问 [vercel.com](https://vercel.com)
2. 连接 GitHub 仓库
3. 点击部署 ✨

### 使用 Netlify
1. 访问 [netlify.com](https://netlify.com)
2. 拖拽 `out` 文件夹到页面
3. 完成部署 🎊

## 需要帮助？
- 📖 详细文档：`PROJECT_GUIDE.md`
- 🐛 问题反馈：GitHub Issues
- 💬 交流讨论：欢迎留言

**就是这么简单！🎈**