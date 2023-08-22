import { useEffect, useState } from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import getEvents from "../components/api-calls/events"

export default function IndexPage() {
  const [Events, setEvents] = useState([])
  useEffect(() => {
    const call = async () => {
      const events = await getEvents()
      console.log(JSON.parse(events))
      setEvents(JSON.parse(events))
    }
    call()
  }, [])

  return (
    <div>
      {Events.map((event) => {
        return <p>{event.location}</p>
      })}
    </div>
  )
}
