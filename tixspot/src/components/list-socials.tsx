import { createElement } from 'react';
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { LinkItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

interface LinkItemProps {
  items?: LinkItem[]
}

export function ListSocials({ items }: LinkItemProps) {
    return (
        <div className="flex gap-6 md:gap-10">
          
          {items?.length ? (
            <nav className="flex gap-6">
              {items?.map(
                (item, index) =>
                  item.href && (
                    <Link
              href={item.href}
              target="_blank"
              rel="noreferrer"
              key={index}
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: 'ghost',
                })}
              >
                {/* {createElement(Icons[item.icon],{ className: "h-5 w-5" })} */}
  
                <item.icon className="h-5 w-5" />
                <span className="sr-only">{item.title}</span>
              </div>
            </Link>
                  )
              )}
            </nav>
          ) : null}
        </div>
      )
}