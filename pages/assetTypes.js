import { Fragment, useState } from "react";

import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

export default function fetchAssetTypes(props) {
  const [assetTypes, setAssetTypes] = useState(props.assetTypes);

  async function fetchAssetTypeData() {
    console.log(`Fetching AssetTypes`);

    const req = `/api/assetTypes`;
    const response = await fetch(req);
    const data = await response.json(response);
    const res = await data;

    setAssetTypes(data.assetTypes);
    return res;
  }

  const clickHandler = () => {
    fetchAssetTypeData();
  };
  return (
    <Fragment>
      <TopBar></TopBar>
      <div className="flex">
        <SideBar></SideBar>
        <div className="w-3/4">
          <h1 className="text-3xl text-green-500 font-bold">Asset Types</h1>
          <button
            onClick={clickHandler}
            className="bg-blue-500 hover:bg-blue-700 text-sm text-white font-bold py-1 px-1 border border-blue-700 rounded w-1/4"
          >
            Get AssetTypes
          </button>
          {/*<div>
            {assetTypes.map(function (d, idx) {
              return <li key={idx}>{d.name}</li>;
            })}
          </div>

          <div>{console.log(assetTypes)}</div>
        */}
        </div>
      </div>
      <Footer></Footer>
    </Fragment>
  );
}
