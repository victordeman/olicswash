import React from 'react'
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export const SectionHeader = ({
  title,
  subtitle,
  align = 'center',
  className
}: SectionHeaderProps) => {
  return (
    <div className={cn(
      "mb-12 space-y-4",
      align === 'center' ? "text-center" : "text-left",
      className
    )}>
      <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-[700px] text-lg text-gray-500 md:text-xl">
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
