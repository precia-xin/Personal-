'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'

interface TableOfContentsProps {
  className?: string
}

interface TocItem {
  id: string
  text: string
  level: number
  children?: TocItem[]
}

interface CollapsedState {
  [key: string]: boolean
}

export function TableOfContents({ className = '' }: TableOfContentsProps) {
  const [toc, setToc] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const [clickedId, setClickedId] = useState<string>('')
  const [collapsed, setCollapsed] = useState<CollapsedState>({})

  // 构建层级目录结构
  const buildHierarchy = (items: TocItem[]): TocItem[] => {
    const result: TocItem[] = []
    const stack: TocItem[] = []

    items.forEach(item => {
      const newItem = { ...item, children: [] }
      
      // 找到合适的父节点
      while (stack.length > 0 && stack[stack.length - 1].level >= item.level) {
        stack.pop()
      }
      
      if (stack.length === 0) {
        result.push(newItem)
      } else {
        const parent = stack[stack.length - 1]
        if (!parent.children) parent.children = []
        parent.children.push(newItem)
      }
      
      stack.push(newItem)
    })
    
    return result
  }

  // 展开父级目录
  const expandParents = (targetId: string) => {
    const findParentIds = (items: TocItem[], target: string, parents: string[] = []): string[] => {
      for (const item of items) {
        if (item.id === target) {
          return parents
        }
        if (item.children && item.children.length > 0) {
          const result = findParentIds(item.children, target, [...parents, item.id])
          if (result.length > 0 || result.length === 0 && item.children.some(child => child.id === target)) {
            return [...parents, item.id]
          }
        }
      }
      return []
    }
    
    const parentIds = findParentIds(toc, targetId)
    if (parentIds.length > 0) {
      setCollapsed(prev => {
        const newCollapsed = { ...prev }
        parentIds.forEach(id => {
          newCollapsed[id] = false
        })
        return newCollapsed
      })
    }
  }

  // 切换折叠状态
  const toggleCollapsed = (id: string) => {
    setCollapsed(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const scrollToHeading = (id: string) => {
    // 设置点击效果
    setClickedId(id)
    
    const element = document.getElementById(id)
    if (element) {
      const rect = element.getBoundingClientRect()
      const offsetTop = window.pageYOffset + rect.top - 80 // 80px 偏移量
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
      
      // 清除点击效果
      setTimeout(() => {
        setClickedId('')
      }, 300)
    }
  }

  useEffect(() => {
    // 获取页面中的所有标题
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
    const tocItems: TocItem[] = []

    headings.forEach((heading, index) => {
      // 如果标题没有 id，给它添加一个
      if (!heading.id) {
        heading.id = `heading-${index}`
      }

      const level = parseInt(heading.tagName.charAt(1))
      const item = {
        id: heading.id,
        text: heading.textContent || '',
        level: level
      }
      
      tocItems.push(item)
    })

    const hierarchicalToc = buildHierarchy(tocItems)
    
    // 设置默认展开状态：所有目录项默认展开
    const initialCollapsed: CollapsedState = {}
    // 不设置任何项为折叠状态，即所有项默认展开
    
    setToc(hierarchicalToc)
    setCollapsed(initialCollapsed)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
      const scrollY = window.scrollY + 150 // 增加偏移量以更准确地识别当前位置

      let currentActiveId = ''
      let closestHeading: Element | null = null
      let minDistance = Infinity

      // 找到当前最近的标题
      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect()
        const elementTop = window.pageYOffset + rect.top
        
        // 只考虑已经进入视口或在视口上方的标题
        if (elementTop <= scrollY) {
          const distance = scrollY - elementTop
          if (distance < minDistance) {
            minDistance = distance
            closestHeading = heading
            currentActiveId = heading.id
          }
        }
      })

      // 如果没有找到合适的标题，选择第一个标题
      if (!currentActiveId && headings.length > 0) {
        currentActiveId = headings[0].id
      }

      if (currentActiveId !== activeId) {
        setActiveId(currentActiveId)
        
        // 自动展开当前激活标题的父级目录
        if (currentActiveId) {
          expandParents(currentActiveId)
        }
      }
    }

    // 使用节流函数优化性能
    let timeoutId: NodeJS.Timeout
    const throttledHandleScroll = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(handleScroll, 10)
    }

    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    handleScroll() // 初始调用

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll)
      clearTimeout(timeoutId)
    }
  }, [toc, activeId])

  // 渲染目录项
  const renderTocItem = (item: TocItem, depth = 0) => {
    const hasChildren = item.children && item.children.length > 0
    const isCollapsed = collapsed[item.id]
    const isActive = activeId === item.id
    const isClicked = clickedId === item.id

    return (
      <li key={item.id} className="relative">
        <div className="flex items-center">
          {hasChildren && (
            <button
              onClick={() => toggleCollapsed(item.id)}
              className="mr-1 p-0.5 rounded hover:bg-muted transition-colors"
            >
              {isCollapsed ? (
                <ChevronRight className="h-3 w-3 text-muted-foreground" />
              ) : (
                <ChevronDown className="h-3 w-3 text-muted-foreground" />
              )}
            </button>
          )}
          <button
            onClick={() => scrollToHeading(item.id)}
            className={`flex-1 text-left px-3 py-2 rounded transition-all duration-200 hover:bg-muted transform ${
              isClicked 
                ? 'scale-95 bg-primary/30 text-primary font-medium shadow-sm' 
                : isActive 
                ? 'text-primary bg-primary/15 font-medium border border-primary/20' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
            style={{ 
              paddingLeft: `${depth * 16 + (hasChildren ? 0 : 20) + 12}px`,
              marginLeft: hasChildren ? '0' : '0'
            }}
          >
            {item.text}
          </button>
        </div>
        {hasChildren && !isCollapsed && (
          <ul className="ml-2 space-y-1">
            {item.children!.map(child => renderTocItem(child, depth + 1))}
          </ul>
        )}
      </li>
    )
  }

  if (toc.length === 0) return null

  return (
    <div className={`sticky top-8 ${className}`}>
      <div className="bg-card/95 backdrop-blur-sm border border-border rounded-lg p-6 shadow-lg min-w-64 max-w-80">
        <h3 className="text-sm font-semibold text-foreground mb-3">目录</h3>
        <nav>
          <ul className="space-y-1 text-sm">
            {toc.map(item => renderTocItem(item))}
          </ul>
        </nav>
      </div>
    </div>
  )
}