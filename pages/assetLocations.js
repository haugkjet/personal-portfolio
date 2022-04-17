import { Fragment, useState, useEffect } from "react";

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

    console.log(data.assetLocations);
    return res;
  }

  useEffect(() => {
    // Update the document title using the browser API
    fetchAssetLocationsData();
  }, []);

  return (
    <Fragment>
      <TopBar></TopBar>
      <div className="flex">
        <SideBar></SideBar>
        <div className="w-3/4">
          <h1 className="text-3xl text-green-500 font-bold">Asset Names</h1>

          {assetLocations === undefined ? (
            <div></div>
          ) : (
            <div>
              {assetLocations.map((assetLocations) => (
                <div key="_id">{assetLocations.name}</div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer></Footer>
    </Fragment>
  );
}
