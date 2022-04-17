import { Fragment, useState, useEffect } from "react";

import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

export default function FetchAssetTypes(props) {
  const [assetTypes, setAssetTypes] = useState(props.assetTypes);

  async function fetchAssetTypeData() {
    const req = `/api/assetTypes`;
    const response = await fetch(req);
    const data = await response.json(response);
    const res = await data;

    setAssetTypes(data.assetTypes);
    return res;
  }

  useEffect(() => {
    // Update the document title using the browser API
    fetchAssetTypeData();
  }, []);

  return (
    <Fragment>
      <TopBar></TopBar>
      <div className="flex">
        <SideBar></SideBar>
        <div className="w-3/4">
          <h1 className="text-3xl text-green-500 font-bold">Asset Types</h1>

          {assetTypes === undefined ? (
            <div></div>
          ) : (
            <div>
              {assetTypes.map((assetTypes) => (
                <div key="_id">{assetTypes.name}</div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer></Footer>
    </Fragment>
  );
}
