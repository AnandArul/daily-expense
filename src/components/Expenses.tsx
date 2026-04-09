import React from "react";

// import { transactions } from "../assets/transactions";
import transactions from "../assets/transactions";

import { CirclePlus } from "lucide-react";

const Expenses = () => {
  return (
    <>
      <div className="bg-[#A376A2] shadow-sm rounded">
        <div className="flex items-center justify-between border-b border-[#8D5F8C] p-4">
          <h2 className="m-0">Expenses</h2>
          <div className="flex gap-2">
            <button className="flex items-center gap-1 add-expense-button px-4 py-1">
              <CirclePlus /> Filter
            </button>
            <button className="flex items-center gap-1 add-expense-button px-4 py-1">
              <CirclePlus /> Add
            </button>
          </div>
        </div>
        <div className="expenses-list p-4">
          {transactions.map(
            (txn: {
              id: number;
              title: string;
              category: string;
              amount: number;
            }) => (
              <div
                key={txn.id}
                className="flex justify-between p-2 bg-gray-200 rounded"
              >
                <div>
                  <h3 className="font-semibold">{txn.title}</h3>
                  <p className="text-sm text-gray-600">{txn.category}</p>
                </div>
                <div
                  className={`font-bold ${txn.amount < 0 ? "text-red-500" : "text-green-500"}`}
                >
                  {txn.amount < 0
                    ? `-$${Math.abs(txn.amount)}`
                    : `$${txn.amount}`}
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </>
  );
};

export default Expenses;
