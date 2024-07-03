import React, { useEffect, useState } from "react";
import TableHeader from "../../components/common/TableHeader";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import Text from "../../Bhasini/Text";

const TourPackageTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [inventoryData, setInventoryData] = useState([
    {
      name: "Product 1",
      status: "Active",
      availableQuantity: 10,
      price: 200,
      discountPrice: 180,
      ean: "123456789",
      netWeight: "1kg",
      unit: "1",
    },
    {
      name: "Product 2",
      availableQuantity: 20,
      price: 300,
      discountPrice: 280,
      ean: "123456789",
      netWeight: "2kg",
      unit: "2",
      status: "Inactive",
    },
    {
      name: "Product 3",
      availableQuantity: 30,
      price: 400,
      discountPrice: 380,
      ean: "123456789",
      netWeight: "3kg",
      status: "Active",
      unit: "3",
    },
  ]);
  const [cabsBooking, setCabsBooking] = useState([]);

  useEffect(() => {}, [searchTerm]);

  const navigate = useNavigate();

  return (
    <div className="rounded-xl border border-stroke bg-[white] px-2 pt-6 pb-2 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-5 xl:pb-1 relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-md font-bold mb-0">
          <Text>Inventory Products Details</Text>
        </h2>
        <div className="flex">
          <button
            //   onClick={exportToExcel}
            style={styles.downloadButton}
          >
            <Text>Download Data</Text>
          </button>
        </div>
      </div>

      <div className="max-w-full overflow-x-auto">
        <table className="w-full h-auto table-auto">
          <thead>
            <tr className=" border-b border-t  border-[#CFD3D5] text-left ">
              <th className="py-4 text-sm font-bold text-black text-center">
                <Text>S.No.</Text>
              </th>
              <th className="py-4 text-sm font-bold text-black text-center">
                <Text>Satus</Text>
              </th>
              <th className="py-4 text-sm font-bold text-black text-center">
                <Text>Name</Text>
              </th>
              <th className="py-4 text-sm font-bold text-black text-center">
                <Text>Available Quantity</Text>
              </th>
              <th className="py-4 text-sm font-bold text-black text-center">
                <Text>Price</Text>
              </th>
              <th className="py-4 text-sm font-bold text-black text-center">
                <Text>Discount Price</Text>
              </th>
              <th className="py-4 text-sm font-bold text-black text-center">
                <Text>EAN / Barcode No.</Text>
              </th>
              <th className="py-4 text-sm font-bold text-black text-center">
                <Text>Net Weight</Text>
              </th>
              <th className="py-4 text-sm font-bold text-black text-center">
                <Text>Unit</Text>
              </th>
            </tr>
          </thead>

          <tbody>
            {inventoryData.map((item, key) => (
              <tr
                style={{
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                className="hover:bg-[#F1F2F4]"
                key={key}
                onClick={() => {}}
              >
                <td className="p-3">
                  <h5 className="text-[0.95rem] text-base text-[#6E7079] font-poppins text-center">
                    <Text>{key + 1}.</Text>
                  </h5>
                </td>
                <td
                  style={{
                    borderBottom: "1px solid #fff",
                    padding: "4px 0",
                    borderColor: "#fff",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#003406",
                      textAlign: "center",
                      backgroundColor:
                        item.status == "Active" ? "#c9ffc4" : "#ffdddd",
                      borderRadius: 5,
                      borderColor:
                        item.status == "Active" ? "#56ff50" : "#ff9494",
                      borderWidth: 1.5,
                      boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.15)",
                      paddingLeft: 5,
                      paddingRight: 5,
                    }}
                  >
                    <Text>{item.status}</Text>
                  </p>
                </td>
                <td>
                  <h5 className="text-[0.95rem] text-base text-[#6E7079] font-poppins text-center">
                    <Text>{item.name}</Text>
                  </h5>
                </td>
                <td>
                  <h5 className="text-[0.95rem] text-base text-[#6E7079] font-poppins text-center">
                    <Text>{item.availableQuantity}</Text>
                  </h5>
                </td>
                <td>
                  <h5 className="text-[0.95rem] text-base text-[#6E7079] font-poppins text-center">
                    <Text>₹{item.price}</Text>
                  </h5>
                </td>
                <td>
                  <h5 className="text-[0.95rem] text-base text-[#6E7079] font-poppins text-center">
                    <Text>₹{item.discountPrice}</Text>
                  </h5>
                </td>
                <td>
                  <h5 className="text-[0.95rem] text-base text-[#6E7079] font-poppins text-center">
                    <Text>{item.ean}</Text>
                  </h5>
                </td>
                <td>
                  <h5 className="text-[0.95rem] text-base text-[#6E7079] font-poppins text-center">
                    <Text>{item.netWeight}</Text>
                  </h5>
                </td>
                <td>
                  <h5 className="text-[0.95rem] text-base text-[#6E7079] font-poppins text-center">
                    <Text>{item.unit}</Text>
                  </h5>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TourPackageTable;

const styles = {
  downloadButton: {
    boxShadow: "inset 0px 1px 0px 0px #e184f3",
    background: "linear-gradient(to bottom, #c123de 5%, #a20dbd 100%)",
    backgroundColor: "#c123de",
    borderRadius: "6px",
    border: "1px solid #a511c0",
    display: "inline-block",
    cursor: "pointer",
    color: "#ffffff",
    fontSize: "15px",
    fontWeight: "bold",
    padding: "6px 24px",
    textDecoration: "none",
    textShadow: "0px 1px 0px #9b14b3",
    margin: "0 0 0 10px",
  },
};
