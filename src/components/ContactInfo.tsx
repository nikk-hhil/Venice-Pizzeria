const ContactInfo = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold mb-6 text-red-800">Restaurant Information</h2>
  
  <div className="space-y-6">
    <div>
      <h3 className="text-lg font-bold mb-2 text-red-800">Address</h3>
      <p className="text-gray-800">
        81 Military Road<br />
        St. John&apos;s, NL A1B 2B6
      </p>
    </div>
    
    <div>
      <h3 className="text-lg font-bold mb-2 text-red-800">Hours of Operation</h3>
      <div className="space-y-1 text-gray-800">
        <p>Monday - Wednesday: <span className="font-semibold">11am - 11pm</span></p>
        <p>Thursday: <span className="font-semibold">11am - 12am</span></p>
        <p>Friday and Saturday: <span className="font-semibold">11am - 2am</span></p>
        <p>Sunday: <span className="font-semibold">11am - 12am</span></p>
      </div>
    </div>
    
    <div>
      <h3 className="text-lg font-bold mb-2 text-red-800">Contact</h3>
      <div className="space-y-1">
        <p className="text-gray-800">
          <span className="font-medium">Phone:</span>{" "}
          <a href="tel:+11234567890" className="text-red-800 hover:underline font-semibold">
            (123) 456-7890
          </a>
        </p>
        <p className="text-gray-800">
          <span className="font-medium">Email:</span>{" "}
          <a href="mailto:info@venicepizzeria.com" className="text-red-800 hover:underline font-semibold">
            info@venicepizzeria.com
          </a>
        </p>
      </div>
    </div>
    
    <div>
      <h3 className="text-lg font-bold mb-2 text-red-800">Follow Us</h3>
      <div className="flex space-x-4">
        <a href="#" className="text-red-800 hover:text-red-600 font-semibold">
          Facebook
        </a>
        <a href="#" className="text-red-800 hover:text-red-600 font-semibold">
          Instagram
        </a>
        <a href="#" className="text-red-800 hover:text-red-600 font-semibold">
          Twitter
        </a>
      </div>
    </div>
  </div>
</div>
    );
  };
  
  export default ContactInfo;