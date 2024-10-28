import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import {
  FaUserCircle,
  FaGift,
  FaBinoculars,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

const ShipmentDetailsPage = () => {
  const { id } = useParams();
  const [shipment, setShipment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShipment = async () => {
      try {
        const res = await fetch(`http://localhost:5000/shipments/id/${id}`);
        const data = await res.json();
        console.log(data);
        setShipment(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchShipment();
  }, []);

  return loading ? (
    <Spinner />
  ) : (
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
                            {shipment.id}
                          </td>
                        </tr>
                        <tr>
                          <td className="w-1/3 px-6 py-3 text-xs text-white uppercase bg-red-700">
                            Tracking Number:
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                            {shipment.trackingNumber}
                          </td>
                        </tr>
                        <tr>
                          <td className="w-1/3 px-6 py-3 text-xs text-white uppercase bg-red-700">
                            Barcode:
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                            {shipment.barcodes}
                          </td>
                        </tr>
                        <tr>
                          <td className="w-1/3 px-6 py-3 text-xs text-white uppercase bg-red-700">
                            Additional Barcode:
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                            {!shipment.barcodes2 && "N/A"}
                          </td>
                        </tr>
                        <tr>
                          <td className="w-1/3 px-6 py-3 text-xs text-white uppercase bg-red-700">
                            External No:
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                            {shipment.externalNumber}
                          </td>
                        </tr>
                        <tr>
                          <td className="w-1/3 px-6 py-3 text-xs text-white uppercase bg-red-700">
                            Manifest:
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                            {shipment.manifestRb}
                          </td>
                        </tr>
                        <tr>
                          <td className="w-1/3 px-6 py-3 text-xs text-white uppercase bg-red-700">
                            AWB:
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                            {shipment.awb}
                          </td>
                        </tr>
                        <tr>
                          <td className="w-1/3 px-6 py-3 text-xs text-white uppercase bg-red-700">
                            Account No:
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                            {shipment.nalog}
                          </td>
                        </tr>
                        <tr>
                          <td className="w-1/3 px-6 py-3 text-xs text-white uppercase bg-red-700">
                            Masterbox:
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                            {shipment.masterBox}
                          </td>
                        </tr>
                        <tr>
                          <td className="w-1/3 px-6 py-3 text-xs text-white uppercase bg-red-700">
                            Value:
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                            {shipment.goodsValue + " RSD"}
                          </td>
                        </tr>
                        <tr>
                          <td className="w-1/3 px-6 py-3 text-xs text-white uppercase bg-red-700">
                            Weight:
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                            {shipment.weight + " g"}
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
                            {shipment.shipToContactName}
                          </td>
                        </tr>
                        <tr>
                          <td className="w-1/3 px-6 py-3 text-xs text-white uppercase bg-red-700">
                            Street:
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                            {shipment.shipToStreet1}
                          </td>
                        </tr>
                        <tr>
                          <td className="w-1/3 px-6 py-3 text-xs text-white uppercase bg-red-700">
                            Number:
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                            {shipment.shipToStreet2}
                          </td>
                        </tr>
                        <tr>
                          <td className="w-1/3 px-6 py-3 text-xs text-white uppercase bg-red-700">
                            Additional info:
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                            {shipment.shipToStreet3}
                          </td>
                        </tr>
                        <tr>
                          <td className="w-1/3 px-6 py-3 text-xs text-white uppercase bg-red-700">
                            City:
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                            {shipment.shipToCity}
                          </td>
                        </tr>
                        <tr>
                          <td className="w-1/3 px-6 py-3 text-xs text-white uppercase bg-red-700">
                            Postal Code:
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                            {shipment.shipToPostalCode}
                          </td>
                        </tr>
                        <tr>
                          <td className="w-1/3 px-6 py-3 text-xs text-white uppercase bg-red-700">
                            Confirmed Address:
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                            {shipment.badAddress ? (
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
                            {shipment.badCity ? (
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
                        {shipment.transferaStatuses.length == 0 && (
                          <tr>
                            <td
                              colspan="2"
                              className="px-6 py-3 text-lg text-white text-center uppercase bg-red-700"
                            >
                              NO STATUS
                            </td>
                          </tr>
                        )}
                        {shipment.transferaStatuses.map(
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
                            {shipment.lastMileCarrier} Status
                          </td>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                        {shipment.courierStatuses.length == 0 && (
                          <tr>
                            <td
                              colspan="2"
                              className="px-6 py-3 text-lg text-white text-center uppercase bg-red-700"
                            >
                              NO STATUS
                            </td>
                          </tr>
                        )}
                        {shipment.courierStatuses.map(
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
  );
};
export default ShipmentDetailsPage;
