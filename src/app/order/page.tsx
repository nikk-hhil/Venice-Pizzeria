import OrderOptions from "@/components/OrderOptions";

export default function OrderPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-red-700 text-white pt-28 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Order Online</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Enjoy our delicious pizza delivered right to your door
          </p>
        </div>
      </div>
      
      <OrderOptions />
    </div>
  );
}