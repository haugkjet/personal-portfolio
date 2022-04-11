import { Fragment, useState } from "react";

import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

export default function FetchAssetNames(props) {
  const [assetNames, setAssetNames] = useState(props.assetNames);

  async function fetchAssetNameData() {
    console.log(`Fetching AssetNames`);

    const req = `/api/assetNames`;
    const response = await fetch(req);
    const data = await response.json(response);
    const res = await data;

    setAssetNames(data.assetNames);
    return res;
  }

  const clickHandler = () => {
    fetchAssetNameData();
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
            Get AssetNames
          </button>
          {assetNames === undefined ? (
            <div></div>
          ) : (
            <ul>
              {assetNames.map(function (d, idx) {
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
