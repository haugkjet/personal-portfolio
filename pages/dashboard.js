import { Fragment } from "react";

import styles from "../styles/Home.module.css";
import PriceTracker from "../components/PriceTracker";

import PriceTrackerList from "../components/PriceTrackerList";

import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";

import Footer from "../components/Footer";

export default function dashboard() {
  async function fetchCryptoData() {
    console.log("Fetching crypto data");

    const response = await fetch(
      "https://api.coinbase.com/v2/prices/BTC-NOK/spot"
    );
    const data = await response.json(response);

    console.log(data);
    return data;
  }

  let mydata = fetchCryptoData();
  console.log(mydata);

  const pricesToTrack = [
    { ticker: "BTC", price: "25609.9", lastUpdate: new Date(2020, 2, 3) },
    { ticker: "ETH", price: "3609.9", lastUpdate: new Date(2020, 2, 3) },
    { ticker: "ADA", price: "100.9", lastUpdate: new Date(2020, 2, 3) },
    { ticker: "SOL", price: "229.9", lastUpdate: new Date(2020, 2, 3) },
  ];

  return (
    <Fragment>
      <TopBar></TopBar>
      <div className="flex">
        <SideBar></SideBar>
        <div className="w-3/4">
          <h1 className="text-3xl text-green-500 font-bold">Dashboard</h1>
          <PriceTrackerList></PriceTrackerList>
        </div>
      </div>
      <Footer></Footer>
    </Fragment>
  );
}
