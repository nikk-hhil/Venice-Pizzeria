"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

// Define proper TypeScript interfaces
interface MenuItem {
  name: string;
  price?: number;
  description?: string;
  note?: string;
}

interface CategoryItem {
  name: string;
  items: MenuItem[];
}

interface FavouritePizza {
  name: string;
  description: string;
  prices: {
    small: number;
    medium: number;
    large: number;
    jumbo: number;
  };
  isNew?: boolean;
}

interface FamilyCombo {
  number: number;
  items: string[];
  price: number;
}

interface PizzaSpecial {
  name: string;
  price: number;
}

interface PizzaSize {
  size: string;
  inches: string;
  slices: number;
  price: number;
  extraTopping: number;
  stuffedCrust: number;
}

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('pizza');

  const menuCategories = [
    { id: 'pizza', name: 'Pizza' },
    { id: 'favourites', name: 'Venice Favourites' },
    { id: 'combos', name: 'Family Combos' },
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'sides', name: 'Sides & More' }
  ];

  const pizzaSizes: PizzaSize[] = [
    { size: 'Small', inches: '10"', slices: 4, price: 16.99, extraTopping: 1.75, stuffedCrust: 3.00 },
    { size: 'Medium', inches: '12"', slices: 6, price: 22.99, extraTopping: 2.00, stuffedCrust: 4.00 },
    { size: 'Large', inches: '14"', slices: 8, price: 26.99, extraTopping: 2.25, stuffedCrust: 5.00 },
    { size: 'Jumbo', inches: '17"', slices: 12, price: 33.99, extraTopping: 2.75, stuffedCrust: 6.00 }
  ];

  const favouritePizzas: FavouritePizza[] = [
    { 
      name: 'Hawaiian', 
      description: 'Cheese, ham, pineapple, bacon',
      prices: { small: 16.99, medium: 20.99, large: 26.99, jumbo: 32.99 }
    },
    { 
      name: 'Meat Lover\'s Fantasy', 
      description: 'Cheese, pepperoni, salami, Italian sausage, bacon, ham, ground beef',
      prices: { small: 18.99, medium: 23.99, large: 28.99, jumbo: 36.99 }
    },
    { 
      name: 'Vegetarian', 
      description: 'Fresh mushrooms, green pepper, onion, tomato, olives, cheese',
      prices: { small: 17.99, medium: 22.99, large: 27.99, jumbo: 32.99 }
    },
    { 
      name: 'House Special', 
      description: 'Cheese, pepperoni, bacon, green pepper, fresh mushroom, onion',
      prices: { small: 17.99, medium: 22.99, large: 27.99, jumbo: 33.99 }
    },
    { 
      name: 'Donair Pizza', 
      description: 'Donair meat, donair sauce, tomato, onion, cheese',
      prices: { small: 17.99, medium: 21.99, large: 26.99, jumbo: 32.99 }
    },
    { 
      name: 'Greek Delight', 
      description: 'Feta cheese, tomato, spinach, olives, onion, mozzarella cheese',
      prices: { small: 17.99, medium: 22.99, large: 26.99, jumbo: 33.99 }
    },
    { 
      name: 'Chicken Delight', 
      description: 'Chicken, fresh mushroom, onion, tomato, green pepper, cheese',
      prices: { small: 17.99, medium: 22.99, large: 27.99, jumbo: 33.99 }
    },
    { 
      name: 'BBQ Chicken', 
      description: 'Cheese, BBQ chicken, onion, green pepper, pineapple',
      isNew: true,
      prices: { small: 17.99, medium: 21.99, large: 26.99, jumbo: 33.99 }
    }
  ];

  const familyCombos: FamilyCombo[] = [
    {
      number: 1,
      items: [
        '1 Small Pizza with 4 toppings',
        '2 Donairs Greek Style',
        '1 Large Greek Salad'
      ],
      price: 38.99
    },
    {
      number: 2,
      items: [
        '1 Large Pizza with cheese and 4 toppings',
        '1 Large Garlic Fingers'
      ],
      price: 36.99
    },
    {
      number: 3,
      items: [
        '1 Jumbo Pizza with cheese and 4 toppings',
        '1 Medium Garlic Fingers'
      ],
      price: 36.99
    },
    {
      number: 4,
      items: [
        '1 Jumbo Pizza with 4 toppings',
        '10 Hot Wings'
      ],
      price: 40.99
    },
    {
      number: 5,
      items: [
        '1 Jumbo Pizza with 4 toppings',
        '1 Small Garlic Fingers',
        '2 Litre Drink'
      ],
      price: 40.99
    }
  ];

  const pizzaSpecials: PizzaSpecial[] = [
    { name: '2 Small Pizzas (cheese+2 toppings)', price: 28.99 },
    { name: '2 Medium Pizzas (cheese+2 toppings)', price: 32.99 },
    { name: '2 Large Pizzas (cheese+2 toppings)', price: 38.99 },
    { name: '2 Jumbo Pizzas (cheese+1 topping)', price: 44.99 },
    { name: '2 Jumbo Pizzas (cheese+2 toppings)', price: 48.99 },
    { name: '2 Jumbo Pizzas (cheese+3 toppings)', price: 54.99 },
    { name: 'Slice of Pizza', price: 6.31 },
    { name: 'Slice and a Drink', price: 8.25 }
  ];

  const singlePizzaSpecials: PizzaSpecial[] = [
    { name: 'Small (cheese and 1 topping)', price: 13.99 },
    { name: 'Medium (cheese and 1 topping)', price: 15.99 },
    { name: 'Large (cheese and 1 topping)', price: 19.99 },
    { name: 'Jumbo (cheese and 1 topping)', price: 23.99 }
  ];

  const appetizers: CategoryItem[] = [
    { 
      name: 'Lasagna and Garlic Fingers',
      items: [
        { name: 'Homemade Lasagna (includes garlic bread)', price: 13.99 },
        { name: 'Garlic Fingers - Small (10")', description: 'with cheese and marinara sauce', price: 9.99 },
        { name: 'Garlic Fingers - Medium (12")', description: 'with cheese and marinara sauce', price: 12.99 },
        { name: 'Garlic Fingers - Large (14")', description: 'with cheese and marinara sauce', price: 15.99 },
        { name: 'Garlic Fingers - Jumbo (17")', description: 'with cheese and marinara sauce', price: 19.99 },
        { name: 'Honey Garlic Fingers', description: 'Same prices as regular garlic fingers', note: 'Honey Extra: Small $1.75, Medium $3.50, Large $3.25, Jumbo $4.00' }
      ]
    },
    {
      name: 'Chicken',
      items: [
        { name: 'Chicken Fingers', description: 'with fries', price: 12.99 },
        { name: 'Chicken Nuggets', description: 'with fries', price: 10.99 },
        { name: 'Wings', description: 'mild, medium, hot or honey garlic', note: '1lb/$4.99, 2lb/$27.99, 3lb/$40.99' },
        { name: 'Chicken Wrap', description: 'Marinated breast chunks on a pita with tomatoes, onions, lettuce, green pepper, green and black olives, hot banana peppers, jalapeno peppers, pineapple, and feta cheese', price: 9.99 },
        { name: 'Chicken Wrap with fries', price: 13.99 }
      ]
    },
    {
      name: 'Fish',
      items: [
        { name: '1 Piece Fish with Fries', price: 10.99 },
        { name: 'Fish Snack (2 pieces) with Fries', price: 15.99 },
        { name: 'Fish Dinner (3 pieces) with Fries', price: 21.99 },
        { name: 'Fish Deluxe (5 pieces) with Fries', price: 34.99 },
        { name: 'Extra fish piece', price: 3.99 }
      ]
    },
    {
      name: 'Pizza Crust Dippers',
      items: [
        { name: 'Tangy sauces to dip your crust in', price: 1.52 },
        { name: 'Sauces: Original pizza sauce, donair sauce, spicy buffalo, creamy garlic, ranch, cheddar chipotle, tzatziki sauce' }
      ]
    }
  ];

  const sidesAndMore: CategoryItem[] = [
    {
      name: 'Donairs',
      items: [
        { name: 'Greek Style Donair', description: 'sweet sauce or Greek sauce', price: 9.99 },
        { name: 'Donair Deluxe', description: 'includes fries', price: 13.99 }
      ]
    },
    {
      name: 'Fries',
      items: [
        { name: 'French Fries - Small', price: 4.99 },
        { name: 'French Fries - Medium', price: 5.99 },
        { name: 'French Fries - Large', price: 7.99 },
        { name: 'Chips Deluxe - Small', description: 'includes dressing and gravy', price: 6.99 },
        { name: 'Chips Deluxe - Large', description: 'includes dressing and gravy', price: 8.99 },
        { name: 'Poutine - Small', price: 7.99 },
        { name: 'Poutine - Large', price: 9.99 },
        { name: 'Venice Poutine Deluxe', description: 'large fries, ground beef, fried onions, gravy and cheese', price: 10.99 }
      ]
    },
    {
      name: 'Salads',
      items: [
        { name: 'Caesar Salad - Small', description: 'with garlic bread', price: 6.99 },
        { name: 'Caesar Salad - Large', description: 'with garlic bread', price: 9.99 },
        { name: 'Greek Salad - Small', price: 7.99 },
        { name: 'Greek Salad - Large', price: 10.99 }
      ]
    },
    {
      name: 'Side Orders',
      items: [
        { name: 'Gravy, dressing', price: 2.50 },
        { name: 'Onion rings', price: 7.99 }
      ]
    },
    {
      name: 'New Products',
      items: [
        { name: 'Gluten Free Pizza 11" + Cauliflower Crust 11"', description: 'cheese+4 toppings', price: 22.99 },
        { name: 'Mozza Sticks', description: '7 pc. + dip', price: 8.99 },
        { name: 'Garlic Fingers', price: 17.99 }
      ]
    }
  ];

  const toppings = [
    'Cheese', 'Pepperoni', 'Salami', 'Bacon', 'Ground Beef', 'Italian Sausage', 
    'Chicken', 'Ham', 'Donair Meat', 'Fresh Mushrooms', 'Green Pepper', 'Onion',
    'Tomato', 'Pineapple', 'Black Olives', 'Green Olives', 'Banana Pepper', 
    'Spinach', 'Anchovies', 'Feta Cheese'
  ];

  const renderActiveSection = () => {
    switch (activeCategory) {
      case 'pizza':
        return (
          <div className="space-y-10">
            <section>
              <h3 className="text-2xl font-bold mb-6 text-red-800">Build Your Own Pizza</h3>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
                  <thead className="bg-red-700 text-white">
                    <tr>
                      <th className="py-3 px-4 text-left">Size</th>
                      <th className="py-3 px-4 text-left">Dimensions</th>
                      <th className="py-3 px-4 text-left">Slices</th>
                      <th className="py-3 px-4 text-left">Price</th>
                      <th className="py-3 px-4 text-left">Extra Topping</th>
                      <th className="py-3 px-4 text-left">Stuffed Crust</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {pizzaSizes.map((pizza, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="py-3 px-4 font-medium text-gray-900">{pizza.size}</td>
                        <td className="py-3 px-4 text-gray-900">{pizza.inches}</td>
                        <td className="py-3 px-4 text-gray-900">{pizza.slices}</td>
                        <td className="py-3 px-4 font-semibold text-gray-900">${pizza.price.toFixed(2)}</td>
                        <td className="py-3 px-4 text-gray-900">${pizza.extraTopping.toFixed(2)}</td>
                        <td className="py-3 px-4 text-gray-900">${pizza.stuffedCrust.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                <h4 className="text-lg font-semibold mb-2 text-gray-900">Available Toppings</h4>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {toppings.map((topping, index) => (
                    <span key={index} className="text-gray-900">• {topping}</span>
                  ))}
                </div>
              </div>
            </section>
            
            <section>
              <h3 className="text-2xl font-bold mb-6 text-red-800">Pizza Specials</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-4 text-red-700">Multi-Pizza Deals</h4>
                  <ul className="space-y-3">
                    {pizzaSpecials.map((special, index) => (
                      <li key={index} className="flex justify-between border-b pb-2">
                        <span className="text-gray-900">{special.name}</span>
                        <span className="font-semibold text-gray-900">${special.price.toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-4 text-red-700">Single Pizza Special</h4>
                  <p className="mb-4 text-gray-900">Cheese and 1 topping</p>
                  <ul className="space-y-3">
                    {singlePizzaSpecials.map((special, index) => (
                      <li key={index} className="flex justify-between border-b pb-2">
                        <span className="text-gray-900">{special.name}</span>
                        <span className="font-semibold text-gray-900">${special.price.toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>
        );
        
      case 'favourites':
        return (
          <div>
            <h3 className="text-2xl font-bold mb-6 text-red-800">Venice Favourites</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {favouritePizzas.map((pizza, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-red-700 text-white py-3 px-4">
                    <div className="flex justify-between items-center">
                      <h4 className="text-lg font-bold">{pizza.name}</h4>
                      {pizza.isNew && (
                        <span className="bg-yellow-400 text-red-900 px-2 py-1 rounded text-xs font-bold">NEW</span>
                      )}
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-900 mb-4">{pizza.description}</p>
                    <div className="grid grid-cols-4 gap-2 text-sm">
                      <div className="text-center">
                        <span className="block font-semibold text-gray-900">Small</span>
                        <span className="text-red-800 font-bold">${pizza.prices.small.toFixed(2)}</span>
                      </div>
                      <div className="text-center">
                        <span className="block font-semibold text-gray-900">Medium</span>
                        <span className="text-red-800 font-bold">${pizza.prices.medium.toFixed(2)}</span>
                      </div>
                      <div className="text-center">
                        <span className="block font-semibold text-gray-900">Large</span>
                        <span className="text-red-800 font-bold">${pizza.prices.large.toFixed(2)}</span>
                      </div>
                      <div className="text-center">
                        <span className="block font-semibold text-gray-900">Jumbo</span>
                        <span className="text-red-800 font-bold">${pizza.prices.jumbo.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 'combos':
        return (
          <div>
            <h3 className="text-2xl font-bold mb-6 text-red-800">Family Combo Specials</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {familyCombos.map((combo) => (
                <div key={combo.number} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-red-700 text-white py-3 px-4 flex items-center">
                    <div className="h-8 w-8 rounded-full bg-yellow-400 text-red-900 flex items-center justify-center font-bold mr-3">
                      #{combo.number}
                    </div>
                    <h4 className="text-lg font-bold">Family Combo #{combo.number}</h4>
                  </div>
                  <div className="p-4">
                    <ul className="mb-4 space-y-2">
                      {combo.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-red-700 mr-2">•</span>
                          <span className="text-gray-900">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-center bg-red-50 py-2 rounded-lg">
                      <span className="text-2xl font-bold text-red-800">${combo.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 'appetizers':
        return (
          <div className="space-y-12">
            {appetizers.map((menuCategory, i) => (
              <section key={i}>
                <h3 className="text-2xl font-bold mb-6 text-red-800">{menuCategory.name}</h3>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead className="bg-red-700 text-white">
                        <tr>
                          <th className="py-3 px-4 text-left">Item</th>
                          <th className="py-3 px-4 text-left">Description</th>
                          <th className="py-3 px-4 text-right">Price</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {menuCategory.items.map((item, j) => (
                          <tr key={j} className={j % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className="py-3 px-4 font-medium text-gray-900">{item.name}</td>
                            <td className="py-3 px-4 text-gray-900">
                              {item.description && <span>{item.description}</span>}
                              {item.note && (
                                <p className="text-sm text-gray-700 mt-1">{item.note}</p>
                              )}
                            </td>
                            <td className="py-3 px-4 text-right font-semibold text-gray-900">
                              {item.price ? `$${item.price.toFixed(2)}` : ''}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            ))}
          </div>
        );
        
      case 'sides':
        return (
          <div className="space-y-12">
            {sidesAndMore.map((menuCategory, i) => (
              <section key={i}>
                <h3 className="text-2xl font-bold mb-6 text-red-800">{menuCategory.name}</h3>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead className="bg-red-700 text-white">
                        <tr>
                          <th className="py-3 px-4 text-left">Item</th>
                          <th className="py-3 px-4 text-left">Description</th>
                          <th className="py-3 px-4 text-right">Price</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {menuCategory.items.map((item, j) => (
                          <tr key={j} className={j % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className="py-3 px-4 font-medium text-gray-900">{item.name}</td>
                            <td className="py-3 px-4 text-gray-900">
                              {item.description && <span>{item.description}</span>}
                              {item.note && (
                                <p className="text-sm text-gray-700 mt-1">{item.note}</p>
                              )}
                            </td>
                            <td className="py-3 px-4 text-right font-semibold text-gray-900">
                              {item.price ? `$${item.price.toFixed(2)}` : ''}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            ))}
          </div>
        );
        
      default:
        return <div>Select a category to view our menu</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-red-800 to-red-700 text-white pt-28 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Handcrafted pizzas and Italian favorites made with the freshest ingredients
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Menu Navigation */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 min-w-max pb-2">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === category.id
                    ? "bg-red-700 text-white"
                    : "bg-white text-gray-800 hover:bg-gray-100"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Active Menu Section */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="pb-12"
        >
          {renderActiveSection()}
        </motion.div>
      </div>
    </div>
  );
};

export default MenuPage;