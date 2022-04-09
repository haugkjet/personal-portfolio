import { useState } from "react";

import SideBar from './SideBar';
import MainContent from './MainContent';

function MiddleArea () {

return <div className="flex">
    <SideBar></SideBar>
    <MainContent></MainContent>
</div> 

}
export default MiddleArea;
