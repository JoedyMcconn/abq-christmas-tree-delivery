import React from 'react';
import TreeCard from '../components/TreeCard';

const Home: React.FC = () => {
    const jacksonSpruceDetails = {
        name: "Holiday Time 6.5 ft Jackson Spruce Tree",
        defaultDescription: "Capture the beauty of the holiday season with this lifelike artificial Christmas tree. Perfect for your home and easy to set up!",
        defaultFeatures: ['642 lush branch tips', 'Full, lifelike branches', 'Easy setup with hinged branches', 'Tree stand included', 'Flame-retardant for safety'],
        finalPrice: 115.00,
        images: ['/6.5ft-1.webp', '/6.5ft-2.webp', '/6.5ft-3.webp'],
    };

    const preLitWindhamSpruceDetails = {
        name: "Holiday Time 6.5 ft Pre-lit Windham Spruce Tree",
        defaultDescription: "Elevate your holiday decor with this pre-lit Windham Spruce artificial tree. Featuring 300 clear LED lights, lush foliage, and easy setup, it's the perfect addition to your festive celebrations.",
        defaultFeatures: ['936 branch tips for a lush appearance', '300 pre-strung clear LED lights', 'Easy setup with hinged branches', 'Metal tree stand included', 'Flame-retardant for safety'],
        finalPrice: 120.00,
        images: ['/6.5 Lights-1.webp', '/6.5 Lights-2.webp', '/6.5 Lights-3.webp'],
    };

    const pencilTreeDetails = {
        name: "Best Choice Products Prelit Pencil Christmas Tree",
        defaultDescription: "A lush spruce pencil tree with a slim profile, pre-lit with 150 LED lights, perfect for compact spaces.",
        defaultFeatures: ['9 light functions controlled by a foot switch', 'Flame-retardant PVC branches', 'Easy assembly and fluffing', 'Sturdy metal base included'],
        sizes: [
            { size: '4.5 ft', originalPrice: 129.99, discountedPrice: 108.49 },
            { size: '6 ft', originalPrice: 169.99, discountedPrice: 148.85 },
            { size: '7.5 ft', originalPrice: 199.99, discountedPrice: 199.25 },
        ],
        images: ['/PencilTree-1.webp', '/PencilTree-2.webp', '/PencilTree-3.webp'],
        onSale:true,
    };

    const madisonPineDetails = {
        name: "Holiday Time 6.5 ft Pre-lit Madison Pine Tree",
        defaultDescription: "The magnificent Holiday Time 6.5ft Pre-lit Madison Pine artificial Christmas tree is a beautiful addition to any home. With its unique colors and pre-lit design, this tree is perfect for adding contemporary holiday style.",
        defaultFeatures: ['600 branch tips for a dense appearance', '250 pre-strung clear LED lights', 'SureBright™ feature: lights stay lit even if 1 bulb burns out', 'Tree stand included', 'Easy setup with hinged branches', 'Flame-retardant for safety'],
        finalPrice: 99.99,
        colors: ['black', 'white', 'green'],
        images: [
            '/madison-pine-green-1.webp',
            '/madison-pine-black.webp',
            '/madison-pine-black.webp',
            '/madison-pine-white.webp',
            '/madison-pine-green.webp' ,
            '/madison-pine-black.green-2' ,
            '/madison-pine-white.webp',
            '/madison-pine-white-1.webp',
            '/madison-pine-white-2.webp',
            '/madison-pine-white-3.webp',
            ''],
        onSale: false
    };

    const iznenTreeDetails = {
        name: "IZNEN Pre-lit Green Christmas Tree",
        defaultDescription: "IZNEN lifelike pre-lit green Christmas tree is made of high-quality materials that are fireproof, waterproof, and anti-allergenic to ensure long-lasting durability.",
        defaultFeatures: ['600 warm white LED lights', 'High-quality, fire-resistant needles', 'Sturdy metal base', 'Includes large storage bag', '8 adjustable lighting modes'],
        sizes: [
            { size: '6 ft', originalPrice: 149.99, discountedPrice: 89.99 },
            { size: '7.5 ft', originalPrice: 229.99, discountedPrice: 133.59 },
            { size: '9 ft', originalPrice: 289.99, discountedPrice: 189.99 },
        ],
        images: ['/IZEN-1.webp','/IZEN-2.webp','/IZEN-3.webp','/IZEN-4.webp','/IZEN-5.webp',],
        onSale: true,
    };

    return (
        <div>
            {/* Hero Section */}
            <div
                className="relative h-[50vh] sm:h-[60vh] bg-fit bg-center flex items-center justify-center"
                style={{backgroundImage: `url('/Logo.webp')`}}
            >
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <h1 className="relative text-white text-4xl sm:text-5xl font-bold text-center px-4">

                </h1>
            </div>

            {/* Pricing Info Section */}
            <div
                className="relative bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 shadow-lg py-8 px-6 md:px-12 lg:px-24 text-center">
                <h2 className="text-2xl sm:text-3xl font-semibold text-green-700 mb-4">
                    Stress-Free Holiday Cheer
                </h2>
                <p className="text-gray-600 text-lg sm:text-xl mb-6">
                    Our prices include the cost of the tree and professional installation, ensuring your holiday season
                    starts off right.
                    <span className="text-red-600 font-bold"> Delivery fees are calculated at checkout.</span>
                </p>
                <div className="flex justify-center mt-4">
                    <button
                        className="px-6 py-2 bg-green-700 text-white rounded-md text-lg font-medium shadow-md hover:bg-green-600 transition">
                        Browse Trees
                    </button>
                </div>
            </div>

            {/* Tree Cards Section */}
            <div className="p-8 bg-gray-100">
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                    <TreeCard {...jacksonSpruceDetails} />
                    <TreeCard {...preLitWindhamSpruceDetails} />
                    <TreeCard {...pencilTreeDetails} />
                    <TreeCard {...madisonPineDetails} />
                    <TreeCard {...iznenTreeDetails} />
                </div>
            </div>
        </div>
    );
};

export default Home;
