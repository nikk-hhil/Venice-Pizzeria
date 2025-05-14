const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-900 to-red-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Location & Hours */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 border-b border-red-600 pb-2 inline-block">Visit Us</h3>
            <div className="font-manrope">
              <p className="mb-2 transition-all duration-300 hover:translate-x-1">81 Military Road</p>
              <p className="mb-2 transition-all duration-300 hover:translate-x-1">St. John&apos;s, NL A1C-2C8</p>
              <div className="mt-4">
                <h4 className="font-bold mb-1 text-yellow-300">Hours</h4>
                <p className="text-sm text-gray-200">Monday - Wednesday: <span className="text-white font-semibold">11am - 11pm</span></p>
                <p className="text-sm text-gray-200">Thursday: <span className="text-white font-semibold">11am - 12pm</span></p>
                <p className="text-sm text-gray-200">Friday and Saturday: <span className="text-white font-semibold">11am - 2am</span></p>
                <p className="text-sm text-gray-200">Sunday: <span className="text-white font-semibold">11am - 12am</span></p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 border-b border-red-600 pb-2 inline-block">Contact</h3>
            <div className="font-manrope">
              <p className="mb-2 flex items-center transition-all duration-300 hover:translate-x-1">
                <svg className="w-4 h-4 mr-2 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>(123) 456-7890</span>
              </p>
              <p className="mb-2 flex items-center transition-all duration-300 hover:translate-x-1">
                <svg className="w-4 h-4 mr-2 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>info@venicepizzeria.com</span>
              </p>
              <div className="flex mt-6 space-x-4">
                <a href="#" className="h-10 w-10 rounded-full bg-red-600 flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-red-600 flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-red-600 flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 border-b border-red-600 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3 font-manrope">
              <li>
                <a href="/menu" className="flex items-center transition-all duration-300 hover:translate-x-1 hover:text-yellow-300">
                  <svg className="w-4 h-4 mr-2 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Our Menu
                </a>
              </li>
              <li>
                <a href="/order" className="flex items-center transition-all duration-300 hover:translate-x-1 hover:text-yellow-300">
                  <svg className="w-4 h-4 mr-2 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Order Online
                </a>
              </li>
              <li>
                <a href="/contact" className="flex items-center transition-all duration-300 hover:translate-x-1 hover:text-yellow-300">
                  <svg className="w-4 h-4 mr-2 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Contact Us
                </a>
              </li>
            </ul>
            
            <div className="mt-6 pt-6 border-t border-red-700">
              <a href="/order" className="bg-yellow-500 hover:bg-yellow-400 text-red-900 font-bold py-2 px-4 rounded-full inline-block transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                Order Now
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-red-700 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-300 font-manrope">© {new Date().getFullYear()} Venice Pizzeria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;