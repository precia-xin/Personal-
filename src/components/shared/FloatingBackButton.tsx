'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

interface FloatingBackButtonProps {
  /** 是否显示按钮，默认为 true */
  show?: boolean
  /** 自定义样式类名 */
  className?: string
  /** 按钮标签文本 */
  ariaLabel?: string
}

export function FloatingBackButton({ 
  show = true, 
  className = '', 
  ariaLabel = '返回'
}: FloatingBackButtonProps) {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!show) {
      setIsVisible(false)
      return
    }

    const toggleVisibility = () => {
      // 页面滚动超过 100px 时显示悬浮按钮，否则隐藏
      if (window.pageYOffset > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // 初始检查
    toggleVisibility()
    
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [show])

  if (!show) return null

  return (
    <>
      {isVisible && (
        <button
          type="button"
          onClick={() => router.back()}
          aria-label={ariaLabel}
          className={`fixed top-8 left-8 sm:left-16 lg:left-[calc(50vw-38rem)] xl:left-[calc(50vw-40rem)] z-50 flex h-10 w-10 items-center justify-center rounded-full bg-card shadow-lg shadow-black/20 ring-1 ring-border transition-all duration-200 hover:bg-muted hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${className}`}
        >
          <ArrowLeft className="h-4 w-4 stroke-foreground transition group-hover:stroke-primary" />
        </button>
      )}
    </>
  )
}