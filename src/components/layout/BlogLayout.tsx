'use client'

import { useContext } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

import { AppContext } from '@/app/providers'
import { Container } from '@/components/layout/Container'
import { Prose } from '@/components/shared/Prose'
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
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          {previousPathname && (
            <button
              type="button"
              onClick={() => router.back()}
              aria-label="Go back to blogs"
              className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-neutral-900 shadow-lg shadow-black/20 ring-1 ring-neutral-200 dark:ring-neutral-700 transition hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              <ArrowLeft className="h-4 w-4 stroke-neutral-700 dark:stroke-neutral-300 transition group-hover:stroke-neutral-900 dark:group-hover:stroke-white" />
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
            <Prose className="mt-8" data-mdx-content>
              {children}
            </Prose>
          </article>
        </div>
      </div>
    </Container>
  )
}
