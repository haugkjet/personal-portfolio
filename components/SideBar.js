import { useState } from "react";

import Link from "next/link";

function SideBar() {
  return (
    <div className="w-1/6 h-auto bg-gray-800">
      <div>
        <div className="m-5 mt-8">
          <Link href="/">
            <div className="mx-3 text-teal-300 text-xm text-l font-bold">
              Home
            </div>
          </Link>
        </div>
        <div className="m-5 mt-1">
          <Link href="/dashboard">
            <div className="mx-3 text-teal-300 text-xm text-l font-bold">
              Dashboard
            </div>
          </Link>
        </div>
        <div className="m-5 mt-1">
          <Link href="/myPortfolio">
            <div className="mx-3 text-teal-300 text-xm text-l font-bold">
              My Portfolio
            </div>
          </Link>
        </div>
        <div className="m-5 mt-1">
          <Link href="/assetTypes">
            <div className="mx-3 text-teal-300 text-xm text-l font-bold">
              Asset Types
            </div>
          </Link>
        </div>
        <div className="m-5 mt-1">
          <Link href="/assetLocations">
            <div className="mx-3 text-teal-300 text-xm text-l font-bold">
              Asset Locations
            </div>
          </Link>
        </div>
        <div className="m-5 mt-1">
          <Link href="/assetNames">
            <div className="mx-3 text-teal-300 text-xm text-l font-bold">
              Asset Names
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
