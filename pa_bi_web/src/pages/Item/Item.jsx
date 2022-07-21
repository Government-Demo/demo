import Navbar from "../../components/common/Navbar/Navbar";
import Footer from "../../components/common/Footer/Footer";

import All from "./Category/All";
import List from "../../components/common/List/List";
import { Outlet } from "react-router-dom";

function Item() {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </>
  );
}
export default Item;
