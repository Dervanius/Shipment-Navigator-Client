import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaInfoCircle } from "react-icons/fa";
import Spinner from "./Spinner";

const ShipmentManifestForm = () => {
  const [manifest, setManifest] = useState("");
  const [shipmentData, setShipmentData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setManifest(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setShipmentData(null);

    if (!manifest) {
      setError("Please enter a Manifest No");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.get(
        `http://localhost:5000/shipments/manifest/${manifest}`
      );
      setShipmentData(response.data);
    } catch (err) {
      setError("Manifest not found.");
    }
    setLoading(false);
  };

  return (
    <>
      <section>
        <div className="container m-auto max-w-2xl py-12">
          <div className="bg-gray-200 px-9 py-4 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <form onSubmit={handleFormSubmit}>
              <h2 className="text-3xl text-center font-semibold mb-6">
                Search Shipment by Manifest
              </h2>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Enter Manifest Number
                </label>
                <input
                  type="text"
                  placeholder="eg. 225"
                  className="border rounded w-full py-2 px-3 mb-2"
                  value={manifest}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <button
                  className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section>
        {error && (
          <p className="container m-auto max-w-2xl py-2 rounded-full text-red-500 shadow-xl text-xl font-semibold text-center bg-gray-200">
            {error}
          </p>
        )}
        {loading && <Spinner loading={loading} />}
        {shipmentData && !loading && (
          <>
            <section className="py-4">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-3/4 mx-auto text-sm text-left text-center text-red-100 dark:text-red-100">
                  <thead className="text-xs text-white uppercase bg-red-600 dark:text-white">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Id
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Barcode
                      </th>
                      <th scope="col" className="px-6 py-3">
                        External Number
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Courier
                      </th>
                      <th scope="col" className="px-6 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {shipmentData.map((item) => (
                      <tr
                        key={item.id}
                        className="bg-gray-200 border-b border-gray-400"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium font-semibold text-gray-800 whitespace-nowrap dark:text-blue-100"
                        >
                          {item.id}
                        </th>
                        <td className="px-6 py-4 text-gray-900 ">
                          {item.barcodes}
                        </td>
                        <td className="px-6 py-4 text-gray-900 ">
                          {item.externalNumber}
                        </td>
                        <td className="px-6 py-4 text-gray-900 ">
                          {item.statusName}
                        </td>
                        <td className="px-6 py-4 text-gray-900 ">
                          {item.lastMileCarrier}
                        </td>
                        <td className="px-6 py-4">
                          <Link to={`/${item.id}`}>
                            <button
                              type="button"
                              className="text-white bg-red-600 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-lg px-5 py-1.5 me-2  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                            >
                              <FaInfoCircle />
                            </button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        )}
      </section>
    </>
  );
};
export default ShipmentManifestForm;
