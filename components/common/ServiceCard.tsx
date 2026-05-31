import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LucideIcon, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  ctaText?: string
  href?: string
  className?: string
  iconColor?: string
  detailed?: boolean
}

export const ServiceCard = ({
  title,
  description,
  icon: Icon,
  ctaText = "Learn More",
  href = "/booking",
  className,
  iconColor = "text-primary",
  detailed = false
}: ServiceCardProps) => {
  if (detailed) {
    return (
      <Card className={cn(
        "group relative overflow-hidden transition-all hover:shadow-premium border-2 border-gray-100 bg-white rounded-[2.5rem]",
        className
      )}>
        <CardContent className="p-10">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className={cn(
              "flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-gray-50 transition-all group-hover:bg-primary group-hover:text-white",
              iconColor
            )}>
              <Icon className="h-10 w-10 transition-transform group-hover:scale-110" />
            </div>

            <div className="space-y-4 flex-grow">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <CardTitle className="text-3xl font-black text-navy">{title}</CardTitle>
              </div>
              <p className="text-xl text-gray-500 leading-relaxed font-medium">
                {description}
              </p>
              <div className="pt-4">
                <Link href={href}>
                  <Button size="lg" className="h-16 px-10 rounded-2xl font-bold text-lg">
                    {ctaText} <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={cn(
      "group relative overflow-hidden transition-all hover:shadow-premium hover:-translate-y-2 border-none bg-white rounded-[2rem]",
      className
    )}>
      <div className="absolute top-0 right-0 -mr-8 -mt-8 h-24 w-24 rounded-full bg-primary/5 transition-all group-hover:scale-150" />

      <CardHeader className="pt-10">
        <div className={cn(
          "mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50 transition-all group-hover:bg-primary group-hover:text-white group-hover:rotate-6",
          iconColor
        )}>
          <Icon className="h-8 w-8" />
        </div>
        <CardTitle className="text-2xl font-black text-navy tracking-tight">{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-gray-500 leading-relaxed font-medium">
          {description}
        </p>
      </CardContent>

      <CardFooter className="pb-10">
        <Link href={href}>
          <Button variant="link" className="px-0 text-primary-bright font-black group-hover:translate-x-2 transition-transform text-lg uppercase tracking-wider">
            {ctaText} →
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
