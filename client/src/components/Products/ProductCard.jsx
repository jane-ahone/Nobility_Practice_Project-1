function ProductCard(props){
    const { id, name, discount, saleType, price, image, originalPrice, category } = props.data;
    return (
        <div className="w-36 sm:w-40 flex-shrink-0 flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-36 sm:h-40">
                <img 
                    src={image} 
                    alt={name} 
                    className="w-full h-full object-cover"
                />
                {discount && (
                    <div className="absolute top-2 left-2 bg-[#ff4858] text-white text-xs font-bold px-2 py-1 rounded">
                        {discount}% Off
                    </div>
                )}
            </div>
            <div className="p-3 flex-grow flex flex-col">
                <h3 className="text-xs sm:text-sm font-medium text-gray-900 mb-1 line-clamp-2">{name}</h3>
                <div className="mt-auto">
                    <p className="text-sm font-bold text-[#40bfff]">${price.toFixed(2)}</p>
                    {originalPrice && (
                        <p className="text-xs text-gray-500 line-through">
                            ${originalPrice.toFixed(2)}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
