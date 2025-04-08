const ContactInfo = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-red-700 mb-6">Restaurant Information</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-2">Address</h3>
            <p className="text-gray-700">
              123 Pizza Street<br />
              Your City, ST 12345
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-2">Hours of Operation</h3>
            <div className="space-y-1 text-gray-700">
              <p>Monday - Thursday: 11am - 10pm</p>
              <p>Friday - Saturday: 11am - 11pm</p>
              <p>Sunday: 12pm - 9pm</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-2">Contact</h3>
            <div className="space-y-1">
              <p className="text-gray-700">
                <span className="font-medium">Phone:</span>{" "}
                <a href="tel:+11234567890" className="text-red-700 hover:underline">
                  (123) 456-7890
                </a>
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Email:</span>{" "}
                <a href="mailto:info@venicepizzeria.com" className="text-red-700 hover:underline">
                  info@venicepizzeria.com
                </a>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-red-700 hover:text-red-800">
                Facebook
              </a>
              <a href="#" className="text-red-700 hover:text-red-800">
                Instagram
              </a>
              <a href="#" className="text-red-700 hover:text-red-800">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactInfo;