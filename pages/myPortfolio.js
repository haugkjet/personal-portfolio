import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

import { Fragment } from "react";

export default function myPortfolio() {
  return (
    <Fragment>
      <TopBar></TopBar>
      <div className="flex">
        <SideBar></SideBar>
        <div className="w-3/4">
          <h1 className="text-3xl text-green-500 font-bold">My Portfolio</h1>
        </div>
      </div>
      <Footer></Footer>
    </Fragment>
  );
}
