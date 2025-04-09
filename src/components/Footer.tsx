const Footer = () => {
    return (
      <footer className="bg-red-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Location & Hours */}
            <div>
              <h3 className="text-xl font-bold mb-4">Visit Us</h3>
              <p className="mb-2">81 Military Road</p>
              <p className="mb-2">St. John's, NL A1C-2C8</p>
              <div className="mt-4">
                <h4 className="font-bold mb-1">Hours</h4>
                <p>Monday - Wednesday: 11am - 11pm</p>
                <p>Thursday: 11am - 12pm</p>
                <p>Friday and Saturday: 11am - 2am</p>
                <p>Sunday: 11am - 12am</p>
              </div>
            </div>
  
            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="mb-2">Phone: (123) 456-7890</p>
              <p className="mb-2">Email: info@venicepizzeria.com</p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/menu" className="hover:text-yellow-300 transition">
                    Our Menu
                  </a>
                </li>
                <li>
                  <a href="/order" className="hover:text-yellow-300 transition">
                    Order Online
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-yellow-300 transition">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
  
          <div className="border-t border-red-700 mt-8 pt-4 text-center">
            <p>© {new Date().getFullYear()} Venice Pizzeria. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;