import React from 'react'
import { assets } from '@/pages/images'
import ImageCard from './image-card'

const Section2: React.FC = () => {
    return (
        <div className='mt-5 overflow-hidden'>
            <div className='flex w-full gap-5 overflow-x-scroll justify-evenly '>
                {assets.section2 && assets.section2.map((imageURL: string, index: number) => {
                    return (
                        <ImageCard
                            name='name'
                            desc='description'
                            url={imageURL}
                            key={`${index}${imageURL.slice(0, 3)}`}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Section2