# 📝 博客写作指南

## 🎯 概述

我们的博客系统现在支持丰富的MDX内容，包括插图、彩色标记、提示框等多种功能。以下是完整的使用指南。

## 📁 文件结构

所有博客文章都存放在 `src/content/blog/` 目录下，使用 `.mdx` 格式。

```
src/content/blog/
├── enhanced-blog-demo.mdx     # 功能演示文章
├── llm-workflow.mdx          # Python基础文章
└── test-blog.mdx             # 测试文章
```

## 📋 文章基本格式

每篇文章都需要包含前置元数据（frontmatter）：

```mdx
---
title: '文章标题'
description: '文章描述，会显示在首页卡片上'
author: '作者名称'
date: '2024-12-14'
---

# 文章内容开始

你的文章内容...
```

## 🎨 彩色标记功能

使用 `<Highlight>` 组件来高亮重要内容：

```mdx
<Highlight>默认黄色高亮</Highlight>
<Highlight color="blue">蓝色高亮</Highlight>
<Highlight color="green">绿色高亮</Highlight>
<Highlight color="red">红色高亮</Highlight>
<Highlight color="purple">紫色高亮</Highlight>
<Highlight color="orange">橙色高亮</Highlight>
```

**可用颜色：** `yellow`（默认）、`blue`、`green`、`red`、`purple`、`orange`

## 💡 提示框组件

使用 `<Callout>` 组件创建醒目的提示框：

```mdx
<Callout type="info">
信息提示框内容
</Callout>

<Callout type="success">
成功提示框内容
</Callout>

<Callout type="warning">
警告提示框内容
</Callout>

<Callout type="error">
错误提示框内容
</Callout>

<Callout type="tip">
小贴士提示框内容
</Callout>
```

**可用类型：** `info`、`success`、`warning`、`error`、`tip`

## 🖼️ 图片插入

### 基本图片
```mdx
![图片描述](图片URL)
```

### 增强图片（带标题）
```mdx
<Image 
  src="https://example.com/image.jpg" 
  alt="图片描述" 
  width={800} 
  height={400}
  caption="图片标题说明"
/>
```

**图片要求：**
- 支持本地图片（放在 `public/` 目录）
- 支持外部URL（需要在 `next.config.mjs` 中配置域名）
- 建议尺寸：宽度800px，保持适当比例

## 💻 代码展示

### 内联代码
```mdx
在文本中使用 `代码` 来标记代码片段。
```

### 代码块
````mdx
```javascript
// JavaScript 代码
function example() {
  console.log("Hello World!");
}
```

```python
# Python 代码
def example():
    print("Hello World!")
```
````

**支持的语言：** JavaScript、Python、CSS、HTML、JSON、TypeScript等

## 📊 表格

```mdx
| 列标题1 | 列标题2 | 列标题3 |
|---------|---------|---------|
| 内容1   | 内容2   | 内容3   |
| 内容4   | 内容5   | 内容6   |
```

## 📝 其他格式

### 标题
```mdx
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
```

### 列表
```mdx
- 无序列表项1
- 无序列表项2
  - 嵌套项目

1. 有序列表项1
2. 有序列表项2
```

### 引用
```mdx
> 这是一个引用块
> 可以包含多行内容
```

### 链接
```mdx
[链接文字](https://example.com)
[内部链接](/blogs)
```

### 分割线
```mdx
---
```

## 🎯 最佳实践

### 1. 文章命名
- 使用英文和短横线：`my-article.mdx`
- 避免空格和特殊字符
- 名称要简洁明了

### 2. 图片优化
- 使用适当的尺寸（推荐最大宽度800px）
- 提供有意义的 `alt` 属性
- 优先使用 `<Image>` 组件而不是普通的 markdown 图片语法

### 3. 内容结构
- 合理使用标题层级
- 适当使用提示框突出重要信息
- 代码块要指定语言类型

### 4. 主题适配
- 所有组件都支持明暗模式
- 使用系统提供的颜色变量
- 避免硬编码颜色值

## 🔧 技术细节

### MDX组件配置
主要的MDX组件在 `src/components/shared/MdxComponents.tsx` 中定义。

### 支持的功能
- ✅ 语法高亮
- ✅ 响应式图片
- ✅ 明暗模式适配
- ✅ 彩色标记
- ✅ 多类型提示框
- ✅ 优化的代码显示
- ✅ 美化的表格和列表

### 性能优化
- 图片懒加载
- 代码按需高亮
- 主题色统一管理

## 📚 示例文章

参考 `enhanced-blog-demo.mdx` 文件查看所有功能的实际使用示例。

## 🚀 开始写作

1. 在 `src/content/blog/` 目录创建新的 `.mdx` 文件
2. 添加必要的 frontmatter
3. 使用上述组件和语法编写内容
4. 保存文件，开发服务器会自动更新
5. 访问 `http://localhost:3000/blogs` 查看效果

现在你可以开始创作丰富多彩的博客内容了！🎉