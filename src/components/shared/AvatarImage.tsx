'use client'

import { useState } from 'react'
import Image from 'next/image'
import { name } from '@/config/infoConfig'

interface AvatarImageProps {
  src: any
  alt?: string
  className?: string
  sizes?: string
  priority?: boolean
  width?: number
  height?: number
}

export function AvatarImage({ 
  src, 
  alt = "Avatar", 
  className = "", 
  sizes = "2.25rem",
  priority = false,
  width,
  height
}: AvatarImageProps) {
  const [imageError, setImageError] = useState(false)
  
  if (imageError) {
    return (
      <div 
        className={`${className} bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground font-bold text-lg`}
      >
        {name.charAt(0).toUpperCase()}
      </div>
    )
  }
  
  return (
    <Image
      src={src}
      alt={alt}
      sizes={sizes}
      className={className}
      priority={priority}
      width={width}
      height={height}
      onError={() => setImageError(true)}
    />
  )
}