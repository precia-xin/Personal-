"use client"

import { ArrowRightIcon, HashIcon, Shield, Brain, ShieldCheck, Zap } from 'lucide-react'
import Image from 'next/image'
import { ArrowUpRight } from '@phosphor-icons/react'
import { ProjectItemType } from '@/config/infoConfig'
import Link from 'next/link'

// 图标映射函数
const getProjectIcon = (iconName: string) => {
  const iconProps = {
    className: "h-6 w-6 text-primary",
    strokeWidth: 1.5
  }
  
  switch (iconName) {
    case 'shield':
      return <Shield {...iconProps} />
    case 'brain':
      return <Brain {...iconProps} />
    case 'shield-check':
      return <ShieldCheck {...iconProps} />
    case 'zap':
      return <Zap {...iconProps} />
    default:
      return <Shield {...iconProps} />
  }
}

export function ProjectCard({ project, titleAs }: { project: ProjectItemType, titleAs?: keyof JSX.IntrinsicElements }) {
  let Component = titleAs ?? 'h2'
  return (
    <li className='group relative flex flex-col items-start h-full'>
      <div className="relative flex flex-col justify-between h-full w-full p-4 rounded-2xl border border-muted-foreground/20 shadow-sm transition-all group-hover:scale-[1.03] group-hover:shadow-md group-hover:bg-muted/5">
        <div className=''>
          <div className='flex flex-col sm:flex-row justify-center sm:justify-start items-start sm:items-center gap-4'>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-muted/50 border border-border">
              {getProjectIcon(project.icon)}
            </div>
            <Component className="text-base font-semibold">
              {project.name}
            </Component>
          </div>
          <p className="relative z-10 mt-2 text-base text-muted-foreground ml-2">
            {project.description}
          </p>
        </div>

        <div className="relative z-10 mt-auto pt-4 ml-1">
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-x-2 items-center">
              {project.tags.map((tag, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center space-x-0.5 group"
                >
                  <HashIcon className="w-3 h-3 text-muted-foreground icon-scale" />
                  <span className="text-sm text-muted-foreground tracking-tighter">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
        <Link
          href={project.link.href}
          className='absolute inset-0 z-20'>
          <ArrowUpRight size={32} weight="duotone" className="absolute top-4 right-4 h-4 w-4 group-hover:text-primary group-hover:cursor-pointer" />
        </Link>
      </div>
    </li>
  )
}