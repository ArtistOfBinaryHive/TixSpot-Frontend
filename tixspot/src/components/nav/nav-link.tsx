"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

//component for stand alone nav link.
export function NavLinkItem({ title, url }: { title: string; url: string }) {
  return (
    <>
      <NavigationMenuItem>
        <Link href={url} legacyBehavior passHref>
          <NavigationMenuLink
            className={
              navigationMenuTriggerStyle() +
              "flex items-center text-sm font-medium text-muted-foreground"
            }
          >
            {title}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    </>
  )
}

// component for nav nav links with menu
export function NavMenuItem({
  title,
  children,
}: {
  title: string
  children: string | JSX.Element | JSX.Element[]
}) {
  return (
    <>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="flex items-center text-sm font-medium text-muted-foreground">
          {title}
        </NavigationMenuTrigger>
        <NavigationMenuContent>{children}</NavigationMenuContent>
      </NavigationMenuItem>
    </>
  )
}

//component for links insode the nav menu
export const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
