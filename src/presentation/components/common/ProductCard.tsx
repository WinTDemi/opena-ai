import { PlusOutlined } from "@ant-design/icons";
import mangoImg from '../../../assets/products/mango.png';

function ProductCard() {
    return (
        <div className="w-full card bg-base-100">
            <figure className='m-[3px] bg-base-common-2'>
                <img
                    src={mangoImg}
                    className='size-20'
                    alt="Shoes" />
            </figure>
            <div className="relative px-2 pb-2">
                <p className="font-bold">Shoes!</p>
                <div className="w-1/2 rating">
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
                </div>
                <p className='text-sm font-medium text-green-common'>$</p>
                <button className="absolute bottom-0 right-0 flex items-center justify-center rounded-tl-md size-fit bg-green-common rounded-ee-btn">
                    <PlusOutlined className="p-2 text-xs text-white" />
                </button>
            </div>
        </div>
    )
}

export default ProductCard