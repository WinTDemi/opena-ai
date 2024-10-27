import { useSearchParams } from "react-router-dom";
import { RootState } from "../../store/store";
import { Product } from "../../domain/Product";
import { useSelector } from "react-redux";
import { useState } from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import ProductCard from "../components/common/ProductCard";
import BottomCartDetail from "../components/common/BottomCartDetail";

function DetailPage() {

    const [amount, setAmount] = useState(1);

    const handleAmountChangePlus = () => {
        setAmount(amount + 1);
    }

    const handleAmountChangeMinus = () => {
        if (amount > 1) {
            setAmount(amount - 1);
        }
    }

    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');

    const detail = useSelector((state: RootState) => state.products || []).value.find((product: Product) => product.id === Number(id));
    const products = useSelector((state: RootState) => state.products || []).value.filter((product: Product) => product.id !== Number(id));

    return (
        <div className="static overflow-scroll pt-44 size-full no-scrollbar">
            {
                detail && (
                    <div className="flex flex-col items-center justify-center h-full">
                        <div className="flex justify-center p-10 select-none bg-detail-common-img">
                            <img
                                src={detail.img}
                                alt={detail.name}
                                className="w-3/4"
                            />
                        </div>
                        <div className="relative w-full p-2 pt-5 h-fit bg-base-common-1">
                            <p className="text-2xl font-bold">{detail.name}</p>
                            <div className="w-1/3 rating">
                                {/* Generate radio buttons for rating based on the product rating */}
                                {[...Array(5)].map((_, index) => (
                                    <input
                                        key={index}
                                        type="radio"
                                        name={`rating-${detail.id}`} // Ensure unique name for each product
                                        className="bg-orange-400 mask mask-star-2"
                                        disabled // If you want to make it read-only
                                    />
                                ))}
                            </div>
                            <p className="text-sm font-semibold text-green-common">${detail.price}/KG</p>
                            <div className="absolute flex items-center space-x-3 h-fit bottom-2 right-2">
                                <button
                                    className="rounded-full btn btn-xs glass bg-base-common-2"
                                    onClick={handleAmountChangeMinus}
                                >
                                    <MinusOutlined />
                                </button>
                                <p>
                                    {
                                        amount
                                    }
                                </p>
                                <button
                                    className="text-xs rounded-full btn btn-sm glass text-base-common-1 bg-green-common"
                                    onClick={handleAmountChangePlus}
                                >
                                    <PlusOutlined />
                                </button>
                            </div>
                        </div>
                        <div className="h-full p-2 bg-base-common-1">
                            <p className="py-2 font-bold text-md">Product Details</p>
                            <p>
                                {detail.description}
                            </p>
                            <p className="py-5 font-bold text-md">Product Details</p>
                            <div className="grid grid-cols-2 gap-3 pb-28">
                                {
                                    products.map((product: Product) => (
                                        <ProductCard key={product.id} product={product} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                )
            }
            <BottomCartDetail amount={amount} price={detail?.price} />
        </div>
    )
}

export default DetailPage