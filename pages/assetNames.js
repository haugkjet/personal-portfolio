import { Fragment, useState, useEffect } from "react";

import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

export default function FetchAssetNames(props) {
  const [assetNames, setAssetNames] = useState(props.assetNames);

  async function fetchAssetNameData() {
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

  useEffect(() => {
    // Update the document title using the browser API
    fetchAssetNameData();
  }, []);

  return (
    <Fragment>
      <TopBar></TopBar>
      <div className="flex">
        <SideBar></SideBar>
        <div className="w-3/4">
          <h1 className="text-3xl text-green-500 font-bold">Asset Names</h1>

          {assetNames === undefined ? (
            <div></div>
          ) : (
            <div>
              {assetNames.map((assetNames) => (
                <div key="_id">{assetNames.name}</div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer></Footer>
    </Fragment>
  );
}
