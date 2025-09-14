import { type MDXComponents } from 'mdx/types'
import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import { AlertCircle, Info, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react'
import React from 'react'

const CustomLink = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const href = props.href
  if (href?.startsWith('/')) {
    return (
      <Link
        href={href}
        {...props}
        className="font-semibold text-primary underline decoration-1 underline-offset-2 hover:decoration-2"
      />
    )
  }
  if (href?.startsWith('#')) {
    return (
      <a
        {...props}
        className="font-semibold text-primary underline decoration-1 underline-offset-2 hover:decoration-2"
      />
    )
  }
  return (
    <a
      target="_blank"
      rel="noopener noreferrer nofollow"
      {...props}
      className="font-semibold text-primary underline decoration-1 underline-offset-2 hover:decoration-2"
    />
  )
}

// 彩色标记组件
const Highlight = ({ children, color = 'yellow' }: { children: React.ReactNode, color?: 'yellow' | 'blue' | 'green' | 'red' | 'purple' | 'orange' }) => {
  const colorClasses = {
    yellow: 'bg-yellow-200 dark:bg-yellow-900/40 text-yellow-900 dark:text-yellow-100 border border-yellow-300 dark:border-yellow-700',
    blue: 'bg-blue-200 dark:bg-blue-900/40 text-blue-900 dark:text-blue-100 border border-blue-300 dark:border-blue-700',
    green: 'bg-green-200 dark:bg-green-900/40 text-green-900 dark:text-green-100 border border-green-300 dark:border-green-700',
    red: 'bg-red-200 dark:bg-red-900/40 text-red-900 dark:text-red-100 border border-red-300 dark:border-red-700',
    purple: 'bg-purple-200 dark:bg-purple-900/40 text-purple-900 dark:text-purple-100 border border-purple-300 dark:border-purple-700',
    orange: 'bg-orange-200 dark:bg-orange-900/40 text-orange-900 dark:text-orange-100 border border-orange-300 dark:border-orange-700'
  }
  
  return (
    <mark className={`px-2 py-1 rounded-md font-medium ${colorClasses[color]}`}>
      {children}
    </mark>
  )
}

// 提示框组件
const Callout = ({ children, type = 'info' }: { children: React.ReactNode, type?: 'info' | 'warning' | 'error' | 'success' | 'tip' }) => {
  const config = {
    info: {
      icon: Info,
      className: 'border-blue-200 bg-blue-50 dark:border-blue-700 dark:bg-blue-950/20',
      iconClassName: 'text-blue-600 dark:text-blue-400',
      textClassName: 'text-blue-900 dark:text-blue-100'
    },
    warning: {
      icon: AlertTriangle,
      className: 'border-yellow-200 bg-yellow-50 dark:border-yellow-700 dark:bg-yellow-950/20',
      iconClassName: 'text-yellow-600 dark:text-yellow-400',
      textClassName: 'text-yellow-900 dark:text-yellow-100'
    },
    error: {
      icon: AlertCircle,
      className: 'border-red-200 bg-red-50 dark:border-red-700 dark:bg-red-950/20',
      iconClassName: 'text-red-600 dark:text-red-400',
      textClassName: 'text-red-900 dark:text-red-100'
    },
    success: {
      icon: CheckCircle,
      className: 'border-green-200 bg-green-50 dark:border-green-700 dark:bg-green-950/20',
      iconClassName: 'text-green-600 dark:text-green-400',
      textClassName: 'text-green-900 dark:text-green-100'
    },
    tip: {
      icon: Lightbulb,
      className: 'border-purple-200 bg-purple-50 dark:border-purple-700 dark:bg-purple-950/20',
      iconClassName: 'text-purple-600 dark:text-purple-400',
      textClassName: 'text-purple-900 dark:text-purple-100'
    }
  }
  
  const { icon: Icon, className, iconClassName, textClassName } = config[type]
  
  return (
    <div className={`my-6 flex items-start gap-3 rounded-lg border-l-4 p-4 ${className}`}>
      <Icon className={`h-5 w-5 mt-0.5 flex-shrink-0 ${iconClassName}`} />
      <div className={textClassName}>{children}</div>
    </div>
  )
}

// 增强的图片组件
const EnhancedImage = ({ caption, ...props }: ImageProps & { caption?: string }) => {
  return (
    <figure className="my-8">
      <Image 
        {...props} 
        className="rounded-lg shadow-lg w-full h-auto" 
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      />
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-muted-foreground italic">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

// 代码组件增强
const InlineCode = ({ children, ...props }: any) => (
  <code 
    className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground border" 
    {...props}
  >
    {children}
  </code>
)

const CodeBlock = ({ children, className, ...props }: any) => {
  const language = className?.replace('language-', '') || 'text'
  
  return (
    <div className="my-6 relative group">
      <div className="absolute top-3 right-3 text-xs text-muted-foreground bg-muted/80 px-2 py-1 rounded">
        {language}
      </div>
      <pre
        className="overflow-x-auto rounded-xl bg-muted/50 p-6 text-sm border border-border"
        {...props}
      >
        <code className={className}>{children}</code>
      </pre>
    </div>
  )
}

export const mdxComponents: MDXComponents = {
  // 基本组件
  Image: EnhancedImage,
  a: CustomLink,
  h1: (props: any) => (
    <h1
      className="my-8 text-4xl font-bold tracking-tight sm:text-5xl text-foreground"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="my-6 text-3xl font-bold tracking-tight sm:text-4xl text-foreground border-b border-border pb-2"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className="my-6 text-2xl font-bold tracking-tight sm:text-3xl text-foreground"
      {...props}
    />
  ),
  h4: (props: any) => (
    <h4
      className="my-4 text-xl font-bold tracking-tight text-foreground"
      {...props}
    />
  ),
  p: (props: any) => <p className="my-4 text-base leading-7 text-foreground" {...props} />,
  ul: (props: any) => (
    <ul
      className="my-6 ml-6 list-disc text-base leading-7 space-y-2 text-foreground"
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol
      className="my-6 ml-6 list-decimal text-base leading-7 space-y-2 text-foreground"
      {...props}
    />
  ),
  li: (props: any) => (
    <li className="text-foreground" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote
      className="my-6 border-l-4 border-primary pl-6 italic text-muted-foreground bg-muted/30 py-4 rounded-r-lg"
      {...props}
    />
  ),
  code: InlineCode,
  pre: CodeBlock,
  hr: (props: any) => (
    <hr className="my-8 border-border" {...props} />
  ),
  table: (props: any) => (
    <div className="my-6 overflow-x-auto">
      <table className="min-w-full border-collapse border border-border rounded-lg" {...props} />
    </div>
  ),
  th: (props: any) => (
    <th className="border border-border bg-muted px-4 py-2 text-left font-semibold text-foreground" {...props} />
  ),
  td: (props: any) => (
    <td className="border border-border px-4 py-2 text-foreground" {...props} />
  ),
  
  // 自定义的增强组件
  Highlight,
  Callout,
}
