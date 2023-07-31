import * as React from "react"

import { NavItem } from "@/types/nav"

import ArtistsNavMenu from "./nav/artists-menu"
import EventNavMenu from "./nav/events-menu"
import { NavLinkItem, NavMenuItem } from "./nav/nav-link"
import { NavigationMenu, NavigationMenuList } from "./ui/navigation-menu"

interface MainNavProps {
  items?: NavItem[]
}

export function ListLinks({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <nav className="flex gap-6">
        {/* all nav item should be under NavigationMenuList component */}
        <NavigationMenu>
          <NavigationMenuList>
            {/* NavLinkItem for standaalone links */}
            <NavLinkItem title="Home" url="/" />

            {/* NavMenuItem for links with menu */}
            <NavMenuItem title="Event">
              <EventNavMenu />
            </NavMenuItem>

            <NavMenuItem title="Artists">
              <ArtistsNavMenu />
            </NavMenuItem>

            <NavLinkItem title="About" url="/" />
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </div>
  )
}
