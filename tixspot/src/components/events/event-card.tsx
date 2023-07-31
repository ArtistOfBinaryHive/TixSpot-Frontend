import React from 'react'
import Image from 'next/image'

interface Props {
    title: string,
    image: string,
    description: string
}

const EventCard: React.FC<Props> = ({ title, image, description }) => {
    return (
        <div className='mb-3 w-[300px] shrink-0'>
            <div className='flex flex-col items-center gap-3 p-2 text-center bg-gray-800 rounded'>
                <Image
                    src={image}
                    alt=""
                    width={300}
                    height={300}
                    className="rounded-lg"
                    objectFit="cover"
                />
                <p className='text-sm font-bold'>{description}</p>
                {/* <p className=''>{title}</p> */}
            </div>
        </div>
    )
}

export default EventCard