import { useSelector } from 'react-redux';
import { Product } from '../../domain/Product';
import ProductCard from '../components/common/ProductCard';
import { RootState } from '../../store/store';

function FavoritePage() {

    const products = useSelector((state: RootState) => state.products || []).value;

    return (
        <div className="grid grid-cols-2 gap-5 p-2 pb-12 overflow-scroll select-none no-scrollbar">
            {
                products.filter((product: Product) => product.isFavorite === true).length > 0
                    ? products
                        .filter((product: Product) => product.isFavorite === true)
                        .map((product: Product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    : (
                        <div className="flex items-center justify-center w-full h-full col-span-2">
                            <p className="text-lg font-semibold text-center text-gray-500">
                                No favorite products
                            </p>
                        </div>
                    )
            }
        </div>
    )
}

export default FavoritePage