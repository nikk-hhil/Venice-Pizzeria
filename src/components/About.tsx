const About = () => {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Image placeholder - replace with actual image later */}
            <div className="w-full md:w-1/2 h-64 md:h-96 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Restaurant Image</span>
            </div>
            
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-red-700">Our Story</h2>
              <p className="mb-4 text-gray-700">
                Welcome to Venice Pizzeria, where we bring the authentic flavors of Italy to your neighborhood. 
                Our passion for traditional pizza-making techniques and quality ingredients has made us a local favorite since 2010.
              </p>
              <p className="mb-4 text-gray-700">
                Every pizza is handcrafted with our signature dough, made fresh daily, and topped with locally-sourced ingredients. 
                Our wood-fired oven gives each pizza that perfect crispy-yet-chewy crust that keeps our customers coming back.
              </p>
              <p className="text-gray-700">
                Whether you're dining in our warm, family-friendly atmosphere or ordering for delivery, 
                we promise an authentic Italian experience with every bite.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;