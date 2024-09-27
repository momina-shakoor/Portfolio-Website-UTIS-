import React from "react";

const packages = [
  {
    title: "CLOUD VPS XS",
    price: "Price: X.XX PKR",
    vcpu: "2 vCPU Cores",
    ram: "4 GB RAM",
    storage: "35 GB NVMe (or 100 GB SSD)",
    snapshots: "2 Snapshots",
  },
  {
    title: "CLOUD VPS S",
    price: "Price: X.XX PKR",
    vcpu: "4 vCPU Cores",
    ram: "8 GB RAM",
    storage: "50 GB NVMe (or 200 GB SSD)",
    snapshots: "4 Snapshots",
  },
  {
    title: "CLOUD VPS M",
    price: "Price: X.XX PKR",
    vcpu: "6 vCPU Cores",
    ram: "16 GB RAM",
    storage: "100 GB NVMe (or 400 GB SSD)",
    snapshots: "6 Snapshots",
  },
  {
    title: "CLOUD VPS L",
    price: "Price: X.XX PKR",
    vcpu: "8 vCPU Cores",
    ram: "30 GB RAM",
    storage: "200 GB NVMe (or 800 GB SSD)",
    snapshots: "8 Snapshots",
  },
  {
    title: "CLOUD VPS XL",
    price: "Price: X.XX PKR",
    vcpu: "10 vCPU Cores",
    ram: "60 GB RAM",
    storage: "400 GB NVMe (or 1.6 TB SSD)",
    snapshots: "10 Snapshots",
  },
];

const Packages = () => {
  return (
    <div className="p-4 lg:p-8 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">
        Cloud VPS Packages:
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-gray-100 border border-gray-300 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-4 text-center text-blue-600">
              {pkg.title}
            </h3>
            <p className="text-lg font-medium mb-2 text-center">{pkg.price}</p>
            <ul className="text-base text-gray-700 mb-4">
              <li>{pkg.vcpu}</li>
              <li>{pkg.ram}</li>
              <li>{pkg.storage}</li>
              <li>{pkg.snapshots}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
