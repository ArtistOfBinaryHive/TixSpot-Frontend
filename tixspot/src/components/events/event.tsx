import React, { useEffect, useState } from 'react'
import EventCard from './event-card'
import { assets } from '@/components/images'
import getEvents from "../api-calls/events"

const Event: React.FC = () => {

    const fakeData = [
        {
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, eius. Repellat, quos suscipit ad fuga itaque tenetur voluptate eius. Dolor.",
            title: "sample",
            image: assets.section1,
        },
        {
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, eius. Repellat, quos suscipit ad fuga itaque tenetur voluptate eius. Dolor.",
            title: "sample",
            image: assets.section1,
        },
        {
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, eius. Repellat, quos suscipit ad fuga itaque tenetur voluptate eius. Dolor.",
            title: "sample",
            image: assets.section1,
        },
        {
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, eius. Repellat, quos suscipit ad fuga itaque tenetur voluptate eius. Dolor.",
            title: "sample",
            image: assets.section1,
        },
    ]

const [Events, setEvents] = useState([])
useEffect(() => {
    const call=async () => {
      const events= await getEvents()
      console.log(events)
      setEvents(JSON.parse(events))
    }
    call()
  }, [])
    return (
        <div className='mt-5 overflow-hidden'>
            <div className='flex w-full gap-5 overflow-x-scroll justify-evenly '>
                {
                    Events && Events.map(({ title, images, description }: { title: string, images:any, description: string }, index: number) => {
                        return (
                            <EventCard
                                key={index}
                                title={title}
                                image={images['poster']}
                                description={description}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Event