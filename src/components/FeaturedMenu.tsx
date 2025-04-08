import Link from 'next/link';

const FeaturedMenu = () => {
  // Mock data for featured menu items
  const featuredItems = [
    {
      id: 1,
      name: "Margherita",
      description: "Fresh mozzarella, tomato sauce, basil, and extra virgin olive oil",
      price: "$14.99",
      category: "Classic"
    },
    {
      id: 2,
      name: "Pepperoni",
      description: "Pepperoni, mozzarella, and our signature tomato sauce",
      price: "$16.99",
      category: "Popular"
    },
    {
      id: 3,
      name: "Quattro Formaggi",
      description: "Mozzarella, gorgonzola, fontina, and parmesan cheeses",
      price: "$18.99",
      category: "Specialty"
    },
    {
      id: 4,
      name: "Vegetarian",
      description: "Bell peppers, mushrooms, red onions, olives, and artichokes",
      price: "$17.99",
      category: "Vegetarian"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-red-700 mb-2">Our Popular Pizzas</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Try our customer favorites, handcrafted with fresh ingredients and baked to perfection in our wood-fired oven.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {/* Image placeholder */}
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Pizza Image</span>
              </div>
              
              <div className="p-4">
                <span className="inline-block px-2 py-1 text-xs font-semibold text-red-700 bg-red-100 rounded-full mb-2">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-900 font-bold">{item.price}</span>
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