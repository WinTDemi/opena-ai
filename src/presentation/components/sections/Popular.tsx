import ProductCard from "../common/ProductCard"

function Popular() {
    return (
        <div>
            <p className="p-2 font-bold">Popular</p>
            <div className="grid grid-cols-2 gap-5 p-2">
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default Popular









