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
  price?: string
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
  price,
  detailed = false
}: ServiceCardProps) => {
  if (detailed) {
    return (
      <Card className={cn(
        "group relative overflow-hidden transition-all hover:shadow-2xl border-2 border-gray-100 bg-white rounded-[2.5rem]",
        className
      )}>
        <CardContent className="p-10">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className={cn(
              "flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-gray-50 transition-colors group-hover:bg-primary/10",
              iconColor
            )}>
              <Icon className="h-10 w-10" />
            </div>

            <div className="space-y-4 flex-grow">
              <div className="flex justify-between items-start">
                <CardTitle className="text-3xl font-black text-navy">{title}</CardTitle>
                {price && (
                  <span className="text-2xl font-black text-primary bg-primary/5 px-4 py-1 rounded-xl">
                    {price}
                  </span>
                )}
              </div>
              <p className="text-xl text-gray-500 leading-relaxed font-medium">
                {description}
              </p>
              <Link href={href} className="inline-block pt-4">
                <Button size="lg" className="h-14 px-8 rounded-2xl font-bold text-lg shadow-lg shadow-primary/20">
                  {ctaText} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={cn(
      "group relative overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-2 border-none bg-white rounded-3xl",
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
        <p className="text-gray-500 leading-relaxed font-medium">
          {description}
        </p>
      </CardContent>

      <CardFooter className="pb-8">
        <Link href={href}>
          <Button variant="link" className="px-0 text-primary-bright font-bold group-hover:translate-x-2 transition-transform text-lg">
            {ctaText} →
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
