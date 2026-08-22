import Link from 'next/link'
import React from 'react'
import { IoChevronDown } from 'react-icons/io5'

interface IProps {
    title: string,
    subTitle: string,
    link?: string
}

const SectionHeading = ({ subTitle, title, link }: IProps) => {
    return (
        <header className='flex items-center justify-between'>
            {/* left  */}
            <div>
                <h3 className='text-md font-bold text-gray-700 '>{title}</h3>
                <p className='text-sm text-gray-500'>{subTitle}</p>
            </div>

            {/* right */}
            {!!link && <Link href={link}>
                <div className='flex gap-0.5 items-center text-gray-500 font-semibold'>
                    <span className='text-sm'>View All</span>
                    <IoChevronDown size={18} />
                </div>
            </Link>}
        </header>
    )
}

export default SectionHeading
