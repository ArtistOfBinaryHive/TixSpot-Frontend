import { useEffect, useState } from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import getArtists from "../components/api-calls/artists"

export default function IndexPage() {
  const [Artists, setArtists] = useState([])
  useEffect(() => {
    const call = async () => {
      const artists = await getArtists()
      console.log(JSON.parse(artists))
      setArtists(JSON.parse(artists))
    }
    call()
  }, [])

  return (
    <div>
      {Artists.map((artist) => {
        return (
          <p>
            {artist.stage_name} {artist.description}
          </p>
        )
      })}
    </div>
  )
}
