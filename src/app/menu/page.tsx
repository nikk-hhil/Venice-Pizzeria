import MenuList from "@/components/MenuList";

export default function MenuPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-red-700 text-white pt-28 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Handcrafted pizzas and Italian favorites made with the freshest ingredients
          </p>
        </div>
      </div>
      
      <MenuList />
    </div>
  );
}