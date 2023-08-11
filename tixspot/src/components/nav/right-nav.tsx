import Link from "next/link"
import { getUserData } from "@/redux/features/authSlice"
import { useSelector } from "react-redux"

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"

interface MainNavProps {
  items?: NavItem[]
}

export function RightNav({ items }: MainNavProps) {
  const userData = useSelector(getUserData)
  return (
    <div className="flex gap-6 md:gap-10">
      {items?.length ? (
        <nav className="flex gap-6">
          {userData.isAuthenticated ? (
            <>Signed in</>
          ) : (
            items?.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "flex items-center text-sm font-medium text-muted-foreground",
                      item.customCSS,
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                  >
                    {item.title}
                  </Link>
                )
            )
          )}
        </nav>
      ) : null}
    </div>
  )
}
