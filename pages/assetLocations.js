import { Fragment, useState } from "react";

import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";

import Footer from "../components/Footer";

export default function FetchassetLocations(props) {
  const [assetLocations, setAssetLocations] = useState(props.assetLocations);

  async function fetchAssetLocationsData() {
    console.log(`Fetching AssetLocations`);

    const req = `/api/assetLocations`;
    const response = await fetch(req);
    const data = await response.json(response);
    const res = await data;

    setAssetLocations(data.assetLocations);
    return res;
  }

  const clickHandler = () => {
    fetchAssetLocationsData();
  };

  return (
    <Fragment>
      <TopBar></TopBar>
      <div className="flex">
        <SideBar></SideBar>
        <div className="w-3/4">
          <h1 className="text-3xl text-green-500 font-bold">Asset Names</h1>
          <button
            onClick={clickHandler}
            className="bg-blue-500 hover:bg-blue-700 text-sm text-white font-bold py-1 px-1 border border-blue-700 rounded w-1/4"
          >
            Get Asset Locations
          </button>
          {assetLocations === undefined ? (
            <div></div>
          ) : (
            <ul>
              {assetLocations.map(function (d, idx) {
                return <li key={idx}>{d.name}</li>;
              })}
            </ul>
          )}
        </div>
      </div>
      <Footer></Footer>
    </Fragment>
  );
}
