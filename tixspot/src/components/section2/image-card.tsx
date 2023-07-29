import Image from 'next/image'
import React from 'react'

interface Props {
    url: string
}

const ImageCard: React.FC<Props> = ({ url }) => {
    return (
        <div>
            <Image
                src={url}
                width={150}
                height={150}
                alt=''
                className='rounded-full'
                objectFit='cover'
            />

            {/* image description */}
            {/* <p className='text-center'></p> */}

        </div>
    )
}

export default ImageCard