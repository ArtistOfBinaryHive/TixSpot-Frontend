import { Icon } from "@/components/icons"


export interface NavItem {
  title: string
  href?: string
  customCSS?: string
  icon?: string
  disabled?: boolean
  external?: boolean
}

export interface LinkItem {
  title: string
  href?: string
  customCSS?: string
  icon: Icon
  disabled?: boolean
  external?: boolean
}
