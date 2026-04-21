import React from "react";

import transactions from "../assets/transactions";

import { CirclePlus, ListFilter } from "lucide-react";
// import {transactions} from '../assets/transactions'

const Expenses = () => {
  return (
    <>
      <div className="shadow-sm border border-[#a376a2] rounded">
        <div className="flex items-center justify-between pl-3 pr-4 py-2">
          <h2 className="m-0 text-[#ddc3c3]">Expenses</h2>
          <div className="flex gap-3">
            <span className="text-white/50 cursor-pointer p-2 border rounded-lg flex items-center ">
              <ListFilter className="h-[18px]" />
            </span>
            <span className="text-white/50 cursor-pointer p-2 border rounded-lg flex items-center">
              <CirclePlus className="h-[18px]" />
            </span>
            {/* <button className="flex items-center gap-1 add-expense-button px-4 py-1 bg-[#A376A2]">
              <CirclePlus /> Filter
            </button>
            <button className="flex items-center gap-1 add-expense-button px-4 py-1 bg-[#f7d2f7]">
              <CirclePlus /> Add
            </button> */}
          </div>
        </div>
        {/* <div className="rounded-lg overflow-hidden border border-gray-200/10 mx-4 mb-4"> */}
        <table className="border-separate border-spacing-0 w-full text-sm table-fixed">
          <thead className="text-left bg-[#f7d2f7] text-[#3a1a3a] block w-full">
            <tr className="flex w-full">
              <th className="px-3 py-2 flex-[2]">Transaction</th>
              <th className="px-3 py-2 flex-1">Category</th>
              <th className="px-3 py-2 flex-1">Type</th>
              <th className="px-3 py-2 flex-1">Date</th>
              <th className="px-3 py-2 flex-1 text-right">Amount</th>
            </tr>
          </thead>

          <tbody
            className="block overflow-y-auto text-[#f7d2f7]"
            style={{ maxHeight: "660px" }}
          >
            {transactions.map((txn) => (
              <tr
                key={txn.id}
                className="flex w-full hover:bg-[#fff2ff]/5 border-b border-white/5"
              >
                <td className="px-3 py-3 flex-[2] min-w-0">
                  <h3 className="font-semibold text-[#f7d2f7] truncate">
                    {txn.title}
                  </h3>
                  <p className="text-xs text-[#f7d2f7]/50 truncate">
                    {txn.notes}
                  </p>
                </td>
                <td className="px-3 py-3 flex-1 min-w-0 truncate self-center">
                  {txn.category}
                </td>
                <td className="px-3 py-3 flex-1 self-center text-xs">
                  {txn.type === "Income" ? (
                    <span className="rounded-lg px-3 py-1 bg-[#3f6b41] text-white whitespace-nowrap">
                      Income
                    </span>
                  ) : (
                    <span className="border border-[#f7d2f7]/30 rounded-lg px-3 py-1 whitespace-nowrap">
                      Expense
                    </span>
                  )}
                </td>
                <td className="px-3 py-3 flex-1 self-center text-[#f7d2f7]/70 text-xs">
                  {txn.date}
                </td>
                <td className="px-3 py-3 flex-1 self-center text-right">
                  ${txn.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* </div> */}
        {/* <div className="rounded-lg overflow-hidden border border-gray-200/9 mx-4 mb-4">
          <table className="border-separate border-spacing-0 w-full text-sm">
            <thead className="text-left bg-[#f7d2f7]">
              <tr>
                <th className="px-2 py-1">Transaction</th>
                <th className="px-2 py-1">Category</th>
                <th className="px-2 py-1">Type</th>
                <th className="px-2 py-1">Date</th>
                <th className="px-2 py-1 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="text-[#f7d2f7]">
              {transactions.map(
                (txn: {
                  id: number;
                  title: string;
                  category: string;
                  amount: number;
                  notes: string;
                  type: string;
                  date: string;
                }) => (
                  <tr className="hover:bg-[#fff2ff]/3">
                    <td className="px-2 py-3">
                      <h3 className="font-semibold text-[#f7d2f7]">
                        {txn.title}
                      </h3>
                      <p className="text-xs text-[#f7d2f7]/50 ">{txn.notes}</p>
                    </td>
                    <td className="px-2 py-3">{txn.category}</td>
                    <td className="px-2 py-3 text-xs">
                      {txn.type == "income" ? (
                        <span className="rounded-lg px-3 py-1 bg-[#3f6b41] text-white">
                          Income
                        </span>
                      ) : (
                        <span className="border rounded-lg px-3 py-1">
                          Expense
                        </span>
                      )}
                    </td>
                    <td className="px-2 py-3">{txn.date}</td>
                    <td className="px-2 py-3 text-right">{txn.amount}</td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div> */}
        {/* <div className="expenses-list">
          {transactions.map(
            (txn: {
              id: number;
              title: string;
              category: string;
              amount: number;
              notes: string;
              type: string;
              date: string;
            }) => (
              <div key={txn.id} className="flex justify-between p-4 ">
                <div>
                  <h3 className="font-semibold text-[#f7d2f7]">{txn.title}</h3>
                  <p className="text-xs text-gray-400 ">{txn.notes}</p>
                </div>
                <div className="text-end right-0">
                  <div
                    className={`flex items-center font-bold ${txn.amount < 0 ? "text-red-500" : "text-[#f7d2f7]"}`}
                  >
                    {txn.amount < 0
                      ? `-$${Math.abs(txn.amount)}`
                      : `$${txn.amount}`}
                  </div>
                  <div className="text-xs text-[#f7d2f7]">{txn.date}</div>
                </div>
              </div>
            ),
          )}
        </div> */}
      </div>
    </>
  );
};

export default Expenses;
