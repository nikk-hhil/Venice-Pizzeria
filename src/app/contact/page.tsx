import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-red-700 text-white pt-28 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you!
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactInfo />
          <ContactForm />
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-red-700 mb-6">Find Us</h2>
          {/* Google Maps placeholder - replace with actual Google Maps embed */}
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Google Map will be displayed here</span>
          </div>
        </div>
      </div>
    </div>
  );
}