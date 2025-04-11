import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-red-800 to-red-700 text-white pt-28 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you!
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          {/* Two Column Layout */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2">
              {/* Left Column - Contact Info */}
              <div className="bg-red-700 text-white p-8">
                <h2 className="text-2xl font-bold mb-6 border-b border-red-500 pb-2">Restaurant Information</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold mb-2">Address</h3>
                    <p>
                      81 Military Road<br />
                      St. John's, NL A1C-2C8
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold mb-2">Hours of Operation</h3>
                    <div className="space-y-1">
                      <p>Monday - Wednesday: <span className="font-semibold">11am - 11pm</span></p>
                      <p>Thursday: <span className="font-semibold">11am - 12pm</span></p>
                      <p>Friday and Saturday: <span className="font-semibold">11am - 2am</span></p>
                      <p>Sunday: <span className="font-semibold">11am - 12am</span></p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold mb-2">Contact</h3>
                    <div className="space-y-1">
                      <p>
                        <span className="font-medium">Phone:</span>{" "}
                        <a href="tel:+11234567890" className="text-yellow-300 hover:underline font-semibold">
                          (123) 456-7890
                        </a>
                      </p>
                      <p>
                        <span className="font-medium">Email:</span>{" "}
                        <a href="mailto:info@venicepizzeria.com" className="text-yellow-300 hover:underline font-semibold">
                          info@venicepizzeria.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold mb-2">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                        Facebook
                      </a>
                      <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                        Instagram
                      </a>
                      <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                        Twitter
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Contact Form */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-red-800 mb-6 border-b border-gray-200 pb-2">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
          
          {/* Map Section */}
          <div className="mt-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-red-800 mb-6">Find Us</h2>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.027056942474!2d-52.70854738823908!3d47.57029399439488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0ca3c47db9ba5d%3A0xd6d290836bfe1e4e!2s81%20Military%20Rd%2C%20St.%20John&#39;s%2C%20NL%20A1C%202C8%2C%20Canada!5e0!3m2!1sen!2sus!4v1712784159782!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            
            {/* Call to Action */}
            <div className="mt-8 p-6 bg-red-50 rounded-lg shadow-md border-l-4 border-red-700">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-red-800 mb-2">Come Visit Our Restaurant</h3>
                  <p className="text-gray-700">Experience the welcoming atmosphere and delicious food in person!</p>
                </div>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=81+Military+Road+St.+John's+NL+A1C-2C8+Canada" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 md:mt-0 inline-block bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-full transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}