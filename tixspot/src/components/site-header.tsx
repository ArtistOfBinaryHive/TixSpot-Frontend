import { useEffect, useState } from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

import { ListLinks } from "./list-links"
import { ListSocials } from "./list-socials"
import { RightNav } from "./nav/right-nav"
import { CommandMenu } from "./search/command-box"

export function SiteHeader() {
  const [isOpen, setisOpen] = useState(false)
  const [makeresponsive, setmakeresponsive] = useState(" md:block hidden")
  useEffect(() => {
    if (isOpen) {
      setmakeresponsive(" md:block")
    } else {
      setmakeresponsive(" md:block hidden")
    }
  }, [isOpen])

  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b w-auto">
      <div className="container flex md:h-16 h-auto items-center space-x-4 sm:justify-between sm:space-x-0 md:flex-row flex-col w-full">
        <button
          className="md:hidden block"
          onClick={() => {
            setisOpen(!isOpen)
          }}
        >
          Menu
        </button>

        <div className={"flex flex-col" + makeresponsive}>
          <MainNav items={siteConfig.mainNav} />
        </div>

        <div
          className={
            "flex w-full content-center m-auto text-center space-x-4" +
            makeresponsive
          }
        >
          <CommandMenu />
        </div>
        <div
          className={
            "flex flex-1 items-center justify-end space-x-4" + makeresponsive
          }
        >
          <nav className="flex justify-end space-x-1 ">
            <RightNav items={siteConfig.rightNav} />
            <div className="hidden lg:block">
              <ListSocials items={siteConfig.links} />
            </div>

            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
