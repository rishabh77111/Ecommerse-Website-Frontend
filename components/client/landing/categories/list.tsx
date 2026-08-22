'use client'
import React from 'react'
import CategoryCard from './card'
import { TCategory } from '@/types/category.types'
import { useQuery } from '@tanstack/react-query'
import { getAllCategories } from '@/api/category.api'


const CategoryList = () => {

    const { isLoading, error, isError, data } = useQuery({
        queryFn: getAllCategories,
        queryKey: ['get-all-categories']
    })

    console.log(data)


    return (
        // loading
        // data.length === 0 -> data not found
        <div className='grid grid-cols-5 mt-5 gap-6'>
            {data?.data?.categories?.map((category: TCategory) => <CategoryCard key={category._id} category={category} />)}
        </div>
    )
}

export default CategoryList
