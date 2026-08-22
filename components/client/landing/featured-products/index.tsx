import SectionHeading from '../section-heading'
import ProductList from './list'

const FeaturedProducts = () => {
    return (
        <section className='px-20 py-10'>
            {/* heading */}
            <SectionHeading
                title='Featured Products'
                subTitle='Discover our featured products'
                link='#'
            />

            {/* list */}
            <ProductList />

        </section>
    )
}

export default FeaturedProducts