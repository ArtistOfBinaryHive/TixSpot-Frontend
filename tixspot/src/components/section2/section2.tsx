/* eslint-disable tailwindcss/classnames-order */
import React from 'react'
import { assets } from '@/pages/images'
import ImageCard from './image-card'

const Section2: React.FC = () => {
    return (
        <div>
            <div className='flex items-center mt-2 justify-evenly'>
                {assets.section2 && assets.section2.map((imageURL: string, index: number) => {
                    return (
                        <ImageCard
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