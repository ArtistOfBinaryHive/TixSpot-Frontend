import React from 'react'
import { assets } from '@/pages/images'
import ImageCard from './image-card'

const Section2: React.FC = () => {
    return (
        <div className='overflow-hidden mt-5'>
            <div className='flex gap-5  justify-evenly overflow-x-scroll w-full '>
                {assets.section2 && assets.section2.map((imageURL: string, index: number) => {
                    return (
                        <>
                            <ImageCard
                                name='name'
                                desc='description'
                                url={imageURL}
                                key={`${index}${imageURL.slice(0, 3)}`}
                            />

                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Section2