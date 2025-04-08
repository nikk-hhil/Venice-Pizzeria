import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="py-16 bg-red-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Hungry? We Deliver!
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Enjoy our delicious pizzas from the comfort of your home. Order online for delivery or pickup.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/order"
            className="bg-white hover:bg-gray-100 text-red-700 font-bold py-3 px-8 rounded-full transition duration-300 text-center"
          >
            Order Online
          </Link>
          <Link
            href="tel:+11234567890"
            className="bg-transparent hover:bg-red-800 border-2 border-white font-bold py-3 px-8 rounded-full transition duration-300 text-center"
          >
            Call Us: (123) 456-7890
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;