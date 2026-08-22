import SectionHeading from '../section-heading'
import ProductList from './list'

const NewArrivals = () => {
    return (
        <section className='px-20 py-10'>
            {/* heading */}
            <SectionHeading
                title='New Products'
                subTitle='Discover our featured products'
                link='#'
            />

            {/* list */}
            <ProductList />

        </section>
    )
}

export default NewArrivals