import { HeartFilled, HeartOutlined, PlusOutlined } from "@ant-design/icons";
import { Product } from '../../../domain/Product';
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { setFavoriteProduct } from "../../slices/ProductsSlice";

interface ProductCardProps {
    product: Product; // Define the props type
}

function ProductCard({ product }: ProductCardProps) {

    const dispatch = useDispatch();

    const handleFavorite = (productId: number) => {
        console.log('Favorite product:', productId);
        dispatch(setFavoriteProduct(productId));
    }

    return (
        <div className="w-full card bg-base-100">
            <figure className='m-[3px] bg-base-common-2 relative'>
                <img
                    src={product.img} // Use the product's image
                    className='object-fill p-2 size-20' // Set the image size
                    alt={product.name} // Use the product's name for alt text
                />
                <Button
                    className="absolute top-1 right-1"
                    size={'small'}
                    ghost={true}
                    danger={product.isFavorite}
                    shape="circle"
                    icon={product.isFavorite ? <HeartFilled style={{ color: 'red' }} /> : <HeartOutlined />}
                    onClick={() => handleFavorite(product.id)}
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
                <p className='text-sm font-medium text-green-common'>${product.price}</p> {/* Display product price */}
                <button className="absolute bottom-0 right-0 flex items-center justify-center rounded-tl-md size-fit bg-green-common rounded-ee-btn">
                    <PlusOutlined className="p-2 text-xs text-white" />
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
