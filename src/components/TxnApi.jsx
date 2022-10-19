import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const TxnApi = () => {
  const [txn, setTxn] = useState([]);
  const [walletAddress, setWalletAddress] = useState("useraddy");
  const api_key = process.env.REACT_APP_API_KEY;
  let url = `https://api.helius.xyz/v0/addresses/${walletAddress}/transactions?api-key=${api_key}`;

  const parseTransactions = async () => {
    const { data } = await axios.get(url);
    let list = data;
    list = list.map((item) => {
      console.log(list);
      const description = item.description;
      const date = new Date(item.timestamp * 1000);
      const txnInfo = {
        descr: description,
        txnDate: date,
      };

      return txnInfo;
    });
    setTxn(list);
  };

  useEffect(() => {
    parseTransactions();
  }, []);

  return (
    <div className="text-white">
      <div className="container flex justify-center md:ml-20">
        <div className="search-container md:ml-10">
          <div className="search-card pl-1 rounded-md flex justify-center">
            <input
              className="bg-black"
              type="text"
              placeholder="Enter a wallet address..."
              onChange={(e) => {
                e.preventDefault();
                setWalletAddress(e.target.value);
              }}
            />
            <button
              className="ml-3 bg-gradient-to-r from-black to-green-600 rounded  p-1"
              type="button"
              onClick={() => parseTransactions()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <ol className="bg-black pt-4 text-xs md:text-lg">
          {txn &&
            txn
              .filter((item) => item.descr !== "")
              .map((item) => (
                <li className="text-white bg-gradient-to-r from-green-700 to bg-black">
                  <div className="">
                    <h4 className="md:text-center">{item.descr}</h4>
                  </div>
                  <h5 className="text-xs md:text-medium">
                    {" "}
                    {`${item.txnDate.getMonth()}/${item.txnDate.getDay()}/${item.txnDate.getFullYear()}`}
                  </h5>
                </li>
              ))}
        </ol>
      </div>
      <div className="flex justify-center py-5">
        {txn.length <= 0 && (
          <h1 className="pb-6">Let's get some transactions....</h1>
        )}
      </div>
    </div>
  );
};

export default TxnApi;
