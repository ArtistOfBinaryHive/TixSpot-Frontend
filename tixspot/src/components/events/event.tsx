import React from 'react'
import EventCard from './event-card'
import { assets } from '@/pages/images'

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

    return (
        <div className='mt-5 overflow-hidden'>
            <div className='flex w-full gap-5 overflow-x-scroll justify-evenly '>
                {
                    fakeData && fakeData.map(({ title, image, description }: { title: string, image: string, description: string }, index: number) => {
                        return (
                            <EventCard
                                key={index}
                                title={title}
                                image={image}
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