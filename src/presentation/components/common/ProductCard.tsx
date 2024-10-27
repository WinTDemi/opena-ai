import { HeartFilled, HeartOutlined, PlusOutlined } from "@ant-design/icons";
import { Product } from '../../../domain/Product';
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { setFavoriteProduct } from "../../slices/ProductsSlice";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
    product: Product; // Define the props type
}

function ProductCard({ product }: ProductCardProps) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleFavorite = (productId: number) => {
        console.log('Favorite product:', productId);
        dispatch(setFavoriteProduct(productId));
    }

    const handleNavigation = (id: number) => {
        console.log('Navigate to product:', id);
        navigate(`/detail?id=${id}`);
    };

    return (
        <div
            className="relative w-full card bg-base-100"
        >
            <Button
                className="absolute z-10 top-2 right-2"
                size={'small'}
                ghost={true}
                danger={product.isFavorite}
                shape="circle"
                icon={product.isFavorite ? <HeartFilled style={{ color: 'red' }} /> : <HeartOutlined />}
                onClick={() => handleFavorite(product.id)}
            />
            <div
                onClick={() => handleNavigation(product.id)}
            >
                <figure className='m-[3px] bg-base-common-2 relative rounded-xl select-none'>
                    <img
                        src={product.img} // Use the product's image
                        className='object-fill p-2 size-20' // Set the image size
                        alt={product.name} // Use the product's name for alt text
                    />
                </figure>
                <div className="relative px-2 pb-2">
                    <p className="font-bold">{product.name}</p> {/* Display product name */}
                    <div className="w-1/2 rating">
                        {/* Generate radio buttons for rating based on the product rating */}
                        {[...Array(5)].map((_, index) => (
                            <input
                                key={index}
                                type="radio"
                                name={`rating-${product.id}`} // Ensure unique name for each product
                                className="bg-orange-400 mask mask-star-2"
                                disabled // If you want to make it read-only
                            />
                        ))}
                    </div>
                    <p className='text-sm font-medium text-green-common'>${product.price}/KG</p> {/* Display product price */}
                    <button className="absolute bottom-0 right-0 flex items-center justify-center rounded-tl-md size-fit bg-green-common rounded-ee-btn">
                        <PlusOutlined className="p-2 text-xs text-white" />
                    </button>
                </div>
            </div>

        </div>
    );
}

export default ProductCard;
