import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-primary text-white shadow-premium hover:bg-primary/90 hover:shadow-lg",
        primary: "bg-primary text-white shadow-premium hover:bg-primary/90 hover:shadow-lg",
        secondary: "bg-primary-bright text-white shadow-vibrant hover:bg-primary-bright/90",
        accent: "bg-accent text-white shadow-lg hover:bg-accent/90",
        success: "bg-success text-white shadow-lg hover:bg-success/90",
        whatsapp: "bg-[#22C55E] text-white shadow-lg hover:bg-[#22C55E]/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        bright: "bg-primary-bright text-white shadow-vibrant hover:bg-primary-bright/90",
      },
      size: {
        default: "h-12 px-6 py-2",
        sm: "h-10 rounded-full px-4 text-xs",
        lg: "h-16 rounded-full px-10 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
