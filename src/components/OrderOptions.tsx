import Link from 'next/link';

const OrderOptions = () => {
  // Example delivery platforms - replace with actual services you use
  const deliveryOptions = [
    {
      id: 1,
      name: "Direct Phone Order",
      description: "Call us directly to place your order for pickup or delivery",
      phoneNumber: "(123) 456-7890",
      icon: "📞",
      primaryColor: "bg-red-900",
      hoverColor: "bg-red-800"
    },
    {
      id: 2,
      name: "Skip the Dishes",
      description: "Order through UberEats for delivery",
      link: "https://www.skipthedishes.com/venice-pizzeria",
      icon: "🚗",
      primaryColor: "bg-orange-500",
      hoverColor: "bg-orange-600"
    },
    {
      id: 3,
      name: "DoorDash",
      description: "Get your pizza delivered via DoorDash",
      link: "https://www.doordash.com/store/venice-pizzeria-saint-john's-33442037/59468146/?event_type=autocomplete&pickup=false",
      icon: "🚗",
      primaryColor: "bg-red-600",
      hoverColor: "bg-red-700"
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-100 mb-4">Order Your Favorite Pizza</h2>
            <p className="text-gray-200">
              Choose your preferred ordering method below. We offer pickup and delivery options to best serve you.
            </p>
          </div>

          <div className="space-y-6">
            {deliveryOptions.map((option) => (
              <div key={option.id} className="rounded-lg shadow-md overflow-hidden bg-white hover:shadow-lg transition-shadow">
                {option.link ? (
                  <Link 
                    href={option.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className={`${option.primaryColor} hover:${option.hoverColor} text-white p-6 transition-colors`}>
                      <div className="flex items-start">
                        <span className="text-3xl mr-4">{option.icon}</span>
                        <div>
                          <h3 className="text-xl font-bold">{option.name}</h3>
                          <p className="text-white text-opacity-90">{option.description}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className={`${option.primaryColor} text-white p-6`}>
                    <div className="flex items-start">
                      <span className="text-3xl mr-4">{option.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold">{option.name}</h3>
                        <p className="text-white text-opacity-90">{option.description}</p>
                        <p className="font-bold mt-2">
                          <a href={`tel:${option.phoneNumber?.replace(/[^0-9]/g, '')}`} className="hover:underline">
                            {option.phoneNumber}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-gray-1200 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Delivery Information</h3>
            <p className="text-white-700 mb-4">
              Our delivery radius is approximately 5 miles from our restaurant. Delivery times typically range from 30-45 minutes depending on distance and current order volume.
            </p>
            <p className="text-white-700">
              For large orders or catering inquiries, please call us directly at (123) 456-7890.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderOptions;