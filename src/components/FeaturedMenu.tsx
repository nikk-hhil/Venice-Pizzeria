import Link from 'next/link';

const FeaturedMenu = () => {
  // Mock data for featured menu items with size options
  const featuredItems = [
    {
      id: 1,
      name: "Meat Lovers Fantasy",
      description: "Fresh mozzarella, Pepperoni, Salami, Italian Sausage, Bacon, Ground Beef, Ham",
      sizes: [
        { size: "Small", price: "$14.99" },
        { size: "Medium", price: "$18.99" },
        { size: "Large", price: "$22.99" },
        { size: "Jumbo", price: "$26.99" }
      ],
      popular: true
    },
    {
      id: 2,
      name: "Pepperoni",
      description: "Pepperoni, mozzarella, and our signature tomato sauce",
      sizes: [
        { size: "Small", price: "$12.99" },
        { size: "Medium", price: "$16.99" },
        { size: "Large", price: "$20.99" },
        { size: "Jumbo", price: "$24.99" }
      ],
      popular: true
    },
    {
      id: 3,
      name: "House Special",
      description: "Mozzarella Cheese, Pepperoni, Bacon, Onions, Mushrooms, Fresh Tomatoes ",
      sizes: [
        { size: "Small", price: "$13.99" },
        { size: "Medium", price: "$18.99" },
        { size: "Large", price: "$22.99" },
        { size: "Jumbo", price: "$25.99" }
      ],
      popular: false
    },
    {
      id: 4,
      name: "Vegetarian",
      description: "Green Peppers, Mushrooms, Onions, Black Olives, and Fresh Tomatoes",
      sizes: [
        { size: "Small", price: "$13.99" },
        { size: "Medium", price: "$17.99" },
        { size: "Large", price: "$21.99" },
        { size: "Jumbo", price: "$24.99" }
      ],
      popular: false
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-red-700 mb-2">Our Specialty Pizzas</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Try our customer favorites, handcrafted with fresh ingredients and baked to perfection in our wood-fired oven.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {/* Image placeholder */}
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-600">Pizza Image</span>
              </div>
              
              <div className="p-4">
                {item.popular && (
                  <span className="inline-block px-2 py-1 text-xs font-bold text-red-700 bg-red-100 rounded-full mb-2">
                    Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.name}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                
                {/* Size and price options */}
                <div className="mt-2">
                  <p className="text-base font-bold text-gray-800 mb-2">Sizes:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {item.sizes.map((sizeOption, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-gray-800 font-medium">{sizeOption.size}</span>
                        <span className="text-gray-900 font-bold">{sizeOption.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link 
            href="/menu" 
            className="inline-block bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;