import React, { useState } from 'react';
import Slider from 'react-slick';

interface TreeSize {
    size: string;
    originalPrice?: number;
    discountedPrice?: number;
    description?: string;
    features?: string[];
}

interface TreeCardProps {
    name: string;
    defaultDescription: string;
    defaultFeatures: string[];
    sizes?: TreeSize[]; // Optional for trees with multiple sizes
    finalPrice?: number; // Optional for trees with no discount
    colors?: string[]; // Optional for multiple color options
    images: string[];
    onSale?: boolean; // Indicates if the item is on sale
}

const TreeCard: React.FC<TreeCardProps> = ({
                                               name,
                                               defaultDescription,
                                               defaultFeatures,
                                               sizes,
                                               finalPrice,
                                               colors,
                                               images,
                                               onSale = false,
                                           }) => {
    const [selectedSize, setSelectedSize] = useState<TreeSize | null>(sizes ? sizes[0] : null);

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    // Description and features to display
    const currentDescription = selectedSize?.description || defaultDescription;
    const currentFeatures = selectedSize?.features || defaultFeatures;

    return (
        <div className="border border-gray-300 rounded-lg p-4 shadow-lg bg-white max-w-sm relative">
            {/* Sale Indicator */}
            {onSale && (
                <span
                    className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm z-10"
                    style={{ zIndex: 10 }} // Ensures the badge stays on top
                >
    Discounted
  </span>
            )}


            {/* Carousel */}
            <div className="mb-4">
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className="h-64">
                            <img
                                src={image}
                                alt={`${name} Image ${index + 1}`}
                                className="object-fit w-full h-full rounded-lg"
                            />
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold text-green-700 mb-2">{name}</h2>

            {/* Color Indicators (if applicable) */}
            {colors && (
                <div className="flex items-center mb-4">
                    <span className="font-bold text-gray-700 mr-2">Available Colors:</span>
                    <div className="flex space-x-2">
                        {colors.map((color, index) => (
                            <span
                                key={index}
                                className="w-6 h-6 rounded-full border border-gray-400"
                                style={{ backgroundColor: color }}
                            ></span>
                        ))}
                    </div>
                </div>
            )}

            {/* Size Dropdown (if applicable) */}
            {sizes && sizes.length > 1 && (
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Select Size:</label>
                    <select
                        className="border border-gray-300 rounded-lg p-2 w-full"
                        value={selectedSize?.size}
                        onChange={(e) => {
                            const size = sizes.find((s) => s.size === e.target.value);
                            if (size) setSelectedSize(size);
                        }}
                    >
                        {sizes.map((size, index) => (
                            <option key={index} value={size.size}>
                                {size.size}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {/* Description */}
            <p className="text-gray-600 mb-4">{currentDescription}</p>

            {/* Features */}
            <ul className="list-disc list-inside text-gray-500 mb-4">
                {currentFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>

            {/* Pricing */}
            {selectedSize && selectedSize.originalPrice && selectedSize.discountedPrice ? (
                <div className="text-center mt-4">
                    <p className="text-lg font-semibold text-gray-500 line-through">
                        ${selectedSize.originalPrice.toFixed(2)}
                    </p>
                    <p className="text-2xl font-bold text-red-600">
                        ${selectedSize.discountedPrice.toFixed(2)}
                    </p>
                </div>
            ) : finalPrice ? (
                <div className="text-center mt-4">
                    <p className="text-2xl font-bold text-green-700">
                        ${finalPrice.toFixed(2)}
                    </p>
                </div>
            ) : (
                <div className="text-center mt-4">
                    <p className="text-lg font-semibold text-gray-500">
                        Price not available
                    </p>
                </div>
            )}

            <button className="mt-4 px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-600">
                Order Now
            </button>
        </div>
    );
};

export default TreeCard;
