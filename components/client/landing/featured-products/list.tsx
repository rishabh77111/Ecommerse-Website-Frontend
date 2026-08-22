'use client'
import { useQuery } from '@tanstack/react-query'
import ProductCard from '../product-card'
import { TProducts } from '@/types/product.types'
import { getAllProducts } from '@/api/products.api'

const ProductList = () => {

    const { isLoading, error, isError, data } = useQuery({
        queryFn: getAllProducts,
        queryKey: ['get-all-products']
    })

    if (isLoading) {
        return <div className="text-center py-10">Loading products...</div>;
    }

    if (isError) {
        return <div className="text-center py-10 text-red-500">Error loading products!</div>;
    }

    if (!data?.data?.products || data.data.products.length === 0) {
        return <div className="text-center py-10">Data not found</div>;
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-5 mb-10 gap-6 justify-items-center'>
            {data?.data.products.map((product: TProducts) => <ProductCard key={product._id} products={product} />)}
        </div>
    );
}

export default ProductList;