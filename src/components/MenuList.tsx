"use client";

import { useState } from 'react';

// Define types for our menu items and data structure
type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  isPopular?: boolean;
};

type MenuCategories = {
  pizzas: MenuItem[];
  appetizers: MenuItem[];
  desserts: MenuItem[];
  drinks: MenuItem[];
};

// Same menu data but now with proper typing
const menuData: MenuCategories = {
  pizzas: [
    { id: 1, name: "Margherita", description: "Tomato sauce, fresh mozzarella, basil", price: "$14.99", isPopular: true },
    { id: 2, name: "Pepperoni", description: "Tomato sauce, mozzarella, pepperoni", price: "$16.99", isPopular: true },
    { id: 3, name: "Quattro Formaggi", description: "Mozzarella, gorgonzola, fontina, parmesan", price: "$18.99" },
    { id: 4, name: "Vegetarian", description: "Tomato sauce, mozzarella, bell peppers, mushrooms, onions, olives", price: "$17.99" },
    { id: 5, name: "Hawaiian", description: "Tomato sauce, mozzarella, ham, pineapple", price: "$16.99" },
    { id: 6, name: "Supreme", description: "Tomato sauce, mozzarella, pepperoni, sausage, bell peppers, onions, olives", price: "$19.99" },
  ],
  appetizers: [
    { id: 7, name: "Garlic Bread", description: "Toasted Italian bread with garlic butter", price: "$5.99" },
    { id: 8, name: "Bruschetta", description: "Toasted bread with tomatoes, garlic, and basil", price: "$7.99" },
    { id: 9, name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, and basil with balsamic glaze", price: "$9.99" },
  ],
  desserts: [
    { id: 10, name: "Tiramisu", description: "Classic Italian dessert with espresso and mascarpone", price: "$7.99" },
    { id: 11, name: "Cannoli", description: "Crispy pastry shells filled with sweet ricotta cream", price: "$6.99" },
  ],
  drinks: [
    { id: 12, name: "Soft Drinks", description: "Coke, Diet Coke, Sprite, Dr. Pepper", price: "$2.99" },
    { id: 13, name: "Italian Soda", description: "Various flavors available", price: "$3.99" },
    { id: 14, name: "San Pellegrino", description: "Sparkling mineral water", price: "$3.50" },
  ],
};

// Define the valid category keys
type CategoryKey = keyof MenuCategories;

const MenuList = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("pizzas");

  const categories = [
    { id: "pizzas" as CategoryKey, name: "Pizzas" },
    { id: "appetizers" as CategoryKey, name: "Appetizers" },
    { id: "desserts" as CategoryKey, name: "Desserts" },
    { id: "drinks" as CategoryKey, name: "Drinks" },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Category tabs */}
        <div className="flex overflow-x-auto pb-2 mb-8">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full whitespace-nowrap ${
                  activeCategory === category.id
                    ? "bg-red-700 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu items */}
        <div className="grid gap-6">
          {menuData[activeCategory].map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    {item.isPopular && (
                      <span className="ml-2 px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mt-1">{item.description}</p>
                </div>
                <span className="font-bold text-lg">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuList;