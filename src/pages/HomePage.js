import React from "react";
import VincentPizza from "../components/Home/vincentPizza";
import Promotion from "../components/Home/promotion";
import Menu from "../components/Home/menu";
import Specials from "../components/Home/specials";
import Topfooter from "../components/Home/topfooter";
import Carouse from "../components/Home/carousel";

export default function HomePage() {
  return (
    <div className="h-screen inline-block">
      <VincentPizza />
      <Promotion />
      <Menu />
      <Specials />
      <Topfooter />
      <Carouse />
    </div>
  );
}
