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
    <div className="flex flex-col gap-6 md:gap-10">
      <nav className="flex flex-col gap-6">
        {/* all nav item should be under NavigationMenuList component */}
        <NavigationMenu>
          <NavigationMenuList>
            <div className="flex md:flex-row flex-col">
              {/* NavLinkItem for standaalone links */}
              <NavLinkItem title="Home" url="/" />

              {/* NavMenuItem for links with menu */}
              <div className="md:block hidden">
                <NavMenuItem title="Event">
                  <EventNavMenu />
                </NavMenuItem>
              </div>
              <div className="md:hidden block">
                <NavLinkItem title="Event" url="/events" />
              </div>

              <div className="md:block hidden">
                <NavMenuItem title="Artists">
                  <ArtistsNavMenu />
                </NavMenuItem>
              </div>
              <div className="md:hidden block">
                <NavLinkItem title="Artists" url="/artists" />
              </div>

              <NavLinkItem title="About" url="/" />
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </div>
  )
}
