import {Icons} from "../components/icons"
export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next.js",
  description:
    "",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Events",
      href: "/events",
    },
    {
      title: "Artists",
      href: "/artists",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact Us",
      href: "/contact",
    },
  ],
  rightNav:[
    {
      title: "Login",
      href: "/login",
      customCSS:""
    },
    {
      title: "Sign Up",
      href: "/signup",
      customCSS:"text-slate-50 rounded-full bg-rose-500 p-2 "
    },
  ],

  links: [
    {
      title: "Instagram",
      href: "/",
      icon: Icons.Instagram
    },
  ],
  
}
