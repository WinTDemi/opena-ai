interface BottomCartDetailProps {
    amount: number;
    price?: number;
}

function BottomCartDetail({ amount, price }: BottomCartDetailProps) {
    return (
        <div className="absolute bottom-0 flex items-center justify-between w-full h-24 p-2 bg-white">
            <div className="w-fit">
                <p>Total price:</p>
                <p>${price ? (amount * price) : 0}</p>
            </div>
            <button className="w-3/5 text-white rounded-3xl btn bg-green-common">Add to Cart</button>
        </div>
    )
}

export default BottomCartDetail