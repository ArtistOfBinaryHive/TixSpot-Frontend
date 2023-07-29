import Image from 'next/image'
import React from 'react'

interface Props {
    url: string,
    name: string,
    desc: string
}

const ImageCard: React.FC<Props> = ({ url, name, desc }) => {
    return (
        <div className='w[300px] mb-3 space-y-2 shrink-0'>
            <Image
                src={url}
                width={150}
                height={150}
                alt=''
                className='rounded-full'
                objectFit='cover'
            />
            {/* image data */}
            <div className='p-2 bg-gray-800 text-center rounded'>
                <p className='font-bold'>{name}</p>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default ImageCard