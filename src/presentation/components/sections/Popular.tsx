import { useSelector } from 'react-redux';
import { Product } from '../../../domain/Product';
import { RootState } from '../../../store/store';
import ProductCard from '../common/ProductCard';

function Popular() {

    const products = useSelector((state: RootState) => state.products || []).value;

    console.log(products);

    return (
        <div>
            <p className="p-2 font-bold">Popular</p>
            <div className="grid grid-cols-2 gap-5 p-2">
                {
                    products.map((product: Product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default Popular









