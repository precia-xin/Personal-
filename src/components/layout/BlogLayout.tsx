'use client'

import { useContext } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

import { AppContext } from '@/app/providers'
import { Container } from '@/components/layout/Container'
import { ScrollToTop } from '@/components/shared/ScrollToTop'
import { FloatingBackButton } from '@/components/shared/FloatingBackButton'
import { TableOfContents } from '@/components/shared/TableOfContents'
import { type BlogType } from '@/lib/blogs'
import { formatDate } from '@/lib/formatDate'

export function BlogLayout({
  blog,
  children,
}: {
  blog: BlogType
  children: React.ReactNode
}) {
  let router = useRouter()
  let { previousPathname } = useContext(AppContext)

  return (
    <>
      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          {/* 主要内容区域 - 限制最大宽度避免与目录重合 */}
          <div className="mx-auto max-w-4xl xl:max-w-5xl xl:pr-80">
            <div className="xl:grid xl:grid-cols-4 xl:gap-8">
              {/* 文章内容区域 */}
              <div className="xl:col-span-4">
                {/* 静态返回按钮 - 页面顶部显示 */}
                {previousPathname && (
                  <button
                    type="button"
                    onClick={() => router.back()}
                    aria-label="Go back to blogs"
                    className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-card shadow-lg shadow-black/20 ring-1 ring-border transition hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    <ArrowLeft className="h-4 w-4 stroke-foreground transition group-hover:stroke-primary" />
                  </button>
                )}
                
                <article>
                  <header className="flex flex-col">
                    <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground break-words">
                      {blog.title}
                    </h1>
                    <time
                      dateTime={blog.date}
                      className="order-first flex items-center text-sm sm:text-base text-muted-foreground"
                    >
                      <span className="h-4 w-0.5 rounded-full bg-border" />
                      <span className="ml-3">{formatDate(blog.date)}</span>
                      <span className="mx-2">·</span>
                      <span>{blog.author}</span>
                    </time>
                  </header>
                  <div className="mt-8" data-mdx-content>
                    {children}
                  </div>
                </article>
              </div>
            </div>
          </div>
          
          {/* 目录导航 - 绝对定位，在大屏幕上显示 */}
          <div className="hidden xl:block xl:fixed xl:top-32 xl:right-6 2xl:right-12 xl:z-10">
            <TableOfContents className="max-h-[calc(100vh-10rem)] overflow-y-auto" />
          </div>
        </div>
      </Container>
      
      {/* 悬浮返回按钮 - 滚动时显示 */}
      <FloatingBackButton 
        show={!!previousPathname} 
        ariaLabel="返回博客列表" 
      />
      
      {/* 回到顶部按钮 */}
      <ScrollToTop />
    </>
  )
}
