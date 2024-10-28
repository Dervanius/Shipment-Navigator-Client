import { useState } from "react";
import axios from "axios";
import {
  FaUserCircle,
  FaGift,
  FaBinoculars,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import Spinner from "./Spinner";

const ShipmentIdForm = () => {
  const [shipmentId, setShipmentId] = useState("");
  const [shipmentData, setShipmentData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setShipmentId(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setShipmentData(null);

    if (!shipmentId) {
      setError("Please enter a Shipment ID");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.get(
        `http://localhost:5000/shipments/id/${shipmentId}`
      );
      setShipmentData(response.data);
    } catch (err) {
      setError("Shipment not found.");
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
                Search Shipment by ID
              </h2>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Enter Shipment Id
                </label>
                <input
                  type="text"
                  placeholder="eg. 146282"
                  className="border rounded w-full py-2 px-3 mb-2"
                  value={shipmentId}
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
              <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                  <div className="flex flex-col">
                    <div className=" overflow-x-auto">
                      <div className="min-w-full inline-block align-middle">
                        <div className="border rounded-lg shadow overflow-hidden dark:border-neutral-700 dark:shadow-gray-900">
                          <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                            <thead className="bg-gray-50 dark:bg-neutral-700">
                              <tr>
                                <td className="text-red-700 text-right bg-gray-200 text-3xl col-span-2 py-2 px-4">
                                  {<FaGift />}
                                </td>
                                <td className="text-center uppercase font-medium text-gray-900 font-semibold bg-gray-200  border-b">
                                  Shipment Info
                                </td>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                              <tr>
                                <td className="w-1/3 px-6 py-3 text-xs text-white uppercase bg-red-700">
                                  Shipment Id:
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                  {shipmentData.id}
                                </td>
                              </tr>

                              <tr>
                                <td className="w-1/3 px-6 py-3 text-xs text-white uppercase bg-red-700">
                                  Tracking Number:
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                  {shipmentData.trackingNumber}
                                </td>
                              </tr>

                              <tr>
                                <td className="w-1/3 px-6 py-3 text-xs text-white uppercase bg-red-700">
                                  Barcode:
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                  {shipmentData.barcodes}
                                </td>
                              </tr>

                              <tr>
                                <td className="w-1/3 px-6 py-3 text-xs text-white uppercase bg-red-700">
                                  Additional Barcode:
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                  {!shipmentData.barcodes2 && "N/A"}
                                </td>
                              </tr>

                              <tr>
                                <td className="w-1/3 px-6 py-3 text-xs text-white uppercase bg-red-700">
                                  External No:
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                  {shipmentData.externalNumber}
                                </td>
                              </tr>

                              <tr>
                                <td className="w-1/3 px-6 py-3 text-xs text-white uppercase bg-red-700">
                                  Manifest:
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                  {shipmentData.manifestRb}
                                </td>
                              </tr>

                              <tr>
                                <td className="w-1/3 px-6 py-3 text-xs text-white uppercase bg-red-700">
                                  AWB:
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                  {shipmentData.awb}
                                </td>
                              </tr>

                              <tr>
                                <td className="w-1/3 px-6 py-3 text-xs text-white uppercase bg-red-700">
                                  Account No:
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                  {shipmentData.nalog}
                                </td>
                              </tr>

                              <tr>
                                <td className="w-1/3 px-6 py-3 text-xs text-white uppercase bg-red-700">
                                  Masterbox:
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                  {shipmentData.masterBox}
                                </td>
                              </tr>

                              <tr>
                                <td className="w-1/3 px-6 py-3 text-xs text-white uppercase bg-red-700">
                                  Value:
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                  {shipmentData.goodsValue + " RSD"}
                                </td>
                              </tr>

                              <tr>
                                <td className="w-1/3 px-6 py-3 text-xs text-white uppercase bg-red-700">
                                  Weight:
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                  {shipmentData.weight + " g"}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                      <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="border rounded-lg shadow overflow-hidden dark:border-neutral-700 dark:shadow-gray-900">
                          <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                            <thead className="bg-gray-50 dark:bg-neutral-700">
                              <tr>
                                <td className="text-red-700 text-right bg-gray-200 text-3xl col-span-2 py-2 px-4">
                                  {<FaUserCircle />}
                                </td>
                                <td className="text-center uppercase font-medium text-gray-900 font-semibold bg-gray-200  border-b">
                                  Customer Info
                                </td>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                              <tr>
                                <td className="w-1/3 px-6 py-3 text-xs text-white uppercase bg-red-700">
                                  Contact Name:
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                  {shipmentData.shipToContactName}
                                </td>
                              </tr>

                              <tr>
                                <td className="w-1/3 px-6 py-3 text-xs text-white uppercase bg-red-700">
                                  Street:
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                  {shipmentData.shipToStreet1}
                                </td>
                              </tr>

                              <tr>
                                <td className="w-1/3 px-6 py-3 text-xs text-white uppercase bg-red-700">
                                  Number:
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                  {shipmentData.shipToStreet2}
                                </td>
                              </tr>

                              <tr>
                                <td className="w-1/3 px-6 py-3 text-xs text-white uppercase bg-red-700">
                                  Additional info:
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                  {shipmentData.shipToStreet3}
                                </td>
                              </tr>

                              <tr>
                                <td className="w-1/3 px-6 py-3 text-xs text-white uppercase bg-red-700">
                                  City:
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                  {shipmentData.shipToCity}
                                </td>
                              </tr>

                              <tr>
                                <td className="w-1/3 px-6 py-3 text-xs text-white uppercase bg-red-700">
                                  Postal Code:
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                  {shipmentData.shipToPostalCode}
                                </td>
                              </tr>

                              <tr>
                                <td className="w-1/3 px-6 py-3 text-xs text-white uppercase bg-red-700">
                                  Confirmed Address:
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                  {shipmentData.badAddress ? (
                                    <FaExclamationCircle className="text-2xl text-red-600" />
                                  ) : (
                                    <FaCheckCircle className="text-2xl text-green-600" />
                                  )}
                                </td>
                              </tr>

                              <tr>
                                <td className="w-1/3 px-6 py-3 text-xs text-white uppercase bg-red-700">
                                  Confirmed City:
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                  {shipmentData.badCity ? (
                                    <FaExclamationCircle className="text-2xl text-red-600" />
                                  ) : (
                                    <FaCheckCircle className="text-2xl text-green-600" />
                                  )}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-4">
              <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                  <div className="flex flex-col">
                    <div className=" overflow-x-auto">
                      <div className="min-w-full inline-block align-middle">
                        <div className="border rounded-lg shadow overflow-hidden dark:border-neutral-700 dark:shadow-gray-900">
                          <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                            <thead className="bg-gray-50 dark:bg-neutral-700">
                              <tr>
                                <td className="text-red-700 text-right bg-gray-200 text-3xl col-span-2 py-2 px-4">
                                  {<FaBinoculars />}
                                </td>
                                <td className="text-center uppercase font-medium text-gray-900 font-semibold bg-gray-200  border-b">
                                  Transfera Status
                                </td>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                              {shipmentData.transferaStatuses.length == 0 && (
                                <tr>
                                  <td
                                    colspan="2"
                                    className="px-6 py-3 text-lg text-white text-center uppercase bg-red-700"
                                  >
                                    NO STATUS
                                  </td>
                                </tr>
                              )}
                              {shipmentData.transferaStatuses.map(
                                (transferaStatus, index) => (
                                  <tr key={index}>
                                    <td className="w-1/3 px-6 py-3 text-xs text-white uppercase bg-red-700">
                                      {transferaStatus.description}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                      {new Date(
                                        transferaStatus.eventDate
                                      ).toLocaleString("sr-RS", {
                                        hour12: false,
                                      })}
                                    </td>
                                  </tr>
                                )
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                      <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="border rounded-lg shadow overflow-hidden dark:border-neutral-700 dark:shadow-gray-900">
                          <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                            <thead className="bg-gray-50 dark:bg-neutral-700">
                              <tr>
                                <td className="text-red-700 text-right bg-gray-200 text-3xl col-span-2 py-2 px-4">
                                  {<FaBinoculars />}
                                </td>
                                <td className="text-center uppercase font-medium text-gray-900 font-semibold bg-gray-200  border-b">
                                  {shipmentData.lastMileCarrier} Status
                                </td>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                              {shipmentData.courierStatuses.length == 0 && (
                                <tr>
                                  <td
                                    colspan="2"
                                    className="px-6 py-3 text-lg text-white text-center uppercase bg-red-700"
                                  >
                                    NO STATUS
                                  </td>
                                </tr>
                              )}
                              {shipmentData.courierStatuses.map(
                                (courierStatus, index) => (
                                  <tr key={index}>
                                    <td className="w-1/3 px-6 py-3 text-xs text-white uppercase bg-red-700">
                                      {courierStatus.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                      {new Date(
                                        courierStatus.eventDate
                                      ).toLocaleString("sr-RS", {
                                        hour12: false,
                                      })}
                                    </td>
                                  </tr>
                                )
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </section>
    </>
  );
};
export default ShipmentIdForm;
