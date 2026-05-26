import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  ctaText?: string
  href?: string
  className?: string
  iconColor?: string
}

export const ServiceCard = ({
  title,
  description,
  icon: Icon,
  ctaText = "Learn More",
  className,
  iconColor = "text-primary"
}: ServiceCardProps) => {
  return (
    <Card className={cn(
      "group relative overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-2 border-none bg-white",
      className
    )}>
      <div className="absolute top-0 right-0 -mr-8 -mt-8 h-24 w-24 rounded-full bg-primary/5 transition-all group-hover:scale-150" />

      <CardHeader className="pt-8">
        <div className={cn(
          "mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 transition-colors group-hover:bg-primary/10",
          iconColor
        )}>
          <Icon className="h-7 w-7" />
        </div>
        <CardTitle className="text-2xl font-bold text-navy">{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-gray-500 leading-relaxed">
          {description}
        </p>
      </CardContent>

      <CardFooter className="pb-8">
        <Button variant="link" className="px-0 text-primary-bright font-bold group-hover:translate-x-2 transition-transform">
          {ctaText} →
        </Button>
      </CardFooter>
    </Card>
  )
}
