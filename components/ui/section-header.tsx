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
      "mb-12 space-y-4",
      align === 'center' ? "text-center" : "text-left",
      className
    )}>
      <h2 className={cn(
        "text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl",
        invert ? "text-white" : "text-navy"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "mx-auto max-w-[700px] text-lg md:text-xl",
          invert ? "text-gray-300" : "text-gray-500"
        )}>
          {subtitle}
        </p>
      )}
      <div className={cn(
        "h-1.5 w-20 rounded-full bg-primary-bright",
        align === 'center' ? "mx-auto" : "ml-0"
      )} />
    </div>
  )
}
