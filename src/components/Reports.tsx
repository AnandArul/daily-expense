import React from "react";
import transactions from "../assets/transactions";

const reports = [
  {
    name: "Monthly Transactions",
    description: "All transactions for a selected month with full details",
    formats: ["Pdf", "CSV", "Excel"],
  },
  {
    name: "Category-wise Transactions",
    description: "All transactions grouped under specific category",
    formats: ["Pdf", "Excel"],
  },
  {
    name: "Date range report",
    description: "Transactions between any custom from and to date",
    formats: ["Pdf", "Excel"],
  },
  {
    name: "Expense only report",
    description: "Filtered list of expense transactions for a period",
    formats: ["Pdf", "CSV"],
  },
  {
    name: "Income only report",
    description: "Filtered list of income transactions for a period",
    formats: ["Pdf", "CSV"],
  },
  {
    name: "Overspending Alert",
    description: "Months where expenses exceeded total income",
    formats: ["Pdf"],
  },
  {
    name: "Annual summary report",
    description: "Month-wise totals + all transactions for the full year",
    formats: ["Pdf", "Excel"],
  },
];

const Reports = () => {
  return (
    <div className="h-full flex flex-col">
      <h2 className="text-2xl font-bold mb-4 text-[#ddc3c3] shrink-0">
        Reports
      </h2>
      <div className="grid grid-cols-4 gap-4">
        {reports.map((item, key) => (
          <div
            key={key}
            className="bg-white shadow-md rounded-md p-3 hover:shadow-lg transition cursor-pointer"
          >
            <h4 className="text-lg font-semibold mb-1 text-sm">{item.name}</h4>
            <p className="text-gray-600 text-sm text-[12px]">
              {item.description}
            </p>
            <div className="py-2">
              <hr className="border-[#a376a2]/50" />
            </div>
            <div className="mb-2">
              {item.formats.map((f, k) => (
                <span
                  key={k}
                  className="border mr-1 px-3 py-1 text-[10px] rounded-4xl"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
