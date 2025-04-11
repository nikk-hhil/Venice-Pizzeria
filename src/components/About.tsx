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
            <h2 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-red-700 to-red-900 bg-clip-text text-transparent tracking-tight transform hover:scale-105 transition-transform duration-300">Our Story</h2>
  
            <div className="space-y-5">
  <p className="mb-4 text-gray-800 text-lg font-manrope leading-relaxed hover:text-red-700 transition-colors duration-300">
    We are located in the heart of downtown St. John's and have been proudly serving customers <span className="font-semibold">since 1973</span>.
  </p>
  
  <p className="mb-4 text-gray-800 text-lg font-manrope leading-relaxed hover:text-red-700 transition-colors duration-300">
    Every pizza is handcrafted with our signature dough, made fresh daily, and topped with locally-sourced ingredients.
  </p>
  
  <p className="text-gray-800 text-lg font-manrope leading-relaxed hover:text-red-700 transition-colors duration-300">
    We promise to provide best service whether you're dining in our warm, family-friendly atmosphere or ordering for delivery.
  </p>
</div>
              </div>
            </div>
          </div>
      </section>
    );
  };
  
  export default About;