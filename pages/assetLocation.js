import { Fragment, useState } from "react";

import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";

import Footer from "../components/Footer";

export default function assetLocation() {
  return (
    <Fragment>
      <TopBar></TopBar>
      <div className="flex">
        <SideBar></SideBar>
        <div className="w-3/4">
          <h1 className="text-3xl text-green-500 font-bold">Asset Locations</h1>
        </div>
      </div>
      <Footer></Footer>
    </Fragment>
  );
}
