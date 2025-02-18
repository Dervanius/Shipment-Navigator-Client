import { Link } from "react-router-dom";
import Card from "./Card";

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <h2 className="text-2xl font-bold">Search By Id</h2>
            <p className="mt-2 mb-4">Find the shipment using its Id number</p>
            <Link
              to="/searchById"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Search
            </Link>
          </Card>

          <Card bg="bg-red-100">
            <h2 className="text-2xl font-bold">Search By Barcode</h2>
            <p className="mt-2 mb-4">Find the shipment using its Barcode</p>
            <Link
              to="/searchByBarcode"
              className="inline-block bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600"
            >
              Search
            </Link>
          </Card>

          <Card bg="bg-red-500">
            <h2 className="text-2xl font-bold">
              Search By Alternative Barcode
            </h2>
            <p className="mt-2 mb-4">
              Find the shipment by Alternative Barcode, useful for foreign
              courier services shipments.
            </p>
            <Link
              to="/searchByAltBarcode"
              className="inline-block bg-red-100 text-dark rounded-lg px-4 py-2 hover:bg-red-600"
            >
              Search
            </Link>
          </Card>

          <Card bg="bg-gray-700">
            <h2 className="text-2xl font-bold text-white">
              Search By Tracking Number
            </h2>
            <p className="mt-2 mb-4 text-white">
              Find the shipment using its Tracking Number
            </p>
            <Link
              to="/searchByTrackingNo"
              className="inline-block bg-gray-600 text-white rounded-lg px-4 py-2 hover:bg-gray-100 hover:text-black"
            >
              Search
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default HomeCards;
