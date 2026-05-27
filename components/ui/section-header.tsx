import React from 'react'
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
  invert?: boolean
}

export const SectionHeader = ({
  title,
  subtitle,
  align = 'center',
  className,
  invert = false
}: SectionHeaderProps) => {
  return (
    <div className={cn(
      "mb-16 space-y-6",
      align === 'center' ? "text-center" : "text-left",
      className
    )}>
      <div className={cn(
        "inline-block h-2 w-20 rounded-full bg-primary-bright mb-2",
        align === 'center' ? "mx-auto" : "ml-0"
      )} />
      <h2 className={cn(
        "text-4xl font-black tracking-tight sm:text-5xl md:text-6xl",
        invert ? "text-white" : "text-navy"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "mx-auto max-w-[800px] text-xl md:text-2xl font-medium leading-relaxed",
          invert ? "text-gray-300" : "text-gray-500"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
